import type { ExamQuestion as ExamQuestionType } from "../../types/learning"
import { ActionButton } from "../titanium/HomePrimitives"

export default function ExamQuestion({
  question,
  selected,
  onSelect,
}: {
  question: ExamQuestionType
  selected?: string
  onSelect: (optionId: string) => void
}) {
  return (
    <fieldset className="m-0 border-0 p-0">
      <legend className="text-xl font-semibold leading-8 text-paper md:text-2xl">
        {question.prompt}
      </legend>
      <div className="mt-7 grid gap-3">
        {question.options.map((option, index) => (
          <ActionButton
            key={option.id}
            variant="quiet"
            className={`w-full justify-start border-line px-5 py-4 text-left leading-6 ${
              selected === option.id ? "border-gold bg-graphite text-paper" : ""
            }`}
            ariaPressed={selected === option.id}
            onClick={() => onSelect(option.id)}
          >
            <span className="grid size-7 shrink-0 place-items-center border border-current font-mono text-xs">
              {String.fromCharCode(65 + index)}
            </span>
            {option.label}
          </ActionButton>
        ))}
      </div>
    </fieldset>
  )
}
