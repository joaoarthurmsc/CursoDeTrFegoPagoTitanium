import { HomeLink } from "../titanium/HomePrimitives"

export default function HomeHeader({
  onNavigate,
}: {
  onNavigate: (path: string) => void
}) {
  return (
    <header className="border-b border-line/70">
      <div className="mx-auto flex h-home-header max-w-home items-center justify-between px-5 md:px-10 xl:px-14">
        <HomeLink
          to="/"
          onNavigate={onNavigate}
          className="flex items-center gap-3 text-left"
        >
          <span className="grid size-9 place-items-center border border-gold/80 font-display text-xs font-bold text-gold">
            T
          </span>
          <span className="text-sm font-bold tracking-brand text-paper">
            TITANIUM
          </span>
        </HomeLink>
        <div className="flex items-center gap-3">
          <div className="text-right">
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
