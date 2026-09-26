import { useState } from "react"
import type {
  Diagnostic,
  DiagnosticResult,
  LessonJourneyState,
} from "../../types/learning"
import {
  ActionButton,
  ArrowIcon,
  ProgressBar,
} from "../titanium/HomePrimitives"
import DiagnosticQuestion from "./DiagnosticQuestion"
import DiagnosticResults from "./DiagnosticResults"

export default function InitialDiagnostic({
  diagnostic,
  journey,
  result,
  onAnswer,
  onComplete,
  onContinue,
}: {
  diagnostic: Diagnostic
  journey: LessonJourneyState
  result?: DiagnosticResult
  onAnswer: (questionId: string, optionId: string) => void
  onComplete: () => void
  onContinue: () => void
}) {
  const firstUnanswered = diagnostic.questions.findIndex(
    (question) => !journey.diagnosticAnswers[question.id],
  )
  const [index, setIndex] = useState(firstUnanswered >= 0 ? firstUnanswered : 0)

  if (result) {
    return (
      <DiagnosticResults
        diagnostic={diagnostic}
        result={result}
        onContinue={onContinue}
      />
    )
  }

  const question = diagnostic.questions[index]
  const selected = journey.diagnosticAnswers[question.id]
  const last = index === diagnostic.questions.length - 1

  return (
    <div>
      <div className="mb-8 border-l-2 border-gold bg-graphite p-5">
        <p className="text-sm leading-7 text-silver">
          Agora queremos registrar seu ponto de partida. Você encontrará
          assuntos que ainda não estudou. Isso é esperado.
        </p>
        <p className="mt-4 font-semibold leading-6 text-paper">
          Este diagnóstico não aprova, não reprova e não permite pular
          conteúdos.
        </p>
      </div>
      <div className="mb-8">
        <div className="mb-2 flex justify-between font-mono text-xs text-muted">
          <span>
            {question.competence} · Questão {index + 1} de{" "}
            {diagnostic.questions.length}
          </span>
          <span>{diagnostic.pointsPerQuestion.toFixed(1)} ponto</span>
        </div>
        <ProgressBar
          value={((index + 1) / diagnostic.questions.length) * 100}
        />
      </div>
      <DiagnosticQuestion
        question={question}
        selected={selected}
        onSelect={(optionId) => onAnswer(question.id, optionId)}
      />
      <div className="mt-8 flex items-center justify-between gap-4">
        <ActionButton
          variant="secondary"
          disabled={index === 0}
          onClick={() => setIndex((current) => current - 1)}
        >
          <ArrowIcon className="size-4 rotate-180" /> Voltar
        </ActionButton>
        <ActionButton
          disabled={!selected}
          onClick={() =>
            last ? onComplete() : setIndex((current) => current + 1)
          }
        >
          {last ? "Finalizar diagnóstico" : "Próxima questão"}
          <ArrowIcon className="size-4" />
        </ActionButton>
      </div>
    </div>
  )
}
