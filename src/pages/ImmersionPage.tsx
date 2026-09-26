import { useState } from "react"
import ImmersionJourney from "../components/lesson/ImmersionJourney"
import { immersionLesson } from "../data/immersionLesson"
import { learningRepository } from "../storage/learningRepository"
import type { DiagnosticResult, LessonJourneyState } from "../types/learning"

export default function ImmersionPage({
  onNavigate,
}: {
  onNavigate: (path: string) => void
}) {
  const [journey, setJourney] = useState<LessonJourneyState>(() => {
    const current = learningRepository.getLessonJourney(immersionLesson.id)
    return current.startedAt
      ? current
      : learningRepository.startLesson(immersionLesson.id)
  })
  const [diagnosticResult, setDiagnosticResult] =
    useState<DiagnosticResult | undefined>(
      () => learningRepository.load().initialDiagnostic,
    )

  const update = (next: LessonJourneyState) => setJourney(next)

  return (
    <ImmersionJourney
      lesson={immersionLesson}
      journey={journey}
      diagnosticResult={diagnosticResult}
      onNavigate={onNavigate}
      onStageSelect={(index) =>
        update(learningRepository.goToLessonStage(immersionLesson.id, index))
      }
      onContinue={() => {
        const stage = immersionLesson.stages[journey.currentStageIndex]
        update(
          learningRepository.completeLessonStage(
            immersionLesson.id,
            stage.id,
            journey.currentStageIndex,
            immersionLesson.stages.length,
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
      onJournal={(lessonId, stageId, values) =>
        update(
          learningRepository.saveJournalFromLesson(lessonId, stageId, values),
        )
      }
      onDiagnosticAnswer={(questionId, optionId) =>
        update(
          learningRepository.saveDiagnosticAnswer(
            immersionLesson.id,
            questionId,
            optionId,
          ),
        )
      }
      onDiagnosticComplete={() => {
        if (!immersionLesson.diagnostic) return
        update(
          learningRepository.completeInitialDiagnostic(
            immersionLesson.id,
            immersionLesson.diagnostic,
            immersionLesson.stages.map((stage) => stage.id),
          ),
        )
        setDiagnosticResult(learningRepository.load().initialDiagnostic)
      }}
    />
  )
}
