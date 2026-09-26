import { modules } from "../../data/course"
import { HomeHeading, ProgressBar } from "../titanium/HomePrimitives"

const moduleDescriptions: Record<string, string> = {
  "01": "Construir a base mental necessária antes de entrar profundamente na plataforma.",
  "02": "Entender a economia do cliente e do negócio antes de decidir quanto, onde e como investir.",
  "03": "Estruturar conta, mensuração e arquitetura de Google Ads com lógica operacional.",
  "04": "Dominar intenção de busca, palavras-chave, termos de pesquisa e cobertura de demanda.",
  "05": "Conectar mensagem, oferta, anúncio e experiência de destino para produzir conversão.",
  "06": "Construir uma base de mensuração confiável com Google Ads, GA4, GTM e sinais de negócio.",
  "07": "Diagnosticar causas, priorizar gargalos e transformar alterações em hipóteses e experimentos.",
  "08": "Entender quando confiar na automação, como orientar o algoritmo e o que preservar como decisão estratégica.",
  "09": "Compreender o papel de Search, PMax, Demand Gen, YouTube, Shopping e demais inventários no sistema de aquisição.",
  "10": "Escalar com controle, gerir uma operação profissional e defender decisões de aquisição com clareza.",
}

export default function ModuleHero({
  moduleId,
  progress,
  completedLessons,
  totalLessons,
}: {
  moduleId: string
  progress: number
  completedLessons: number
  totalLessons: number
}) {
  const module = modules.find((item) => item.id === moduleId) ?? modules[0]
  const description =
    moduleDescriptions[module.id] ??
    "Formação progressiva em aquisição, performance e estratégia."

  return (
    <section className="relative min-h-module-hero overflow-hidden border-b border-line">
      <img
        src={`/modules/${module.number}.jpg`}
        alt=""
        className="absolute inset-0 size-full object-cover grayscale"
      />
      <div className="module-hero-overlay absolute inset-0" />
      <div className="relative mx-auto flex min-h-module-hero max-w-home items-end px-5 py-12 md:px-10 md:py-16 xl:px-14">
        <div className="max-w-module-copy">
          <p className="mb-4 font-mono text-xs uppercase tracking-label text-gold">
            Módulo {module.number}
          </p>
          <HomeHeading
            level={1}
            className="font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl"
          >
            {module.title}
          </HomeHeading>
          <p className="mt-5 max-w-2xl text-base leading-7 text-silver">
            {description}
          </p>
          <div className="mt-8 max-w-progress">
            <div className="mb-2 flex justify-between font-mono text-xs text-silver">
              <span>
                {completedLessons} de {totalLessons} aulas concluídas
              </span>
              <span>{progress}%</span>
            </div>
            <ProgressBar value={progress} />
          </div>
        </div>
      </div>
    </section>
  )
}
