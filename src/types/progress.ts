import type {
  DiagnosticResult,
  ExamAttempt,
  LessonJourneyState,
} from "./learning"

export interface Decision {
  id: string
  date: string
  business: string
  problem: string
  data: string
  hypothesis: string
  decision: string
  expected: string
  observed: string
  learning: string
}

export interface LearningState {
  completedLessons: string[]
  quizScores: Record<string, number>
  completedExercises: string[]
  moduleProgress: Record<string, number>
  currentActivity?: {
    id: string
    moduleId: string
    type: "lesson" | "quiz" | "lab" | "exam"
    path: string
    title: string
    label: string
  }
  lessonJourneys: Record<string, LessonJourneyState>
  moduleExamAttempts: Record<string, ExamAttempt[]>
  initialDiagnostic?: DiagnosticResult
  finalDiagnostic?: DiagnosticResult
  decisions: Decision[]
}
