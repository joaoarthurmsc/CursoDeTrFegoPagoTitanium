import { useEffect } from "react"
import { learningRepository } from "../storage/learningRepository"

const TICK_SECONDS = 15
const IDLE_LIMIT_MS = 5 * 60 * 1000

export function useLessonActiveTime(lessonId: string) {
  useEffect(() => {
    let lastInteractionAt = Date.now()

    const markActive = () => {
      lastInteractionAt = Date.now()
    }

    const events: Array<keyof WindowEventMap> = [
      "pointerdown",
      "keydown",
      "scroll",
      "touchstart",
    ]

    events.forEach((eventName) =>
      window.addEventListener(eventName, markActive, { passive: true }),
    )

    const interval = window.setInterval(() => {
      const active =
        document.visibilityState === "visible" &&
        Date.now() - lastInteractionAt <= IDLE_LIMIT_MS

      if (active) {
        learningRepository.addLessonActiveTime(lessonId, TICK_SECONDS)
      }
    }, TICK_SECONDS * 1000)

    return () => {
      window.clearInterval(interval)
      events.forEach((eventName) =>
        window.removeEventListener(eventName, markActive),
      )
    }
  }, [lessonId])
}
