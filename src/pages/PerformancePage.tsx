import {
  PageHeader,
  SectionHeader,
} from "../components/titanium/PageUI"
import { competencies } from "../data/course"
import { immersionLesson } from "../data/immersionLesson"
import { lessonOneDemo } from "../data/lessonDemo"
import { learningRepository } from "../storage/learningRepository"
import { studentRepository } from "../storage/studentRepository"
import type {
  ExamAttempt,
  Lesson,
  LessonJourneyState,
} from "../types/learning"

const lessonDefinitions: Lesson[] = [
  immersionLesson,
  lessonOneDemo,
]

function formatDate(value?: string) {
  if (!value) return "—"
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value))
}

function formatDuration(seconds = 0) {
  if (seconds < 60) return seconds > 0 ? `${seconds}s` : "—"
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)

  if (hours > 0) {
    return `${hours}h ${String(minutes).padStart(2, "0")}min`
  }

  return `${minutes}min`
}

function formatScore(score?: number) {
  return score === undefined
    ? "—"
    : score.toFixed(1).replace(".", ",")
}

function getLesson(lessonId: string) {
  return lessonDefinitions.find((lesson) => lesson.id === lessonId)
}

function getLessonLabel(lessonId: string) {
  const lesson = getLesson(lessonId)
  if (!lesson) return `Aula ${lessonId}`
  return lessonId === "a00"
    ? "Aula 00 · Imersão Titanium"
    : `Aula ${lesson.number} · ${lesson.title}`
}

function getAnswerLabel(
  lessonId: string,
  questionId: string,
  optionId?: string,
) {
  if (!optionId) return "Sem resposta registrada"

  const question = getLesson(lessonId)?.exam?.questions.find(
    (item) => item.id === questionId,
  )
  const option = question?.options.find((item) => item.id === optionId)
  return option?.label ?? optionId
}

type AttemptHistoryItem = {
  source: string
  lessonId?: string
  attempt: ExamAttempt
}

