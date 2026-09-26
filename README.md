# Titanium

Ambiente privado de formação em tráfego pago, aquisição, performance e estratégia.

## Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS v4

## Como instalar

```bash
pnpm install
```

## Como rodar

```bash
pnpm dev
```

## Como gerar o build

```bash
pnpm build
```

Para validar os tipos:

```bash
pnpm exec tsc --noEmit
```

## Estrutura principal

- `src/app`: inicialização, navegação por History API e composição das rotas.
- `src/components`: componentes de layout, Home, módulos, Lesson Journey, provas e elementos visuais compartilhados.
- `src/pages`: entradas das páginas associadas às rotas.
- `src/data`: currículo, aulas, avaliações e princípios pedagógicos em formato de dados.
- `src/storage`: repositório de aprendizagem e seletores de progresso.
- `src/types`: contratos compartilhados de conteúdo, progresso e persistência.

## Persistência

O progresso usa `localStorage` por meio de `learningRepository`. Componentes não devem acessar o armazenamento diretamente. A chave atual deve ser preservada para manter compatibilidade com o progresso já salvo.

## Importante

- Não existe backend ou autenticação atualmente.
- A aplicação foi planejada inicialmente para dois usuários, com progresso local por navegador.
- Novas aulas devem ser adicionadas preferencialmente como dados consumidos pelo Lesson Journey Engine, sem duplicar páginas ou componentes React.
