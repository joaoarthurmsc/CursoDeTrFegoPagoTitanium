import fs from "node:fs"

const read = (path) => fs.readFileSync(path, "utf8")
const failures = []

function scan(label, text, forbidden) {
  for (const item of forbidden) {
    const regex = new RegExp(item.pattern, "iu")
    if (regex.test(text)) {
      failures.push(`${label}: conceito precoce encontrado: ${item.label}`)
    }
  }
}

const advancedBeyondM01 = [
  { label: "CAC", pattern: "\\bCAC\\b" },
  { label: "LTV", pattern: "\\bLTV\\b" },
  { label: "Smart Bidding", pattern: "Smart\\s+Bidding" },
  { label: "Bidding", pattern: "\\bbidding\\b" },
  { label: "PMax", pattern: "\\bPMax\\b" },
  { label: "Keyword", pattern: "\\bKeyword" },
  { label: "Search Term", pattern: "Search\\s+Term" },
  { label: "GA4", pattern: "\\bGA4\\b" },
  { label: "GTM", pattern: "\\bGTM\\b" },
]

const advancedMetrics = [
  { label: "CTR", pattern: "\\bCTR\\b" },
  { label: "CPC", pattern: "\\bCPC\\b" },
  { label: "CPA", pattern: "\\bCPA\\b" },
  { label: "CVR", pattern: "\\bCVR\\b" },
  { label: "ROAS", pattern: "\\bROAS\\b" },
  ...advancedBeyondM01,
]

const immersionSource = read("src/data/immersionLesson.ts")
const immersionStart = immersionSource.indexOf("export const immersionLesson")
const immersionDiagnostic = immersionSource.indexOf("\n  diagnostic:", immersionStart)
const immersionTeaching = immersionSource.slice(immersionStart, immersionDiagnostic)
scan("Aula 00", immersionTeaching, advancedMetrics)

const lessonOne = read("src/data/lessonDemo.ts")
scan("Aula 01", lessonOne, [
  ...advancedMetrics,
  { label: "Impressão como conceito", pattern: "\\bimpress(?:ão|ões)\\b" },
  { label: "Conversão como conceito", pattern: "\\bconvers(?:ão|ões)\\b" },
  { label: "Leilão", pattern: "\\bleil(?:ão|ões)\\b" },
  { label: "Palavra-chave", pattern: "palavra[s-]*chave" },
])

const moduleOne = read("src/data/module01/index.ts")
const a02Start = moduleOne.indexOf('export const lessonTwo')
const a03Start = moduleOne.indexOf('export const lessonThree')
const a04Start = moduleOne.indexOf('export const lessonFour')
const a05Start = moduleOne.indexOf('export const lessonFive')
const a06Start = moduleOne.indexOf('export const lessonSix')
const finalStart = moduleOne.indexOf('export const moduleOneLessonDefinitions')

const a02 = moduleOne.slice(a02Start, a03Start)
const a03 = moduleOne.slice(a03Start, a04Start)
const a04 = moduleOne.slice(a04Start, a05Start)
const a05 = moduleOne.slice(a05Start, a06Start)
const a06 = moduleOne.slice(a06Start, finalStart)

scan("Aula 02", a02, [
  ...advancedMetrics,
  { label: "Impressão como métrica", pattern: "\\bimpress(?:ão|ões)\\b" },
  { label: "Conversão como métrica", pattern: "\\bconvers(?:ão|ões)\\b" },
])
scan("Aula 03", a03, advancedMetrics)
scan("Aula 04", a04, advancedBeyondM01)
scan("Aula 05", a05, advancedBeyondM01)
scan("Aula 06", a06, advancedBeyondM01)

if (failures.length) {
  console.error("\n[Titanium] Zero Assumption audit failed:\n")
  failures.forEach((failure) => console.error(`- ${failure}`))
  console.error(
    "\nEnsine o conceito na aula prevista antes de usá-lo como conhecimento prévio.",
  )
  process.exit(1)
}

console.log(
  "[Titanium] Zero Assumption audit passed: Módulo 01 respeita a ordem de dependências conceituais.",
)