export default function PerformancePage() {
  const state = learningRepository.load()
  const student = studentRepository.getActiveStudent()

  const journeyEntries = Object.entries(state.lessonJourneys).filter(
    ([, journey]) => Boolean(journey.startedAt),
  )

  const lessonAttempts: AttemptHistoryItem[] = journeyEntries.flatMap(
    ([lessonId, journey]) =>
      journey.examAttempts.map((attempt) => ({
        source: getLessonLabel(lessonId),
        lessonId,
        attempt,
      })),
  )

  const moduleAttempts: AttemptHistoryItem[] = Object.entries(
    state.moduleExamAttempts,
  ).flatMap(([moduleId, attempts]) =>
    attempts.map((attempt) => ({
      source: `Módulo ${moduleId} · Prova Final`,
      attempt,
    })),
  )

  const attempts = [...lessonAttempts, ...moduleAttempts].sort(
    (a, b) =>
      new Date(b.attempt.date).getTime() -
      new Date(a.attempt.date).getTime(),
  )

  const bestScore = attempts.length
    ? Math.max(...attempts.map((item) => item.attempt.score))
    : undefined

  const completedLessons = journeyEntries.filter(([, journey]) =>
    Boolean(journey.completedAt),
  ).length

  const activeTime = journeyEntries.reduce(
    (total, [, journey]) =>
      total + (journey.activeTimeSeconds ?? 0),
    0,
  )

  const openResponses = journeyEntries.flatMap(
    ([lessonId, journey]) =>
      Object.entries(journey.openResponses)
        .filter(([, answer]) => Boolean(answer.trim()))
        .map(([stageId, answer]) => {
          const stage = getLesson(lessonId)?.stages.find(
            (item) => item.id === stageId,
          )

          return {
            lessonId,
            lessonLabel: getLessonLabel(lessonId),
            stageId,
            stageTitle: stage?.title ?? stageId,
            prompt: stage?.prompt,
            answer,
            modelAnswer: stage?.modelAnswer,
            selfAssessment: journey.selfAssessments[stageId],
          }
        }),
  )

  return (
    <>
      <PageHeader
        eyebrow={`Aluno · ${student?.name ?? "Titanium"}`}
        title="Desempenho"
        description="Histórico individual de progresso, avaliações, respostas abertas e tempo ativo de estudo."
      />

      <section className="mb-14 grid gap-px bg-line sm:grid-cols-2 xl:grid-cols-4">
        <Metric
          label="Aulas concluídas"
          value={String(completedLessons)}
        />
        <Metric
          label="Melhor nota"
          value={bestScore === undefined ? "—" : `${formatScore(bestScore)} / 10`}
        />
        <Metric
          label="Tentativas de prova"
          value={String(attempts.length)}
        />
        <Metric
          label="Tempo ativo"
          value={formatDuration(activeTime)}
        />
      </section>

      <section className="mb-14">
        <SectionHeader title="Diagnóstico inicial" />
        {state.initialDiagnostic ? (
          <div className="border border-line bg-graphite p-6">
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-line pb-5">
              <div>
                <p className="font-mono text-xs uppercase tracking-label text-gold">
                  Baseline
                </p>
                <p className="mt-2 font-display text-4xl font-semibold text-paper">
                  {formatScore(state.initialDiagnostic.score)}
                  <span className="text-lg text-muted"> / 10</span>
                </p>
              </div>
              <p className="text-xs text-muted">
                {formatDate(state.initialDiagnostic.date)} · sem aprovação ou reprovação
              </p>
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {competencies.map((competency) => {
                const result =
                  state.initialDiagnostic?.competencies[competency]
                const correct = result?.correct ?? 0
                const total = result?.total ?? 2
                const interpretation =
                  correct === 0
                    ? "Fundamento ainda não demonstrado"
                    : correct === total
                      ? "Boa compreensão inicial"
                      : "Compreensão parcial"

                return (
                  <div
                    key={competency}
                    className="border-b border-line pb-4"
                  >
                    <div className="flex justify-between gap-4 text-sm">
                      <span className="text-silver">{competency}</span>
                      <span className="font-mono text-muted">
                        {correct}/{total}
                      </span>
                    </div>
                    <p className="mt-2 text-xs text-muted">
                      {interpretation}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <EmptyState>
            O Diagnóstico Inicial ainda não foi enviado.
          </EmptyState>
        )}
      </section>

      <section className="mb-14">
        <SectionHeader title="Histórico de aulas" />
        {journeyEntries.length ? (
          <div className="border-t border-line">
            {journeyEntries.map(([lessonId, journey]) => (
              <LessonHistoryRow
                key={lessonId}
                lessonId={lessonId}
                journey={journey}
              />
            ))}
          </div>
        ) : (
          <EmptyState>
            Nenhuma aula foi iniciada neste perfil.
          </EmptyState>
        )}
      </section>

      <section className="mb-14">
        <SectionHeader title="Histórico de provas" />
        {attempts.length ? (
          <div className="grid gap-3">
            {attempts.map(({ source, lessonId, attempt }, index) => (
              <details
                key={`${attempt.id}-${index}`}
                className="border border-line bg-graphite"
              >
                <summary className="cursor-pointer list-none px-5 py-5 [&::-webkit-details-marker]:hidden">
                  <div className="grid gap-3 md:grid-cols-[1fr_auto_auto] md:items-center">
                    <div>
                      <p className="font-medium text-paper">{source}</p>
                      <p className="mt-1 text-xs text-muted">
                        {formatDate(attempt.date)}
                      </p>
                    </div>
                    <p className="font-mono text-sm text-silver">
                      {attempt.correct}/{attempt.total} acertos
                    </p>
                    <p className="font-display text-2xl font-semibold text-gold">
                      {formatScore(attempt.score)}
                    </p>
                  </div>
                </summary>

                <div className="border-t border-line px-5 py-5">
                  {lessonId && attempt.answers ? (
                    <div className="grid gap-4">
                      {Object.entries(attempt.answers).map(
                        ([questionId, answer]) => {
                          const question = getLesson(
                            lessonId,
                          )?.exam?.questions.find(
                            (item) => item.id === questionId,
                          )
                          const correct =
                            question?.correctAnswer === answer

                          return (
                            <div
                              key={questionId}
                              className="border-b border-line pb-4 last:border-0 last:pb-0"
                            >
                              <p className="text-sm font-medium leading-6 text-paper">
                                {question?.prompt ?? questionId}
                              </p>
                              <p className="mt-2 text-sm leading-6 text-silver">
                                Sua resposta:{" "}
                                {getAnswerLabel(
                                  lessonId,
                                  questionId,
                                  answer,
                                )}
                              </p>
                              <p
                                className={`mt-1 font-mono text-xs uppercase tracking-label ${
                                  correct ? "text-gold" : "text-muted"
                                }`}
                              >
                                {correct ? "Correta" : "Revisar"}
                              </p>
                            </div>
                          )
                        },
                      )}
                    </div>
                  ) : (
                    <p className="text-sm leading-6 text-muted">
                      Esta tentativa foi registrada antes do histórico detalhado
                      de respostas ou pertence a uma prova ainda sem definição
                      carregada nesta página.
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        ) : (
          <EmptyState>
            Nenhuma tentativa de prova registrada.
          </EmptyState>
        )}
      </section>

      <section>
        <SectionHeader title="Respostas abertas" />
        {openResponses.length ? (
          <div className="grid gap-3">
            {openResponses.map((item) => (
              <details
                key={`${item.lessonId}-${item.stageId}`}
                className="border border-line bg-graphite"
              >
                <summary className="cursor-pointer list-none px-5 py-5 [&::-webkit-details-marker]:hidden">
                  <p className="font-mono text-xs uppercase tracking-label text-gold">
                    {item.lessonLabel}
                  </p>
                  <p className="mt-2 font-medium text-paper">
                    {item.stageTitle}
                  </p>
                  <p className="mt-2 text-xs text-muted">
                    {item.selfAssessment
                      ? `Autoavaliação · ${item.selfAssessment}`
                      : "Sem correção automática · avaliação por rubrica"}
                  </p>
                </summary>

                <div className="grid gap-5 border-t border-line px-5 py-5 lg:grid-cols-2">
                  <div>
                    {item.prompt && (
                      <p className="mb-3 text-sm font-medium leading-6 text-paper">
                        {item.prompt}
                      </p>
                    )}
                    <p className="font-mono text-xs uppercase tracking-label text-muted">
                      Resposta do aluno
                    </p>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-silver">
                      {item.answer}
                    </p>
                  </div>

                  <div>
                    <p className="font-mono text-xs uppercase tracking-label text-muted">
                      Referência
                    </p>
                    <p className="mt-2 whitespace-pre-wrap text-sm leading-7 text-silver">
                      {item.modelAnswer ??
                        "A resposta será julgada por rubrica/manual quando esta atividade exigir nota."}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        ) : (
          <EmptyState>
            Nenhuma resposta aberta registrada.
          </EmptyState>
        )}

        <div className="mt-5 border-l-2 border-gold bg-graphite p-5">
          <p className="font-mono text-xs uppercase tracking-label text-gold">
            Regra Titanium
          </p>
          <p className="mt-3 text-sm leading-7 text-silver">
            Respostas abertas não recebem “certo” ou “errado” por busca de
            palavras-chave. Elas são preservadas integralmente para comparação,
            autoavaliação e futura correção manual por rubrica.
          </p>
        </div>
      </section>
    </>
  )
}

function Metric({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div className="bg-graphite p-5">
      <p className="font-mono text-xs uppercase tracking-label text-muted">
        {label}
      </p>
      <p className="mt-3 font-display text-2xl font-semibold text-paper">
        {value}
      </p>
    </div>
  )
}

function EmptyState({ children }: { children: string }) {
  return (
    <div className="border border-dashed border-line px-5 py-6 text-sm text-muted">
      {children}
    </div>
  )
}

function LessonHistoryRow({
  lessonId,
  journey,
}: {
  lessonId: string
  journey: LessonJourneyState
}) {
  const bestScore = journey.examAttempts.length
    ? Math.max(...journey.examAttempts.map((attempt) => attempt.score))
    : undefined

  return (
    <div className="grid gap-4 border-b border-line py-5 md:grid-cols-[1.5fr_1fr_1fr_auto] md:items-center">
      <div>
        <p className="font-medium text-paper">
          {getLessonLabel(lessonId)}
        </p>
        <p className="mt-1 text-xs text-muted">
          Início · {formatDate(journey.startedAt)}
        </p>
      </div>
      <div className="text-sm">
        <p className="text-muted">Tempo ativo</p>
        <p className="mt-1 font-mono text-silver">
          {formatDuration(journey.activeTimeSeconds)}
        </p>
      </div>
      <div className="text-sm">
        <p className="text-muted">Conclusão</p>
        <p className="mt-1 text-silver">
          {formatDate(journey.completedAt)}
        </p>
      </div>
      <div className="text-left md:text-right">
        <p className="font-mono text-xs uppercase tracking-label text-muted">
          Melhor nota
        </p>
        <p className="mt-1 font-display text-xl font-semibold text-gold">
          {formatScore(bestScore)}
        </p>
      </div>
    </div>
  )
}
