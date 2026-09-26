import { studentRepository } from "../../storage/studentRepository"
import { HomeLink } from "../titanium/HomePrimitives"
import UserMenu from "./UserMenu"

export default function HomeHeader({
  onNavigate,
}: {
  onNavigate: (path: string) => void
}) {
  const student = studentRepository.getActiveStudent()

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
          <div className="hidden text-right sm:block">
            <p className="text-sm font-medium text-paper">{student?.name}</p>
            <p className="font-mono text-user-meta uppercase tracking-wide text-muted">
              N0 · Iniciante
            </p>
          </div>
          <UserMenu onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  )
}
