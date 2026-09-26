export type LessonStageType = "discovery" | "context" | "learn" | "concept" | "example" | "counterexample" | "think" | "decide" | "visual" | "case" | "business" | "guided" | "journal" | "practice" | "audit" | "mindmap" | "review" | "diagnostic" | "exam"

export type GlossaryEntry = {
  term: string
  original?: string
  translation: string
  explanation: string
}

export type DecisionOption = {
  id: string
  label: string
  feedback: string
  recommended?: boolean
}

export type LessonStage = {
  id: string
  type: LessonStageType
  title: string
  eyebrow: string
  body?: string[]
  glossary?: GlossaryEntry[]
  prompt?: string
  modelAnswer?: string
  scenario?: string
  options?: DecisionOption[]
  allowRetry?: boolean
  checklist?: string[]
  auditPrompts?: string[]
  commentedAnalysis?: string
  visualItems?: Array<{ label: string; detail: string }>
  sequence?: Array<{ label: string; detail?: string }>
  cards?: Array<{
    title: string
    subtitle?: string
    description: string
  }>
  demoActions?: string[]
  quote?: string
  highlight?: string
  afterSequenceLead?: string
  afterSequence?: string[]
  selfAssessment?: {
    prompt: string
    options: string[]
  }
  journalFields?: Array<{ id: string; label: string }>
  mindmapBranches?: Array<{
    title: string
    detail: string
    result?: string
  }>
  comparison?: Array<{
    label: string
    metrics: Array<{ label: string; value: string }>
  }>
  guidedSteps?: Array<{
    instruction: string
    reason: string
    image?: string
    imageAlt?: string
    hotspots?: Array<{ x: number; y: number; label: string }>
  }>
  reviewSections?: Array<{ title: string; items: string[] }>
}

export type ExamQuestionKind = "objective" | "interpretation" | "decision" | "diagnosis" | "open"

export type ExamOption = {
  id: string
  label: string
  feedback: string
}

export type ExamQuestion = {
  id: string
  kind: ExamQuestionKind
  prompt: string
  options: ExamOption[]
  correctAnswer: string
  explanation: string
  reviewStageId: string
  modelAnswer?: string
  rubric?: string[]
}

export type Exam = {
  id: string
  title: string
  passingScore: number
  questions: ExamQuestion[]
  demo?: boolean
}

export type DiagnosticQuestion = {
  id: string
  competence: string
  prompt: string
  options: ExamOption[]
  correctAnswer: string
  table?: {
    headers: string[]
    rows: string[][]
  }
}

export type Diagnostic = {
  id: string
  title: string
  questions: DiagnosticQuestion[]
  pointsPerQuestion: number
}

export type DiagnosticCompetenceResult = {
  correct: number
  total: number
}

export type DiagnosticResult = {
  date: string
  answers: Record<string, string>
  correctCount: number
  score: number
  competencies: Record<string, DiagnosticCompetenceResult>
}

export type LessonMaterialType = "titanium-lesson" | "titanium-notes" | "mindmap" | "cheat-sheet" | "checklist" | "workbook" | "template" | "calculator" | "case" | "table" | "flowchart"

export type LessonMaterial = {
  id: string
  type: LessonMaterialType
  title: string
  purpose: string
  status: "planned" | "available"
  reviewStageId?: string
  asset?: string
}

export type Lesson = {
  id: string
  moduleId: string
  number: string
  title: string
  masteryTime: string
  objective: string
  overview: string
  stages: LessonStage[]
  completionMode: "exam" | "diagnostic"
  exam?: Exam
  diagnostic?: Diagnostic
  materials: LessonMaterial[]
  demo?: boolean
}

export type ExamError = {
  questionId: string
  selectedAnswer: string
  correctAnswer: string
}

export type ExamAttempt = {
  id: string
  date: string
  score: number
  correct: number
  total: number
  errors: ExamError[]
}

export type LessonJourneyState = {
  startedAt?: string
  contentCompletedAt?: string
  currentStageIndex: number
  maxUnlockedStageIndex: number
  completedStageIds: string[]
  openResponses: Record<string, string>
  decisions: Record<
    string,
    { selectedOptionId: string; confirmed: boolean }
  >
  selfAssessments: Record<string, string>
  checklists: Record<string, string[]>
  auditResponses: Record<string, Record<string, string>>
  journalEntries: Record<string, string>
  diagnosticAnswers: Record<string, string>
  examAttempts: ExamAttempt[]
  bestScore?: number
  lastScore?: number
  lastErrors: ExamError[]
  completedAt?: string
}
