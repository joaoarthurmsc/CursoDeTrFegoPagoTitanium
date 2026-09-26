import {
  PageHeader,
  ProgressBar,
  SectionHeader,
  Status,
} from "../components/titanium/PageUI"
import { competencies, levels } from "../data/course"

export default function ProgressPage() {
  return (
    <>
      <PageHeader
        eyebrow="Desenvolvimento"
        title="Meu Progresso"
        description="Uma leitura clara das competências construídas e dos próximos níveis da sua formação."
      />
      <section className="mb-14">
        <SectionHeader title="Competências" />
        <div className="grid gap-5 md:grid-cols-2">
          {competencies.map((item) => (
            <div key={item} className="border-b border-line pb-5">
              <div className="mb-3 flex justify-between text-sm">
                <span>{item}</span>
                <span className="font-mono text-muted">0%</span>
              </div>
              <ProgressBar value={0} />
            </div>
          ))}
        </div>
      </section>
      <section>
        <SectionHeader title="Escala Titanium" />
        <div className="border-t border-line">
          {levels.map((level, index) => (
            <div
              key={level.code}
              className={`grid gap-3 border-b border-line py-5 md:grid-cols-[5rem_12rem_1fr_auto] md:items-center ${
                index > 0 ? "text-muted" : ""
              }`}
            >
              <span
                className={`font-display text-2xl font-semibold ${
                  index === 0 ? "text-gold" : ""
                }`}
              >
                {level.code}
              </span>
              <span className="font-semibold">{level.name}</span>
              <p className="text-sm leading-6">{level.description}</p>
              <Status
                locked={index > 0}
                text={index === 0 ? "atual" : "futuro"}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
