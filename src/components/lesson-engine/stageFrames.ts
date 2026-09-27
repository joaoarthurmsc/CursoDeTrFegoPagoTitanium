import type { LessonStage } from "../../types/learning"

export type LessonFrame = {
  id: string
  label: string
  stage: LessonStage
}

const chunk = <T,>(items: T[] | undefined, size: number): T[][] => {
  if (!items?.length) return []
  const groups: T[][] = []
  for (let index = 0; index < items.length; index += size) {
    groups.push(items.slice(index, index + size))
  }
  return groups
}

const shell = (
  stage: LessonStage,
  type: LessonStage["type"] = "learn",
): LessonStage => ({
  id: stage.id,
  type,
  title: stage.title,
  eyebrow: stage.eyebrow,
  mode: stage.mode,
})

export function getLessonFrames(stage: LessonStage): LessonFrame[] {
  // Checkpoint 7: author-declared semantic frames always win. The lesson author
  // decides where an idea begins and ends; the engine only renders that choice.
  if (stage.frames?.length) {
    return stage.frames.map((frame, index) => ({
      id: `${stage.id}:frame-${index + 1}`,
      label: frame.frameLabel ?? `Parte ${index + 1}`,
      stage: { ...frame, frames: undefined },
    }))
  }

  if (stage.type === "diagnostic" || stage.type === "exam") {
    return [{ id: `${stage.id}:main`, label: "Aplicação", stage }]
  }

  const frames: LessonFrame[] = []
  const push = (key: string, label: string, projection: LessonStage) => {
    frames.push({ id: `${stage.id}:${key}`, label, stage: projection })
  }

  chunk(stage.body, 2).forEach((body, index) =>
    push(`body-${index + 1}`, "Conceito", {
      ...shell(stage),
      body,
    }),
  )

  if (stage.comparison?.length) {
    push("comparison", "Compare", {
      ...shell(stage, "discovery"),
      comparison: stage.comparison,
    })
  }

  chunk(stage.sequence, 3).forEach((sequence, index) =>
    push(`sequence-${index + 1}`, "Sequência", {
      ...shell(stage),
      sequence,
    }),
  )

  chunk(stage.cards, 2).forEach((cards, index) =>
    push(`cards-${index + 1}`, "Explore", {
      ...shell(stage),
      cards,
    }),
  )

  chunk(stage.visualItems, 2).forEach((visualItems, index) =>
    push(`visual-${index + 1}`, "Visualize", {
      ...shell(stage, "visual"),
      visualItems,
    }),
  )

  if (stage.glossary?.length) {
    push("glossary", "Vocabulário", {
      ...shell(stage),
      glossary: stage.glossary,
    })
  }

  if (stage.afterSequenceLead || stage.afterSequence?.length) {
    const after = [
      ...(stage.afterSequenceLead ? [stage.afterSequenceLead] : []),
      ...(stage.afterSequence ?? []),
    ]
    chunk(after, 2).forEach((body, index) =>
      push(`after-${index + 1}`, "Síntese", {
        ...shell(stage),
        body,
      }),
    )
  }

  if (stage.highlight) {
    push("highlight", "Ideia-chave", {
      ...shell(stage),
      highlight: stage.highlight,
    })
  }

  if (stage.quote) {
    push("quote", "Princípio", {
      ...shell(stage),
      quote: stage.quote,
    })
  }

  if (stage.demoActions?.length) {
    push("demo-actions", "Demonstração", {
      ...shell(stage),
      demoActions: stage.demoActions,
    })
  }

  if (stage.guidedSteps?.length) {
    chunk(stage.guidedSteps, 1).forEach((guidedSteps, index) =>
      push(`guided-${index + 1}`, "Faça comigo", {
        ...shell(stage, "guided"),
        guidedSteps,
      }),
    )
  }

  if (stage.mindmapBranches?.length || stage.type === "mindmap") {
    push("mindmap", "Conecte", {
      ...shell(stage, "mindmap"),
      mindmapBranches: stage.mindmapBranches,
    })
  }

  if (stage.reviewSections?.length) {
    chunk(stage.reviewSections, 2).forEach((reviewSections, index) =>
      push(`review-${index + 1}`, "Revise", {
        ...shell(stage, "review"),
        reviewSections,
      }),
    )
  }

  if (stage.type === "think") {
    push("think", "Responda", {
      ...shell(stage, "think"),
      prompt: stage.prompt,
      modelAnswer: stage.modelAnswer,
      selfAssessment: stage.selfAssessment,
    })
  }

  if (stage.type === "decide") {
    push("decide", "Decida", {
      ...shell(stage, "decide"),
      scenario: stage.scenario,
      options: stage.options,
      allowRetry: stage.allowRetry,
    })
  }

  if (stage.type === "practice") {
    push("practice", "Execute", {
      ...shell(stage, "practice"),
      checklist: stage.checklist,
    })
  }

  if (stage.type === "audit") {
    push("audit", "Diagnostique", {
      ...shell(stage, "audit"),
      auditPrompts: stage.auditPrompts,
      commentedAnalysis: stage.commentedAnalysis,
    })
  }

  if (stage.type === "journal") {
    push("journal", "Registre", {
      ...shell(stage, "journal"),
      journalFields: stage.journalFields,
    })
  }

  if (stage.type === "review" && stage.prompt) {
    push("review-response", "Explique", {
      ...shell(stage, "review"),
      prompt: stage.prompt,
    })
  }

  if (!frames.length) {
    push("main", "Conteúdo", stage)
  }

  if (frames.length > 1) {
    return frames.map((frame) => ({
      ...frame,
      stage: {
        ...frame.stage,
        eyebrow: `${stage.eyebrow} · ${frame.label}`,
      },
    }))
  }

  return frames
}
