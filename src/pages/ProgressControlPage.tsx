import type { ReactNode } from "react"
import { useMemo, useState } from "react"
import { modules, moduleOneLessons } from "../data/course"
import { immersionLesson } from "../data/immersionLesson"
import { lessonOneDemo } from "../data/lessonDemo"
import { learningRepository } from "../storage/learningRepository"
import {
  getModuleLearningSummary,
  isImmersionCompleted,
} from "../storage/progressSelectors"
import { studentRepository } from "../storage/studentRepository"
import type { LearningState } from "../types/progress"
import { ActionButton, ArrowIcon, ProgressBar } from "../components/titanium/HomePrimitives"
import { PageHeader, SectionHeader } from "../components/titanium/PageUI"

function formatScore(value?: number) {
  return value === undefined ? "—" : value.toFixed(1).replace(".", ",")
}

function formatDuration(seconds = 0) {
  if (!seconds) return "—"
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  if (hours) return `${hours}h ${String(minutes).padStart(2, "0")}min`
  return `${Math.max(1, minutes)}min`
}

function formatDate(value?: string) {
  if (!value) return "—"
  return new Intl.DateTimeFormat("pt-BR", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value))
}

function hasJourneyData(state: LearningState, lessonId: string) {
  const journey = state.lessonJourneys[lessonId]
  return Boolean(journey?.startedAt || journey?.completedAt)
}

const moduleOneLessonIds = moduleOneLessons.map((_, index) =>
  String(index + 1).padStart(2, "0"),
)

