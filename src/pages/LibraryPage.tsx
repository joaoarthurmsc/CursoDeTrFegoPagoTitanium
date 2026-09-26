import { useState } from "react"
import {
  Heading,
  PageHeader,
  SearchInput,
} from "../components/titanium/PageUI"
import { libraryCategories } from "../data/course"

export default function LibraryPage() {
  const [query, setQuery] = useState("")
  const filtered = libraryCategories.filter((item) =>
    item.toLowerCase().includes(query.toLowerCase()),
  )

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
      <div className="grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((item, index) => (
          <div key={item} className="min-h-44 bg-graphite p-5">
            <span className="font-mono text-xs text-gold">
              0{String(index + 1).padStart(2, "0")}
            </span>
            <Heading level={2} className="mt-10 text-lg font-semibold">
              {item}
            </Heading>
            <p className="mt-2 text-xs text-muted">Materiais em preparação</p>
          </div>
        ))}
      </div>
    </>
  )
}
