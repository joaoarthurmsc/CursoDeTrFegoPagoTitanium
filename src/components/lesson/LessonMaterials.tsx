import type { LessonMaterial } from "../../types/learning"
import { HomeHeading } from "../titanium/HomePrimitives"

export default function LessonMaterials({
  materials,
}: {
  materials: LessonMaterial[]
}) {
  return (
    <section className="mt-10 border-t border-line pt-8">
      <p className="font-mono text-xs uppercase tracking-label text-muted">
        Modo de revisão
      </p>
      <HomeHeading
        level={2}
        className="mt-3 font-display text-2xl font-semibold"
      >
        Materiais da aula
      </HomeHeading>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">
        Use os materiais para revisar e reconstruir o raciocínio. Eles não
        substituem as atividades da aula.
      </p>
      <div className="mt-6 grid gap-px bg-line sm:grid-cols-3">
        {materials.map((material) => (
          <div key={material.id} className="flex min-h-56 flex-col bg-graphite p-5">
            <p className="font-semibold text-paper">{material.title}</p>
            <p className="mt-3 flex-1 text-sm leading-6 text-muted">
              {material.purpose}
            </p>
            {material.status === "available" && material.asset ? (
              <a
                href={material.asset}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex w-fit items-center border border-gold px-4 py-2 font-mono text-xs font-semibold uppercase tracking-label text-gold transition hover:bg-gold hover:text-black"
              >
                Abrir material ↗
              </a>
            ) : (
              <p className="mt-5 font-mono text-status uppercase tracking-label text-silver">
                Conteúdo em preparação
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
