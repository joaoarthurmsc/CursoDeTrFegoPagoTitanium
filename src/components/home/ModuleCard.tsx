import type { HomeModule } from "../../storage/progressSelectors"
import {
  ArrowIcon,
  HomeHeading,
  HomeLink,
  ProgressBar,
} from "../titanium/HomePrimitives"
import ModuleStatus from "./ModuleStatus"

export default function ModuleCard({
  module,
  onNavigate,
}: {
  module: HomeModule
  onNavigate: (path: string) => void
}) {
  const locked = module.catalogStatus === "locked"
  const action =
    module.catalogStatus === "studying" ? "Continuar" : "Abrir módulo"

  return (
    <HomeLink
      to={`/modulos/${module.id}`}
      onNavigate={onNavigate}
      disabled={locked}
      className={`module-cover group relative block aspect-module w-module-card shrink-0 overflow-hidden border bg-graphite text-left transition duration-300 ${
        module.catalogStatus === "studying"
          ? "border-gold/70"
          : "border-line hover:border-silver/70"
      }`}
    >
      <img
        src={module.image}
        alt={module.imageAlt}
        className={`absolute inset-0 size-full object-cover grayscale transition duration-500 ${
          locked ? "opacity-30" : "opacity-70 group-hover:opacity-90"
        } ${module.catalogStatus === "completed" ? "contrast-75" : ""}`}
        loading="lazy"
      />
      <div className="module-cover-overlay absolute inset-0" />
      {module.catalogStatus === "studying" && (
        <div className="absolute inset-y-0 left-0 w-module-mark bg-gold" />
      )}
      <div className="absolute inset-0 flex flex-col justify-between p-5 md:p-6">
        <div className="flex items-start justify-between gap-3">
          <span className="font-mono text-xs text-paper/80">
            MÓDULO {module.number}
          </span>
          <ModuleStatus status={module.catalogStatus} />
        </div>
        <div>
          <div className="module-details mb-4 translate-y-2 opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
            {module.currentActivity && (
              <p className="line-clamp-2 text-xs leading-5 text-silver">
                Atual · {module.currentActivity}
              </p>
            )}
            {!locked && (
              <span className="mt-3 inline-flex items-center gap-2 text-xs font-semibold text-paper">
                {action} <ArrowIcon className="size-4" />
              </span>
            )}
          </div>
          <HomeHeading
            level={3}
            className="font-display text-xl font-semibold leading-snug text-paper"
          >
            {module.title}
          </HomeHeading>
          <div className="module-progress mt-5">
            <div className="mb-2 flex justify-between font-mono text-progress-meta uppercase tracking-wide text-silver">
              <span>
                {module.catalogStatus === "not-started"
                  ? "Ainda não iniciado"
                  : `${module.progress}% concluído`}
              </span>
              {module.progress > 0 && <span>{module.progress}%</span>}
            </div>
            {(module.progress > 0 ||
              module.catalogStatus === "studying" ||
              module.catalogStatus === "completed") && (
              <ProgressBar value={module.progress} />
            )}
          </div>
        </div>
      </div>
    </HomeLink>
  )
}
