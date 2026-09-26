import type { LessonMaterial } from "../../types/learning"
import { HomeHeading } from "../titanium/HomePrimitives"

export default function LessonMaterials({
  materials,
}: {
  materials: LessonMaterial[]
}) {
  return (
    <section className="mt-14 border-t border-line pt-8">
      <p className="font-mono text-xs uppercase tracking-label text-muted">
        Modo de revisão
      </p>
      <HomeHeading
        level={2}
        className="mt-3 font-display text-2xl font-semibold"
      >
        Materiais de apoio
      </HomeHeading>
      <div className="mt-6 grid gap-px bg-line sm:grid-cols-3">
        {materials.map((material) => (
          <div key={material.id} className="bg-graphite p-5">
            <p className="font-semibold text-paper">{material.title}</p>
            <p className="mt-3 text-sm leading-6 text-muted">
              {material.purpose}
            </p>
            <p className="mt-5 font-mono text-status uppercase tracking-label text-silver">
              {material.status === "available"
                ? "Disponível"
                : "Conteúdo final em preparação"}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
