import type { DiagnosticQuestion as DiagnosticQuestionType } from "../../types/learning"
import { ActionButton } from "../titanium/HomePrimitives"
import GlossaryText from "../lesson-engine/GlossaryText"

export default function DiagnosticQuestion({
  question,
  selected,
  onSelect,
}: {
  question: DiagnosticQuestionType
  selected?: string
  onSelect: (optionId: string) => void
}) {
  return (
    <fieldset data-diagnostic-question tabIndex={-1} className="m-0 border-0 p-0 outline-none">
      <legend className="text-xl font-semibold leading-8 text-paper md:text-2xl">
        <GlossaryText text={question.prompt} />
      </legend>
      {question.table && (
        <div className="mt-6 overflow-x-auto border border-line">
          <table className="w-full min-w-diagnostic-table border-collapse text-left text-sm">
            <thead className="bg-charcoal text-silver">
              <tr>
                {question.table.headers.map((header) => (
                  <th
                    key={header}
                    className="border-b border-line px-4 py-3 font-medium"
                  >
                    <GlossaryText text={header} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {question.table.rows.map((row) => (
                <tr key={row.join("-")} className="border-b border-line">
                  {row.map((cell) => (
                    <td key={cell} className="px-4 py-3 text-silver">
                      <GlossaryText text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      <div className="mt-7 grid gap-3">
        {question.options.map((item, index) => (
          <ActionButton
            key={item.id}
            variant="quiet"
            ariaPressed={selected === item.id}
            className={`w-full min-h-16 justify-start border-line px-5 py-4 text-left leading-6 ${
              selected === item.id ? "border-gold bg-graphite text-paper" : ""
            }`}
            onClick={() => onSelect(item.id)}
          >
            <span className="grid size-7 shrink-0 place-items-center border border-current font-mono text-xs">
              {String.fromCharCode(65 + index)}
            </span>
            {item.label}
          </ActionButton>
        ))}
      </div>
    </fieldset>
  )
}
