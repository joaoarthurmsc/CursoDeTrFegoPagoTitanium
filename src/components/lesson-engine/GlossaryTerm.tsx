import { useEffect, useId, useRef, useState } from "react"
import type { GlobalGlossaryEntry } from "../../data/glossary"

export default function GlossaryTerm({
  entry,
  displayText,
}: {
  entry: GlobalGlossaryEntry
  displayText?: string
}) {
  const [open, setOpen] = useState(false)
  const [position, setPosition] = useState({ left: 16, top: 80 })
  const buttonRef = useRef<HTMLButtonElement>(null)
  const wrapperRef = useRef<HTMLSpanElement>(null)
  const id = useId().replace(/:/g, "")

  const updatePosition = () => {
    const rect = buttonRef.current?.getBoundingClientRect()
    if (!rect) return

    const width = Math.min(384, window.innerWidth - 32)
    const left = Math.min(
      Math.max(16, rect.left),
      Math.max(16, window.innerWidth - width - 16),
    )
    const preferredTop = rect.bottom + 10
    const top = Math.min(preferredTop, Math.max(16, window.innerHeight - 340))

    setPosition({ left, top })
  }

  useEffect(() => {
    if (!open) return

    updatePosition()
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false)
        buttonRef.current?.focus()
      }
    }

    window.addEventListener("resize", updatePosition)
    window.addEventListener("scroll", updatePosition, true)
    window.addEventListener("keydown", closeOnEscape)

    return () => {
      window.removeEventListener("resize", updatePosition)
      window.removeEventListener("scroll", updatePosition, true)
      window.removeEventListener("keydown", closeOnEscape)
    }
  }, [open])

  return (
    <span
      ref={wrapperRef}
      className="relative inline"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onBlur={(event) => {
        if (!wrapperRef.current?.contains(event.relatedTarget as Node | null)) {
          setOpen(false)
        }
      }}
    >
      <button
        ref={buttonRef}
        type="button"
        className="inline cursor-help border-0 border-b border-dashed border-gold/80 bg-transparent p-0 font-[inherit] text-inherit underline-offset-4 transition hover:text-gold focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gold"
        onClick={() => setOpen((current) => !current)}
        onFocus={() => setOpen(true)}
        aria-expanded={open}
        aria-describedby={open ? `glossary-${id}` : undefined}
      >
        {displayText ?? entry.term}
      </button>

      {open && (
        <span
          id={`glossary-${id}`}
          role="tooltip"
          className="fixed z-[80] block w-[min(24rem,calc(100vw-2rem))] max-h-[min(30rem,calc(100vh-2rem))] overflow-y-auto border border-gold/60 bg-charcoal p-5 text-left shadow-2xl"
          style={{ left: position.left, top: position.top }}
        >
          <span className="font-mono text-[10px] uppercase tracking-label text-gold">
            Glossário Titanium
          </span>
          <strong className="mt-2 block text-base text-paper">{entry.term}</strong>
          {entry.original && entry.original !== entry.term && (
            <span className="mt-1 block text-xs text-muted">{entry.original}</span>
          )}
          {entry.translation && entry.translation !== entry.term && (
            <span className="mt-2 block text-sm font-semibold text-silver">
              {entry.translation}
            </span>
          )}
          <span className="mt-3 block text-sm leading-6 text-silver">
            {entry.explanation}
          </span>
          {entry.formula && (
            <span className="mt-4 block border-t border-line pt-3">
              <span className="block font-mono text-[10px] uppercase tracking-label text-muted">
                Fórmula
              </span>
              <span className="mt-1 block text-sm font-semibold text-paper">
                {entry.formula}
              </span>
            </span>
          )}
          {entry.example && (
            <span className="mt-3 block">
              <span className="block font-mono text-[10px] uppercase tracking-label text-muted">
                Exemplo
              </span>
              <span className="mt-1 block text-sm leading-6 text-silver">
                {entry.example}
              </span>
            </span>
          )}
          {entry.caution && (
            <span className="mt-4 block border-l-2 border-gold bg-black/20 px-3 py-2 text-xs leading-5 text-silver">
              {entry.caution}
            </span>
          )}
          <span className="mt-4 block text-[11px] text-muted">
            Passe o mouse, toque ou use Tab para consultar. Esc fecha o glossário.
          </span>
        </span>
      )}
    </span>
  )
}
