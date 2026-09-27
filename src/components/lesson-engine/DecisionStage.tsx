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
  const confirmed = saved?.confirmed && saved.selectedOptionId === selected
  const option = stage.options?.find((item) => item.id === selected)

  return (
    <div className="mt-8">
      <p className="border-l-2 border-gold pl-5 text-lg font-semibold leading-8">
        {stage.scenario && <GlossaryText text={stage.scenario} />}
      </p>
      <div className="mt-7 grid gap-3">
        {stage.options?.map((item) => (
          <ActionButton
            key={item.id}
            variant={selected === item.id ? "secondary" : "quiet"}
            className={`w-full justify-start px-5 py-4 text-left ${
              selected === item.id ? "border-gold text-paper" : "border-line"
            }`}
            ariaPressed={selected === item.id}
            onClick={() => {
              setSelected(item.id)
              onSave(lessonId, stage.id, item.id, false)
            }}
          >
            <span className="grid size-6 shrink-0 place-items-center border border-current font-mono text-status">
              {String.fromCharCode(65 + (stage.options?.indexOf(item) ?? 0))}
            </span>
            {item.label}
          </ActionButton>
        ))}
      </div>
      <div className="mt-5">
        <ActionButton
          disabled={!selected || Boolean(confirmed)}
          onClick={() => selected && onSave(lessonId, stage.id, selected, true)}
        >
          Confirmar decisão
        </ActionButton>
      </div>
      {confirmed && option && (
        <div className="mt-6 border border-line bg-graphite p-5">
          <p
            className={`font-mono text-xs uppercase tracking-label ${
              option.recommended ? "text-gold" : "text-silver"
            }`}
          >
            {option.recommended
              ? "Raciocínio recomendado"
              : "Revise o raciocínio"}
          </p>
          <p className="mt-3 text-sm leading-7 text-silver">
            <GlossaryText text={option.feedback} />
          </p>
          {stage.allowRetry && !option.recommended && (
            <ActionButton
              variant="secondary"
              className="mt-5"
              onClick={() => {
                setSelected("")
                onSave(lessonId, stage.id, "", false)
              }}
            >
              Tentar novamente
            </ActionButton>
          )}
        </div>
      )}
    </div>
  )
}
