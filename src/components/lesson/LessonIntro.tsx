import type { Lesson, LessonJourneyState } from "../../types/learning"
import {
  ActionButton,
  ArrowIcon,
  CheckIcon,
  HomeHeading,
  ProgressBar,
} from "../titanium/HomePrimitives"
import LessonMaterials from "./LessonMaterials"

function formatScore(score?: number) {
  return score === undefined ? undefined : score.toFixed(1).replace(".", ",")
}

export default function LessonIntro({
  lesson,
  journey,
  onStart,
}: {
  lesson: Lesson
  journey: LessonJourneyState
  onStart: () => void
}) {
  const started = Boolean(journey.startedAt)
  const completed = Boolean(journey.completedAt)
  const progress = completed
    ? 100
    : Math.round(
        (journey.completedStageIds.length / lesson.stages.length) * 100,
      )

  return (
    <main className="mx-auto max-w-reading px-5 py-12 md:px-8 md:py-20">
      <div className="flex flex-wrap items-center gap-3 font-mono text-xs uppercase tracking-label">
        <span className="text-gold">Módulo {lesson.moduleId}</span>
        <span className="h-px w-6 bg-line" />
        <span className="text-silver">Aula {lesson.number}</span>
        {lesson.demo && (
          <>
            <span className="h-px w-6 bg-line" />
            <span className="text-muted">Demonstração da engine</span>
          </>
        )}
      </div>

      <HomeHeading
        level={1}
        className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
      >
        {lesson.title}
      </HomeHeading>

      <p className="mt-5 font-mono text-xs text-muted">
        Tempo estimado de domínio · {lesson.masteryTime}
      </p>

      {completed && (
        <div className="mt-8 border-l-2 border-gold bg-graphite p-5">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-label text-gold">
            <CheckIcon /> Aula concluída
          </div>
          <p className="mt-3 text-sm text-silver">
            Melhor nota: {formatScore(journey.bestScore)} · Modo de revisão
            livre
          </p>
        </div>
      )}

      {!completed && journey.contentCompletedAt && (
        <div className="mt-8 border-l-2 border-silver bg-graphite p-5">
          <p className="font-mono text-xs uppercase tracking-label text-silver">
            Conteúdo finalizado · domínio pendente
          </p>
          <p className="mt-3 text-sm leading-6 text-muted">
            A aula permanece em revisão até que a prova registre nota mínima
            9,0.
          </p>
        </div>
      )}

      <div className="mt-10 border-y border-line py-8">
        <p className="font-mono text-xs uppercase tracking-label text-muted">
          Objetivo
        </p>
        <p className="mt-4 text-lg leading-8 text-paper">{lesson.objective}</p>
        <p className="mt-5 text-base leading-8 text-silver">
          {lesson.overview}
        </p>
      </div>

      {started && (
        <div className="mt-8">
          <div className="mb-2 flex justify-between font-mono text-xs text-muted">
            <span>
              {completed
                ? "Jornada concluída"
                : `Retomar na etapa ${journey.currentStageIndex + 1}`}
            </span>
            <span>{progress}%</span>
          </div>
          <ProgressBar value={progress} />
        </div>
      )}

      <ActionButton className="mt-8" onClick={onStart}>
        {completed
          ? "Revisar aula"
          : started
            ? "Continuar aula"
            : "Iniciar aula"}
        <ArrowIcon />
      </ActionButton>

      {completed && <LessonMaterials materials={lesson.materials} />}
    </main>
  )
}
