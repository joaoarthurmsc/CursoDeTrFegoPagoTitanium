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
import PerformancePage from "../pages/PerformancePage"
import ProgressControlPage from "../pages/ProgressControlPage"
import PlaceholderPage from "../pages/PlaceholderPage"
import StudentSelectPage from "../pages/StudentSelectPage"
import { learningRepository } from "../storage/learningRepository"
import { isImmersionCompleted } from "../storage/progressSelectors"
import { studentRepository } from "../storage/studentRepository"
import type { StudentId } from "../data/students"
import { navigate } from "./navigation"

function PrerequisitePage() {
  return (
    <main className="mx-auto flex min-h-placeholder max-w-reading items-center px-5">
      <div>
        <p className="font-mono text-xs uppercase tracking-label text-gold">
          Pré-requisito
        </p>
        <h1 className="mt-4 font-display text-4xl font-semibold text-paper">
          Conclua a Aula 00 primeiro
        </h1>
        <p className="mt-4 text-sm leading-7 text-muted">
          O Módulo 01 permanece bloqueado até a Imersão Titanium ser concluída
          e o Diagnóstico Inicial ser enviado.
        </p>
        <button
          type="button"
          onClick={() => navigate("/aulas/a00")}
          className="mt-7 border border-gold bg-gold px-5 py-3 text-sm font-semibold text-black transition hover:border-silver hover:bg-silver"
        >
          Ir para a Aula 00
        </button>
      </div>
    </main>
  )
}

function needsImmersion(path: string) {
  if (/^\/modulos\/01(?:\/|$)/.test(path)) return true
  if (/^\/aulas\/(01|02|03|04|05|06)$/.test(path)) return true
  if (/^\/labs\/01$/.test(path)) return true
  return false
}

function RouteContent({ path }: { path: string }) {
  const state = learningRepository.load()

  if (needsImmersion(path) && !isImmersionCompleted(state)) {
    return <PrerequisitePage />
  }

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
  if (path === "/desempenho" || path === "/progresso") {
    return <PerformancePage />
  }
  if (path === "/controle") {
    return <ProgressControlPage onNavigate={navigate} />
  }
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
  const [activeStudentId, setActiveStudentId] = useState<
    StudentId | undefined
  >(() => studentRepository.getActiveStudentId())

  useEffect(() => {
    const update = () => setPath(window.location.pathname)
    window.addEventListener("popstate", update)
    return () => window.removeEventListener("popstate", update)
  }, [])

  const cleanPath = useMemo(
    () => path.replace(/\/+$/, "") || "/",
    [path],
  )

  if (!activeStudentId) {
    return (
      <StudentSelectPage
        onSelect={(studentId) => {
          studentRepository.select(studentId)
          setActiveStudentId(studentId)
          if (cleanPath !== "/") navigate("/")
        }}
      />
    )
  }

  if (cleanPath === "/") {
    return <HomePage onNavigate={navigate} />
  }

  return (
    <AppShell path={cleanPath}>
      <RouteContent path={cleanPath} />
    </AppShell>
  )
}
