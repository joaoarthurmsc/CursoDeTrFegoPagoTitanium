import { useState } from "react"
import type { LessonJourneyState, LessonStage } from "../../types/learning"
import { ActionButton, TextAreaField } from "../titanium/HomePrimitives"

export default function ThinkStage({
  lessonId,
  stage,
  journey,
  onSave,
  onAssessment,
}: {
  lessonId: string
  stage: LessonStage
  journey: LessonJourneyState
  onSave: (lessonId: string, stageId: string, value: string) => void
  onAssessment: (lessonId: string, stageId: string, value: string) => void
}) {
  const stored = journey.openResponses[stage.id] ?? ""
  const [value, setValue] = useState(stored)
  const [showModel, setShowModel] = useState(false)

  return (
    <div className="mt-8 border-l-2 border-gold bg-graphite p-5 md:p-7">
      <p className="text-lg font-semibold leading-7 text-paper">
        {stage.prompt}
      </p>
      <div className="mt-6">
        <TextAreaField
          label="Sua reflexão"
          value={value}
          onChange={setValue}
          placeholder="Registre seu raciocínio antes de comparar."
        />
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <ActionButton
          onClick={() => onSave(lessonId, stage.id, value)}
          disabled={!value.trim()}
        >
          SALVAR RESPOSTA
        </ActionButton>
        {stored && (
          <ActionButton
            variant="secondary"
            onClick={() => setShowModel((current) => !current)}
          >
            {showModel ? "Ocultar resposta-modelo" : "COMPARAR"}
          </ActionButton>
        )}
      </div>
      {showModel && stored && (
        <div className="mt-6 border-t border-line pt-6">
          <p className="font-mono text-xs uppercase tracking-label text-gold">
            Resposta-modelo
          </p>
          <p className="mt-3 text-sm leading-7 text-silver">
            {stage.modelAnswer}
          </p>
          <p className="mt-4 text-xs leading-5 text-muted">
            Compare o raciocínio. Respostas abertas não são classificadas
            automaticamente como certas ou erradas.
          </p>
          {stage.selfAssessment && (
            <div className="mt-6 border-t border-line pt-6">
              <p className="text-sm font-semibold leading-6 text-paper">
                {stage.selfAssessment.prompt}
              </p>
              <div className="mt-4 grid gap-2">
                {stage.selfAssessment.options.map((option) => (
                  <ActionButton
                    key={option}
                    variant="quiet"
                    className={`w-full justify-start border-line text-left ${
                      journey.selfAssessments[stage.id] === option
                        ? "border-gold bg-charcoal text-paper"
                        : ""
                    }`}
                    ariaPressed={journey.selfAssessments[stage.id] === option}
                    onClick={() => onAssessment(lessonId, stage.id, option)}
                  >
                    {option}
                  </ActionButton>
                ))}
              </div>
              <p className="mt-3 text-xs text-muted">Não existe nota.</p>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
