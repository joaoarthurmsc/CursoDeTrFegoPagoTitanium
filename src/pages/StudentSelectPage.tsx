import { students, type StudentId } from "../data/students"
import { HomeHeading } from "../components/titanium/HomePrimitives"

export default function StudentSelectPage({
  onSelect,
}: {
  onSelect: (studentId: StudentId) => void
}) {
  return (
    <main className="min-h-screen bg-black px-5 py-10 text-paper md:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-5rem)] max-w-reading flex-col justify-center">
        <div className="mx-auto w-full max-w-3xl">
          <div className="flex items-center justify-center gap-3">
            <span className="grid size-10 place-items-center border border-gold/80 font-display text-sm font-bold text-gold">
              T
            </span>
            <span className="text-sm font-bold tracking-brand text-paper">
              TITANIUM
            </span>
          </div>

          <div className="mt-14 text-center">
            <p className="font-mono text-xs uppercase tracking-label text-gold">
              Perfil de estudo
            </p>
            <HomeHeading
              level={1}
              className="mt-4 font-display text-4xl font-semibold tracking-tight md:text-5xl"
            >
              Quem está usando?
            </HomeHeading>
            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-muted">
              Escolha seu perfil. Progresso, respostas, notas, decisões e tempo
              de estudo ficam separados para cada aluno neste navegador.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            {students.map((student) => (
              <button
                key={student.id}
                type="button"
                onClick={() => onSelect(student.id)}
                className="group min-h-48 border border-line bg-graphite p-7 text-left transition hover:border-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                <div className="grid size-12 place-items-center rounded-full border border-line bg-black font-display text-sm font-semibold text-silver transition group-hover:border-gold group-hover:text-gold">
                  {student.initials}
                </div>
                <p className="mt-8 font-display text-2xl font-semibold text-paper">
                  {student.name}
                </p>
                <p className="mt-2 text-sm text-muted">Entrar no Titanium</p>
              </button>
            ))}
          </div>

          <p className="mt-8 text-center text-xs leading-5 text-muted">
            Estes são perfis locais de estudo, não contas com senha.
          </p>
        </div>
      </div>
    </main>
  )
}
