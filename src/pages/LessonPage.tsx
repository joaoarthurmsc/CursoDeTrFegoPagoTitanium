import { useState } from "react"
import LessonIntro from "../components/lesson/LessonIntro"
import LessonJourney from "../components/lesson/LessonJourney"
import { getModuleOneLessonById } from "../data/module01"
import { learningRepository } from "../storage/learningRepository"
import { useLessonActiveTime } from "../hooks/useLessonActiveTime"
import type { Lesson, LessonJourneyState } from "../types/learning"
import { HomeHeading } from "../components/titanium/HomePrimitives"
import ImmersionPage from "./ImmersionPage"

export default function LessonPage({
  lessonId,
  onNavigate,
}: {
  lessonId: string
  onNavigate: (path: string) => void
}) {
  if (lessonId === "a00") {
    return <ImmersionPage onNavigate={onNavigate} />
  }

  const lesson = getModuleOneLessonById(lessonId)

  if (!lesson) {
    return (
      <main className="mx-auto flex min-h-placeholder max-w-reading items-center px-5">
        <div>
          <p className="font-mono text-xs uppercase tracking-label text-gold">
            Aula {lessonId}
          </p>
          <HomeHeading
            level={1}
            className="mt-4 font-display text-4xl font-semibold"
          >
            Conteúdo em preparação
          </HomeHeading>
          <p className="mt-4 text-sm leading-7 text-muted">
            A experiência definitiva desta aula será publicada seguindo a
            arquitetura Titanium de aprendizagem e domínio.
          </p>
        </div>
      </main>
    )
  }

  return <StandardLessonPage lesson={lesson} onNavigate={onNavigate} />
}

function StandardLessonPage({
  lesson,
  onNavigate,
}: {
  lesson: Lesson
  onNavigate: (path: string) => void
}) {
  useLessonActiveTime(lesson.id)

  const [journey, setJourney] = useState<LessonJourneyState>(() => {
    const current = learningRepository.getLessonJourney(lesson.id)
    const currentStageIds = new Set(lesson.stages.map((stage) => stage.id))
    const hasLegacyProgress =
      current.currentStageIndex >= lesson.stages.length ||
      current.completedStageIds.some((id) => !currentStageIds.has(id))

    if (hasLegacyProgress) {
      return learningRepository.resetLessonJourney(lesson.id)
    }

    return current
  })
  const [journeyOpen, setJourneyOpen] = useState(false)

  const update = (next: LessonJourneyState) => setJourney(next)

  if (!journeyOpen) {
    return (
      <LessonIntro
        lesson={lesson}
        journey={journey}
        onStart={() => {
          let next = journey

          if (!journey.startedAt) {
            next = learningRepository.startLesson(lesson.id)
          } else if (journey.completedAt) {
            next = learningRepository.goToLessonStage(lesson.id, 0)
          }

          update(next)
          setJourneyOpen(true)
        }}
      />
    )
  }

  return (
    <LessonJourney
      lesson={lesson}
      journey={journey}
      onNavigate={onNavigate}
      onStageSelect={(index) =>
        update(learningRepository.goToLessonStage(lesson.id, index))
      }
      onContinue={() => {
        const stage = lesson.stages[journey.currentStageIndex]
        update(
          learningRepository.completeLessonStage(
            lesson.id,
            stage.id,
            journey.currentStageIndex,
            lesson.stages.length,
          ),
        )
      }}
      onOpenResponse={(lessonId, stageId, value) =>
        update(learningRepository.saveOpenResponse(lessonId, stageId, value))
      }
      onDecision={(lessonId, stageId, optionId, confirmed) =>
        update(
          learningRepository.saveLessonDecision(
            lessonId,
            stageId,
            optionId,
            confirmed,
          ),
        )
      }
      onSelfAssessment={(lessonId, stageId, value) =>
        update(learningRepository.saveSelfAssessment(lessonId, stageId, value))
      }
      onChecklist={(lessonId, stageId, items) =>
        update(
          learningRepository.saveLessonChecklist(lessonId, stageId, items),
        )
      }
      onAudit={(lessonId, stageId, responses) =>
        update(
          learningRepository.saveAuditResponses(
            lessonId,
            stageId,
            responses,
          ),
        )
      }
      onJournal={(lessonId, stageId, values) =>
        update(
          learningRepository.saveJournalFromLesson(
            lessonId,
            stageId,
            values,
          ),
        )
      }
      onExamComplete={(attempt) =>
        update(
          learningRepository.recordLessonExamAttempt(
            lesson.id,
            attempt,
            lesson.stages.map((stage) => stage.id),
          ),
        )
      }
    />
  )
}
