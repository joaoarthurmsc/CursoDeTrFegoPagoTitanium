import type { Lesson, LessonStage } from "../types/learning"

export const TITANIUM_MASTERY_SCORE = 9

export const TITANIUM_LESSON_PRINCIPLES = {
  autonomousExperience:
    "Uma Aula Titanium é uma experiência autossuficiente de aprendizagem e domínio que combina explicação progressiva, imagens, casos, interação fechada A-D, aplicação, diagnóstico, mapa mental, material de revisão e avaliação com feedback orientado.",
  masteryOverConsumption:
    "Nenhuma aula é considerada concluída por consumo. Ela é concluída por domínio demonstrado.",
  closedQuestions:
    "Toda pergunta de aprendizagem ou avaliação usa exatamente quatro alternativas, A-D. Não utilizamos respostas abertas como mecanismo de avaliação.",
  visualReality:
    "Sempre que a compreensão melhorar com evidência visual, a aula usa imagens explicativas ou capturas reais da interface. Capturas de Google Ads devem ser autênticas e atuais, nunca imagens geradas fingindo ser a interface real.",
} as const

export const REQUIRED_LESSON_CAPABILITIES = [
  "dynamic-teaching",
  "visual",
  "mindmap",
  "review",
  "exam",
] as const

function authoredStages(lesson: Lesson): LessonStage[] {
  return lesson.stages.flatMap((stage) => [
    stage,
    ...(stage.frames ?? []),
  ])
}

function isClosedQuestion(stage: LessonStage) {
  return Boolean(stage.options?.length)
}

function hasForbiddenOpenInteraction(stage: LessonStage) {
  return Boolean(
    stage.modelAnswer ||
      stage.selfAssessment ||
      stage.auditPrompts?.length ||
      stage.journalFields?.length ||
      (stage.prompt && !stage.options?.length),
  )
}

function hasExactlyFourOptions(options?: { id: string }[]) {
  if (!options?.length) return true
  return (
    options.length === 4 &&
    options.map((option) => option.id).join(",") === "a,b,c,d"
  )
}

export function assertTitaniumLessonArchitecture(lesson: Lesson) {
  const stages = authoredStages(lesson)
  const stageTypes = new Set(stages.map((stage) => stage.type))
  const materialTypes = new Set(
    lesson.materials.map((material) => material.type),
  )
  const hasDynamicTeaching = stages.some(
    (stage) => isClosedQuestion(stage) || ["practice", "guided"].includes(stage.type),
  )
  const hasVisualAsset = stages.some(
    (stage) =>
      Boolean(stage.media) ||
      Boolean(stage.guidedSteps?.some((step) => step.image)),
  )
  const diagnosticCompetencies =
    lesson.diagnostic?.questions.reduce<Record<string, number>>(
      (totals, question) => {
        totals[question.competence] = (totals[question.competence] ?? 0) + 1
        return totals
      },
      {},
    )

  const diagnosticAnswerDistribution =
    lesson.diagnostic?.questions.reduce<Record<string, number>>(
      (totals, question) => {
        totals[question.correctAnswer] =
          (totals[question.correctAnswer] ?? 0) + 1
        return totals
      },
      {},
    )

  const invalidDiagnosticDistractors =
    lesson.diagnostic?.questions.filter((question) => {
      const lengths = question.options.map((option) => option.label.trim().length)
      const shortest = Math.min(...lengths)
      const longest = Math.max(...lengths)
      return shortest < 45 || longest / shortest > 2.35
    }) ?? []

  const interfaceScreenshots = stages
    .map((stage) => stage.media)
    .filter((media) => media?.kind === "interface-screenshot")

  const invalidInterfaceScreenshots = interfaceScreenshots.filter(
    (media) => !media?.sourceLabel || !media?.capturedAt,
  )

  const invalidStageQuestions = stages.filter(
    (stage) =>
      hasForbiddenOpenInteraction(stage) ||
      !hasExactlyFourOptions(stage.options),
  )
  const invalidExamQuestions =
    lesson.exam?.questions.filter(
      (question) => !hasExactlyFourOptions(question.options),
    ) ?? []
  const invalidDiagnosticQuestions =
    lesson.diagnostic?.questions.filter(
      (question) => !hasExactlyFourOptions(question.options),
    ) ?? []

  const missing = [
    !hasDynamicTeaching && "ensino dinâmico",
    !stageTypes.has("visual") && "etapa visual",
    !stageTypes.has("mindmap") && "Mapa Mental",
    !lesson.demo && !hasVisualAsset && "imagem real/explicativa na aula",
    invalidStageQuestions.length > 0 && "interações abertas ou sem A-D",
    invalidExamQuestions.length > 0 && "prova com questão sem quatro alternativas A-D",
    invalidDiagnosticQuestions.length > 0 && "diagnóstico com questão sem quatro alternativas A-D",
    lesson.completionMode === "exam" &&
      !stageTypes.has("exam") &&
      "Prova da Aula",
    lesson.completionMode === "diagnostic" &&
      !stageTypes.has("diagnostic") &&
      "Diagnóstico",
    lesson.completionMode === "diagnostic" &&
      lesson.diagnostic?.questions.length !== 20 &&
      "Diagnóstico com 20 questões",
    lesson.completionMode === "diagnostic" &&
      lesson.diagnostic?.pointsPerQuestion !== 0.5 &&
      "Diagnóstico com 0,5 ponto por questão",
    lesson.completionMode === "diagnostic" &&
      Object.values(diagnosticCompetencies ?? {}).some(
        (total) => total !== 2,
      ) &&
      "Diagnóstico com duas questões por competência",
    lesson.completionMode === "diagnostic" &&
      ["a", "b", "c", "d"].some(
        (letter) => diagnosticAnswerDistribution?.[letter] !== 5,
      ) &&
      "Diagnóstico com respostas corretas equilibradas entre A-D",
    lesson.completionMode === "diagnostic" &&
      invalidDiagnosticDistractors.length > 0 &&
      "Diagnóstico com alternativas excessivamente óbvias pelo tamanho",
    invalidInterfaceScreenshots.length > 0 &&
      "captura real de interface sem fonte ou data de captura",
    !materialTypes.has("titanium-lesson") && "Guia + Notas da Aula",
    !materialTypes.has("mindmap") && "material Mapa Mental em imagem",
    lesson.completionMode === "exam" &&
      lesson.exam?.passingScore !== TITANIUM_MASTERY_SCORE &&
      `nota mínima ${TITANIUM_MASTERY_SCORE}`,
  ].filter(Boolean)

  if (missing.length) {
    throw new Error(
      `Aula ${lesson.id} não cumpre a arquitetura Titanium: ${missing.join(", ")}`,
    )
  }
}
