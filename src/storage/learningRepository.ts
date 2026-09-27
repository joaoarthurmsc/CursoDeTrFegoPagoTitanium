import { TITANIUM_MASTERY_SCORE } from "../data/pedagogy"
import type {
  Diagnostic,
  DiagnosticResult,
  ExamAttempt,
  LessonJourneyState,
} from "../types/learning"
import type { Decision, LearningState } from "../types/progress"
import { studentRepository } from "./studentRepository"

const LEGACY_STORAGE_KEY = "titanium-learning-state-v1"

function storageKey(studentId: string) {
  return `titanium-learning-state-v1:${studentId}`
}

const initialState: LearningState = {
  completedLessons: [],
  quizScores: {},
  completedExercises: [],
  moduleProgress: {},
  lessonJourneys: {},
  moduleExamAttempts: {},
  decisions: [],
}

export function createLessonJourneyState(): LessonJourneyState {
  return {
    currentStageIndex: 0,
    maxUnlockedStageIndex: 0,
    activeTimeSeconds: 0,
    completedStageIds: [],
    openResponses: {},
    decisions: {},
    selfAssessments: {},
    checklists: {},
    auditResponses: {},
    journalEntries: {},
    diagnosticAnswers: {},
    examAttempts: [],
    lastErrors: [],
  }
}

function normalizeJourney(
  journey?: Partial<LessonJourneyState>,
): LessonJourneyState {
  const initial = createLessonJourneyState()
  return {
    ...initial,
    ...journey,
    activeTimeSeconds: journey?.activeTimeSeconds ?? 0,
    completedStageIds: journey?.completedStageIds ?? [],
    openResponses: { ...initial.openResponses, ...journey?.openResponses },
    decisions: { ...initial.decisions, ...journey?.decisions },
    selfAssessments: {
      ...initial.selfAssessments,
      ...journey?.selfAssessments,
    },
    checklists: { ...initial.checklists, ...journey?.checklists },
    auditResponses: {
      ...initial.auditResponses,
      ...journey?.auditResponses,
    },
    journalEntries: {
      ...initial.journalEntries,
      ...journey?.journalEntries,
    },
    diagnosticAnswers: {
      ...initial.diagnosticAnswers,
      ...journey?.diagnosticAnswers,
    },
    examAttempts: journey?.examAttempts ?? [],
    lastErrors: journey?.lastErrors ?? [],
  }
}

