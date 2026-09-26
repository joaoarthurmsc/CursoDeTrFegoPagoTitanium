import AppIcon from "../components/titanium/AppIcon"
import {
  AppLink,
  Heading,
  PageHeader,
  Status,
} from "../components/titanium/PageUI"
import { moduleOneLessons } from "../data/course"
import { isImmersionCompleted } from "../storage/progressSelectors"

interface ActivitiesPageProps {
  type: "aulas" | "labs" | "provas"
}

export default function ActivitiesPage({ type }: ActivitiesPageProps) {
  const immersionCompleted = isImmersionCompleted()

  if (type === "aulas") {
    return (
      <>
        <PageHeader
          eyebrow="Conteúdo"
          title="Aulas"
          description="Acesse as lições liberadas e retome sua formação."
        />
        <div className="border-t border-line">
          {moduleOneLessons.slice(0, 5).map((lesson, index) => {
            const available = immersionCompleted && index === 0

            return (
              <AppLink
                key={lesson}
                to={available ? `/aulas/0${index + 1}` : "/aulas"}
                className={`flex w-full items-center gap-4 border-b border-line py-5 md:px-4 ${
                  available ? "hover:bg-graphite" : "text-muted"
                }`}
              >
                <span className="font-mono text-xs text-gold">
                  0{index + 1}
                </span>
                <span className="flex-1">{lesson}</span>
                <Status
                  locked={!available}
                  text={
                    !immersionCompleted
                      ? "bloqueado"
                      : index === 0
                        ? "disponível"
                        : "futura"
                  }
                />
                <AppIcon name="arrow" size="sm" />
              </AppLink>
            )
          })}
        </div>
      </>
    )
  }

  if (type === "labs") {
    return (
      <>
        <PageHeader
          eyebrow="Prática aplicada"
          title="Titanium Labs"
          description="Ambientes estruturados para transformar conhecimento em capacidade operacional."
        />
        <div className="grid gap-3 md:grid-cols-2">
          {Array.from({ length: 10 }, (_, index) => (
            <AppLink
              key={index}
              to={index === 0 ? "/labs/01" : "/labs"}
              className={`flex min-h-36 flex-col justify-between border p-5 ${
                index === 0
                  ? "border-line bg-graphite hover:border-gold"
                  : "border-line bg-graphite/50 text-muted"
              }`}
            >
              <div className="flex justify-between">
                <span className="font-mono text-xs text-gold">
                  LAB {String(index + 1).padStart(2, "0")}
                </span>
                <Status
                  locked={index > 0}
                  text={index === 0 ? "futuro" : "bloqueado"}
                />
              </div>
              <Heading level={3} className="text-lg font-semibold">
                {index === 0
                  ? "Ecossistema da aquisição"
                  : `Titanium Lab ${String(index + 1).padStart(2, "0")}`}
              </Heading>
            </AppLink>
          ))}
        </div>
      </>
    )
  }

  const exams = [
    "Diagnóstico Inicial",
    "Prova Titanium I",
    "Prova Titanium II",
    "Prova Titanium III",
    "Prova Titanium IV",
    "Prova Titanium V",
    "Titanium Challenge",
  ]

  return (
    <>
      <PageHeader
        eyebrow="Avaliação"
        title="Provas"
        description="Instrumentos para medir compreensão, execução e capacidade de diagnóstico."
      />
      <div className="grid gap-3">
        {exams.map((exam, index) => (
          <AppLink
            key={exam}
            to={index === 0 ? "/provas/diagnostico" : "/provas"}
            className={`flex items-center gap-5 border p-5 ${
              index === 0
                ? "border-line bg-graphite hover:border-gold"
                : "border-line bg-graphite/50 text-muted"
            }`}
          >
            <span className="grid size-10 place-items-center border border-line font-mono text-xs">
              0{index + 1}
            </span>
            <span className="flex-1 font-medium">{exam}</span>
            <Status
              locked={index > 0}
              text={index === 0 ? "disponível" : "bloqueado"}
            />
          </AppLink>
        ))}
      </div>
    </>
  )
}
