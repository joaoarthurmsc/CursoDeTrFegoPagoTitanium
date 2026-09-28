import { useState } from "react"
import type { LessonJourneyState, LessonStage } from "../../types/learning"
import { ActionButton } from "../titanium/HomePrimitives"
import GlossaryText from "./GlossaryText"

export default function DecisionStage({
  lessonId,
  stage,
  journey,
  onSave,
}: {
  lessonId: string
  stage: LessonStage
  journey: LessonJourneyState
  onSave: (
    lessonId: string,
    stageId: string,
    optionId: string,
    confirmed: boolean,
  ) => void
}) {
  const saved = journey.decisions[stage.id]
  const [selected, setSelected] = useState(saved?.selectedOptionId ?? "")
  const [feedbackOpen, setFeedbackOpen] = useState(false)
  const confirmed = saved?.confirmed && saved.selectedOptionId === selected
  const option = stage.options?.find((item) => item.id === selected)
  const selectedIndex = stage.options?.findIndex((item) => item.id === selected) ?? -1
  const selectedLetter =
    selectedIndex >= 0 ? String.fromCharCode(65 + selectedIndex) : ""

  const retry = () => {
    setFeedbackOpen(false)
    setSelected("")
    onSave(lessonId, stage.id, "", false)
  }

  return (
    <div className="lesson-decision">
      <p className="lesson-decision-scenario">
        {stage.scenario && <GlossaryText text={stage.scenario} />}
      </p>

      <div className="lesson-decision-options">
        {stage.options?.map((item, index) => (
          <ActionButton
            key={item.id}
            variant={selected === item.id ? "secondary" : "quiet"}
            className={`lesson-decision-option w-full justify-start text-left ${
              selected === item.id ? "border-gold text-paper" : "border-line"
            }`}
            ariaPressed={selected === item.id}
            onClick={() => {
              setSelected(item.id)
              onSave(lessonId, stage.id, item.id, false)
            }}
          >
            <span className="grid size-6 shrink-0 place-items-center border border-current font-mono text-status">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="min-w-0 flex-1">
              <GlossaryText text={item.label} />
            </span>
          </ActionButton>
        ))}
      </div>

      <div className="lesson-decision-confirm">
        <ActionButton
          disabled={!selected || Boolean(confirmed)}
          onClick={() => {
            if (!selected) return
            onSave(lessonId, stage.id, selected, true)
            setFeedbackOpen(true)
          }}
        >
          Confirmar decisão
        </ActionButton>
      </div>

      {feedbackOpen && option && (
        <div className="lesson-feedback-backdrop" role="presentation">
          <section
            className="lesson-feedback-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby={`feedback-title-${stage.id}`}
          >
            <div className="lesson-feedback-status-row">
              <span
                className={`lesson-feedback-status ${
                  option.recommended
                    ? "lesson-feedback-status-recommended"
                    : "lesson-feedback-status-review"
                }`}
              >
                {option.recommended
                  ? "Raciocínio recomendado"
                  : "Revise o raciocínio"}
              </span>
              <span className="font-mono text-[10px] uppercase tracking-label text-muted">
                Feedback imediato
              </span>
            </div>

            <h3
              id={`feedback-title-${stage.id}`}
              className="mt-4 font-display text-2xl font-semibold tracking-tight text-paper md:text-3xl"
            >
              {option.recommended
                ? "Boa leitura. Veja por que ela faz sentido."
                : "Veja o que essa escolha revela."}
            </h3>

            <div className="lesson-feedback-choice">
              <span className="lesson-feedback-choice-letter">
                {selectedLetter}
              </span>
              <div className="min-w-0">
                <p className="font-mono text-[10px] uppercase tracking-label text-muted">
                  Alternativa escolhida
                </p>
                <p className="mt-2 text-sm font-medium leading-6 text-paper md:text-base">
                  <GlossaryText text={option.label} />
                </p>
              </div>
            </div>

            <div className="lesson-feedback-reasoning">
              <p className="font-mono text-[10px] uppercase tracking-label text-gold">
                {option.recommended ? "Por que está correto" : "Raciocínio"}
              </p>
              <p className="mt-3 text-base leading-7 text-silver">
                <GlossaryText text={option.feedback} />
              </p>
            </div>

            <div className="mt-6 flex flex-wrap justify-end gap-3">
              {stage.allowRetry && !option.recommended ? (
                <ActionButton variant="secondary" onClick={retry}>
                  Tentar novamente
                </ActionButton>
              ) : (
                <ActionButton onClick={() => setFeedbackOpen(false)}>
                  Entendi
                </ActionButton>
              )}
            </div>
          </section>
        </div>
      )}
    </div>
  )
}
