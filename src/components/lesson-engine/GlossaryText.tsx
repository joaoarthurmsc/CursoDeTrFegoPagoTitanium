import { Fragment, type ReactNode } from "react"
import { getGlossaryEntry, glossaryAliases } from "../../data/glossary"
import GlossaryTerm from "./GlossaryTerm"

const aliasPattern = new RegExp(
  glossaryAliases
    .map((alias) => alias.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
    .join("|"),
  "giu",
)

function isWordCharacter(value?: string) {
  return Boolean(value && /[\p{L}\p{N}]/u.test(value))
}

export default function GlossaryText({ text }: { text: string }) {
  const matches = Array.from(text.matchAll(aliasPattern)).filter((match) => {
    const index = match.index ?? 0
    const matched = match[0]
    const previous = text[index - 1]
    const next = text[index + matched.length]

    return !isWordCharacter(previous) && !isWordCharacter(next)
  })

  if (!matches.length) return <>{text}</>

  const result: ReactNode[] = []
  let cursor = 0

  for (const match of matches) {
    const index = match.index ?? 0
    const matched = match[0]
    const entry = getGlossaryEntry(matched)

    if (!entry) continue

    if (index > cursor) {
      result.push(
        <Fragment key={`text-${cursor}`}>{text.slice(cursor, index)}</Fragment>,
      )
    }

    result.push(
      <GlossaryTerm
        key={`term-${index}-${matched}`}
        entry={entry}
        displayText={matched}
      />,
    )
    cursor = index + matched.length
  }

  if (cursor < text.length) {
    result.push(<Fragment key={`text-${cursor}`}>{text.slice(cursor)}</Fragment>)
  }

  return <>{result}</>
}
