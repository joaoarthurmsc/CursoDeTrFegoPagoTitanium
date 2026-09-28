import type { ExamQuestion as ExamQuestionType } from "../../types/learning"
import { ActionButton } from "../titanium/HomePrimitives"
import GlossaryText from "../lesson-engine/GlossaryText"

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
    <fieldset className="exam-question m-0 border-0 p-0">
      <legend className="exam-question-legend text-paper">
        <GlossaryText text={question.prompt} />
      </legend>
      <div className="exam-question-options">
        {question.options.map((option, index) => (
          <ActionButton
            key={option.id}
            variant="quiet"
            className={`exam-question-option w-full justify-start border-line text-left ${
              selected === option.id ? "border-gold bg-graphite text-paper" : ""
            }`}
            ariaPressed={selected === option.id}
            onClick={() => onSelect(option.id)}
          >
            <span className="grid size-7 shrink-0 place-items-center border border-current font-mono text-xs">
              {String.fromCharCode(65 + index)}
            </span>
            <span className="min-w-0 flex-1">
              <GlossaryText text={option.label} />
            </span>
          </ActionButton>
        ))}
      </div>
    </fieldset>
  )
}
