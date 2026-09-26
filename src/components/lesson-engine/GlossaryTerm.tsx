import { useState } from "react"
import type { GlossaryEntry } from "../../types/learning"
import { ActionButton } from "../titanium/HomePrimitives"

export default function GlossaryTerm({ entry }: { entry: GlossaryEntry }) {
  const [open, setOpen] = useState(false)

  return (
    <span className="relative inline-block">
      <ActionButton
        variant="quiet"
        className="min-h-0 border-b border-dashed border-gold px-1 py-0 font-semibold text-gold"
        onClick={() => setOpen((current) => !current)}
        ariaExpanded={open}
        ariaControls={`glossary-${entry.term}`}
      >
        {entry.term}
      </ActionButton>
      {open && (
        <span
          id={`glossary-${entry.term}`}
          className="absolute left-0 top-full z-20 mt-2 block w-glossary max-w-screen-safe border border-gold/60 bg-charcoal p-5 text-left shadow-2xl"
          role="tooltip"
        >
          <strong className="block text-sm text-paper">{entry.term}</strong>
          {entry.original && (
            <span className="mt-2 block text-sm text-silver">
              {entry.original}
            </span>
          )}
          <span className="mt-1 block text-sm text-silver">
            {entry.translation}
          </span>
          <span className="mt-4 block text-sm leading-6 text-muted">
            {entry.explanation}
          </span>
        </span>
      )}
    </span>
  )
}
