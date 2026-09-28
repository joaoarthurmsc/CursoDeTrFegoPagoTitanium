import { useState } from "react"
import type {
  LessonJourneyState,
  LessonStage as LessonStageType,
} from "../../types/learning"
import { ActionButton, HomeHeading } from "../titanium/HomePrimitives"
import DecisionStage from "./DecisionStage"
import GlossaryTerm from "./GlossaryTerm"
import GlossaryText from "./GlossaryText"
import PracticeStage from "./PracticeStage"
import LessonMedia from "./LessonMedia"

function StandardContent({
  stage,
  includeMedia = true,
}: {
  stage: LessonStageType
  includeMedia?: boolean
}) {
  return (
    <>
      <div className="space-y-5">
        {stage.body?.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base leading-8 text-silver md:text-lg"
          >
            <GlossaryText text={paragraph} />
          </p>
        ))}
      </div>
      {includeMedia && stage.media && <LessonMedia media={stage.media} />}
      {stage.glossary && (
        <div className="mt-8 border-t border-line pt-6">
          <p className="mb-4 font-mono text-xs uppercase tracking-label text-muted">
            Termos desta etapa
          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-3">
            {stage.glossary.map((entry) => (
              <GlossaryTerm key={entry.term} entry={entry} />
            ))}
          </div>
        </div>
      )}
      <EditorialExtras stage={stage} />
    </>
  )
}

