import { useState, type FormEvent } from "react"
import AppIcon from "../components/titanium/AppIcon"
import {
  Button,
  Heading,
  Input,
  PageHeader,
  SectionHeader,
  TextArea,
} from "../components/titanium/PageUI"
import { learningRepository } from "../storage/learningRepository"
import type { Decision } from "../types/progress"

const emptyDecision = {
  date: "",
  business: "",
  problem: "",
  data: "",
  hypothesis: "",
  decision: "",
  expected: "",
  observed: "",
  learning: "",
}

export default function JournalPage() {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState(emptyDecision)
  const [decisions, setDecisions] = useState<Decision[]>(
    () => learningRepository.load().decisions,
  )

  const update = (field: keyof typeof emptyDecision, value: string) =>
    setForm((current) => ({ ...current, [field]: value }))

  const submit = (event: FormEvent) => {
    event.preventDefault()
    const entry: Decision = { id: crypto.randomUUID(), ...form }
    learningRepository.addDecision(entry)
    setDecisions((current) => [entry, ...current])
    setForm(emptyDecision)
    setShowForm(false)
  }

  return (
    <>
      <PageHeader
        eyebrow="Sistema de decisão"
        title="Diário de Decisões"
        description="Registre hipóteses, ações e aprendizados para transformar experiência em repertório."
      />
      <div className="mb-8">
        <Button onClick={() => setShowForm(!showForm)}>
          <AppIcon name={showForm ? "close" : "plus"} />
          {showForm ? "Fechar formulário" : "Nova decisão"}
        </Button>
      </div>
      {showForm && (
        <form
          onSubmit={submit}
          className="mb-12 border border-line bg-graphite p-5 md:p-7"
        >
          <div className="grid gap-5 md:grid-cols-2">
            <Input
              label="Data"
              name="date"
              type="date"
              value={form.date}
              onChange={(value) => update("date", value)}
            />
            <Input
              label="Negócio"
              name="business"
              value={form.business}
              onChange={(value) => update("business", value)}
            />
            <TextArea
              label="Problema observado"
              name="problem"
              value={form.problem}
              onChange={(value) => update("problem", value)}
            />
            <TextArea
              label="Dados"
              name="data"
              value={form.data}
              onChange={(value) => update("data", value)}
            />
            <TextArea
              label="Hipótese"
              name="hypothesis"
              value={form.hypothesis}
              onChange={(value) => update("hypothesis", value)}
            />
            <TextArea
              label="Decisão"
              name="decision"
              value={form.decision}
              onChange={(value) => update("decision", value)}
            />
            <TextArea
              label="Resultado esperado"
              name="expected"
              value={form.expected}
              onChange={(value) => update("expected", value)}
            />
            <TextArea
              label="Resultado observado"
              name="observed"
              value={form.observed}
              onChange={(value) => update("observed", value)}
            />
            <div className="md:col-span-2">
              <TextArea
                label="Aprendizado"
                name="learning"
                value={form.learning}
                onChange={(value) => update("learning", value)}
              />
            </div>
          </div>
          <div className="mt-6 flex justify-end">
            <Button type="submit">Salvar decisão</Button>
          </div>
        </form>
      )}
      <section>
        <SectionHeader title="Registros" />
        {decisions.length === 0 ? (
          <div className="border border-dashed border-line py-14 text-center">
            <p className="text-sm text-muted">
              Nenhuma decisão registrada ainda.
            </p>
            <p className="mt-2 text-xs text-muted">
              Seu primeiro registro aparecerá aqui.
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {decisions.map((item) => (
              <div key={item.id} className="border border-line bg-graphite p-5">
                <div className="flex justify-between gap-4">
                  <Heading level={3} className="font-semibold">
                    {item.business || "Decisão sem título"}
                  </Heading>
                  <span className="text-xs text-muted">{item.date}</span>
                </div>
                <p className="mt-3 text-sm text-silver">{item.decision}</p>
                {item.learning && (
                  <p className="mt-3 border-l border-gold pl-3 text-sm text-muted">
                    Aprendizado: {item.learning}
                  </p>
                )}
              </div>
            ))}
          </div>
        )}
      </section>
    </>
  )
}
