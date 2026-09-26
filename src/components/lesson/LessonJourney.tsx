import { useEffect, useRef } from "react"
import type {
  ExamAttempt,
  Lesson,
  LessonJourneyState,
  LessonStage,
} from "../../types/learning"
import ExamEngine from "../exam/ExamEngine"
import JourneyProgress from "../lesson-engine/JourneyProgress"
import LessonStageContent from "../lesson-engine/LessonStage"
import { ActionButton, ArrowIcon } from "../titanium/HomePrimitives"

function canCompleteStage(stage: LessonStage, journey: LessonJourneyState) {
  if (journey.completedStageIds.includes(stage.id)) return true
  if (stage.type === "think")
    return Boolean(
      journey.openResponses[stage.id]?.trim() &&
        (!stage.selfAssessment || journey.selfAssessments[stage.id]),
    )
  if (stage.type === "decide")
    return Boolean(journey.decisions[stage.id]?.confirmed)
  if (stage.type === "practice")
    return journey.checklists[stage.id]?.length === stage.checklist?.length
  if (stage.type === "audit")
    return Boolean(
      stage.auditPrompts?.every((prompt) =>
        journey.auditResponses[stage.id]?.[prompt]?.trim(),
      ),
    )
  if (stage.type === "journal") return Boolean(journey.journalEntries[stage.id])
  if (stage.type === "review" && stage.prompt)
    return Boolean(journey.openResponses[stage.id]?.trim())
  return true
}

export default function LessonJourney({
  lesson,
  journey,
  onStageSelect,
  onContinue,
  onOpenResponse,
  onDecision,
  onSelfAssessment,
  onChecklist,
  onAudit,
  onJournal,
  onExamComplete,
  onNavigate,
}: {
  lesson: Lesson
  journey: LessonJourneyState
  onStageSelect: (index: number) => void
  onContinue: () => void
  onOpenResponse: (lessonId: string, stageId: string, value: string) => void
  onDecision: (
    lessonId: string,
    stageId: string,
    optionId: string,
    confirmed: boolean,
  ) => void
  onSelfAssessment: (lessonId: string, stageId: string, value: string) => void
  onChecklist: (lessonId: string, stageId: string, items: string[]) => void
  onAudit: (
    lessonId: string,
    stageId: string,
    responses: Record<string, string>,
  ) => void
  onJournal: (
    lessonId: string,
    stageId: string,
    values: { problem: string; decision: string; expected: string },
  ) => void
  onExamComplete: (attempt: ExamAttempt) => void
  onNavigate: (path: string) => void
}) {
  const stage = lesson.stages[journey.currentStageIndex]
  const isExam = stage.type === "exam" && Boolean(lesson.exam)
  const canContinue = canCompleteStage(stage, journey)
  const stageViewportRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    stageViewportRef.current?.scrollTo({ top: 0, behavior: "instant" })
    window.scrollTo({ top: 0, behavior: "instant" })
  }, [journey.currentStageIndex])

  const reviewStage = (stageId: string) => {
    const index = lesson.stages.findIndex((item) => item.id === stageId)
    if (index >= 0) onStageSelect(index)
  }

  return (
    <main className="lesson-journey mx-auto w-full max-w-lesson px-5 md:px-8">
      <header className="lesson-journey-progress border-b border-line py-4 md:py-5">
        <div className="mb-3 flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-label">
          <span className="text-silver">Aula {lesson.number}</span>
          <span className="text-muted">
            Etapa {journey.currentStageIndex + 1} de {lesson.stages.length}
          </span>
        </div>
        <JourneyProgress
          lesson={lesson}
          journey={journey}
          currentIndex={journey.currentStageIndex}
          onSelect={onStageSelect}
        />
      </header>

      <div
        ref={stageViewportRef}
        className="lesson-stage-viewport"
        data-stage-type={stage.type}
      >
        <div className="lesson-stage-inner">
          <LessonStageContent
            lessonId={lesson.id}
            stage={stage}
            journey={journey}
            onOpenResponse={onOpenResponse}
            onDecision={onDecision}
            onSelfAssessment={onSelfAssessment}
            onChecklist={onChecklist}
            onAudit={onAudit}
            onJournal={onJournal}
          />
          {isExam && (
            <div className="mt-8">
              <ExamEngine
                exam={lesson.exam!}
                attempts={journey.examAttempts}
                onComplete={onExamComplete}
                onReviewStage={reviewStage}
                onNext={() => onNavigate("/aulas/02")}
              />
            </div>
          )}
        </div>
      </div>

      {!isExam && (
        <footer className="lesson-journey-nav flex items-center justify-between gap-4 border-t border-line py-4 md:py-5">
          <ActionButton
            variant="secondary"
            disabled={journey.currentStageIndex === 0}
            onClick={() =>
              onStageSelect(Math.max(0, journey.currentStageIndex - 1))
            }
          >
            <ArrowIcon className="size-4 rotate-180" /> Voltar
          </ActionButton>
          <div className="flex items-center gap-4 text-right">
            {!canContinue && (
              <p className="hidden text-xs text-muted sm:block">
                Conclua a interação para avançar.
              </p>
            )}
            <ActionButton disabled={!canContinue} onClick={onContinue}>
              Continuar <ArrowIcon className="size-4" />
            </ActionButton>
          </div>
        </footer>
      )}
    </main>
  )
}
