import { useMemo } from "react"
import {
  getContinueActivity,
  getHomeModules,
} from "../../storage/progressSelectors"
import HomeHeader from "../layout/HomeHeader"
import { HomeHeading } from "../titanium/HomePrimitives"
import ContinueWatching from "./ContinueWatching"
import ModuleCatalog from "./ModuleCatalog"

function getGreeting() {
  const hour = new Date().getHours()
  if (hour < 12) return "Bom dia"
  if (hour < 18) return "Boa tarde"
  return "Boa noite"
}

export default function HomePage({
  onNavigate,
}: {
  onNavigate: (path: string) => void
}) {
  const activity = useMemo(() => getContinueActivity(), [])
  const modules = useMemo(() => getHomeModules(), [])

  return (
    <div className="min-h-screen overflow-hidden bg-black text-paper">
      <HomeHeader onNavigate={onNavigate} />
      <main className="mx-auto max-w-home px-5 pb-16 pt-10 md:px-10 md:pb-24 md:pt-14 xl:px-14">
        <HomeHeading
          level={1}
          className="mb-10 font-display text-4xl font-semibold tracking-tight md:mb-14 md:text-6xl"
        >
          {getGreeting()}, João.
        </HomeHeading>
        <ContinueWatching activity={activity} onNavigate={onNavigate} />
        <ModuleCatalog modules={modules} onNavigate={onNavigate} />
      </main>
    </div>
  )
}
