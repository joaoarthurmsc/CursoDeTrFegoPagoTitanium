import { useMemo } from "react"
import ModuleFinalExamCard from "../components/module/ModuleFinalExamCard"
import ModuleHero from "../components/module/ModuleHero"
import LessonList from "../components/module/LessonList"
import { getModuleLearningSummary } from "../storage/progressSelectors"

export default function ModulePage({
  moduleId,
  onNavigate,
}: {
  moduleId: string
  onNavigate: (path: string) => void
}) {
  const summary = useMemo(() => getModuleLearningSummary(moduleId), [moduleId])

  return (
    <>
      <ModuleHero
        moduleId={moduleId}
        progress={summary.progress}
        completedLessons={summary.completedLessons}
        totalLessons={summary.totalLessons}
      />
      <main className="mx-auto max-w-content px-5 py-12 md:px-10 md:py-16">
        {summary.lessons.length ? (
          <>
            <LessonList lessons={summary.lessons} onNavigate={onNavigate} />
            <ModuleFinalExamCard
              moduleId={moduleId}
              unlocked={summary.finalExamUnlocked}
              bestScore={summary.finalExamBestScore}
              onNavigate={onNavigate}
            />
          </>
        ) : (
          <p className="text-sm text-muted">
            A arquitetura pedagógica deste módulo será definida em uma próxima
            etapa.
          </p>
        )}
      </main>
    </>
  )
}
