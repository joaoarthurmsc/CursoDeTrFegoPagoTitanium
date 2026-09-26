import type { LessonJourneyState, LessonStage } from "../../types/learning"
import { ActionButton, CheckIcon } from "../titanium/HomePrimitives"

export default function PracticeStage({
  lessonId,
  stage,
  journey,
  onSave,
}: {
  lessonId: string
  stage: LessonStage
  journey: LessonJourneyState
  onSave: (lessonId: string, stageId: string, items: string[]) => void
}) {
  const checked = journey.checklists[stage.id] ?? []

  return (
    <div className="mt-8 grid gap-3">
      {stage.checklist?.map((item) => {
        const active = checked.includes(item)
        return (
          <ActionButton
            key={item}
            variant="quiet"
            className={`w-full justify-start border-line px-5 py-4 text-left ${
              active ? "bg-graphite text-paper" : ""
            }`}
            ariaPressed={active}
            onClick={() =>
              onSave(
                lessonId,
                stage.id,
                active
                  ? checked.filter((entry) => entry !== item)
                  : [...checked, item],
              )
            }
          >
            <span
              className={`grid size-6 shrink-0 place-items-center border ${
                active
                  ? "border-gold text-gold"
                  : "border-line text-transparent"
              }`}
            >
              <CheckIcon />
            </span>
            {item}
          </ActionButton>
        )
      })}
    </div>
  )
}
