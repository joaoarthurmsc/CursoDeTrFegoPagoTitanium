import { studentRepository } from "../../storage/studentRepository"

export default function UserMenu({
  onNavigate,
}: {
  onNavigate: (path: string) => void
}) {
  const student = studentRepository.getActiveStudent()

  if (!student) return null

  const switchStudent = () => {
    studentRepository.clear()
    window.location.assign("/")
  }

  return (
    <details className="group relative">
      <summary
        aria-label={`Abrir menu de ${student.name}`}
        className="list-none cursor-pointer rounded-full focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold [&::-webkit-details-marker]:hidden"
      >
        <span className="grid size-9 place-items-center rounded-full border border-line bg-charcoal text-xs font-semibold text-silver transition group-open:border-gold group-open:text-gold">
          {student.initials}
        </span>
      </summary>

      <div className="absolute right-0 z-50 mt-3 w-64 border border-line bg-graphite p-2 shadow-2xl">
        <div className="border-b border-line px-3 py-3">
          <p className="text-sm font-medium text-paper">{student.name}</p>
          <p className="mt-1 font-mono text-user-meta uppercase tracking-wide text-muted">
            N0 · Iniciante
          </p>
        </div>

        <button
          type="button"
          onClick={() => onNavigate("/desempenho")}
          className="mt-2 w-full px-3 py-3 text-left text-sm text-silver transition hover:bg-charcoal hover:text-paper focus-visible:outline-2 focus-visible:outline-gold"
        >
          Desempenho
        </button>

        <button
          type="button"
          onClick={switchStudent}
          className="w-full px-3 py-3 text-left text-sm text-muted transition hover:bg-charcoal hover:text-paper focus-visible:outline-2 focus-visible:outline-gold"
        >
          Trocar usuário
        </button>
      </div>
    </details>
  )
}
