import type { Exam, Lesson } from "../types/learning"
import {
  assertTitaniumLessonArchitecture,
  TITANIUM_MASTERY_SCORE,
} from "./pedagogy"

// Demonstration content only. The final instructional copy will replace this
// dataset without requiring changes to the Lesson Journey components.
export const lessonOneDemo: Lesson = {
  id: "01",
  moduleId: "01",
  number: "01",
  title: "O que realmente é tráfego pago",
  masteryTime: "50–70 minutos",
  objective:
    "Compreender o que tráfego pago representa dentro de um sistema de aquisição.",
  overview:
    "Uma experiência demonstrativa da arquitetura que combina descoberta, explicação progressiva, aplicação, diagnóstico, síntese e prova de domínio.",
  demo: true,
  stages: [
    {
      id: "discovery",
      type: "discovery",
      eyebrow: "Descoberta",
      title: "Qual campanha parece melhor?",
      body: [
        "Observe dois sinais antes de receber uma explicação. A comparação existe para revelar como uma métrica isolada pode conduzir a uma conclusão precipitada.",
      ],
      comparison: [
        {
          label: "Campanha A",
          metrics: [
            { label: "CTR", value: "8,2%" },
            { label: "Conversão", value: "1,1%" },
          ],
        },
        {
          label: "Campanha B",
          metrics: [
            { label: "CTR", value: "3,9%" },
            { label: "Conversão", value: "5,4%" },
          ],
        },
      ],
    },
    {
      id: "context",
      type: "context",
      eyebrow: "Contexto",
      title: "Antes da plataforma, existe um sistema",
      body: [
        "Tráfego pago não começa no painel de anúncios. Ele começa em uma decisão de negócio: conquistar atenção relevante e conduzi-la até um resultado mensurável.",
        "Nesta demonstração, você vai separar movimento de resultado e reconhecer por que um clique isolado não representa sucesso.",
      ],
    },
    {
      id: "learn",
      type: "learn",
      eyebrow: "Learn · Aprenda",
      title: "Tráfego é fluxo, não destino",
      body: [
        "Uma campanha cria fluxo entre uma mensagem, uma audiência e uma próxima ação. A qualidade desse fluxo depende de intenção, oferta, experiência e mensuração.",
        "Uma taxa alta pode parecer positiva sem necessariamente produzir resultado econômico. Métricas precisam ser interpretadas em conjunto.",
      ],
      glossary: [
        {
          term: "CTR",
          original: "Click-Through Rate",
          translation: "Taxa de Cliques",
          explanation: "Percentual de impressões que produziram um clique.",
        },
        {
          term: "CPA",
          original: "Cost per Acquisition",
          translation: "Custo por Aquisição",
          explanation:
            "Valor médio investido para gerar uma aquisição ou conversão definida.",
        },
      ],
    },
    {
      id: "concept",
      type: "concept",
      eyebrow: "Conceito",
      title: "Aquisição é uma cadeia de dependências",
      body: [
        "A campanha influencia apenas parte do resultado. Mensagem, audiência, página, oferta, conversão e economia formam uma cadeia: a fragilidade de uma etapa limita o sistema inteiro.",
      ],
    },
    {
      id: "example",
      type: "example",
      eyebrow: "Exemplo",
      title: "Quando o clique ajuda o negócio",
      body: [
        "Uma campanha atrai pessoas com intenção compatível, conduz para uma oferta coerente e mede uma ação ligada à receita. Nesse cenário, o clique funciona como passagem útil.",
      ],
    },
    {
      id: "counterexample",
      type: "counterexample",
      eyebrow: "Contraexemplo",
      title: "Quando mais tráfego amplia o desperdício",
      body: [
        "Um anúncio chamativo produz muitos cliques, mas promete algo diferente da página. A conversão cai e o aumento de volume acelera um fluxo que já estava quebrado.",
      ],
    },
    {
      id: "think",
      type: "think",
      eyebrow: "Think · Pense",
      title: "O clique pode esconder um problema",
      prompt:
        "Por que uma campanha com CTR alto ainda pode gerar prejuízo para o negócio?",
      modelAnswer:
        "Porque o clique mede apenas uma passagem da jornada. Se a oferta, a página, a conversão ou a economia da aquisição forem frágeis, o volume de cliques pode ampliar o desperdício em vez de gerar resultado.",
    },
    {
      id: "decide",
      type: "decide",
      eyebrow: "Decide · Decida",
      title: "Onde investigar primeiro?",
      scenario:
        "O CPA aumentou 40%. O CPC permaneceu estável, mas a taxa de conversão caiu. Qual é a primeira investigação mais coerente?",
      allowRetry: true,
      options: [
        {
          id: "budget",
          label: "Aumentar imediatamente o orçamento da campanha",
          feedback:
            "Mais orçamento ampliaria o fluxo sem explicar a queda de conversão. Antes de escalar, localize a ruptura.",
        },
        {
          id: "conversion",
          label: "Investigar página, oferta e funcionamento da conversão",
          feedback:
            "Boa decisão. Com CPC estável e conversão menor, a primeira hipótese está depois do clique ou na qualidade do tráfego.",
          recommended: true,
        },
        {
          id: "ctr",
          label: "Otimizar apenas os anúncios para elevar o CTR",
          feedback:
            "CTR não explica sozinho a queda de conversão. Essa ação pode melhorar cliques e manter o problema econômico intacto.",
        },
      ],
    },
    {
      id: "visual",
      type: "visual",
      eyebrow: "Visualize",
      title: "A cadeia mínima da aquisição",
      body: [
        "Cada passagem precisa ser observável. Quando uma delas rompe, a campanha pode continuar gerando atividade sem gerar valor.",
      ],
      visualItems: [
        { label: "Atenção", detail: "A mensagem é percebida" },
        { label: "Visita", detail: "A pessoa entra no ambiente" },
        { label: "Ação", detail: "A conversão acontece" },
        { label: "Resultado", detail: "A economia se sustenta" },
      ],
    },
    {
      id: "business",
      type: "business",
      eyebrow: "Conexão com o negócio",
      title: "A métrica só importa quando muda uma decisão",
      body: [
        "O objetivo não é colecionar indicadores positivos. É reconhecer quais sinais explicam receita, margem, capacidade de atendimento e sustentabilidade da aquisição.",
      ],
    },
    {
      id: "practice",
      type: "practice",
      eyebrow: "Do · Execute",
      title: "Reconheça o fluxo de uma campanha",
      body: [
        "Use uma campanha conhecida ou um exemplo hipotético. Complete a inspeção mínima antes de avançar.",
      ],
      checklist: [
        "Identifiquei a mensagem que gera atenção",
        "Identifiquei a ação esperada após o clique",
        "Localizei a principal métrica de conversão",
        "Registrei qual resultado de negócio deveria ser produzido",
      ],
    },
    {
      id: "audit",
      type: "audit",
      eyebrow: "Audit · Diagnostique",
      title: "Leia o sintoma sem precipitar a solução",
      body: [
        "Cenário demonstrativo: 1.000 cliques, CPC estável, conversão caiu de 5% para 2,5% e o CPA dobrou.",
      ],
      auditPrompts: [
        "O que você observa?",
        "Qual é sua hipótese principal?",
        "O que investigaria primeiro?",
      ],
      commentedAnalysis:
        "O custo do clique não mudou. O aumento de CPA acompanha a queda da conversão. A investigação deve começar na qualidade do tráfego, na oferta, na página e no funcionamento da mensuração antes de alterar lances ou orçamento.",
    },
    {
      id: "mindmap",
      type: "mindmap",
      eyebrow: "Mapa Mental",
      title: "Conecte as partes",
      body: [
        "Você viu as partes separadamente. Agora conecte atenção, fluxo, conversão e resultado econômico.",
      ],
    },
    {
      id: "review",
      type: "review",
      eyebrow: "Revisão",
      title: "O que você aprendeu",
      reviewSections: [
        {
          title: "Princípios essenciais",
          items: [
            "Tráfego é parte de um sistema de aquisição.",
            "Cliques não representam resultado econômico por si só.",
          ],
        },
        {
          title: "Novos termos",
          items: ["CTR · Taxa de Cliques", "CPA · Custo por Aquisição"],
        },
        {
          title: "Erros comuns",
          items: [
            "Otimizar uma métrica isolada.",
            "Escalar antes de localizar a ruptura.",
          ],
        },
        {
          title: "Antes da prova",
          items: [
            "Saiba diferenciar atenção, visita, conversão e resultado.",
            "Consiga escolher a primeira investigação a partir dos sinais.",
          ],
        },
      ],
    },
    {
      id: "exam",
      type: "exam",
      eyebrow: "Prova da Aula",
      title: "Hora de provar domínio",
      body: ["O conteúdo foi percorrido. A aprovação exige nota mínima 9,0."],
    },
  ],
  completionMode: "exam",
  exam: {
    id: "lesson-01-demo-exam",
    title: "Prova demonstrativa · Aula 01",
    passingScore: TITANIUM_MASTERY_SCORE,
    demo: true,
    questions: [
      {
        id: "q1",
        kind: "objective",
        prompt: "Qual descrição representa melhor o papel do tráfego pago?",
        options: [
          {
            id: "a",
            label: "Comprar cliques como objetivo final",
            feedback:
              "O clique é uma passagem da jornada, não o resultado final.",
          },
          {
            id: "b",
            label: "Criar fluxo mensurável até um resultado",
            feedback: "Correto. O tráfego conecta atenção, ação e resultado.",
          },
        ],
        correctAnswer: "b",
        explanation:
          "Tráfego pago é um mecanismo de distribuição dentro de um sistema de aquisição.",
        reviewStageId: "learn",
      },
      {
        id: "q2",
        kind: "interpretation",
        prompt: "Um CTR alto prova que uma campanha é lucrativa?",
        options: [
          {
            id: "a",
            label: "Sim, porque mais cliques sempre geram lucro",
            feedback:
              "Cliques podem aumentar sem conversão ou resultado econômico.",
          },
          {
            id: "b",
            label: "Não, é preciso avaliar conversão e economia",
            feedback: "Correto. Métricas precisam de contexto.",
          },
        ],
        correctAnswer: "b",
        explanation:
          "CTR mede resposta ao anúncio, mas não mede sozinho o resultado do negócio.",
        reviewStageId: "think",
      },
      {
        id: "q3",
        kind: "objective",
        prompt: "O que significa CTR?",
        options: [
          {
            id: "a",
            label: "Taxa de Cliques",
            feedback: "Correto.",
          },
          {
            id: "b",
            label: "Custo Total de Receita",
            feedback: "Essa expansão não corresponde à sigla CTR.",
          },
        ],
        correctAnswer: "a",
        explanation:
          "CTR é Click-Through Rate, traduzido como Taxa de Cliques.",
        reviewStageId: "learn",
      },
      {
        id: "q4",
        kind: "objective",
        prompt: "O que o CPA expressa?",
        options: [
          {
            id: "a",
            label: "Custo médio para gerar uma aquisição",
            feedback: "Correto.",
          },
          {
            id: "b",
            label: "Quantidade de impressões do anúncio",
            feedback: "Impressões medem exibição, não custo por aquisição.",
          },
        ],
        correctAnswer: "a",
        explanation:
          "CPA relaciona investimento e aquisições ou conversões produzidas.",
        reviewStageId: "learn",
      },
      {
        id: "q5",
        kind: "decision",
        prompt: "Se o CPC está estável e a conversão cai, onde começar?",
        options: [
          {
            id: "a",
            label: "Aumentar o orçamento",
            feedback: "Escalar pode ampliar o desperdício.",
          },
          {
            id: "b",
            label: "Investigar o que acontece após o clique",
            feedback: "Correto. A queda aponta para a etapa de conversão.",
          },
        ],
        correctAnswer: "b",
        explanation:
          "A primeira investigação deve acompanhar o sinal que mudou.",
        reviewStageId: "decide",
      },
      {
        id: "q6",
        kind: "interpretation",
        prompt: "Qual sequência representa a cadeia mínima apresentada?",
        options: [
          {
            id: "a",
            label: "Atenção → Visita → Ação → Resultado",
            feedback: "Correto.",
          },
          {
            id: "b",
            label: "Orçamento → Clique → Orçamento → Impressão",
            feedback:
              "Essa sequência não representa a progressão da aquisição.",
          },
        ],
        correctAnswer: "a",
        explanation:
          "A cadeia acompanha a pessoa da percepção até o resultado.",
        reviewStageId: "visual",
      },
      {
        id: "q7",
        kind: "interpretation",
        prompt: "Uma métrica deve ser interpretada de que forma?",
        options: [
          {
            id: "a",
            label: "Isoladamente, sem considerar o objetivo",
            feedback: "Uma métrica isolada pode induzir uma decisão ruim.",
          },
          {
            id: "b",
            label: "Em conjunto com contexto e objetivo",
            feedback: "Correto.",
          },
        ],
        correctAnswer: "b",
        explanation:
          "O significado operacional depende das relações entre os sinais.",
        reviewStageId: "review",
      },
      {
        id: "q8",
        kind: "decision",
        prompt: "Qual ação deve preceder uma tentativa de escala?",
        options: [
          {
            id: "a",
            label: "Localizar a ruptura principal",
            feedback: "Correto.",
          },
          {
            id: "b",
            label: "Ignorar a conversão e elevar o orçamento",
            feedback:
              "Escalar sem diagnóstico pode multiplicar a ineficiência.",
          },
        ],
        correctAnswer: "a",
        explanation: "Diagnóstico precede escala em um sistema disciplinado.",
        reviewStageId: "audit",
      },
      {
        id: "q9",
        kind: "objective",
        prompt: "O clique representa qual parte da jornada?",
        options: [
          {
            id: "a",
            label: "Uma passagem, não o destino final",
            feedback: "Correto.",
          },
          {
            id: "b",
            label: "A confirmação automática de lucro",
            feedback: "Um clique não confirma conversão nem lucro.",
          },
        ],
        correctAnswer: "a",
        explanation:
          "O clique move a pessoa para outra etapa que ainda precisa funcionar.",
        reviewStageId: "context",
      },
      {
        id: "q10",
        kind: "diagnosis",
        prompt: "Qual comportamento combina com diagnóstico profissional?",
        options: [
          {
            id: "a",
            label: "Agir sobre a primeira métrica visível",
            feedback:
              "A primeira métrica visível nem sempre é a causa do problema.",
          },
          {
            id: "b",
            label: "Ler sinais, formular hipótese e priorizar investigação",
            feedback: "Correto.",
          },
        ],
        correctAnswer: "b",
        explanation:
          "Diagnóstico conecta evidência, hipótese e ordem de investigação.",
        reviewStageId: "audit",
      },
    ],
  },
  materials: [
    {
      id: "lesson-reference",
      type: "titanium-lesson",
      title: "Titanium Lesson",
      purpose: "Referência aprofundada e estruturada da aula.",
      status: "planned",
    },
    {
      id: "lesson-notes",
      type: "titanium-notes",
      title: "Titanium Notes",
      purpose: "Resumo condensado para revisão futura.",
      status: "planned",
    },
    {
      id: "lesson-mindmap",
      type: "mindmap",
      title: "Mapa Mental",
      purpose: "Síntese visual para reconstruir o raciocínio central.",
      status: "planned",
      reviewStageId: "mindmap",
    },
  ],
}

export const moduleFinalExamDemo: Exam = {
  id: "module-01-final-demo",
  title: "Prova Final do Módulo · Demonstração",
  passingScore: TITANIUM_MASTERY_SCORE,
  demo: true,
  questions: lessonOneDemo.exam!.questions.slice(0, 3),
}

assertTitaniumLessonArchitecture(lessonOneDemo)