export default function ProgressControlPage({
  onNavigate,
}: {
  onNavigate: (path: string) => void
}) {
  const [state, setState] = useState(() => learningRepository.load())
  const student = studentRepository.getActiveStudent()
  const immersion = state.lessonJourneys[immersionLesson.id]
  const immersionComplete = isImmersionCompleted(state)
  const diagnosticStageIndex = immersionLesson.stages.findIndex(
    (stage) => stage.type === "diagnostic",
  )
  const diagnosticAndAfter = immersionLesson.stages
    .slice(Math.max(0, diagnosticStageIndex))
    .map((stage) => stage.id)
  const lessonExamIndex = lessonOneDemo.stages.findIndex(
    (stage) => stage.type === "exam",
  )
  const moduleOne = useMemo(() => getModuleLearningSummary("01", state), [state])

  const refresh = () => setState(learningRepository.load())

  const openFromStart = (lessonId: string, path: string) => {
    learningRepository.openLessonFromStart(lessonId)
    onNavigate(path)
  }

  const resetLesson = (lessonId: string, label: string) => {
    if (
      !window.confirm(
        `Reiniciar ${label}?\n\nO progresso atual da aula será zerado. O histórico anterior será arquivado em Desempenho. Se houver Prova Final do módulo registrada, ela também será arquivada e zerada para respeitar os pré-requisitos.`,
      )
    ) {
      return
    }
    learningRepository.resetLesson(lessonId, label, "01")
    refresh()
  }

  const resetModule = (moduleId: string, title: string, lessonIds: string[]) => {
    if (
      !window.confirm(
        `Reiniciar Módulo ${moduleId} — ${title}?\n\nAulas, prova final e progresso atual deste módulo serão zerados. O histórico anterior será arquivado.`,
      )
    ) {
      return
    }
    learningRepository.resetModule(moduleId, lessonIds, `Módulo ${moduleId} · ${title}`)
    refresh()
  }

  const resetDiagnostic = () => {
    if (
      !window.confirm(
        "Reiniciar apenas o Diagnóstico Inicial?\n\nAs 20 respostas e o resultado serão apagados. O conteúdo anterior da Aula 00 será preservado e o Módulo 01 ficará bloqueado até o novo envio.",
      )
    ) {
      return
    }
    learningRepository.resetInitialDiagnostic(
      immersionLesson.id,
      Math.max(0, diagnosticStageIndex),
      "Diagnóstico Inicial · Aula 00",
      diagnosticAndAfter,
    )
    refresh()
  }

  const resetImmersion = () => {
    if (
      !window.confirm(
        "Reiniciar toda a Aula 00?\n\nA Imersão e o Diagnóstico Inicial voltarão ao estado de primeiro acesso. O Módulo 01 ficará bloqueado até a nova conclusão.",
      )
    ) {
      return
    }
    learningRepository.resetImmersion(
      immersionLesson.id,
      "Aula 00 · Imersão Titanium",
    )
    refresh()
  }

  const resetProfile = () => {
    const expected = (student?.name ?? "TITANIUM").toUpperCase()
    const typed = window.prompt(
      `Esta ação apaga TODO o progresso atual deste perfil, inclusive histórico arquivado.\n\nDigite ${expected} para confirmar.`,
    )
    if (typed?.trim().toUpperCase() !== expected) return
    learningRepository.resetProfile()
    window.location.assign("/")
  }

  return (
    <>
      <PageHeader
        eyebrow={`Controle de progresso · ${student?.name ?? "Titanium"}`}
        title="Sala de Controle"
        description="Revise uma aula desde o início sem perder dados ou reinicie apenas o que precisa ser testado. Todas as ações afetam somente o perfil ativo."
      />

      <section className="mb-14 grid gap-px bg-line sm:grid-cols-3">
        <Metric label="Perfil" value={student?.name ?? "—"} />
        <Metric
          label="Aula 00"
          value={immersionComplete ? "Concluída" : immersion?.startedAt ? "Em andamento" : "Não iniciada"}
        />
        <Metric label="Resets arquivados" value={String(state.resetHistory?.length ?? 0)} />
      </section>

      <section className="mb-14">
        <SectionHeader title="Aula 00 · Imersão Titanium" />
        <div className="border border-line bg-graphite p-5 md:p-6">
          <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-start">
            <div>
              <p className="font-display text-2xl font-semibold text-paper">
                Formação, método e diagnóstico inicial
              </p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Reiniciar a Aula 00 volta a bloquear o Módulo 01. Reiniciar somente o diagnóstico preserva a parte de ensino da imersão.
              </p>
              <div className="mt-5 grid gap-3 sm:grid-cols-3">
                <SmallStat label="Status" value={immersionComplete ? "Concluída" : immersion?.startedAt ? "Em estudo" : "Não iniciada"} />
                <SmallStat label="Tempo ativo" value={formatDuration(immersion?.activeTimeSeconds)} />
                <SmallStat label="Diagnóstico" value={state.initialDiagnostic ? `${formatScore(state.initialDiagnostic.score)} / 10` : "Pendente"} />
              </div>
            </div>
            <div className="flex flex-wrap gap-2 md:max-w-xs md:justify-end">
              <ActionButton
                variant="secondary"
                onClick={() => openFromStart("a00", "/aulas/a00")}
              >
                Abrir do início <ArrowIcon className="size-4" />
              </ActionButton>
              <ActionButton
                variant="secondary"
                disabled={
                  !state.initialDiagnostic &&
                  Object.keys(immersion?.diagnosticAnswers ?? {}).length === 0
                }
                onClick={resetDiagnostic}
              >
                Reiniciar diagnóstico
              </ActionButton>
              <DangerButton disabled={!immersion?.startedAt} onClick={resetImmersion}>
                Reiniciar Aula 00
              </DangerButton>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-14">
        <SectionHeader title="Módulos" />
        <div className="grid gap-4">
          {modules.map((module) => {
            if (module.id === "01") {
              return (
                <ModuleOneControl
                  key={module.id}
                  state={state}
                  onNavigate={onNavigate}
                  onRefresh={refresh}
                  resetLesson={resetLesson}
                  resetModule={() =>
                    resetModule(module.id, module.title, moduleOneLessonIds)
                  }
                  lessonExamIndex={lessonExamIndex}
                />
              )
            }

            const progress = state.moduleProgress[module.id] ?? 0
            const attempts = state.moduleExamAttempts[module.id] ?? []
            const hasProgress = progress > 0 || attempts.length > 0

            return (
              <details key={module.id} className="border border-line bg-graphite">
                <summary className="cursor-pointer list-none p-5 [&::-webkit-details-marker]:hidden">
                  <div className="grid gap-3 md:grid-cols-[4rem_1fr_auto] md:items-center">
                    <span className="font-mono text-sm text-gold">{module.number}</span>
                    <div>
                      <p className="font-medium text-paper">{module.title}</p>
                      <p className="mt-1 text-xs text-muted">
                        Conteúdo pedagógico ainda não publicado · controle preparado para o progresso futuro
                      </p>
                    </div>
                    <span className="font-mono text-xs uppercase tracking-label text-muted">
                      {progress}%
                    </span>
                  </div>
                </summary>
                <div className="border-t border-line p-5">
                  <div className="mb-5">
                    <ProgressBar value={progress} />
                  </div>
                  <DangerButton
                    disabled={!hasProgress}
                    onClick={() => resetModule(module.id, module.title, [])}
                  >
                    Reiniciar Módulo {module.number}
                  </DangerButton>
                </div>
              </details>
            )
          })}
        </div>
      </section>

      <section className="mb-14">
        <SectionHeader title="Histórico de reinicializações" />
        {state.resetHistory?.length ? (
          <div className="border-t border-line">
            {state.resetHistory.slice(0, 12).map((record) => (
              <div
                key={record.id}
                className="grid gap-2 border-b border-line py-4 md:grid-cols-[1fr_auto] md:items-center"
              >
                <div>
                  <p className="text-sm font-medium text-paper">{record.targetLabel}</p>
                  <p className="mt-1 text-xs text-muted">
                    {resetScopeLabel(record.scope)} · {formatDate(record.date)}
                  </p>
                </div>
                <span className="font-mono text-[10px] uppercase tracking-label text-muted">
                  Arquivado
                </span>
              </div>
            ))}
          </div>
        ) : (
          <EmptyState>Nenhuma reinicialização foi realizada neste perfil.</EmptyState>
        )}
      </section>

      <section className="border border-red-950 bg-[#130d0d] p-6">
        <p className="font-mono text-xs font-semibold uppercase tracking-label text-[#d9a6a6]">
          Zona de risco
        </p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-paper">
          Reiniciar toda a formação de {student?.name}
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-6 text-muted">
          Apaga progresso, notas, respostas, diagnósticos, decisões, tempo ativo e histórico arquivado somente deste perfil. O progresso do outro aluno permanece intacto.
        </p>
        <DangerButton className="mt-5" onClick={resetProfile}>
          Reiniciar perfil inteiro
        </DangerButton>
      </section>
    </>
  )
}

