import { useState } from "react"
import type { LessonMedia as LessonMediaType } from "../../types/learning"
import { ActionButton } from "../titanium/HomePrimitives"

type LessonMediaVariant = "default" | "canvas" | "hero"

export default function LessonMedia({
  media,
  variant = "default",
}: {
  media: LessonMediaType
  variant?: LessonMediaVariant
}) {
  const [expanded, setExpanded] = useState(false)
  const zoomable = media.zoomable !== false
  const figureClass =
    variant === "hero"
      ? "teaching-media teaching-media-hero"
      : variant === "canvas"
        ? "teaching-media teaching-media-canvas"
        : "mt-8 overflow-hidden border border-line bg-graphite"
  const imageClass =
    variant === "hero"
      ? "w-full object-contain"
      : variant === "canvas"
        ? "w-full object-contain"
        : "max-h-[58vh] w-full object-contain"

  return (
    <>
      <figure className={figureClass}>
        <button
          type="button"
          className={`block w-full bg-black/20 text-left ${zoomable ? "cursor-zoom-in" : "cursor-default"}`}
          onClick={() => zoomable && setExpanded(true)}
          aria-label={zoomable ? `Ampliar imagem: ${media.alt}` : undefined}
        >
          <img src={media.src} alt={media.alt} className={imageClass} />
        </button>
        {(media.caption || media.sourceLabel || media.capturedAt) && (
          <figcaption className="teaching-media-caption">
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
          onClick={() => setExpanded(false)}
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
            className="max-h-[calc(100vh-3rem)] max-w-[calc(100vw-3rem)] border border-line object-contain shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  )
}
