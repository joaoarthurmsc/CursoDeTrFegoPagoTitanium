import { useEffect, useLayoutEffect, useRef, useState } from "react"
import type {
  ExamAttempt,
  Lesson,
  LessonJourneyState,
  LessonStage,
} from "../../types/learning"
import ExamEngine from "../exam/ExamEngine"
import FrameProgress from "../lesson-engine/FrameProgress"
import JourneyProgress from "../lesson-engine/JourneyProgress"
import LessonStageContent from "../lesson-engine/LessonStage"
import { getLessonFrames } from "../lesson-engine/stageFrames"
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
  const frames = getLessonFrames(stage)
  const [frameState, setFrameState] = useState({ stageId: stage.id, index: 0 })
  const frameIndex =
    frameState.stageId === stage.id
      ? Math.min(frameState.index, Math.max(0, frames.length - 1))
      : 0
  const frame = frames[frameIndex]
  const isExam = stage.type === "exam" && Boolean(lesson.exam)
  const isLastFrame = frameIndex === frames.length - 1
  const stageCanComplete = canCompleteStage(stage, journey)
  const canAdvance = !isLastFrame || stageCanComplete
  const stageViewportRef = useRef<HTMLDivElement>(null)

  const selectStage = (index: number, targetFrame = 0) => {
    const targetStage = lesson.stages[index]
    if (!targetStage) return
    setFrameState({ stageId: targetStage.id, index: targetFrame })
    onStageSelect(index)
  }

  const resetReadingPosition = () => {
    const active = document.activeElement
    if (active instanceof HTMLElement) active.blur()

    stageViewportRef.current?.scrollTo({ top: 0, left: 0, behavior: "auto" })
    window.scrollTo({ top: 0, left: 0, behavior: "auto" })

    const heading = stageViewportRef.current?.querySelector<HTMLElement>(
      "[data-frame-root]",
    )
    heading?.focus({ preventScroll: true })
  }

  useLayoutEffect(() => {
    let second = 0
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(resetReadingPosition)
    })
    return () => {
      cancelAnimationFrame(first)
      if (second) cancelAnimationFrame(second)
    }
  }, [stage.id, frameIndex])

  useEffect(() => {
    if (!import.meta.env.DEV) return
    const viewport = stageViewportRef.current
    if (!viewport) return

    const report = () => {
      const overflow = viewport.scrollHeight - viewport.clientHeight
      if (overflow > 72) {
        console.warn(
          `[Titanium] Frame acima da altura recomendada: ${lesson.id}/${frame.id} (+${Math.round(overflow)}px). Considere dividir semanticamente o conteúdo.`,
        )
      }
    }

    const observer = new ResizeObserver(report)
    observer.observe(viewport)
    const timer = window.setTimeout(report, 80)
    return () => {
      observer.disconnect()
      window.clearTimeout(timer)
    }
  }, [frame.id, lesson.id])

  const reviewStage = (stageId: string) => {
    const index = lesson.stages.findIndex((item) => item.id === stageId)
    if (index >= 0) selectStage(index)
  }

  const previousPage = () => {
    if (frameIndex > 0) {
      setFrameState({ stageId: stage.id, index: frameIndex - 1 })
      return
    }

    if (journey.currentStageIndex === 0) return
    const previousStageIndex = journey.currentStageIndex - 1
    const previousStage = lesson.stages[previousStageIndex]
    const previousFrames = getLessonFrames(previousStage)
    selectStage(previousStageIndex, Math.max(0, previousFrames.length - 1))
  }

  const nextPage = () => {
    if (!isLastFrame) {
      setFrameState({ stageId: stage.id, index: frameIndex + 1 })
      return
    }

    const nextStage = lesson.stages[journey.currentStageIndex + 1]
    if (nextStage) setFrameState({ stageId: nextStage.id, index: 0 })
    onContinue()
  }

  return (
    <main className="lesson-journey mx-auto w-full max-w-lesson px-5 md:px-8">
      <header className="lesson-journey-progress border-b border-line py-4 md:py-5">
        <div className="mb-3 flex items-start justify-between gap-4 font-mono text-xs uppercase tracking-label">
          <div>
            <span className="text-silver">Aula {lesson.number}</span>
            {frames.length > 1 && (
              <span className="ml-3 text-muted">
                Página {frameIndex + 1} de {frames.length}
              </span>
            )}
          </div>
          <span className="text-muted">
            Etapa {journey.currentStageIndex + 1} de {lesson.stages.length}
          </span>
        </div>
        <div className="flex items-center justify-between gap-6">
          <div className="min-w-0 flex-1">
            <JourneyProgress
              lesson={lesson}
              journey={journey}
              currentIndex={journey.currentStageIndex}
              onSelect={(index) => selectStage(index)}
            />
          </div>
          <FrameProgress current={frameIndex} total={frames.length} />
        </div>
      </header>

      <div
        ref={stageViewportRef}
        className="lesson-stage-viewport"
        data-lesson-stage-viewport
        data-stage-type={stage.type}
        data-frame-id={frame.id}
      >
        <div className="lesson-stage-inner">
          <LessonStageContent
            lessonId={lesson.id}
            stage={frame.stage}
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
            disabled={journey.currentStageIndex === 0 && frameIndex === 0}
            onClick={previousPage}
          >
            <ArrowIcon className="size-4 rotate-180" /> Voltar
          </ActionButton>
          <div className="flex items-center gap-4 text-right">
            {isLastFrame && !stageCanComplete && (
              <p className="hidden text-xs text-muted sm:block">
                Conclua a interação para avançar.
              </p>
            )}
            <ActionButton disabled={!canAdvance} onClick={nextPage}>
              {isLastFrame ? "Continuar" : "Próxima página"}
              <ArrowIcon className="size-4" />
            </ActionButton>
          </div>
        </footer>
      )}
    </main>
  )
}
