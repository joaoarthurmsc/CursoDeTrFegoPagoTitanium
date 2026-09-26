import {
  ArrowIcon,
  HomeHeading,
  HomeLink,
  LockIcon,
} from "../titanium/HomePrimitives"

export default function ModuleFinalExamCard({
  moduleId,
  unlocked,
  bestScore,
  onNavigate,
}: {
  moduleId: string
  unlocked: boolean
  bestScore?: number
  onNavigate: (path: string) => void
}) {
  return (
    <section className="mt-12 border border-line bg-graphite p-6 md:p-8">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-2 font-mono text-xs uppercase tracking-label text-gold">
            {!unlocked && <LockIcon />}
            {unlocked ? "Disponível" : "Bloqueada"}
          </div>
          <HomeHeading
            level={2}
            className="font-display text-2xl font-semibold md:text-3xl"
          >
            Prova Final do Módulo
          </HomeHeading>
          <p className="mt-3 text-sm leading-6 text-muted">
            {unlocked
              ? "Integre os conceitos das aulas e demonstre domínio com nota mínima 9,0."
              : "Conclua todas as aulas com nota mínima 9,0 para liberar."}
          </p>
          {bestScore !== undefined && (
            <p className="mt-4 font-mono text-xs text-silver">
              Melhor nota · {bestScore.toFixed(1).replace(".", ",")}
            </p>
          )}
        </div>
        <HomeLink
          to={`/modulos/${moduleId}/prova-final`}
          onNavigate={onNavigate}
          disabled={!unlocked}
          className={`inline-flex items-center justify-center gap-3 border px-5 py-3 text-sm font-semibold ${
            unlocked
              ? "border-gold bg-gold text-black hover:bg-silver"
              : "border-line text-muted"
          }`}
        >
          {unlocked ? "Iniciar prova final" : "Prova bloqueada"}
          {unlocked && <ArrowIcon />}
        </HomeLink>
      </div>
    </section>
  )
}
