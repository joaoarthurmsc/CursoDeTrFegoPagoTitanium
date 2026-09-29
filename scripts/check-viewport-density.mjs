import fs from "node:fs"

const files = [
  "src/data/immersionLesson.ts",
  "src/data/lessonDemo.ts",
  "src/data/module01/index.ts",
]

const limits = { prompt: 240, scenario: 240, label: 180 }
const failures = []

for (const file of files) {
  const source = fs.readFileSync(file, "utf8")
  for (const [field, limit] of Object.entries(limits)) {
    const expression = new RegExp(`"${field}":\\s*"([^"]*)"`, "g")
    let match
    while ((match = expression.exec(source))) {
      const value = match[1]
      if (value.length > limit) {
        failures.push(`${file}: ${field} com ${value.length} caracteres (limite ${limit}): ${value.slice(0, 90)}…`)
      }
    }
  }
}

if (failures.length) {
  console.error("\n[Titanium] Viewport density audit failed:\n")
  failures.forEach((failure) => console.error(`- ${failure}`))
  process.exit(1)
}

console.log("[Titanium] Viewport density audit passed: enunciados e alternativas permanecem no envelope editorial.")
