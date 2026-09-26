import type { Exam, ExamAttempt } from "../../types/learning"
import {
  ActionButton,
  ArrowIcon,
  HomeHeading,
} from "../titanium/HomePrimitives"

export default function ErrorMap({
  exam,
  attempt,
  onReviewStage,
}: {
  exam: Exam
  attempt: ExamAttempt
  onReviewStage: (stageId: string) => void
}) {
  if (!attempt.errors.length) return null

  return (
    <section className="mt-10" aria-label="Mapa de Erros">
      <div className="mb-5">
        <p className="font-mono text-xs uppercase tracking-label text-gold">
          Mapa de Erros
        </p>
        <HomeHeading
          level={3}
          className="mt-2 font-display text-2xl font-semibold"
        >
          Corrija o raciocínio, não apenas a resposta
        </HomeHeading>
      </div>
      <div className="grid gap-4">
        {attempt.errors.map((error, index) => {
          const question = exam.questions.find(
            (item) => item.id === error.questionId,
          )
          if (!question) return null
          const selected = question.options.find(
            (option) => option.id === error.selectedAnswer,
          )
          const correct = question.options.find(
            (option) => option.id === error.correctAnswer,
          )

          return (
            <article
              key={error.questionId}
              className="border border-line bg-graphite p-5 md:p-6"
            >
              <p className="font-mono text-xs text-muted">
                QUESTÃO {String(index + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-semibold leading-7">{question.prompt}</p>
              <dl className="mt-5 grid gap-4 text-sm">
                <div>
                  <dt className="text-muted">Sua resposta</dt>
                  <dd className="mt-1 text-silver">{selected?.label}</dd>
                </div>
                <div>
                  <dt className="text-muted">Resposta correta</dt>
                  <dd className="mt-1 text-paper">{correct?.label}</dd>
                </div>
                <div>
                  <dt className="text-muted">Onde o raciocínio falhou</dt>
                  <dd className="mt-1 leading-6 text-silver">
                    {selected?.feedback}
                  </dd>
                </div>
                <div>
                  <dt className="text-muted">Explicação</dt>
                  <dd className="mt-1 leading-6 text-silver">
                    {question.explanation}
                  </dd>
                </div>
              </dl>
              <ActionButton
                variant="secondary"
                className="mt-5"
                onClick={() => onReviewStage(question.reviewStageId)}
              >
                Revisar conceito <ArrowIcon />
              </ActionButton>
            </article>
          )
        })}
      </div>
    </section>
  )
}