// This adapter keeps persistence separate from the interface so it can later be
// replaced by a remote repository without changing page components.
export const learningRepository = {
  load(): LearningState {
    try {
      const studentId = studentRepository.getActiveStudentId()
      if (!studentId) return initialState

      const key = storageKey(studentId)
      let stored = localStorage.getItem(key)

      // The original Titanium build stored João/Arthur progress in one global
      // key. On Arthur's first access, copy it into his isolated profile.
      if (!stored && studentId === "arthur") {
        const legacy = localStorage.getItem(LEGACY_STORAGE_KEY)
        if (legacy) {
          localStorage.setItem(key, legacy)
          stored = legacy
        }
      }

      return stored ? { ...initialState, ...JSON.parse(stored) } : initialState
    } catch {
      return initialState
    }
  },
  save(state: LearningState) {
    const studentId = studentRepository.getActiveStudentId()
    if (!studentId) return
    localStorage.setItem(storageKey(studentId), JSON.stringify(state))
  },
  addDecision(decision: Decision) {
    const state = this.load()
    this.save({ ...state, decisions: [decision, ...state.decisions] })
  },
  getDecision(id: string): Decision | undefined {
    return this.load().decisions.find((decision) => decision.id === id)
  },
  getLessonJourney(lessonId: string): LessonJourneyState {
    return normalizeJourney(this.load().lessonJourneys[lessonId])
  },
  resetLessonJourney(
    lessonId: string,
    options: { clearInitialDiagnostic?: boolean } = {},
  ): LessonJourneyState {
    const state = this.load()
    const next = {
      ...createLessonJourneyState(),
      startedAt: new Date().toISOString(),
    }
    this.save({
      ...state,
      initialDiagnostic: options.clearInitialDiagnostic
        ? undefined
        : state.initialDiagnostic,
      lessonJourneys: { ...state.lessonJourneys, [lessonId]: next },
    })
    return next
  },
  updateLessonJourney(
    lessonId: string,
    update: (journey: LessonJourneyState) => LessonJourneyState,
  ): LessonJourneyState {
    const state = this.load()
    const current = normalizeJourney(state.lessonJourneys[lessonId])
    const next = update(current)
    this.save({
      ...state,
      lessonJourneys: { ...state.lessonJourneys, [lessonId]: next },
    })
    return next
  },
  startLesson(lessonId: string): LessonJourneyState {
    return this.updateLessonJourney(lessonId, (journey) => ({
      ...journey,
      startedAt: journey.startedAt ?? new Date().toISOString(),
    }))
  },
  addLessonActiveTime(lessonId: string, seconds: number): LessonJourneyState {
    return this.updateLessonJourney(lessonId, (journey) => ({
      ...journey,
      activeTimeSeconds: Math.max(
        0,
        (journey.activeTimeSeconds ?? 0) + Math.max(0, seconds),
      ),
    }))
  },
  goToLessonStage(lessonId: string, stageIndex: number): LessonJourneyState {
    return this.updateLessonJourney(lessonId, (journey) => {
      const canOpen =
        Boolean(journey.completedAt) ||
        stageIndex <= journey.maxUnlockedStageIndex
      return canOpen
        ? { ...journey, currentStageIndex: Math.max(0, stageIndex) }
        : journey
    })
  },
  completeLessonStage(
    lessonId: string,
    stageId: string,
    stageIndex: number,
    totalStages: number,
  ): LessonJourneyState {
    return this.updateLessonJourney(lessonId, (journey) => {
      const completedStageIds = journey.completedStageIds.includes(stageId)
        ? journey.completedStageIds
        : [...journey.completedStageIds, stageId]
      const nextIndex = Math.min(stageIndex + 1, totalStages - 1)
      return {
        ...journey,
        contentCompletedAt:
          stageIndex === totalStages - 2
            ? (journey.contentCompletedAt ?? new Date().toISOString())
            : journey.contentCompletedAt,
        completedStageIds,
        currentStageIndex: nextIndex,
        maxUnlockedStageIndex: Math.max(
          journey.maxUnlockedStageIndex,
          nextIndex,
        ),
      }
    })
  },
  saveOpenResponse(
    lessonId: string,
    stageId: string,
    response: string,
  ): LessonJourneyState {
    return this.updateLessonJourney(lessonId, (journey) => ({
      ...journey,
      openResponses: {
        ...journey.openResponses,
        [stageId]: response,
      },
    }))
  },
  saveLessonDecision(
    lessonId: string,
    stageId: string,
    selectedOptionId: string,
    confirmed: boolean,
  ): LessonJourneyState {
    return this.updateLessonJourney(lessonId, (journey) => ({
      ...journey,
      decisions: {
        ...journey.decisions,
        [stageId]: { selectedOptionId, confirmed },
      },
    }))
  },
  saveSelfAssessment(
    lessonId: string,
    stageId: string,
    value: string,
  ): LessonJourneyState {
    return this.updateLessonJourney(lessonId, (journey) => ({
      ...journey,
      selfAssessments: {
        ...journey.selfAssessments,
        [stageId]: value,
      },
    }))
  },
  saveLessonChecklist(
    lessonId: string,
    stageId: string,
    checkedItems: string[],
  ): LessonJourneyState {
    return this.updateLessonJourney(lessonId, (journey) => ({
      ...journey,
      checklists: {
        ...journey.checklists,
        [stageId]: checkedItems,
      },
    }))
  },
  saveAuditResponses(
    lessonId: string,
    stageId: string,
    responses: Record<string, string>,
  ): LessonJourneyState {
    return this.updateLessonJourney(lessonId, (journey) => ({
      ...journey,
      auditResponses: {
        ...journey.auditResponses,
        [stageId]: responses,
      },
    }))
  },
  saveJournalFromLesson(
    lessonId: string,
    stageId: string,
    values: {
      problem: string
      decision: string
      expected: string
    },
  ): LessonJourneyState {
    const state = this.load()
    const journey = normalizeJourney(state.lessonJourneys[lessonId])
    const existingId = journey.journalEntries[stageId]
    const id = existingId ?? crypto.randomUUID()
    const entry: Decision = {
      id,
      date: new Date().toISOString().slice(0, 10),
      business: "Imersão Titanium",
      problem: values.problem,
      data: "",
      hypothesis: "",
      decision: values.decision,
      expected: values.expected,
      observed: "",
      learning: "",
    }
    const decisions = existingId
      ? state.decisions.map((item) => (item.id === existingId ? entry : item))
      : [entry, ...state.decisions]
    const next = {
      ...journey,
      journalEntries: { ...journey.journalEntries, [stageId]: id },
    }
    this.save({
      ...state,
      decisions,
      lessonJourneys: { ...state.lessonJourneys, [lessonId]: next },
    })
    return next
  },
  saveDiagnosticAnswer(
    lessonId: string,
    questionId: string,
    optionId: string,
  ): LessonJourneyState {
    return this.updateLessonJourney(lessonId, (journey) => ({
      ...journey,
      diagnosticAnswers: {
        ...journey.diagnosticAnswers,
        [questionId]: optionId,
      },
    }))
  },
  completeInitialDiagnostic(
    lessonId: string,
    diagnostic: Diagnostic,
    stageIds: string[],
  ): LessonJourneyState {
    const state = this.load()
    const journey = normalizeJourney(state.lessonJourneys[lessonId])
    const answers = journey.diagnosticAnswers
    const competencies: DiagnosticResult["competencies"] = {}
    let correctCount = 0

    diagnostic.questions.forEach((question) => {
      const correct = answers[question.id] === question.correctAnswer
      if (correct) correctCount += 1
      const current = competencies[question.competence] ?? {
        correct: 0,
        total: 0,
      }
      competencies[question.competence] = {
        correct: current.correct + (correct ? 1 : 0),
        total: current.total + 1,
      }
    })

    const result: DiagnosticResult = {
      date: new Date().toISOString(),
      answers,
      correctCount,
      score: Number((correctCount * diagnostic.pointsPerQuestion).toFixed(1)),
      competencies,
    }
    const next: LessonJourneyState = {
      ...journey,
      contentCompletedAt:
        journey.contentCompletedAt ?? new Date().toISOString(),
      completedAt: journey.completedAt ?? new Date().toISOString(),
      currentStageIndex: Math.max(0, stageIds.length - 2),
      maxUnlockedStageIndex: stageIds.length - 1,
      completedStageIds: [
        ...new Set([...journey.completedStageIds, ...stageIds]),
      ],
    }
    this.save({
      ...state,
      initialDiagnostic: result,
      lessonJourneys: { ...state.lessonJourneys, [lessonId]: next },
    })
    return next
  },
  recordLessonExamAttempt(
    lessonId: string,
    attempt: ExamAttempt,
    allStageIds: string[],
  ): LessonJourneyState {
    return this.updateLessonJourney(lessonId, (journey) => {
      const bestScore = Math.max(journey.bestScore ?? 0, attempt.score)
      const approved = bestScore >= TITANIUM_MASTERY_SCORE
      return {
        ...journey,
        examAttempts: [...journey.examAttempts, attempt],
        bestScore,
        lastScore: attempt.score,
        lastErrors: attempt.errors,
        completedAt: approved
          ? (journey.completedAt ?? new Date().toISOString())
          : undefined,
        completedStageIds: approved
          ? [...new Set([...journey.completedStageIds, ...allStageIds])]
          : journey.completedStageIds,
        maxUnlockedStageIndex: approved
          ? allStageIds.length - 1
          : journey.maxUnlockedStageIndex,
      }
    })
  },
  getModuleExamAttempts(moduleId: string): ExamAttempt[] {
    return this.load().moduleExamAttempts[moduleId] ?? []
  },
  recordModuleExamAttempt(moduleId: string, attempt: ExamAttempt) {
    const state = this.load()
    const attempts = state.moduleExamAttempts[moduleId] ?? []
    this.save({
      ...state,
      moduleExamAttempts: {
        ...state.moduleExamAttempts,
        [moduleId]: [...attempts, attempt],
      },
    })
  },
}
