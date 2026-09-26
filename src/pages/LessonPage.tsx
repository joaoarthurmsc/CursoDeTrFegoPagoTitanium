import { HomeHeading } from "../components/titanium/HomePrimitives"
import ImmersionPage from "./ImmersionPage"

export default function LessonPage({
  lessonId,
  onNavigate,
}: {
  lessonId: string
  onNavigate: (path: string) => void
}) {
  if (lessonId === "a00") {
    return <ImmersionPage onNavigate={onNavigate} />
  }

  return (
    <main className="mx-auto flex min-h-placeholder max-w-reading items-center px-5">
      <div>
        <p className="font-mono text-xs uppercase tracking-label text-gold">
          Aula {lessonId}
        </p>
        <HomeHeading
          level={1}
          className="mt-4 font-display text-4xl font-semibold"
        >
          Conteúdo em preparação
        </HomeHeading>
        <p className="mt-4 text-sm leading-7 text-muted">
          A experiência definitiva desta aula será publicada seguindo a
          arquitetura Titanium de aprendizagem e domínio.
        </p>
      </div>
    </main>
  )
}
