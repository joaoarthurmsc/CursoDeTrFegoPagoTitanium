import fs from "node:fs"
import path from "node:path"

const files = [
  "src/data/immersionLesson.ts",
  "src/data/lessonDemo.ts",
]

const source = files.map((file) => fs.readFileSync(file, "utf8")).join("\n")
const refs = [...source.matchAll(/["'](\/images\/modulo\d{2}\/aula\d{2}\/modulo\d{2}aula\d{2}imagem\d{2}\.png)["']/g)]
  .map((match) => match[1])

const unique = [...new Set(refs)]
const failures = []

for (const ref of unique) {
  const local = path.join("public", ref.replace(/^\//, ""))
  if (!fs.existsSync(local)) {
    failures.push(`asset referenced but missing: ${ref}`)
  }

  const base = path.basename(ref)
  if (!/^modulo\d{2}aula\d{2}imagem\d{2}\.png$/.test(base)) {
    failures.push(`invalid asset name: ${ref}`)
  }
}

const expected = [
  ...Array.from({ length: 5 }, (_, index) =>
    `/images/modulo00/aula00/modulo00aula00imagem${String(index + 1).padStart(2, "0")}.png`
  ),
  ...Array.from({ length: 6 }, (_, index) =>
    `/images/modulo01/aula01/modulo01aula01imagem${String(index + 1).padStart(2, "0")}.png`
  ),
]

for (const ref of expected) {
  if (!unique.includes(ref)) {
    failures.push(`expected Aula 00/01 asset is not referenced: ${ref}`)
  }
}

const oldVisualRefs = [
  "/lessons/aula-00/Titanium_Niveis_N0_N6.png",
  "/materials/aula-00/Titanium_Mind_Map_Aula_00.png",
  "/lessons/aula-01/Titanium_Atencao_Intencao.svg",
  "/lessons/aula-01/Titanium_Trafego_Caminho.svg",
  "/materials/aula-01/Titanium_Mind_Map_Aula_01.svg",
]

for (const ref of oldVisualRefs) {
  if (source.includes(ref)) {
    failures.push(`legacy visual path still referenced: ${ref}`)
  }
}

if (failures.length) {
  console.error("\n[Titanium] Lesson asset audit failed:\n")
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}

console.log(
  `[Titanium] Lesson asset audit passed: ${unique.length} organized PNG assets referenced.`,
)
