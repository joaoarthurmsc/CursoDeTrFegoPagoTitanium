import {
  AppLink,
  Heading,
  PageHeader,
} from "../components/titanium/PageUI"
import { cases } from "../data/course"

export default function CasesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Casos aplicados"
        title="Cases Titanium"
        description="Cenários profissionais para treinar leitura de contexto, diagnóstico e decisão."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {cases.map(([name, segment], index) => (
          <AppLink
            key={name}
            to={`/cases/${index + 1}`}
            className="group min-h-52 border border-line bg-graphite p-6 transition hover:border-silver"
          >
            <div className="flex justify-between">
              <span className="font-mono text-xs text-gold">
                CASE 0{index + 1}
              </span>
              <span className="text-xs text-muted">Em preparação</span>
            </div>
            <Heading
              level={2}
              className="mt-14 font-display text-2xl font-semibold"
            >
              {name}
            </Heading>
            <p className="mt-2 text-sm text-muted">{segment}</p>
          </AppLink>
        ))}
      </div>
    </>
  )
}
