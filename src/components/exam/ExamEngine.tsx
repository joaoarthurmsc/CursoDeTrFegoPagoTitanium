import { useState } from "react"
import type { Exam, ExamAttempt } from "../../types/learning"
import {
  ActionButton,
  ArrowIcon,
  ProgressBar,
} from "../titanium/HomePrimitives"
import ExamQuestion from "./ExamQuestion"
import ExamResults from "./ExamResults"

const questionKindLabels = {
  objective: "Conceito",
  interpretation: "Interpretação",
  decision: "Decisão",
  diagnosis: "Diagnóstico",
  open: "Resposta aberta",
}

export default function ExamEngine({
  exam,
  attempts,
  onComplete,
  onReviewStage,
  onNext,
}: {
  exam: Exam
  attempts: ExamAttempt[]
  onComplete: (attempt: ExamAttempt) => void
  onReviewStage: (stageId: string) => void
  onNext: () => void
}) {
  const [questionIndex, setQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [showResults, setShowResults] = useState(attempts.length > 0)
  const latestAttempt = attempts[attempts.length - 1]
  const question = exam.questions[questionIndex]

  const submit = () => {
    const errors = exam.questions
      .filter((item) => answers[item.id] !== item.correctAnswer)
      .map((item) => ({
        questionId: item.id,
        selectedAnswer: answers[item.id],
        correctAnswer: item.correctAnswer,
      }))
    const correct = exam.questions.length - errors.length
    const attempt: ExamAttempt = {
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      score: Number(((correct / exam.questions.length) * 10).toFixed(1)),
      correct,
      total: exam.questions.length,
      errors,
      answers,
    }
    onComplete(attempt)
    setShowResults(true)
  }

  const retake = () => {
    setAnswers({})
    setQuestionIndex(0)
    setShowResults(false)
  }

  if (showResults && latestAttempt) {
    return (
      <ExamResults
        exam={exam}
        attempt={latestAttempt}
        bestScore={Math.max(...attempts.map((attempt) => attempt.score))}
        onRetake={retake}
        onReviewStage={onReviewStage}
        onNext={onNext}
      />
    )
  }

  const selected = answers[question.id]
  const lastQuestion = questionIndex === exam.questions.length - 1

  return (
    <div className="exam-engine" data-exam-question={question.id}>
      <div className="exam-engine-progress">
        {exam.demo && (
          <p className="mb-3 font-mono text-status uppercase tracking-label text-muted">
            Conteúdo demonstrativo da engine
          </p>
        )}
        <div className="mb-2 flex justify-between gap-4 font-mono text-xs text-muted">
          <span>
            {questionKindLabels[question.kind]} · Questão {questionIndex + 1} de{" "}
            {exam.questions.length}
          </span>
          <span>
            {Math.round(((questionIndex + 1) / exam.questions.length) * 100)}%
          </span>
        </div>
        <ProgressBar
          value={((questionIndex + 1) / exam.questions.length) * 100}
        />
      </div>

      <div className="exam-engine-question">
        <ExamQuestion
          question={question}
          selected={selected}
          onSelect={(optionId) =>
            setAnswers((current) => ({
              ...current,
              [question.id]: optionId,
            }))
          }
        />
      </div>

      <div className="exam-engine-nav">
        <ActionButton
          variant="secondary"
          disabled={questionIndex === 0}
          onClick={() =>
            setQuestionIndex((current) => Math.max(0, current - 1))
          }
        >
          <ArrowIcon className="size-4 rotate-180" /> Voltar
        </ActionButton>
        <ActionButton
          disabled={!selected}
          onClick={() =>
            lastQuestion ? submit() : setQuestionIndex((current) => current + 1)
          }
        >
          {lastQuestion ? "Finalizar prova" : "Próxima questão"}
          <ArrowIcon className="size-4" />
        </ActionButton>
      </div>
    </div>
  )
}
