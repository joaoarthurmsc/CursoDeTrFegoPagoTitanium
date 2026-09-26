import type { Lesson } from "../types/learning"

export const TITANIUM_MASTERY_SCORE = 9

export const TITANIUM_LESSON_PRINCIPLES = {
  autonomousExperience:
    "Uma Aula Titanium é uma experiência autossuficiente de aprendizagem e domínio que substitui uma aula tradicional gravada através de conteúdo profundo, explicações progressivas, recursos visuais, exemplos, interação, aplicação prática, diagnóstico, mapa mental, materiais de apoio e avaliação com correção orientada.",
  masteryOverConsumption:
    "Nenhuma aula é considerada concluída por consumo. Ela é concluída por domínio demonstrado.",
} as const

export const REQUIRED_LESSON_CAPABILITIES = [
  "dynamic-teaching",
  "visual",
  "mindmap",
  "review",
  "exam",
] as const

export function assertTitaniumLessonArchitecture(lesson: Lesson) {
  const stageTypes = new Set(lesson.stages.map((stage) => stage.type))
  const materialTypes = new Set(
    lesson.materials.map((material) => material.type),
  )
  const hasDynamicTeaching = lesson.stages.some((stage) =>
    ["think", "decide", "practice", "audit", "guided"].includes(stage.type),
  )
  const diagnosticCompetencies =
    lesson.diagnostic?.questions.reduce<Record<string, number>>(
      (totals, question) => {
        totals[question.competence] = (totals[question.competence] ?? 0) + 1
        return totals
      },
      {},
    )
  const missing = [
    !hasDynamicTeaching && "ensino dinâmico",
    !stageTypes.has("visual") && "etapa visual",
    !stageTypes.has("mindmap") && "Mapa Mental",
    !stageTypes.has("review") && "Revisão",
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
    !materialTypes.has("titanium-lesson") && "Titanium Lesson",
    !materialTypes.has("titanium-notes") && "Titanium Notes",
    !materialTypes.has("mindmap") && "material Mapa Mental",
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
