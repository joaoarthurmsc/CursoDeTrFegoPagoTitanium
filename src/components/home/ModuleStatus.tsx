import type { CatalogStatus } from "../../storage/progressSelectors"
import { CheckIcon, LockIcon } from "../titanium/HomePrimitives"

const labels: Record<CatalogStatus, string> = {
  "not-started": "Não iniciado",
  studying: "Em estudo",
  completed: "Concluído",
  locked: "Bloqueado",
}

export default function ModuleStatus({ status }: { status: CatalogStatus }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 font-mono text-status uppercase tracking-label ${
        status === "studying" || status === "completed"
          ? "text-gold"
          : "text-silver"
      }`}
    >
      {status === "locked" && <LockIcon />}
      {status === "completed" && <CheckIcon />}
      {labels[status]}
    </span>
  )
}
