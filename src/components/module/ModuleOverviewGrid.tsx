import {
  getHomeModules,
  type CatalogStatus,
} from "../../storage/progressSelectors"
import {
  AppLink,
  Heading,
  ProgressBar,
  SectionHeader,
  Status,
} from "../titanium/PageUI"

function statusText(status: CatalogStatus) {
  if (status === "locked") return "bloqueado"
  if (status === "completed") return "concluído"
  if (status === "studying") return "em estudo"
  return "não iniciado"
}

export default function ModuleOverviewGrid({
  withHeader = true,
}: {
  withHeader?: boolean
}) {
  const modules = getHomeModules()

  return (
    <section>
      {withHeader && <SectionHeader title="Os 10 módulos da formação" />}
      <div className="grid gap-4 md:grid-cols-2">
        {modules.map((module) => {
          const locked = module.catalogStatus === "locked"

          return (
            <AppLink
              key={module.id}
              to={locked ? "/modulos" : `/modulos/${module.id}`}
              className={`group flex min-h-56 flex-col justify-between border p-6 transition ${
                locked
                  ? "border-line bg-graphite/60 text-muted"
                  : "border-line bg-graphite hover:border-gold"
              }`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm text-gold">
                    {module.number}
                  </span>
                  <Status
                    locked={locked}
                    text={statusText(module.catalogStatus)}
                  />
                </div>
                <Heading
                  level={3}
                  className={`mt-8 max-w-lg font-display text-xl font-semibold leading-snug ${
                    locked ? "text-silver" : "text-paper"
                  }`}
                >
                  {module.title}
                </Heading>
              </div>
              <div>
                <div className="mb-3 flex justify-between text-xs text-muted">
                  <span>{module.lessons} aulas</span>
                  <span>{module.progress}%</span>
                </div>
                <ProgressBar value={module.progress} />
              </div>
            </AppLink>
          )
        })}
      </div>
    </section>
  )
}
