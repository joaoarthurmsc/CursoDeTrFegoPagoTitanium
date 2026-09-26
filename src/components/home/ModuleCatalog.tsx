import type { HomeModule } from "../../storage/progressSelectors"
import { HomeHeading } from "../titanium/HomePrimitives"
import ModuleCard from "./ModuleCard"

export default function ModuleCatalog({
  modules,
  onNavigate,
}: {
  modules: HomeModule[]
  onNavigate: (path: string) => void
}) {
  return (
    <section className="mt-16 md:mt-20" aria-labelledby="catalog-title">
      <div className="mb-6 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 font-mono text-xs uppercase tracking-label text-muted">
            10 módulos
          </p>
          <HomeHeading
            level={2}
            className="font-display text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Sua Formação
          </HomeHeading>
        </div>
        <p className="hidden text-sm text-muted md:block">
          Navegue pela sua coleção
        </p>
      </div>
      <div className="catalog-scroll -mx-5 flex gap-4 overflow-x-auto px-5 pb-6 md:-mx-10 md:gap-5 md:px-10 xl:-mx-14 xl:px-14">
        {modules.map((module) => (
          <ModuleCard key={module.id} module={module} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  )
}
