import { useEffect, useLayoutEffect, useRef, useState } from "react"
import type {
  DiagnosticResult,
  Lesson,
  LessonJourneyState,
  LessonStage,
} from "../../types/learning"
import InitialDiagnostic from "../diagnostic/InitialDiagnostic"
import FrameProgress from "../lesson-engine/FrameProgress"
import JourneyProgress from "../lesson-engine/JourneyProgress"
import LessonStageContent from "../lesson-engine/LessonStage"
import {
  getLessonFrames,
  type LessonFrame,
} from "../lesson-engine/stageFrames"
import { ActionButton, ArrowIcon, CheckIcon } from "../titanium/HomePrimitives"
import LessonMaterials from "./LessonMaterials"

function canAdvance(stage: LessonStage, journey: LessonJourneyState) {
  if (journey.completedStageIds.includes(stage.id)) return true
  if (stage.options?.length) {
    return Boolean(journey.decisions[stage.id]?.confirmed)
  }
  return true
}

function framesForStage(stage: LessonStage, lesson: Lesson): LessonFrame[] {
  const frames = getLessonFrames(stage)
  if (!stage.id.endsWith("closing")) return frames

  return [
    ...frames,
    {
      id: `${stage.id}:materials`,
      label: "Materiais",
      stage: {
        id: stage.id,
        type: "context",
        eyebrow: "Recursos · Materiais",
        title: "Leve a Aula 00 com você",
        body: [
          "Os materiais essenciais da Imersão ficam liberados para revisão. Use-os como referência, não como substituto da prática.",
        ],
      },
    },
  ]
}

export default function ImmersionJourney({
  lesson,
  journey,
  diagnosticResult,
  onStageSelect,
  onContinue,
  onOpenResponse,
  onDecision,
  onSelfAssessment,
  onJournal,
  onDiagnosticAnswer,
  onDiagnosticComplete,
  onNavigate,
}: {
  lesson: Lesson
  journey: LessonJourneyState
  diagnosticResult?: DiagnosticResult
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
  onJournal: (
    lessonId: string,
    stageId: string,
    values: { problem: string; decision: string; expected: string },
  ) => void
  onDiagnosticAnswer: (questionId: string, optionId: string) => void
  onDiagnosticComplete: () => void
  onNavigate: (path: string) => void
}) {
  const stage = lesson.stages[journey.currentStageIndex]
  const diagnosticIndex = lesson.stages.findIndex(
    (item) => item.type === "diagnostic",
  )
  const isDiagnostic = stage.type === "diagnostic"
  const isClosing = stage.id.endsWith("closing")
  const frames = framesForStage(stage, lesson)
  const [frameState, setFrameState] = useState({ stageId: stage.id, index: 0 })
  const frameIndex =
    frameState.stageId === stage.id
      ? Math.min(frameState.index, Math.max(0, frames.length - 1))
      : 0
  const frame = frames[frameIndex]
  const isLastFrame = frameIndex === frames.length - 1
  const advanceAllowed = canAdvance(frame.stage, journey)
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
    stageViewportRef.current
      ?.querySelector<HTMLElement>("[data-frame-root]")
      ?.focus({ preventScroll: true })
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
    if (!import.meta.env.DEV || isDiagnostic) return
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
  }, [frame.id, isDiagnostic, lesson.id])

  const previousPage = () => {
    if (frameIndex > 0) {
      setFrameState({ stageId: stage.id, index: frameIndex - 1 })
      return
    }

    if (journey.currentStageIndex === 0) return
    const previousStageIndex = journey.currentStageIndex - 1
    const previousStage = lesson.stages[previousStageIndex]
    const previousFrames = framesForStage(previousStage, lesson)
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

  const isMaterialsFrame = isClosing && frame.id.endsWith(":materials")

  return (
    <main className="lesson-journey mx-auto w-full max-w-lesson px-5 md:px-8">
      <header className="lesson-journey-progress border-b border-line py-4 md:py-5">
        <div className="mb-3 flex items-start justify-between gap-4 font-mono text-xs uppercase tracking-label">
          <div>
            <span className="text-silver">Aula 00 · Imersão Titanium</span>
            {!isDiagnostic && frames.length > 1 && (
              <span className="ml-3 text-muted">
                Página {frameIndex + 1} de {frames.length}
              </span>
            )}
          </div>
          <span className="text-muted">
            Capítulo {journey.currentStageIndex + 1} de {lesson.stages.length}
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
          {!isDiagnostic && (
            <FrameProgress current={frameIndex} total={frames.length} />
          )}
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
          {isDiagnostic && lesson.diagnostic ? (
            <article data-frame-root tabIndex={-1} className="outline-none">
              <InitialDiagnostic
                diagnostic={lesson.diagnostic}
                journey={journey}
                result={diagnosticResult}
                intro={{
                  eyebrow: stage.eyebrow,
                  title: stage.title,
                  body: stage.body,
                  quote: stage.quote,
                }}
                onAnswer={onDiagnosticAnswer}
                onComplete={onDiagnosticComplete}
                onContinue={() => selectStage(diagnosticIndex + 1)}
              />
            </article>
          ) : (
            <>
              <LessonStageContent
                lessonId={lesson.id}
                stage={frame.stage}
                journey={journey}
                onOpenResponse={onOpenResponse}
                onDecision={onDecision}
                onSelfAssessment={onSelfAssessment}
                onChecklist={() => undefined}
                onAudit={() => undefined}
                onJournal={onJournal}
              />
              {isMaterialsFrame && (
                <div className="mt-6">
                  <LessonMaterials materials={lesson.materials} />
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {!isDiagnostic && (
        <footer className="lesson-journey-nav flex items-center justify-between gap-4 border-t border-line py-4 md:py-5">
          <ActionButton
            variant="secondary"
            disabled={journey.currentStageIndex === 0 && frameIndex === 0}
            onClick={previousPage}
          >
            <ArrowIcon className="size-4 rotate-180" /> Voltar
          </ActionButton>

          {isClosing && isLastFrame ? (
            <div className="flex items-center gap-4">
              <span className="hidden items-center gap-2 font-mono text-xs uppercase tracking-label text-gold sm:flex">
                <CheckIcon /> Imersão concluída
              </span>
              <ActionButton onClick={() => onNavigate("/modulos/01")}>
                COMEÇAR MÓDULO 01 <ArrowIcon />
              </ActionButton>
            </div>
          ) : (
            <div className="flex items-center gap-4 text-right">
              {!advanceAllowed && (
                <p className="hidden text-xs text-muted sm:block">
                  Conclua a interação para avançar.
                </p>
              )}
              <ActionButton
                disabled={!advanceAllowed}
                onClick={nextPage}
              >
                {journey.currentStageIndex === 0 && isLastFrame
                  ? "COMEÇAR IMERSÃO"
                  : isLastFrame
                    ? "Continuar"
                    : "Próxima página"}
                <ArrowIcon className="size-4" />
              </ActionButton>
            </div>
          )}
        </footer>
      )}
    </main>
  )
}
