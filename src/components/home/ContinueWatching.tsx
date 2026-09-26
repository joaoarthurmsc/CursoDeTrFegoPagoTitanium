import type { ContinueActivity } from "../../storage/progressSelectors"
import {
  ArrowIcon,
  HomeHeading,
  HomeLink,
  ProgressBar,
} from "../titanium/HomePrimitives"

const HERO_IMAGE = "/modules/01.jpg"

export default function ContinueWatching({
  activity,
  onNavigate,
}: {
  activity: ContinueActivity
  onNavigate: (path: string) => void
}) {
  return (
    <section aria-labelledby="continue-title">
      <p className="mb-4 font-mono text-xs font-semibold uppercase tracking-label text-silver">
        Continuar de onde parou
      </p>
      <div className="continue-hero relative min-h-hero overflow-hidden border border-line bg-graphite">
        <img
          src={HERO_IMAGE}
          alt="Montanha em meio às nuvens, representando a fundação da jornada"
          className="absolute inset-0 size-full object-cover grayscale"
        />
        <div className="continue-hero-overlay absolute inset-0" />
        <div className="relative flex min-h-hero max-w-continue flex-col justify-end p-6 md:p-10 lg:p-12">
          <div className="mb-4 flex items-center gap-3 font-mono text-xs uppercase tracking-label">
            <span className="text-gold">
              {activity.moduleId === "00" ? "Aula" : "Módulo"}{" "}
              {activity.moduleNumber}
            </span>
            <span className="h-px w-6 bg-silver/40" />
            <span className="text-silver">{activity.label}</span>
          </div>
          <HomeHeading
            level={2}
            className="font-display text-3xl font-semibold leading-tight tracking-tight text-paper md:text-5xl"
          >
            {activity.title}
          </HomeHeading>
          <p className="mt-3 text-sm text-silver">{activity.moduleTitle}</p>
          <div className="mt-7 max-w-progress">
            <div className="mb-2 flex items-center justify-between font-mono text-xs text-silver">
              <span>
                {activity.moduleId === "00"
                  ? "Progresso da imersão"
                  : "Progresso do módulo"}
              </span>
              <span>{activity.progress}% concluído</span>
            </div>
            <ProgressBar value={activity.progress} />
          </div>
          <HomeLink
            to={activity.path}
            onNavigate={onNavigate}
            className="mt-7 inline-flex w-fit items-center gap-3 border border-gold bg-gold px-5 py-3 text-sm font-semibold text-black transition hover:border-silver hover:bg-silver"
          >
            Continuar <ArrowIcon />
          </HomeLink>
        </div>
      </div>
    </section>
  )
}
