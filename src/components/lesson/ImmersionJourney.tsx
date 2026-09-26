import type {
  DiagnosticResult,
  Lesson,
  LessonJourneyState,
  LessonStage,
} from "../../types/learning"
import InitialDiagnostic from "../diagnostic/InitialDiagnostic"
import JourneyProgress from "../lesson-engine/JourneyProgress"
import LessonStageContent from "../lesson-engine/LessonStage"
import { ActionButton, ArrowIcon, CheckIcon } from "../titanium/HomePrimitives"
import LessonMaterials from "./LessonMaterials"

function canAdvance(stage: LessonStage, journey: LessonJourneyState) {
  if (journey.completedStageIds.includes(stage.id)) return true
  if (stage.type === "think")
    return Boolean(
      journey.openResponses[stage.id]?.trim() &&
        (!stage.selfAssessment || journey.selfAssessments[stage.id]),
    )
  if (stage.type === "decide")
    return Boolean(journey.decisions[stage.id]?.confirmed)
  if (stage.type === "review" && stage.prompt)
    return Boolean(journey.openResponses[stage.id]?.trim())
  if (stage.type === "journal") return Boolean(journey.journalEntries[stage.id])
  return true
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
  const isClosing = stage.id === "closing"
  const advanceAllowed = canAdvance(stage, journey)

  return (
    <main className="mx-auto max-w-lesson px-5 py-10 md:px-8 md:py-14">
      <div className="mb-8">
        <div className="mb-4 flex items-center justify-between gap-4 font-mono text-xs uppercase tracking-label">
          <span className="text-silver">Aula 00 · Imersão Titanium</span>
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
      </div>

      <div className="min-h-stage border-b border-line pb-12 pt-8 md:pt-12">
        {journey.currentStageIndex === 0 && (
          <div className="mb-10 border-y border-line py-5">
            <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted">
              <span>Abertura da formação</span>
              <span>Domínio · {lesson.masteryTime}</span>
              <span>Pré-requisito · nenhum</span>
            </div>
            <p className="mt-4 text-sm leading-6 text-silver">
              <strong className="font-medium text-paper">Objetivo: </strong>
              {lesson.objective}
            </p>
          </div>
        )}
        {isDiagnostic && lesson.diagnostic ? (
          <>
            <p className="font-mono text-xs font-semibold uppercase tracking-label text-gold">
              {stage.eyebrow}
            </p>
            <p className="mt-4 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl">
              {stage.title}
            </p>
            <div className="mt-10">
              <InitialDiagnostic
                diagnostic={lesson.diagnostic}
                journey={journey}
                result={diagnosticResult}
                onAnswer={onDiagnosticAnswer}
                onComplete={onDiagnosticComplete}
                onContinue={() => onStageSelect(diagnosticIndex + 1)}
              />
            </div>
          </>
        ) : (
          <LessonStageContent
            lessonId={lesson.id}
            stage={stage}
            journey={journey}
            onOpenResponse={onOpenResponse}
            onDecision={onDecision}
            onSelfAssessment={onSelfAssessment}
            onChecklist={() => undefined}
            onAudit={() => undefined}
            onJournal={onJournal}
          />
        )}
      </div>

      {!isDiagnostic && !isClosing && (
        <div className="flex items-center justify-between gap-4 py-8">
          <ActionButton
            variant="secondary"
            disabled={journey.currentStageIndex === 0}
            onClick={() =>
              onStageSelect(Math.max(0, journey.currentStageIndex - 1))
            }
          >
            <ArrowIcon className="size-4 rotate-180" /> Voltar
          </ActionButton>
          <div className="text-right">
            {!advanceAllowed && (
              <p className="mb-2 text-xs text-muted">
                Conclua a interação para avançar.
              </p>
            )}
            <ActionButton disabled={!advanceAllowed} onClick={onContinue}>
              {journey.currentStageIndex === 0
                ? "COMEÇAR IMERSÃO"
                : "Continuar"}
              <ArrowIcon className="size-4" />
            </ActionButton>
          </div>
        </div>
      )}

      {isClosing && (
        <div className="py-8">
          <div className="mb-5 flex items-center gap-2 font-mono text-xs uppercase tracking-label text-gold">
            <CheckIcon /> Diagnóstico inicial registrado
          </div>
          <ActionButton onClick={() => onNavigate("/modulos/01")}>
            COMEÇAR MÓDULO 01 <ArrowIcon />
          </ActionButton>
          <LessonMaterials materials={lesson.materials} />
        </div>
      )}
    </main>
  )
}
