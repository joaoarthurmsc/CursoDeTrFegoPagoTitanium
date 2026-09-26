import ModuleOverviewGrid from "../components/module/ModuleOverviewGrid"
import {
  Heading,
  PageHeader,
} from "../components/titanium/PageUI"
import { levels } from "../data/course"

export default function FormationPage() {
  return (
    <>
      <PageHeader
        eyebrow="A formação"
        title="Sua Jornada Titanium"
        description="Uma progressão deliberada: da compreensão dos fundamentos à arquitetura de sistemas profissionais de aquisição."
      />
      <section className="mb-14">
        <div className="mb-8 flex items-center overflow-x-auto pb-3">
          {levels.map((level, index) => (
            <div key={level.code} className="flex items-center">
              <div
                className={`grid size-12 shrink-0 place-items-center rounded-full border text-sm font-semibold ${
                  index === 0
                    ? "border-gold bg-gold text-black"
                    : "border-line bg-graphite text-muted"
                }`}
              >
                {level.code}
              </div>
              {index < levels.length - 1 && (
                <div className="h-px w-10 bg-line md:w-16" />
              )}
            </div>
          ))}
        </div>
        <div className="grid gap-px bg-line md:grid-cols-2 xl:grid-cols-4">
          {levels.map((level) => (
            <div key={level.code} className="bg-graphite p-5">
              <p className="text-xs font-semibold text-gold">{level.code}</p>
              <Heading level={3} className="mt-2 text-lg font-semibold">
                {level.name}
              </Heading>
              <p className="mt-3 text-sm leading-6 text-muted">
                {level.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <ModuleOverviewGrid />
    </>
  )
}
