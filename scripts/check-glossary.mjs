import fs from "node:fs"
import path from "node:path"

const root = process.cwd()
const glossaryPath = path.join(root, "src", "data", "glossary.ts")
const lessonFiles = [
  path.join(root, "src", "data", "immersionLesson.ts"),
  path.join(root, "src", "data", "lessonDemo.ts"),
]

const glossarySource = fs.readFileSync(glossaryPath, "utf8")
const glossaryTerms = new Set(
  Array.from(glossarySource.matchAll(/term:\s*"([^"]+)"/g), (match) =>
    match[1].toUpperCase(),
  ),
)

const ignored = new Set([
  "A",
  "B",
  "C",
  "D",
  "PDF",
  "PNG",
  "JPG",
  "WEBP",
  "SVG",
  "THINK",
  "LEARN",
  "DECIDE",
  "REVIEW",
  "MAP",
  "TITANIUM",
  "N0",
  "N1",
  "N2",
  "N3",
  "N4",
  "N5",
  "N6",
])

const missing = new Set()

for (const file of lessonFiles) {
  if (!fs.existsSync(file)) continue
  const source = fs.readFileSync(file, "utf8")
  for (const match of source.matchAll(/\b[A-Z][A-Z0-9]{1,7}\b/g)) {
    const term = match[0].toUpperCase()
    if (!ignored.has(term) && !glossaryTerms.has(term)) missing.add(term)
  }
}

if (missing.size) {
  console.error(
    `Glossary audit found uppercase terms without a central entry: ${Array.from(missing)
      .sort()
      .join(", ")}`,
  )
  process.exit(1)
}

console.log(`Glossary audit OK — ${glossaryTerms.size} central terms checked.`)
