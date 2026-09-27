import { useState } from "react"
import type {
  LessonJourneyState,
  LessonStage as LessonStageType,
} from "../../types/learning"
import {
  ActionButton,
  HomeHeading,
  TextAreaField,
} from "../titanium/HomePrimitives"
import AuditStage from "./AuditStage"
import DecisionStage from "./DecisionStage"
import GlossaryTerm from "./GlossaryTerm"
import JournalStage from "./JournalStage"
import PracticeStage from "./PracticeStage"
import ThinkStage from "./ThinkStage"

function StandardContent({ stage }: { stage: LessonStageType }) {
  return (
    <>
      <div className="space-y-5">
        {stage.body?.map((paragraph) => (
          <p
            key={paragraph}
            className="text-base leading-8 text-silver md:text-lg"
          >
            {paragraph}
          </p>
        ))}
      </div>
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
                <p className="font-semibold text-paper">{item.label}</p>
                {item.detail && (
                  <p className="mt-1 text-sm leading-6 text-muted">
                    {item.detail}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
      {stage.afterSequenceLead && (
        <p className="mt-7 text-base leading-8 text-silver md:text-lg">
          {stage.afterSequenceLead}
        </p>
      )}
      {stage.highlight && (
        <p className="mt-8 border-l-2 border-gold bg-graphite p-5 text-lg font-semibold leading-7 text-paper">
          {stage.highlight}
        </p>
      )}
      {stage.afterSequence && (
        <div className="mt-7 space-y-5">
          {stage.afterSequence.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-8 text-silver md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>
      )}
      {stage.cards && (
        <div className="mt-8 grid gap-px bg-line sm:grid-cols-2">
          {stage.cards.map((card) => (
            <div key={card.title} className="bg-graphite p-5 md:p-6">
              <p className="font-semibold text-paper">{card.title}</p>
              {card.subtitle && (
                <p className="mt-2 font-mono text-xs text-gold">
                  {card.subtitle}
                </p>
              )}
              <p className="mt-4 text-sm leading-6 text-muted">
                {card.description}
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
          “{stage.quote}”
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
            <p className="mt-8 font-semibold">{item.label}</p>
            <p className="mt-2 text-xs leading-5 text-muted">{item.detail}</p>
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
              {item.label}
            </p>
            <dl className="mt-6 grid gap-4">
              {item.metrics.map((metric) => (
                <div
                  key={metric.label}
                  className="flex items-end justify-between border-b border-line pb-3"
                >
                  <dt className="text-sm text-muted">{metric.label}</dt>
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
              <p className="font-semibold text-paper">{step.instruction}</p>
              <p className="mt-2 text-sm leading-6 text-muted">{step.reason}</p>
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
                {branch.title}
              </p>
              <p className="mt-3 text-sm leading-6 text-silver">
                {branch.detail}
              </p>
              {branch.result && (
                <p className="mt-5 border-t border-line pt-4 font-semibold text-paper">
                  ↓ {branch.result}
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

function ReviewStage({
  lessonId,
  stage,
  journey,
  onSave,
}: {
  lessonId: string
  stage: LessonStageType
  journey: LessonJourneyState
  onSave: (lessonId: string, stageId: string, value: string) => void
}) {
  const [value, setValue] = useState(journey.openResponses[stage.id] ?? "")
  return (
    <>
      <div className="mt-4 grid gap-px bg-line md:grid-cols-2">
        {stage.reviewSections?.map((section) => (
          <div key={section.title} className="bg-graphite p-5 md:p-6">
            <p className="font-semibold text-paper">{section.title}</p>
            <ul className="mt-4 space-y-3">
              {section.items.map((item) => (
                <li
                  key={item}
                  className="flex gap-3 text-sm leading-6 text-silver"
                >
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-gold" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      {stage.prompt && (
        <div className="mt-8 border-t border-line pt-7">
          <TextAreaField
            label={stage.prompt}
            value={value}
            onChange={setValue}
          />
          <ActionButton
            className="mt-4"
            disabled={!value.trim()}
            onClick={() => onSave(lessonId, stage.id, value)}
          >
            Salvar resposta
          </ActionButton>
        </div>
      )}
    </>
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
  return (
    <article data-frame-root tabIndex={-1} className="outline-none">
      <p className="font-mono text-xs font-semibold uppercase tracking-label text-gold">
        {stage.eyebrow}
      </p>
      <HomeHeading
        level={2}
        className="lesson-stage-title mt-3 font-display text-3xl font-semibold leading-tight tracking-tight md:text-5xl"
      >
        {stage.title}
      </HomeHeading>
      <div className="lesson-stage-content mt-6">
        {stage.type === "discovery" ? (
          <DiscoveryStage stage={stage} />
        ) : stage.type === "think" ? (
          <>
            <StandardContent stage={{ ...stage, prompt: undefined }} />
            <ThinkStage
              lessonId={lessonId}
              stage={stage}
              journey={journey}
              onSave={onOpenResponse}
              onAssessment={onSelfAssessment}
            />
          </>
        ) : stage.type === "decide" ? (
          <>
            <DecisionStage
              lessonId={lessonId}
              stage={stage}
              journey={journey}
              onSave={onDecision}
            />
            <StandardContent
              stage={{
                ...stage,
                scenario: undefined,
                options: undefined,
              }}
            />
          </>
        ) : stage.type === "journal" ? (
          <>
            <StandardContent stage={stage} />
            <JournalStage
              lessonId={lessonId}
              stage={stage}
              journey={journey}
              onSave={onJournal}
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
          <>
            <StandardContent stage={stage} />
            <AuditStage
              lessonId={lessonId}
              stage={stage}
              journey={journey}
              onSave={onAudit}
            />
          </>
        ) : stage.type === "visual" ? (
          <VisualStage stage={stage} />
        ) : stage.type === "guided" ? (
          <GuidedStage stage={stage} />
        ) : stage.type === "mindmap" ? (
          <MindMapStage stage={stage} />
        ) : stage.type === "review" ? (
          <ReviewStage
            lessonId={lessonId}
            stage={stage}
            journey={journey}
            onSave={onOpenResponse}
          />
        ) : (
          <StandardContent stage={stage} />
        )}
      </div>
    </article>
  )
}
