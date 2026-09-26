import {
  Heading,
  PageHeader,
} from "../components/titanium/PageUI"

const sections = [
  "Briefing",
  "Objetivo",
  "Dados disponíveis",
  "Restrições",
  "Missão",
  "Entregáveis",
  "Minha resposta",
  "Correção / solução do professor",
]

export default function LabPage() {
  return (
    <>
      <PageHeader
        eyebrow="Titanium Lab 01"
        title="Ecossistema da aquisição"
        description="Template de execução prática. Este lab será liberado durante o Módulo 01."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {sections.map((section, index) => (
          <section
            key={section}
            className={`border border-line bg-graphite p-6 ${
              index >= 6 ? "md:col-span-2" : ""
            }`}
          >
            <span className="font-mono text-xs text-gold">0{index + 1}</span>
            <Heading level={2} className="mt-4 text-xl font-semibold">
              {section}
            </Heading>
            <p className="mt-3 text-sm leading-6 text-muted">
              {index === 6
                ? "Área preparada para registrar sua resposta."
                : index === 7
                  ? "Disponível após a entrega."
                  : "Conteúdo estruturado será disponibilizado com a liberação do Lab."}
            </p>
          </section>
        ))}
      </div>
    </>
  )
}
