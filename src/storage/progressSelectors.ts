import { modules } from "../data/course"
import { moduleOneLessonDefinitions } from "../data/module01"
import { immersionLesson } from "../data/immersionLesson"
import { TITANIUM_MASTERY_SCORE } from "../data/pedagogy"
import type { LearningState } from "../types/progress"
import { learningRepository } from "./learningRepository"

export type CatalogStatus =
  | "not-started"
  | "studying"
  | "completed"
  | "locked"

export type LessonStatus =
  | "not-started"
  | "studying"
  | "review-needed"
  | "completed"

export type ContinueActivity = {
  id: string
  moduleId: string
  moduleNumber: string
  moduleTitle: string
  type: "lesson" | "quiz" | "lab" | "exam"
  label: string
  title: string
  path: string
  progress: number
}

export type HomeModule = (typeof modules)[number] & {
  image: string
  imageAlt: string
  progress: number
  catalogStatus: CatalogStatus
  currentActivity?: string
}

export type LessonSummary = {
  id: string
  number: string
  title: string
  masteryTime: string
  status: LessonStatus
  progress: number
  bestScore?: number
}

export type ModuleLearningSummary = {
  progress: number
  completedLessons: number
  totalLessons: number
  lessons: LessonSummary[]
  finalExamUnlocked: boolean
  finalExamBestScore?: number
  completed: boolean
}

const moduleImages = [
  {
    image: "/modules/01.jpg",
    imageAlt: "Montanha envolta por nuvens em preto e branco",
  },
  {
    image: "/modules/02.jpg",
    imageAlt: "Estrutura arquitetônica de concreto",
  },
  {
    image: "/modules/03.jpg",
    imageAlt: "Infraestrutura de cabos e sistemas",
  },
  {
    image: "/modules/04.jpg",
    imageAlt: "Escadaria geométrica em preto e branco",
  },
  {
    image: "/modules/05.jpg",
    imageAlt: "Sequência arquitetônica de assentos",
  },
  {
    image: "/modules/06.jpg",
    imageAlt: "Linhas abstratas representando fluxo de dados",
  },
  {
    image: "/modules/07.jpg",
    imageAlt: "Escadas e arquitetura para investigação visual",
  },
  {
    image: "/modules/08.jpg",
    imageAlt: "Composição abstrata tecnológica em preto e branco",
  },
  {
    image: "/modules/09.jpg",
    imageAlt: "Ambiente modular representando um ecossistema",
  },
  {
    image: "/modules/10.jpg",
    imageAlt: "Cordilheira extensa em preto e branco",
  },
]

export function isImmersionCompleted(
  state = learningRepository.load(),
) {
  const journey = state.lessonJourneys[immersionLesson.id]
  return Boolean(journey?.completedAt && state.initialDiagnostic)
}

function getJourneyProgress(
  state: LearningState,
  lessonId: string,
  totalStages: number,
) {
  const journey = state.lessonJourneys[lessonId]
  if (!journey) return 0
  if (
    journey.completedAt &&
    (journey.bestScore ?? 0) >= TITANIUM_MASTERY_SCORE
  ) {
    return 100
  }
  return Math.round(
    (journey.completedStageIds.length / totalStages) * 100,
  )
}

export function getModuleLearningSummary(
  moduleId: string,
  state = learningRepository.load(),
): ModuleLearningSummary {
  const lessons =
    moduleId === "01"
      ? moduleOneLessonDefinitions.map((lesson) => {
          const journey = state.lessonJourneys[lesson.id]
          const bestScore = journey?.bestScore
          let status: LessonStatus = "not-started"

          if (
            journey?.completedAt &&
            (bestScore ?? 0) >= TITANIUM_MASTERY_SCORE
          ) {
            status = "completed"
          } else if ((journey?.examAttempts.length ?? 0) > 0) {
            status = "review-needed"
          } else if (journey?.startedAt) {
            status = "studying"
          }

          return {
            id: lesson.id,
            number: lesson.number,
            title:
              lesson.number === "06"
                ? `Aula prática — ${lesson.title}`
                : lesson.title,
            masteryTime: lesson.masteryTime,
            status,
            progress: getJourneyProgress(
              state,
              lesson.id,
              lesson.stages.length,
            ),
            bestScore,
          }
        })
      : []

  const completedLessons = lessons.filter(
    (lesson) => lesson.status === "completed",
  ).length
  const moduleAttempts = state.moduleExamAttempts[moduleId] ?? []
  const finalExamBestScore = moduleAttempts.length
    ? Math.max(...moduleAttempts.map((attempt) => attempt.score))
    : undefined
  const finalExamUnlocked =
    lessons.length > 0 && completedLessons === lessons.length
  const completed =
    finalExamUnlocked &&
    (finalExamBestScore ?? 0) >= TITANIUM_MASTERY_SCORE
  const lessonProgress = lessons.reduce(
    (total, lesson) => total + lesson.progress / 100,
    0,
  )
  const finalExamProgress =
    (finalExamBestScore ?? 0) >= TITANIUM_MASTERY_SCORE ? 1 : 0
  const totalActivities = lessons.length + 1
  const progress = completed
    ? 100
    : Math.round(
        ((lessonProgress + finalExamProgress) / totalActivities) * 100,
      )

  return {
    progress,
    completedLessons,
    totalLessons: lessons.length,
    lessons,
    finalExamUnlocked,
    finalExamBestScore,
    completed,
  }
}