function EditorialExtras({ stage }: { stage: LessonStageType }) {
  return (
    <>
      {stage.sequence && (
        <div className="mt-8 grid gap-px bg-line">
          {stage.sequence.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="grid gap-3 bg-graphite p-5 sm:grid-cols-[3rem_1fr] sm:items-center"
            >
              <span className="font-mono text-xs text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <p className="font-semibold text-paper"><GlossaryText text={item.label} /></p>
                {item.detail && (
                  <p className="mt-1 text-sm leading-6 text-muted">
                    <GlossaryText text={item.detail} />
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {stage.afterSequenceLead && (
        <p className="mt-7 text-base leading-8 text-silver md:text-lg">
          <GlossaryText text={stage.afterSequenceLead} />
        </p>
      )}
      {stage.highlight && (
        <p className="mt-8 border-l-2 border-gold bg-graphite p-5 text-lg font-semibold leading-7 text-paper">
          <GlossaryText text={stage.highlight} />
        </p>
      )}
      {stage.afterSequence && (
        <div className="mt-7 space-y-5">
          {stage.afterSequence.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-8 text-silver md:text-lg"
            >
              <GlossaryText text={paragraph} />
            </p>
          ))}
        </div>
      )}
      {stage.cards && (
        <div className="mt-8 grid gap-px bg-line sm:grid-cols-2">
          {stage.cards.map((card) => (
            <div key={card.title} className="bg-graphite p-5 md:p-6">
              <p className="font-semibold text-paper"><GlossaryText text={card.title} /></p>
              {card.subtitle && (
                <p className="mt-2 font-mono text-xs text-gold">
                  <GlossaryText text={card.subtitle} />
                </p>
              )}
              <p className="mt-4 text-sm leading-6 text-muted">
                <GlossaryText text={card.description} />
              </p>
            </div>
          ))}
        </div>
      )}
      {stage.demoActions && (
        <div className="mt-6 flex flex-wrap gap-3">
          {stage.demoActions.map((action) => (
            <ActionButton key={action} variant="secondary" disabled>
              {action}
            </ActionButton>
          ))}
        </div>
      )}
      {stage.quote && (
        <blockquote className="mt-8 border-y border-gold/50 py-7 font-display text-2xl font-semibold leading-snug text-paper md:text-3xl">
          “<GlossaryText text={stage.quote} />”
        </blockquote>
      )}
    </>
  )
}

function VisualStage({ stage }: { stage: LessonStageType }) {
  return (
    <>
      <StandardContent stage={stage} />
      <div className="mt-10 grid gap-3 md:grid-cols-4">
        {stage.visualItems?.map((item, index) => (
          <div
            key={item.label}
            className="relative border border-line bg-graphite p-5"
          >
            <span className="font-mono text-xs text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <p className="mt-8 font-semibold"><GlossaryText text={item.label} /></p>
            <p className="mt-2 text-xs leading-5 text-muted"><GlossaryText text={item.detail} /></p>
            {index < (stage.visualItems?.length ?? 0) - 1 && (
              <span className="absolute -right-2 top-1/2 z-10 hidden size-4 -translate-y-1/2 bg-gold md:block" />
            )}
          </div>
        ))}
      </div>
    </>
  )
}

function DiscoveryStage({ stage }: { stage: LessonStageType }) {
  return (
    <>
      <StandardContent stage={stage} />
      <div className="mt-10 grid gap-px bg-line sm:grid-cols-2">
        {stage.comparison?.map((item) => (
          <div key={item.label} className="bg-graphite p-5 md:p-6">
            <p className="font-mono text-xs uppercase tracking-label text-gold">
              <GlossaryText text={item.label} />
            </p>
            <dl className="mt-6 grid gap-4">
              {item.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-end justify-between border-b border-line pb-3"
                >
                  <dt className="text-sm text-muted"><GlossaryText text={metric.label} /></dt>
                  <dd className="font-mono text-lg text-paper">
                    {metric.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </div>
      <p className="mt-5 border-l-2 border-gold pl-4 text-sm leading-6 text-silver">
        Guarde sua primeira impressão. As próximas etapas fornecerão o modelo
        mental necessário para revisar essa leitura.
      </p>
    </>
  )
}

function GuidedStage({ stage }: { stage: LessonStageType }) {
  const [expandedImage, setExpandedImage] = useState<{
    src: string
    alt: string
  }>()

  return (
    <>
      <StandardContent stage={stage} />
      <ol className="mt-8 grid gap-4">
        {stage.guidedSteps?.map((step, index) => (
          <li
            key={step.instruction}
            className="grid gap-4 border border-line bg-graphite p-5 md:grid-cols-[3rem_1fr]"
          >
            <span className="grid size-10 place-items-center border border-gold font-mono text-xs text-gold">
              {String(index + 1).padStart(2, "0")}
            </span>
            <div>
              <p className="font-semibold text-paper"><GlossaryText text={step.instruction} /></p>
              <p className="mt-2 text-sm leading-6 text-muted"><GlossaryText text={step.reason} /></p>
              {step.image && (
                <div className="relative mt-5">
                  <ActionButton
                    variant="quiet"
                    className="block min-h-0 w-full border-line p-0"
                    ariaLabel="Ampliar captura da interface"
                    onClick={() =>
                      setExpandedImage({
                        src: step.image!,
                        alt: step.imageAlt ?? "",
                      })
                    }
                  >
                    <img
                      src={step.image}
                      alt={step.imageAlt ?? ""}
                      className="w-full"
                    />
                  </ActionButton>
                  {step.hotspots?.map((hotspot) => (
                    <span
                      key={hotspot.label}
                      className="absolute grid size-7 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-black bg-gold font-mono text-status text-black"
                      style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                      title={hotspot.label}
                    >
                      +
                    </span>
                  ))}
                </div>
              )}
            </div>
          </li>
        ))}
      </ol>
      {expandedImage && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/95 p-5"
          role="dialog"
          aria-modal="true"
          aria-label="Captura ampliada"
        >
          <ActionButton
            variant="secondary"
            className="absolute right-5 top-5"
            onClick={() => setExpandedImage(undefined)}
          >
            Fechar
          </ActionButton>
          <img
            src={expandedImage.src}
            alt={expandedImage.alt}
            className="max-h-screen-safe max-w-full border border-line object-contain"
          />
        </div>
      )}
    </>
  )
}

function MindMapStage({ stage }: { stage: LessonStageType }) {
  if (stage.media) {
    return (
      <>
        <StandardContent stage={{ ...stage, media: undefined }} />
        <LessonMedia media={stage.media} />
      </>
    )
  }

  if (stage.mindmapBranches) {
    return (
      <div className="mt-6">
        <div className="mx-auto grid size-32 place-items-center rounded-full border border-gold bg-graphite text-center font-display text-lg font-semibold text-gold">
          TITANIUM
        </div>
        <div className="mx-auto h-10 w-px bg-gold" />
        <p className="mx-auto w-fit border border-gold bg-gold px-5 py-3 font-mono text-xs font-semibold text-black">
          FORMAÇÃO POR DOMÍNIO
        </p>
        <div className="mx-auto h-10 w-px bg-line" />
        <div className="grid gap-3 md:grid-cols-3">
          {stage.mindmapBranches.map((branch) => (
            <div
              key={branch.title}
              className="border border-line bg-graphite p-5 text-center"
            >
              <p className="font-mono text-xs font-semibold text-gold">
                <GlossaryText text={branch.title} />
              </p>
              <p className="mt-3 text-sm leading-6 text-silver">
                <GlossaryText text={branch.detail} />
              </p>
              {branch.result && (
                <p className="mt-5 border-t border-line pt-4 font-semibold text-paper">
                  ↓ <GlossaryText text={branch.result} />
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <StandardContent stage={stage} />
      <div className="mt-10 grid min-h-mindmap place-items-center border border-line bg-graphite p-8 text-center">
        <div className="max-w-md">
          <span className="mx-auto grid size-14 place-items-center rounded-full border border-gold font-mono text-xs text-gold">
            MAP
          </span>
          <p className="mt-5 font-display text-xl font-semibold">
            Estrutura reservada para o Mapa Mental
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            O componente está preparado para receber imagem, SVG ou diagrama
            interativo. O conteúdo visual definitivo será inserido com a aula
            final.
          </p>
        </div>
      </div>
    </>
  )
}


function LearningModeLabel({
  modeLabel,
  eyebrow,
}: {
  modeLabel: string
  eyebrow: string
}) {
  return (
    <p className="teaching-canvas-kicker font-mono text-xs font-semibold uppercase tracking-label">
      <span className="text-gold">{modeLabel}</span>
      <span className="text-muted"> · {eyebrow}</span>
    </p>
  )
}

function TeachingBody({ stage }: { stage: LessonStageType }) {
  return (
    <>
      {stage.body?.length ? (
        <div className="teaching-canvas-body space-y-4">
          {stage.body.map((paragraph) => (
            <p key={paragraph}>
              <GlossaryText text={paragraph} />
            </p>
          ))}
        </div>
      ) : null}
      {stage.highlight && (
        <div className="teaching-canvas-keypoint">
          <span className="font-mono text-[10px] font-semibold uppercase tracking-label text-gold">
            Ponto-chave
          </span>
          <p className="mt-3 text-lg font-semibold leading-7 text-paper md:text-xl">
            <GlossaryText text={stage.highlight} />
          </p>
        </div>
      )}
    </>
  )
}

function TeachingCanvas({
  stage,
  modeLabel,
}: {
  stage: LessonStageType
  modeLabel: string
}) {
  if (!stage.media) return null

  const extrasStage: LessonStageType = {
    ...stage,
    body: undefined,
    media: undefined,
    highlight: stage.canvasLayout === "split" ? undefined : stage.highlight,
  }

  if (stage.canvasLayout === "split") {
    return (
      <article
        data-frame-root
        data-learning-mode={stage.mode ?? "explain"}
        data-canvas-layout="split"
        tabIndex={-1}
        className="lesson-frame teaching-canvas outline-none"
      >
        <LearningModeLabel modeLabel={modeLabel} eyebrow={stage.eyebrow} />
        <div className="teaching-canvas-split">
          <div className="teaching-canvas-copy">
            <HomeHeading
              level={2}
              className="teaching-canvas-title font-display font-semibold tracking-tight"
            >
              <GlossaryText text={stage.title} />
            </HomeHeading>
            <TeachingBody stage={stage} />
          </div>
          <div className="teaching-canvas-media">
            <LessonMedia media={stage.media} variant="canvas" />
          </div>
        </div>
        <div className="teaching-canvas-extras">
          <EditorialExtras stage={extrasStage} />
        </div>
      </article>
    )
  }

  return (
    <article
      data-frame-root
      data-learning-mode={stage.mode ?? "explain"}
      data-canvas-layout={stage.canvasLayout ?? "visual-first"}
      tabIndex={-1}
      className="lesson-frame teaching-canvas outline-none"
    >
      <div className="teaching-canvas-header">
        <LearningModeLabel modeLabel={modeLabel} eyebrow={stage.eyebrow} />
        <HomeHeading
          level={2}
          className="teaching-canvas-title font-display font-semibold tracking-tight"
        >
          <GlossaryText text={stage.title} />
        </HomeHeading>
        <TeachingBody
          stage={
            stage.canvasLayout === "visual-first"
              ? { ...stage, highlight: undefined }
              : stage
          }
        />
      </div>
      <div className="teaching-canvas-media teaching-canvas-media-wide">
        <LessonMedia media={stage.media} variant="hero" />
      </div>
      <div className="teaching-canvas-extras">
        <EditorialExtras
          stage={{
            ...extrasStage,
            highlight:
              stage.canvasLayout === "visual-first" ? stage.highlight : undefined,
          }}
        />
      </div>
    </article>
  )
}

export default function LessonStage({
  lessonId,
  stage,
  journey,
  onOpenResponse,
  onDecision,
  onSelfAssessment,
  onChecklist,
  onAudit,
  onJournal,
}: {
  lessonId: string
  stage: LessonStageType
  journey: LessonJourneyState
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
}) {
  const mode =
    stage.mode ??
    (["think", "decide", "practice", "audit", "journal"].includes(stage.type)
      ? "apply"
      : "explain")
  const modeLabel =
    mode === "focus"
      ? "PONTO-CHAVE"
      : mode === "apply"
        ? "AGORA É COM VOCÊ"
        : "APRENDA"

  if (
    stage.media &&
    stage.canvasLayout &&
    stage.canvasLayout !== "standard" &&
    mode !== "apply"
  ) {
    return <TeachingCanvas stage={stage} modeLabel={modeLabel} />
  }

  return (
    <article
      data-frame-root
      data-learning-mode={mode}
      tabIndex={-1}
      className="lesson-frame outline-none"
    >
      <LearningModeLabel modeLabel={modeLabel} eyebrow={stage.eyebrow} />
      <HomeHeading
        level={2}
        className="lesson-stage-title mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
      >
        <GlossaryText text={stage.title} />
      </HomeHeading>
      <div className="lesson-stage-content mt-6">
        {stage.type === "discovery" ? (
          <DiscoveryStage stage={stage} />
        ) : ["think", "decide", "audit", "journal", "review"].includes(stage.type) &&
          stage.options?.length ? (
          <>
            <StandardContent
              stage={{
                ...stage,
                scenario: undefined,
                options: undefined,
              }}
            />
            <DecisionStage
              lessonId={lessonId}
              stage={stage}
              journey={journey}
              onSave={onDecision}
            />
          </>
        ) : stage.type === "practice" ? (
          <>
            <StandardContent stage={stage} />
            <PracticeStage
              lessonId={lessonId}
              stage={stage}
              journey={journey}
              onSave={onChecklist}
            />
          </>
        ) : stage.type === "audit" ? (
          <StandardContent stage={stage} />
        ) : stage.type === "visual" ? (
          <VisualStage stage={stage} />
        ) : stage.type === "guided" ? (
          <GuidedStage stage={stage} />
        ) : stage.type === "mindmap" ? (
          <MindMapStage stage={stage} />
        ) : stage.type === "review" ? (
          <StandardContent stage={stage} />
        ) : (
          <StandardContent stage={stage} />
        )}
      </div>
    </article>
  )
}
