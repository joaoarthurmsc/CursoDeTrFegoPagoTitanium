import type { Diagnostic, DiagnosticResult } from "../../types/learning"
import { ActionButton, ArrowIcon, CheckIcon } from "../titanium/HomePrimitives"

const competenceMessage = (correct: number) => {
  if (correct === 0) return "Fundamento ainda não demonstrado"
  if (correct === 1) return "Compreensão parcial"
  return "Boa compreensão inicial"
}

export default function DiagnosticResults({
  diagnostic,
  result,
  onContinue,
}: {
  diagnostic: Diagnostic
  result: DiagnosticResult
  onContinue: () => void
}) {
  return (
    <div>
      <div className="border-l-2 border-gold bg-graphite p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-label text-gold">
          Seu ponto de partida
        </p>
        <p className="mt-5 font-display text-score font-semibold leading-none">
          {result.score.toFixed(1).replace(".", ",")}
          <span className="text-2xl text-muted"> / 10</span>
        </p>
        <p className="mt-4 text-sm text-silver">
          {result.correctCount} de {diagnostic.questions.length} respostas
          corretas
        </p>
        <p className="mt-6 max-w-2xl text-base leading-7 text-paper">
          “Este resultado não aprova nem reprova você. Ele registra onde sua
          formação começou.”
        </p>
      </div>

      <section className="mt-10" aria-label="Resultado por competência">
        <p className="font-display text-2xl font-semibold">
          Resultado por competência
        </p>
        <div className="mt-5 grid gap-px bg-line sm:grid-cols-2">
          {Object.entries(result.competencies).map(([name, value]) => (
            <div key={name} className="bg-graphite p-5">
              <div className="flex items-start justify-between gap-4">
                <p className="font-semibold text-paper">{name}</p>
                <span className="font-mono text-sm text-gold">
                  {value.correct}/{value.total}
                </span>
              </div>
              <p className="mt-3 text-sm text-muted">
                {competenceMessage(value.correct)}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10" aria-label="Respostas do diagnóstico">
        <p className="font-display text-2xl font-semibold">Suas respostas</p>
        <p className="mt-3 text-sm text-muted">
          Você reencontrará esses conceitos ao longo da formação.
        </p>
        <div className="mt-5 grid gap-3">
          {diagnostic.questions.map((question, index) => {
            const answerId = result.answers[question.id]
            const answer = question.options.find((item) => item.id === answerId)
            const correct = answerId === question.correctAnswer
            return (
              <div
                key={question.id}
                className="border border-line bg-graphite p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-muted">
                    QUESTÃO {String(index + 1).padStart(2, "0")} ·{" "}
                    {question.competence}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 font-mono text-status uppercase tracking-label ${
                      correct ? "text-gold" : "text-silver"
                    }`}
                  >
                    {correct && <CheckIcon />}
                    {correct ? "Acerto" : "Revisitar"}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-6 text-silver">
                  Sua resposta: {answer?.label}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      <ActionButton className="mt-8" onClick={onContinue}>
        Concluir imersão <ArrowIcon />
      </ActionButton>
    </div>
  )
}
