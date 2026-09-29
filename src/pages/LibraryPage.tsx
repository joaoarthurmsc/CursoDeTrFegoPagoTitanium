import { useState } from "react"
import {
  Heading,
  PageHeader,
  SearchInput,
} from "../components/titanium/PageUI"
import { libraryCategories } from "../data/course"
import { immersionLesson } from "../data/immersionLesson"
import { moduleOneLessonDefinitions } from "../data/module01"
import { TITANIUM_MASTERY_SCORE } from "../data/pedagogy"
import { learningRepository } from "../storage/learningRepository"
import { isImmersionCompleted } from "../storage/progressSelectors"
import type { Lesson } from "../types/learning"

function lessonCompleted(lesson: Lesson) {
  const journey = learningRepository.load().lessonJourneys[lesson.id]
  return Boolean(
    journey?.completedAt &&
      (journey.bestScore ?? 0) >= TITANIUM_MASTERY_SCORE,
  )
}

export default function LibraryPage() {
  const [query, setQuery] = useState("")
  const normalized = query.toLowerCase()
  const filtered = libraryCategories.filter((item) =>
    item.toLowerCase().includes(normalized),
  )
  const immersionCompleted = isImmersionCompleted()

  const aulaZeroMaterials = immersionLesson.materials.filter(
    (material) =>
      !normalized ||
      material.title.toLowerCase().includes(normalized) ||
      material.purpose.toLowerCase().includes(normalized),
  )

  const moduleOneLessons = moduleOneLessonDefinitions
    .map((lesson) => ({
      lesson,
      completed: lessonCompleted(lesson),
      materials: lesson.materials.filter(
        (material) =>
          !normalized ||
          material.title.toLowerCase().includes(normalized) ||
          material.purpose.toLowerCase().includes(normalized) ||
          lesson.title.toLowerCase().includes(normalized),
      ),
    }))
    .filter((item) => item.materials.length > 0)

  return (
    <>
      <PageHeader
        eyebrow="Base de conhecimento"
        title="Biblioteca"
        description="Materiais de apoio, ferramentas e referências organizados para consulta."
      />
      <div className="mb-8">
        <SearchInput value={query} onChange={setQuery} />
      </div>

      {aulaZeroMaterials.length > 0 && (
        <section className="mb-10">
          <p className="font-mono text-xs uppercase tracking-label text-gold">
            Aula 00 · Imersão Titanium
          </p>
          <Heading level={2} className="mt-3 text-2xl font-semibold">
            Materiais oficiais
          </Heading>
          <MaterialGrid
            materials={aulaZeroMaterials}
            unlocked={immersionCompleted}
            lockedMessage="Conclua a Aula 00 para liberar este material."
          />
        </section>
      )}

      {moduleOneLessons.map(({ lesson, materials, completed }) => (
        <section key={lesson.id} className="mb-10">
          <p className="font-mono text-xs uppercase tracking-label text-gold">
            Módulo 01 · Aula {lesson.number}
          </p>
          <Heading level={2} className="mt-3 text-2xl font-semibold">
            {lesson.title}
          </Heading>
          <MaterialGrid
            materials={materials}
            unlocked={completed}
            lockedMessage={`Conclua a Aula ${lesson.number} com nota mínima 9,0 para liberar.`}
          />
        </section>
      ))}

      <section>
        <p className="mb-4 font-mono text-xs uppercase tracking-label text-muted">
          Famílias de materiais
        </p>
        <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, index) => (
            <div key={item} className="min-h-44 bg-graphite p-5">
              <span className="font-mono text-xs text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Heading level={2} className="mt-10 text-lg font-semibold">
                {item}
              </Heading>
              <p className="mt-2 text-xs text-muted">
                Novos materiais aparecerão aqui conforme a formação avançar.
              </p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

function MaterialGrid({
  materials,
  unlocked,
  lockedMessage,
}: {
  materials: Lesson["materials"]
  unlocked: boolean
  lockedMessage: string
}) {
  return (
    <div className="mt-5 grid gap-px bg-line md:grid-cols-2">
      {materials.map((material) => (
        <div
          key={material.id}
          className="flex min-h-52 flex-col bg-graphite p-5"
        >
          {unlocked && material.type === "mindmap" && material.asset && (
            <img
              src={material.asset}
              alt={material.title}
              className="mb-5 aspect-video w-full border border-line bg-black object-contain"
            />
          )}
          <p className="font-semibold text-paper">{material.title}</p>
          <p className="mt-3 flex-1 text-sm leading-6 text-muted">
            {material.purpose}
          </p>
          {unlocked && material.asset ? (
            <a
              href={material.asset}
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex w-fit border border-gold px-4 py-2 font-mono text-xs font-semibold uppercase tracking-label text-gold transition hover:bg-gold hover:text-black"
            >
              {material.type === "mindmap" ? "Ver imagem ↗" : "Abrir PDF ↗"}
            </a>
          ) : (
            <p className="mt-5 text-xs leading-5 text-muted">{lockedMessage}</p>
          )}
        </div>
      ))}
    </div>
  )
}
