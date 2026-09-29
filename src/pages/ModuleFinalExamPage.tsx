import { useMemo, useState } from "react"
import ExamEngine from "../components/exam/ExamEngine"
import { HomeHeading, LockIcon } from "../components/titanium/HomePrimitives"
import { moduleOneFinalExam } from "../data/module01"
import { learningRepository } from "../storage/learningRepository"
import { getModuleLearningSummary } from "../storage/progressSelectors"
import type { ExamAttempt } from "../types/learning"

export default function ModuleFinalExamPage({
  moduleId,
  onNavigate,
}: {
  moduleId: string
  onNavigate: (path: string) => void
}) {
  const summary = useMemo(() => getModuleLearningSummary(moduleId), [moduleId])
  const [attempts, setAttempts] = useState(() =>
    learningRepository.getModuleExamAttempts(moduleId),
  )

  if (!summary.finalExamUnlocked) {
    return (
      <main className="mx-auto flex min-h-placeholder max-w-reading items-center px-5">
        <div className="border-l-2 border-line pl-6">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-label text-muted">
            <LockIcon /> Prova bloqueada
          </div>
          <HomeHeading
            level={1}
            className="mt-5 font-display text-4xl font-semibold md:text-5xl"
          >
            Prova Final do Módulo
          </HomeHeading>
          <p className="mt-5 text-base leading-7 text-muted">
            Conclua todas as seis aulas com nota mínima 9,0 para liberar.
          </p>
        </div>
      </main>
    )
  }

  if (moduleId !== "01") {
    return (
      <main className="mx-auto flex min-h-placeholder max-w-reading items-center px-5">
        <p className="text-muted">A prova deste módulo ainda será publicada.</p>
      </main>
    )
  }

  const complete = (attempt: ExamAttempt) => {
    learningRepository.recordModuleExamAttempt(moduleId, attempt)
    setAttempts(learningRepository.getModuleExamAttempts(moduleId))
  }

  return (
    <main className="mx-auto max-w-lesson px-5 py-12 md:px-8 md:py-16">
      <p className="font-mono text-xs uppercase tracking-label text-gold">
        Módulo 01 · Avaliação de domínio
      </p>
      <HomeHeading
        level={1}
        className="mt-4 font-display text-4xl font-semibold md:text-5xl"
      >
        Fundamentos de Tráfego e Aquisição
      </HomeHeading>
      <p className="mt-4 max-w-3xl text-sm leading-7 text-muted">
        20 questões integrando tráfego, publicidade digital, jornada mensurável,
        métricas fundamentais e diagnóstico por decomposição. Nota mínima: 9,0.
      </p>
      <div className="mt-10 border-t border-line pt-10">
        <ExamEngine
          exam={moduleOneFinalExam}
          attempts={attempts}
          onComplete={complete}
          onReviewStage={(stageId) => {
            const lessonMatch = stageId.match(/^a(\d{2})/)
            onNavigate(lessonMatch ? `/aulas/${lessonMatch[1]}` : "/aulas/06")
          }}
          onNext={() => onNavigate(`/modulos/${moduleId}`)}
        />
      </div>
    </main>
  )
}
