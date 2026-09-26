import type { Lesson, LessonJourneyState } from "../../types/learning"
import {
  ActionButton,
  CheckIcon,
  StageMarkerButton,
} from "../titanium/HomePrimitives"

export default function JourneyProgress({
  lesson,
  journey,
  currentIndex,
  onSelect,
}: {
  lesson: Lesson
  journey: LessonJourneyState
  currentIndex: number
  onSelect: (index: number) => void
}) {
  const reviewMode = Boolean(journey.completedAt)

  if (reviewMode) {
    return (
      <nav className="border-y border-line py-4" aria-label="Etapas da aula">
        <div className="flex gap-2 overflow-x-auto pb-1">
          {lesson.stages.map((stage, index) => (
            <ActionButton
              key={stage.id}
              variant={index === currentIndex ? "secondary" : "quiet"}
              className="shrink-0 px-3 py-2 text-xs"
              onClick={() => onSelect(index)}
            >
              <CheckIcon />
              {String(index + 1).padStart(2, "0")} {stage.eyebrow}
            </ActionButton>
          ))}
        </div>
      </nav>
    )
  }

  return (
    <div
      className="flex items-center gap-2"
      aria-label={`Etapa ${currentIndex + 1} de ${lesson.stages.length}`}
    >
      {lesson.stages.map((stage, index) => {
        const unlocked = index <= journey.maxUnlockedStageIndex
        const completed = journey.completedStageIds.includes(stage.id)
        return (
          <StageMarkerButton
            key={stage.id}
            disabled={!unlocked}
            active={index === currentIndex}
            completed={completed}
            onClick={() => unlocked && onSelect(index)}
            label={`Etapa ${index + 1}${unlocked ? "" : " bloqueada"}`}
          />
        )
      })}
    </div>
  )
}
