import type { LessonSummary } from "../../storage/progressSelectors"
import {
  ArrowIcon,
  CheckIcon,
  HomeLink,
  ProgressBar,
} from "../titanium/HomePrimitives"

const statusLabels = {
  "not-started": "Não iniciada",
  studying: "Em estudo",
  "review-needed": "Revisão necessária",
  completed: "Concluída",
}

function formatScore(score?: number) {
  return score === undefined ? undefined : score.toFixed(1).replace(".", ",")
}

export default function LessonRow({
  lesson,
  onNavigate,
}: {
  lesson: LessonSummary
  onNavigate: (path: string) => void
}) {
  const active =
    lesson.status === "studying" || lesson.status === "review-needed"

  return (
    <HomeLink
      to={`/aulas/${lesson.id}`}
      onNavigate={onNavigate}
      className={`group grid w-full gap-4 border-b border-line px-1 py-6 text-left transition md:grid-cols-[4rem_1fr_auto_2rem] md:items-center md:px-4 ${
        active
          ? "border-l-2 border-l-gold bg-graphite/60"
          : "hover:bg-graphite/50"
      }`}
    >
      <div className="flex items-center gap-3">
        {lesson.status === "completed" ? (
          <span className="text-gold">
            <CheckIcon />
          </span>
        ) : (
          <span className="font-mono text-sm text-muted">{lesson.number}</span>
        )}
      </div>
      <div>
        <p className="text-base font-semibold text-paper md:text-lg">
          {lesson.title}
        </p>
        <p className="mt-1 text-xs text-muted">
          Tempo de domínio · {lesson.masteryTime}
        </p>
        {active && (
          <div className="mt-4 max-w-sm">
            <ProgressBar value={lesson.progress} />
          </div>
        )}
      </div>
      <div className="flex flex-wrap items-center gap-3 md:justify-end">
        {lesson.bestScore !== undefined && (
          <span className="font-mono text-xs text-silver">
            PROVA {formatScore(lesson.bestScore)}
          </span>
        )}
        <span
          className={`font-mono text-status uppercase tracking-label ${
            active || lesson.status === "completed" ? "text-gold" : "text-muted"
          }`}
        >
          {statusLabels[lesson.status]}
        </span>
      </div>
      <ArrowIcon className="hidden size-4 text-muted transition group-hover:translate-x-1 group-hover:text-paper md:block" />
    </HomeLink>
  )
}
