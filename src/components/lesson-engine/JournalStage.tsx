import { useState } from "react"
import type { LessonJourneyState, LessonStage } from "../../types/learning"
import { learningRepository } from "../../storage/learningRepository"
import {
  ActionButton,
  CheckIcon,
  TextAreaField,
} from "../titanium/HomePrimitives"

export default function JournalStage({
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
    values: { problem: string; decision: string; expected: string },
  ) => void
}) {
  const savedId = journey.journalEntries[stage.id]
  const saved = savedId ? learningRepository.getDecision(savedId) : undefined
  const [values, setValues] = useState({
    problem: saved?.problem ?? "",
    decision: saved?.decision ?? "",
    expected: saved?.expected ?? "",
  })
  const complete = Object.values(values).every((value) => value.trim())

  return (
    <div className="mt-8">
      <div className="grid gap-5">
        {stage.journalFields?.map((field) => (
          <TextAreaField
            key={field.id}
            label={field.label}
            value={values[(field.id as keyof typeof values)]}
            onChange={(value) =>
              setValues((current) => ({ ...current, [field.id]: value }))
            }
          />
        ))}
      </div>
      <ActionButton
        className="mt-5"
        disabled={!complete}
        onClick={() => onSave(lessonId, stage.id, values)}
      >
        {savedId && <CheckIcon />}
        {savedId ? "REGISTRO SALVO" : "SALVAR PRIMEIRO REGISTRO"}
      </ActionButton>
    </div>
  )
}