function ModuleOneControl({
  state,
  onNavigate,
  onRefresh,
  resetLesson,
  resetModule,
  lessonExamIndex,
}: {
  state: LearningState
  onNavigate: (path: string) => void
  onRefresh: () => void
  resetLesson: (lessonId: string, label: string) => void
  resetModule: () => void
  lessonExamIndex: number
}) {
  const summary = getModuleLearningSummary("01", state)
  const module = modules[0]

  return (
    <details open className="border border-line bg-graphite">
      <summary className="cursor-pointer list-none p-5 [&::-webkit-details-marker]:hidden">
        <div className="grid gap-3 md:grid-cols-[4rem_1fr_auto] md:items-center">
          <span className="font-mono text-sm text-gold">01</span>
          <div>
            <p className="font-medium text-paper">{module.title}</p>
            <p className="mt-1 text-xs text-muted">
              {summary.completedLessons} de {summary.totalLessons} aulas concluídas
            </p>
          </div>
          <span className="font-display text-2xl font-semibold text-gold">
            {summary.progress}%
          </span>
        </div>
        <ProgressBar value={summary.progress} className="mt-4" />
      </summary>

      <div className="border-t border-line">
        {summary.lessons.map((lesson) => {
          const journey = state.lessonJourneys[lesson.id]
          const hasProgress = hasJourneyData(state, lesson.id)
          const hasExam = Boolean(journey?.examAttempts?.length)
          const published = lesson.id === lessonOneDemo.id
          const label = `Aula ${lesson.number} · ${lesson.title}`

          return (
            <div
              key={lesson.id}
              className="grid gap-4 border-b border-line px-5 py-5 xl:grid-cols-[4rem_1.5fr_1fr_auto] xl:items-center"
            >
              <span className="font-mono text-xs text-muted">{lesson.number}</span>
              <div>
                <p className="font-medium text-paper">{lesson.title}</p>
                <p className="mt-1 text-xs text-muted">
                  {published ? statusLabel(lesson.status) : "Conteúdo em preparação"} · {lesson.progress}% · {formatDuration(journey?.activeTimeSeconds)}
                </p>
              </div>
              <div className="text-sm">
                <p className="text-muted">Melhor nota</p>
                <p className="mt-1 font-mono text-silver">{formatScore(lesson.bestScore)}</p>
              </div>
              <div className="flex flex-wrap gap-2 xl:justify-end">
                <ActionButton
                  variant="secondary"
                  disabled={!published}
                  onClick={() => {
                    learningRepository.openLessonFromStart(lesson.id)
                    onNavigate(`/aulas/${lesson.id}`)
                  }}
                >
                  {published ? "Abrir do início" : "Ainda não publicada"}
                </ActionButton>
                {lesson.id === lessonOneDemo.id && (
                  <ActionButton
                    variant="secondary"
                    disabled={!hasExam}
                    onClick={() => {
                      if (!window.confirm(`Zerar somente a prova de ${label}?`)) return
                      learningRepository.resetLessonExam(
                        lesson.id,
                        Math.max(0, lessonExamIndex),
                        `${label} · prova`,
                        "01",
                      )
                      onRefresh()
                    }}
                  >
                    Zerar prova
                  </ActionButton>
                )}
                <DangerButton
                  disabled={!hasProgress}
                  onClick={() => resetLesson(lesson.id, label)}
                >
                  Reiniciar aula
                </DangerButton>
              </div>
            </div>
          )
        })}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-4 p-5">
        <div>
          <p className="text-sm font-medium text-paper">Prova Final do Módulo 01</p>
          <p className="mt-1 text-xs text-muted">
            {summary.finalExamBestScore === undefined
              ? "Sem tentativa registrada"
              : `Melhor nota ${formatScore(summary.finalExamBestScore)}`}
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <ActionButton
            variant="secondary"
            disabled={summary.finalExamBestScore === undefined}
            onClick={() => {
              if (!window.confirm("Zerar somente a Prova Final do Módulo 01?")) return
              learningRepository.resetModuleExam(
                "01",
                "Módulo 01 · Prova Final",
              )
              onRefresh()
            }}
          >
            Zerar prova final
          </ActionButton>
          <DangerButton
            disabled={summary.progress === 0 && !moduleOneLessonIds.some((id) => hasJourneyData(state, id))}
            onClick={resetModule}
          >
            Reiniciar Módulo 01
          </DangerButton>
        </div>
      </div>
    </details>
  )
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-graphite p-5">
      <p className="font-mono text-xs uppercase tracking-label text-muted">{label}</p>
      <p className="mt-3 font-display text-2xl font-semibold text-paper">{value}</p>
    </div>
  )
}

function SmallStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-line pl-3">
      <p className="font-mono text-[10px] uppercase tracking-label text-muted">{label}</p>
      <p className="mt-1 text-sm font-medium text-silver">{value}</p>
    </div>
  )
}

function DangerButton({
  children,
  onClick,
  disabled = false,
  className = "",
}: {
  children: ReactNode
  onClick: () => void
  disabled?: boolean
  className?: string
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`inline-flex min-h-control items-center justify-center border border-[#6f3535] bg-transparent px-4 py-3 text-sm font-semibold text-[#e1aaaa] transition hover:border-[#b85b5b] hover:text-[#ffd0d0] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#d98282] disabled:cursor-not-allowed disabled:border-line disabled:text-muted ${className}`}
    >
      {children}
    </button>
  )
}

function EmptyState({ children }: { children: string }) {
  return (
    <div className="border border-dashed border-line px-5 py-6 text-sm text-muted">
      {children}
    </div>
  )
}

function statusLabel(status: string) {
  return (
    {
      "not-started": "Não iniciada",
      studying: "Em estudo",
      "review-needed": "Revisão necessária",
      completed: "Concluída",
    }[status] ?? status
  )
}

function resetScopeLabel(scope: string) {
  return (
    {
      diagnostic: "Diagnóstico reiniciado",
      lesson: "Aula reiniciada",
      "lesson-exam": "Prova da aula reiniciada",
      module: "Módulo reiniciado",
      "module-exam": "Prova final reiniciada",
    }[scope] ?? "Progresso reiniciado"
  )
}
