import { useState } from "react"
import type { LessonMedia as LessonMediaType } from "../../types/learning"
import { ActionButton } from "../titanium/HomePrimitives"

export default function LessonMedia({ media }: { media: LessonMediaType }) {
  const [expanded, setExpanded] = useState(false)
  const zoomable = media.zoomable !== false

  return (
    <>
      <figure className="mt-8 overflow-hidden border border-line bg-graphite">
        <button
          type="button"
          className={`block w-full bg-black/20 text-left ${zoomable ? "cursor-zoom-in" : "cursor-default"}`}
          onClick={() => zoomable && setExpanded(true)}
          aria-label={zoomable ? `Ampliar imagem: ${media.alt}` : undefined}
        >
          <img
            src={media.src}
            alt={media.alt}
            className="max-h-[58vh] w-full object-contain"
          />
        </button>
        {(media.caption || media.sourceLabel || media.capturedAt) && (
          <figcaption className="flex flex-wrap items-start justify-between gap-3 border-t border-line px-4 py-3 text-xs leading-5 text-muted">
            <span>{media.caption}</span>
            <span className="flex flex-wrap items-center gap-2 font-mono uppercase tracking-label text-silver">
              {media.kind === "interface-screenshot" && (
                <span className="text-gold">Captura real</span>
              )}
              {media.sourceLabel && <span>{media.sourceLabel}</span>}
              {media.capturedAt && <span>· {media.capturedAt}</span>}
            </span>
          </figcaption>
        )}
      </figure>

      {expanded && (
        <div
          className="fixed inset-0 z-50 grid place-items-center bg-black/95 p-5"
          role="dialog"
          aria-modal="true"
          aria-label={`Imagem ampliada: ${media.alt}`}
        >
          <ActionButton
            variant="secondary"
            className="absolute right-5 top-5 z-10"
            onClick={() => setExpanded(false)}
          >
            Fechar
          </ActionButton>
          <img
            src={media.src}
            alt={media.alt}
            className="max-h-[calc(100vh-3rem)] max-w-full border border-line object-contain"
          />
        </div>
      )}
    </>
  )
}
