import ModuleOverviewGrid from "../components/module/ModuleOverviewGrid"
import { PageHeader } from "../components/titanium/PageUI"

export default function ModulesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Currículo"
        title="Módulos"
        description="Uma estrutura progressiva para construir domínio real, sem atalhos e sem lacunas."
      />
      <ModuleOverviewGrid withHeader={false} />
    </>
  )
}
