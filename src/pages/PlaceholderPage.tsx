import { navigate } from "../app/navigation"
import {
  Button,
  Eyebrow,
  Heading,
} from "../components/titanium/PageUI"

export default function PlaceholderPage({ kind }: { kind: string }) {
  return (
    <div className="flex min-h-placeholder items-center">
      <div className="max-w-2xl">
        <Eyebrow>Estrutura preparada</Eyebrow>
        <Heading
          level={1}
          className="font-display text-4xl font-semibold md:text-5xl"
        >
          {kind}
        </Heading>
        <p className="mt-5 text-base leading-7 text-muted">
          Esta página faz parte da fundação Titanium e receberá conteúdo em uma
          próxima etapa da formação.
        </p>
        <Button
          variant="secondary"
          className="mt-8"
          onClick={() => navigate("/")}
        >
          Voltar ao início
        </Button>
      </div>
    </div>
  )
}
