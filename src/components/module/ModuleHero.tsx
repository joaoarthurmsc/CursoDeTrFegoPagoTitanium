import { modules } from "../../data/course"
import { HomeHeading, ProgressBar } from "../titanium/HomePrimitives"

export default function ModuleHero({
  moduleId,
  progress,
  completedLessons,
  totalLessons,
}: {
  moduleId: string
  progress: number
  completedLessons: number
  totalLessons: number
}) {
  const module = modules.find((item) => item.id === moduleId) ?? modules[0]

  return (
    <section className="relative min-h-module-hero overflow-hidden border-b border-line">
      <img
        src={`/modules/${module.number}.jpg`}
        alt=""
        className="absolute inset-0 size-full object-cover grayscale"
      />
      <div className="module-hero-overlay absolute inset-0" />
      <div className="relative mx-auto flex min-h-module-hero max-w-home items-end px-5 py-12 md:px-10 md:py-16 xl:px-14">
        <div className="max-w-module-copy">
          <p className="mb-4 font-mono text-xs uppercase tracking-label text-gold">
            Módulo {module.number}
          </p>
          <HomeHeading
            level={1}
            className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
          >
            {module.title}
          </HomeHeading>
          <p className="mt-5 max-w-2xl text-base leading-7 text-silver">
            Construir a base mental necessária antes de entrar profundamente na
            plataforma.
          </p>
          <div className="mt-8 max-w-progress">
            <div className="mb-2 flex justify-between font-mono text-xs text-silver">
              <span>
                {completedLessons} de {totalLessons} aulas concluídas
              </span>
              <span>{progress}%</span>
            </div>
            <ProgressBar value={progress} />
          </div>
        </div>
      </div>
    </section>
  )
}
