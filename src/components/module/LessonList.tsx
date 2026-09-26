import type { LessonSummary } from "../../storage/progressSelectors"
import { HomeHeading } from "../titanium/HomePrimitives"
import LessonRow from "./LessonRow"

export default function LessonList({
  lessons,
  onNavigate,
}: {
  lessons: LessonSummary[]
  onNavigate: (path: string) => void
}) {
  return (
    <section aria-labelledby="lessons-title">
      <div className="mb-4 flex items-end justify-between">
        <HomeHeading
          level={2}
          className="font-display text-3xl font-semibold tracking-tight"
        >
          Aulas
        </HomeHeading>
        <span className="font-mono text-xs text-muted">
          {lessons.length} atividades
        </span>
      </div>
      <div className="border-t border-line">
        {lessons.map((lesson) => (
          <LessonRow key={lesson.id} lesson={lesson} onNavigate={onNavigate} />
        ))}
      </div>
    </section>
  )
}
