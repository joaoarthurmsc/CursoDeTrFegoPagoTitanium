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

const advancedMetrics = [
  { label: "CTR", pattern: "\\bCTR\\b" },
  { label: "CPC", pattern: "\\bCPC\\b" },
  { label: "CPA", pattern: "\\bCPA\\b" },
  { label: "CVR", pattern: "\\bCVR\\b" },
  { label: "ROAS", pattern: "\\bROAS\\b" },
  { label: "CAC", pattern: "\\bCAC\\b" },
  { label: "LTV", pattern: "\\bLTV\\b" },
  { label: "Smart Bidding", pattern: "Smart\\s+Bidding" },
  { label: "Bidding", pattern: "\\bbidding\\b" },
  { label: "PMax", pattern: "\\bPMax\\b" },
  { label: "Keyword", pattern: "\\bKeyword" },
  { label: "Search Term", pattern: "Search\\s+Term" },
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

if (failures.length) {
  console.error("\\n[Titanium] Zero Assumption audit failed:\\n")
  failures.forEach((failure) => console.error(`- ${failure}`))
  console.error(
    "\\nTeach the concept in its planned lesson before using it as prior knowledge.",
  )
  process.exit(1)
}

console.log(
  "[Titanium] Zero Assumption audit passed: Aula 00 and Aula 01 respect the concept dependency map.",
)
