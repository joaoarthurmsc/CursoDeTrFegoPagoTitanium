import { useEffect, useLayoutEffect, useState } from "react"
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

type DiagnosticIntro = {
  eyebrow: string
  title: string
  body?: string[]
  quote?: string
}

export default function InitialDiagnostic({
  diagnostic,
  journey,
  result,
  intro,
  onAnswer,
  onComplete,
  onContinue,
}: {
  diagnostic: Diagnostic
  journey: LessonJourneyState
  result?: DiagnosticResult
  intro: DiagnosticIntro
  onAnswer: (questionId: string, optionId: string) => void
  onComplete: () => void
  onContinue: () => void
}) {
  const answeredQuestionIds = new Set(
    diagnostic.questions
      .filter((question) => Boolean(journey.diagnosticAnswers[question.id]))
      .map((question) => question.id),
  )
  const firstUnanswered = diagnostic.questions.findIndex(
    (question) => !answeredQuestionIds.has(question.id),
  )
  const [index, setIndex] = useState(firstUnanswered >= 0 ? firstUnanswered : 0)
  const [started, setStarted] = useState(answeredQuestionIds.size > 0)

  useEffect(() => {
    if (answeredQuestionIds.size > 0) setStarted(true)
  }, [answeredQuestionIds.size])

  useLayoutEffect(() => {
    if (!started || result) return

    let second = 0
    const first = requestAnimationFrame(() => {
      second = requestAnimationFrame(() => {
        const viewport = document.querySelector<HTMLElement>(
          "[data-lesson-stage-viewport]",
        )
        viewport?.scrollTo({ top: 0, left: 0, behavior: "auto" })

        const question = document.querySelector<HTMLElement>(
          "[data-diagnostic-question]",
        )
        question?.focus({ preventScroll: true })
      })
    })

    return () => {
      cancelAnimationFrame(first)
      if (second) cancelAnimationFrame(second)
    }
  }, [index, result, started])

  if (result) {
    return (
      <DiagnosticResults
        diagnostic={diagnostic}
        result={result}
        onContinue={onContinue}
      />
    )
  }

  if (!started) {
    return (
      <section className="mx-auto max-w-reading py-3">
        <p className="font-mono text-xs font-semibold uppercase tracking-label text-gold">
          {intro.eyebrow}
        </p>
        <h2 className="mt-3 font-display text-3xl font-semibold leading-tight tracking-tight text-paper md:text-5xl">
          {intro.title}
        </h2>

        <div className="mt-7 space-y-4">
          {intro.body?.map((paragraph) => (
            <p
              key={paragraph}
              className="text-base leading-7 text-silver md:text-lg"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {intro.quote && (
          <p className="mt-6 border-l-2 border-gold bg-graphite p-5 text-base font-semibold leading-7 text-paper">
            {intro.quote}
          </p>
        )}

        <div className="mt-8 border border-line bg-charcoal p-5">
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-label text-muted">
                Questões
              </p>
              <p className="mt-1 text-lg font-semibold text-paper">
                {diagnostic.questions.length}
              </p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-label text-muted">
                Competências
              </p>
              <p className="mt-1 text-lg font-semibold text-paper">10</p>
            </div>
            <div>
              <p className="font-mono text-[10px] uppercase tracking-label text-muted">
                Aprovação
              </p>
              <p className="mt-1 text-lg font-semibold text-paper">
                Não se aplica
              </p>
            </div>
          </div>
        </div>

        <ActionButton className="mt-7" onClick={() => setStarted(true)}>
          Iniciar diagnóstico <ArrowIcon className="size-4" />
        </ActionButton>
      </section>
    )
  }

  const question = diagnostic.questions[index]
  const selected = journey.diagnosticAnswers[question.id]
  const last = index === diagnostic.questions.length - 1

  return (
    <section className="mx-auto max-w-reading">
      <div className="mb-5">
        <div className="mb-2 flex justify-between gap-4 font-mono text-xs text-muted">
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

      <div className="mt-6 flex items-center justify-between gap-4">
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
    </section>
  )
}
