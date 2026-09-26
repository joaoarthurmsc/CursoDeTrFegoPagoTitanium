import type { Exam, ExamAttempt } from "../../types/learning"
import { ActionButton, ArrowIcon, CheckIcon } from "../titanium/HomePrimitives"
import ErrorMap from "./ErrorMap"

export default function ExamResults({
  exam,
  attempt,
  bestScore,
  onRetake,
  onReviewStage,
  onNext,
}: {
  exam: Exam
  attempt: ExamAttempt
  bestScore: number
  onRetake: () => void
  onReviewStage: (stageId: string) => void
  onNext: () => void
}) {
  const approved = bestScore >= exam.passingScore
  const score = attempt.score.toFixed(1).replace(".", ",")

  return (
    <div>
      <div
        className={`border-l-2 bg-graphite p-6 md:p-8 ${
          approved ? "border-gold" : "border-silver"
        }`}
      >
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-label text-gold">
          {approved && <CheckIcon />}
          {approved ? "Aula concluída" : "Revisão necessária"}
        </div>
        <p className="mt-5 font-display text-score font-semibold leading-none">
          {score}
          <span className="text-2xl text-muted"> / 10</span>
        </p>
        <p className="mt-4 text-sm text-silver">
          {attempt.correct} acertos de {attempt.total} · Melhor nota{" "}
          {bestScore.toFixed(1).replace(".", ",")}
        </p>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-muted">
          {approved
            ? "Domínio demonstrado. Toda a jornada desta aula agora está disponível para revisão livre."
            : "Conteúdo finalizado não significa aula concluída. Revise os conceitos abaixo, corrija as lacunas e faça uma nova tentativa. A aprovação exige 9,0."}
        </p>
        <div className="mt-7 flex flex-wrap gap-3">
          {approved ? (
            <>
              <ActionButton onClick={onNext}>
                Próxima aula <ArrowIcon />
              </ActionButton>
              <ActionButton
                variant="secondary"
                onClick={() => onReviewStage("context")}
              >
                Revisar aula
              </ActionButton>
            </>
          ) : (
            <ActionButton onClick={onRetake}>Refazer prova</ActionButton>
          )}
        </div>
      </div>
      <ErrorMap exam={exam} attempt={attempt} onReviewStage={onReviewStage} />
    </div>
  )
}
