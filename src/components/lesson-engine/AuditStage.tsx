import { useState } from "react"
import type { LessonJourneyState, LessonStage } from "../../types/learning"
import { ActionButton, TextAreaField } from "../titanium/HomePrimitives"

export default function AuditStage({
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
    responses: Record<string, string>,
  ) => void
}) {
  const stored = journey.auditResponses[stage.id] ?? {}
  const [responses, setResponses] = useState(stored)
  const [showAnalysis, setShowAnalysis] = useState(false)
  const complete = stage.auditPrompts?.every((prompt) =>
    responses[prompt]?.trim(),
  )
  const saved = Object.keys(stored).length > 0

  return (
    <div className="mt-8">
      <div className="grid gap-5">
        {stage.auditPrompts?.map((prompt) => (
          <TextAreaField
            key={prompt}
            label={prompt}
            value={responses[prompt] ?? ""}
            onChange={(value) =>
              setResponses((current) => ({
                ...current,
                [prompt]: value,
              }))
            }
          />
        ))}
      </div>
      <div className="mt-5 flex flex-wrap gap-3">
        <ActionButton
          disabled={!complete}
          onClick={() => onSave(lessonId, stage.id, responses)}
        >
          Salvar diagnóstico
        </ActionButton>
        {saved && (
          <ActionButton
            variant="secondary"
            onClick={() => setShowAnalysis((current) => !current)}
          >
            {showAnalysis ? "Ocultar análise" : "Ver análise comentada"}
          </ActionButton>
        )}
      </div>
      {saved && showAnalysis && (
        <div className="mt-6 border-l-2 border-gold bg-graphite p-5">
          <p className="font-mono text-xs uppercase tracking-label text-gold">
            Análise comentada
          </p>
          <p className="mt-3 text-sm leading-7 text-silver">
            {stage.commentedAnalysis}
          </p>
        </div>
      )}
    </div>
  )
}
