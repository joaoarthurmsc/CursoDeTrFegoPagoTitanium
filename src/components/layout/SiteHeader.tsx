import { ArrowIcon, HomeLink } from "../titanium/HomePrimitives"

export default function SiteHeader({
  backTo,
  backLabel = "Voltar",
  onNavigate,
}: {
  backTo: string
  backLabel?: string
  onNavigate: (path: string) => void
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-line/70 bg-black/95 backdrop-blur">
      <div className="mx-auto grid h-home-header max-w-home grid-cols-[1fr_auto_1fr] items-center px-5 md:px-10 xl:px-14">
        <div className="flex items-center gap-5">
          <HomeLink
            to="/"
            onNavigate={onNavigate}
            className="flex shrink-0 items-center gap-3 text-left"
          >
            <span className="grid size-9 place-items-center border border-gold/80 font-display text-xs font-bold text-gold">
              T
            </span>
            <span className="hidden text-sm font-bold tracking-brand text-paper sm:block">
              TITANIUM
            </span>
          </HomeLink>
        </div>
        <HomeLink
          to={backTo}
          onNavigate={onNavigate}
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-label text-muted transition hover:text-paper"
        >
          <ArrowIcon className="size-4 rotate-180" />
          {backLabel}
        </HomeLink>
        <div className="flex items-center justify-end gap-3">
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-paper">João</p>
            <p className="font-mono text-user-meta uppercase tracking-wide text-muted">
              N0 · Iniciante
            </p>
          </div>
          <div className="grid size-9 place-items-center rounded-full border border-line bg-charcoal text-xs font-semibold text-silver">
            JS
          </div>
        </div>
      </div>
    </header>
  )
}