function getModuleProgress(
  state: LearningState,
  moduleId: string,
) {
  if (moduleId === "01") {
    return getModuleLearningSummary(moduleId, state).progress
  }
  const stored = state.moduleProgress[moduleId]
  return typeof stored === "number"
    ? Math.max(0, Math.min(100, stored))
    : 0
}

export function getContinueActivity(
  state = learningRepository.load(),
): ContinueActivity {
  const immersion = state.lessonJourneys[immersionLesson.id]

  if (!isImmersionCompleted(state)) {
    const stageIndex = Math.min(
      immersion?.currentStageIndex ?? 0,
      immersionLesson.stages.length - 1,
    )
    const stage = immersionLesson.stages[stageIndex]
    const progress = Math.round(
      ((immersion?.completedStageIds.length ?? 0) /
        immersionLesson.stages.length) *
        100,
    )

    return {
      id: "a00",
      moduleId: "00",
      type: "lesson",
      label: `ETAPA ${String(stageIndex + 1).padStart(2, "0")}`,
      title: stage.title,
      path: "/aulas/a00",
      moduleNumber: "00",
      moduleTitle: "Imersão Titanium · Abertura da formação",
      progress,
    }
  }

  const summary = getModuleLearningSummary("01", state)

  if (summary.completed) {
    return {
      id: "m02-intro",
      moduleId: "02",
      type: "lesson",
      label: "PRÓXIMO MÓDULO",
      title: modules[1].title,
      path: "/modulos/02",
      moduleNumber: "02",
      moduleTitle: modules[1].title,
      progress: getModuleProgress(state, "02"),
    }
  }

  if (summary.finalExamUnlocked) {
    return {
      id: "m01-final-exam",
      moduleId: "01",
      type: "exam",
      label: "PROVA FINAL",
      title: "Prova Final do Módulo",
      path: "/modulos/01/prova-final",
      moduleNumber: "01",
      moduleTitle: modules[0].title,
      progress: summary.progress,
    }
  }

  const active =
    summary.lessons.find((lesson) => lesson.status === "studying") ??
    summary.lessons.find(
      (lesson) => lesson.status === "review-needed",
    ) ??
    summary.lessons.find(
      (lesson) => lesson.status === "not-started",
    ) ??
    summary.lessons[summary.lessons.length - 1]

  return {
    id: `m01-l${active.id}`,
    moduleId: "01",
    type:
      active.number === "06"
        ? ("lab" as const)
        : ("lesson" as const),
    label:
      active.number === "06"
        ? "AULA PRÁTICA 06"
        : `AULA ${active.number}`,
    title: active.title,
    path: `/aulas/${active.id}`,
    moduleNumber: "01",
    moduleTitle: modules[0].title,
    progress: summary.progress,
  }
}

export function getHomeModules(
  state = learningRepository.load(),
): HomeModule[] {
  const immersionCompleted = isImmersionCompleted(state)
  const current = getContinueActivity(state)
  const moduleOneSummary = getModuleLearningSummary("01", state)
  const moduleOneHasActivity = moduleOneSummary.lessons.some(
    (lesson) =>
      lesson.status === "studying" ||
      lesson.status === "review-needed" ||
      lesson.status === "completed",
  )

  return modules.map((module, index) => {
    const progress = getModuleProgress(state, module.id)
    let catalogStatus: CatalogStatus = "locked"

    if (module.id === "01" && !immersionCompleted) {
      catalogStatus = "locked"
    } else if (module.id === "01" && moduleOneSummary.completed) {
      catalogStatus = "completed"
    } else if (module.id === "01" && immersionCompleted) {
      catalogStatus = moduleOneHasActivity
        ? "studying"
        : "not-started"
    } else if (
      module.id === "02" &&
      current.id === "m02-intro"
    ) {
      catalogStatus = "not-started"
    }

    return {
      ...module,
      ...moduleImages[index],
      progress,
      catalogStatus,
      currentActivity:
        module.id === current.moduleId &&
        catalogStatus !== "locked"
          ? current.title
          : undefined,
    }
  })
}
