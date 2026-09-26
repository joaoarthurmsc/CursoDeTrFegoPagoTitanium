import { useEffect, useMemo, useState } from "react"
import AppShell from "../components/layout/AppShell"
import ActivitiesPage from "../pages/ActivitiesPage"
import CasesPage from "../pages/CasesPage"
import FormationPage from "../pages/FormationPage"
import HomePage from "../pages/HomePage"
import JournalPage from "../pages/JournalPage"
import LabPage from "../pages/LabPage"
import LessonPage from "../pages/LessonPage"
import LibraryPage from "../pages/LibraryPage"
import ModuleFinalExamPage from "../pages/ModuleFinalExamPage"
import ModulePage from "../pages/ModulePage"
import ModulesPage from "../pages/ModulesPage"
import PlaceholderPage from "../pages/PlaceholderPage"
import ProgressPage from "../pages/ProgressPage"
import { navigate } from "./navigation"

function RouteContent({ path }: { path: string }) {
  if (path === "/formacao") return <FormationPage />
  if (path === "/modulos") return <ModulesPage />

  if (/^\/modulos\/[^/]+\/prova-final$/.test(path)) {
    const moduleId = path.split("/")[2]
    return (
      <ModuleFinalExamPage moduleId={moduleId} onNavigate={navigate} />
    )
  }

  if (path.startsWith("/modulos/")) {
    const moduleId = path.split("/")[2]
    return <ModulePage moduleId={moduleId} onNavigate={navigate} />
  }

  if (path === "/aulas") return <ActivitiesPage type="aulas" />
  if (path.startsWith("/aulas/")) {
    const lessonId = path.split("/")[2]
    return <LessonPage lessonId={lessonId} onNavigate={navigate} />
  }

  if (path === "/labs") return <ActivitiesPage type="labs" />
  if (path.startsWith("/labs/")) return <LabPage />
  if (path === "/provas") return <ActivitiesPage type="provas" />
  if (path.startsWith("/provas/")) {
    return <PlaceholderPage kind="Diagnóstico Inicial" />
  }
  if (path === "/cases") return <CasesPage />
  if (path.startsWith("/cases/")) {
    return <PlaceholderPage kind="Case Titanium" />
  }
  if (path === "/biblioteca") return <LibraryPage />
  if (path === "/progresso") return <ProgressPage />
  if (path === "/diario") return <JournalPage />
  if (path === "/challenge") {
    return <PlaceholderPage kind="Titanium Challenge" />
  }
  if (path === "/configuracoes") {
    return <PlaceholderPage kind="Configurações" />
  }
  return <PlaceholderPage kind="Página não encontrada" />
}

export default function AppRouter() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    window.addEventListener("popstate", update)
    return () => window.removeEventListener("popstate", update)
  }, [])

  const cleanPath = useMemo(
    () => path.replace(/\/+$/, "") || "/",
    [path],
  )

  if (cleanPath === "/") {
    return <HomePage onNavigate={navigate} />
  }

  return (
    <AppShell path={cleanPath}>
      <RouteContent path={cleanPath} />
    </AppShell>
  )
}
