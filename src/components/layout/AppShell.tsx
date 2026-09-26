import type { ReactNode } from "react"
import { navigate } from "../../app/navigation"
import SiteHeader from "./SiteHeader"

export default function AppShell({
  children,
  path,
}: {
  children: ReactNode
  path: string
}) {
  const immersive =
    path.startsWith("/modulos/") || path.startsWith("/aulas/")
  const immersion = path === "/aulas/a00"
  const backTo =
    path.startsWith("/aulas/") && !immersion ? "/modulos/01" : "/"
  const backLabel = immersion
    ? "Voltar ao início"
    : path.startsWith("/aulas/")
      ? "Voltar ao módulo"
      : "Voltar"

  return (
    <div className="min-h-screen bg-black text-paper">
      <SiteHeader
        backTo={backTo}
        backLabel={backLabel}
        onNavigate={navigate}
      />
      {immersive ? (
        children
      ) : (
        <main className="mx-auto max-w-content px-5 py-8 md:px-8 md:py-10 lg:px-10 lg:py-12">
          {children}
        </main>
      )}
    </div>
  )
}
