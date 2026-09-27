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
    "Demonstração da arquitetura fechada A-D, visual-first e orientada a domínio.",
  demo: true,
  stages: [
    {
      id: "discovery",
      type: "discovery",
      eyebrow: "Descoberta",
      title: "Qual campanha parece melhor?",
      body: [
        "Observe dois sinais antes de receber uma explicação. A comparação revela como uma métrica isolada pode conduzir a uma conclusão precipitada.",
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
      eyebrow: "Aprenda",
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
      id: "think",
      type: "think",
      mode: "apply",
      eyebrow: "Pense",
      title: "O clique pode esconder um problema",
      scenario:
        "Por que uma campanha com CTR alto ainda pode gerar prejuízo para o negócio?",
      options: [
        {
          id: "a",
          label: "Porque CTR alto sempre aumenta o custo de mídia.",
          feedback: "CTR alto não implica automaticamente custo maior.",
        },
        {
          id: "b",
          label: "Porque o clique é apenas uma passagem; conversão, qualidade e economia ainda podem falhar.",
          feedback: "Correto. O clique não garante que as etapas seguintes criem valor.",
          recommended: true,
        },
        {
          id: "c",
          label: "Porque campanhas com muitos cliques não podem gerar vendas.",
          feedback: "Volume de cliques pode gerar vendas; o ponto é avaliar o sistema completo.",
        },
        {
          id: "d",
          label: "Porque CTR não possui nenhuma utilidade em análise de campanha.",
          feedback: "CTR é útil, mas não deve ser tratado como resultado final.",
        },
      ],
    },
    {
      id: "decide",
      type: "decide",
      mode: "apply",
      eyebrow: "Decida",
      title: "Onde investigar primeiro?",
      scenario:
        "O CPA aumentou 40%. O CPC permaneceu estável, mas a taxa de conversão caiu. Qual é a primeira investigação mais coerente?",
      allowRetry: true,
      options: [
        {
          id: "a",
          label: "Aumentar imediatamente o orçamento da campanha.",
          feedback: "Mais orçamento ampliaria o fluxo sem explicar a queda de conversão.",
        },
        {
          id: "b",
          label: "Investigar página, oferta e funcionamento da conversão.",
          feedback: "Correto. O sinal que mudou está depois do clique.",
          recommended: true,
        },
        {
          id: "c",
          label: "Otimizar apenas os anúncios para elevar o CTR.",
          feedback: "CTR não explica sozinho a queda de conversão.",
        },
        {
          id: "d",
          label: "Duplicar a campanha e comparar os resultados.",
          feedback: "Duplicar antes do diagnóstico adiciona ruído e complexidade.",
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
      id: "practice",
      type: "practice",
      eyebrow: "Execute",
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
      mode: "apply",
      eyebrow: "Diagnostique",
      title: "Leia o sintoma sem precipitar a solução",
      body: [
        "Cenário: 1.000 cliques, CPC estável, conversão caiu de 5% para 2,5% e o CPA dobrou.",
      ],
      scenario: "Qual hipótese merece prioridade na investigação?",
      options: [
        {
          id: "a",
          label: "O CPC é a causa principal porque todo aumento de CPA vem do clique.",
          feedback: "O cenário informa CPC estável, portanto o sinal que mudou está em outro ponto.",
        },
        {
          id: "b",
          label: "A queda de conversão deve ser investigada em tráfego, oferta, página e mensuração.",
          feedback: "Correto. O CPA dobrou junto com a deterioração da conversão.",
          recommended: true,
        },
        {
          id: "c",
          label: "O orçamento diário é necessariamente a causa.",
          feedback: "Não há evidência apresentada sobre orçamento como causa.",
        },
        {
          id: "d",
          label: "O problema deve ser resolvido trocando bidding imediatamente.",
          feedback: "A prescrição vem antes do diagnóstico nessa opção.",
        },
      ],
    },
    {
      id: "mindmap",
      type: "mindmap",
      eyebrow: "Mapa Mental",
      title: "Conecte as partes",
      body: [
        "O mapa visual definitivo da Aula 01 será produzido junto com o conteúdo final.",
      ],
    },
    {
      id: "review",
      type: "review",
      eyebrow: "Revisão",
      title: "O que precisa permanecer",
      reviewSections: [
        {
          title: "Princípios essenciais",
          items: [
            "Tráfego é parte de um sistema de aquisição.",
            "Cliques não representam resultado econômico por si só.",
          ],
        },
        {
          title: "Erros comuns",
          items: [
            "Otimizar uma métrica isolada.",
            "Escalar antes de localizar a ruptura.",
          ],
        },
      ],
    },
    {
      id: "exam",
      type: "exam",
      eyebrow: "Prova da Aula",
      title: "Hora de provar domínio",
      body: ["A aprovação exige nota mínima 9,0. Todas as questões usam alternativas A-D."],
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
          { id: "a", label: "Comprar cliques como objetivo final", feedback: "O clique é uma passagem, não o destino." },
          { id: "b", label: "Criar fluxo mensurável até um resultado", feedback: "Correto.", },
          { id: "c", label: "Aumentar seguidores independentemente do negócio", feedback: "Seguidores não definem o papel da mídia paga." },
          { id: "d", label: "Usar exclusivamente Google Search", feedback: "Tráfego pago não se limita a uma campanha ou inventário." },
        ],
        correctAnswer: "b",
        explanation: "Tráfego pago é um mecanismo de distribuição dentro de um sistema de aquisição.",
        reviewStageId: "learn",
      },
      {
        id: "q2",
        kind: "interpretation",
        prompt: "Um CTR alto prova que uma campanha é lucrativa?",
        options: [
          { id: "a", label: "Sim, porque mais cliques sempre geram lucro", feedback: "Cliques podem aumentar sem conversão." },
          { id: "b", label: "Não, é preciso avaliar conversão e economia", feedback: "Correto." },
          { id: "c", label: "Sim, desde que CTR seja maior que 5%", feedback: "Não existe um limiar universal que prove lucro." },
          { id: "d", label: "Não, porque CTR nunca deve ser analisado", feedback: "CTR é útil, mas precisa de contexto." },
        ],
        correctAnswer: "b",
        explanation: "CTR mede resposta ao anúncio, não o resultado completo do negócio.",
        reviewStageId: "think",
      },
      {
        id: "q3",
        kind: "objective",
        prompt: "O que significa CTR?",
        options: [
          { id: "a", label: "Taxa de Cliques", feedback: "Correto." },
          { id: "b", label: "Custo Total de Receita", feedback: "Não corresponde à sigla." },
          { id: "c", label: "Taxa de Conversão de Receita", feedback: "Essa não é a definição de CTR." },
          { id: "d", label: "Custo por Tráfego Relevante", feedback: "Essa não é a definição de CTR." },
        ],
        correctAnswer: "a",
        explanation: "CTR é Click-Through Rate, traduzido como Taxa de Cliques.",
        reviewStageId: "learn",
      },
      {
        id: "q4",
        kind: "objective",
        prompt: "O que o CPA expressa?",
        options: [
          { id: "a", label: "Custo médio para gerar uma aquisição", feedback: "Correto." },
          { id: "b", label: "Quantidade de impressões do anúncio", feedback: "Impressões medem exibição." },
          { id: "c", label: "Percentual de cliques sobre impressões", feedback: "Isso descreve CTR." },
          { id: "d", label: "Receita total da campanha", feedback: "Receita e CPA são medidas diferentes." },
        ],
        correctAnswer: "a",
        explanation: "CPA relaciona investimento e aquisições ou conversões produzidas.",
        reviewStageId: "learn",
      },
      {
        id: "q5",
        kind: "decision",
        prompt: "Se o CPC está estável e a conversão cai, onde começar?",
        options: [
          { id: "a", label: "Aumentar o orçamento", feedback: "Escalar pode ampliar o desperdício." },
          { id: "b", label: "Investigar o que acontece após o clique", feedback: "Correto." },
          { id: "c", label: "Trocar todos os anúncios", feedback: "O sinal apresentado está na conversão." },
          { id: "d", label: "Ignorar a queda e esperar", feedback: "Esperar sem investigar não produz diagnóstico." },
        ],
        correctAnswer: "b",
        explanation: "A investigação deve acompanhar o sinal que mudou.",
        reviewStageId: "decide",
      },
      {
        id: "q6",
        kind: "interpretation",
        prompt: "Qual sequência representa a cadeia mínima apresentada?",
        options: [
          { id: "a", label: "Atenção → Visita → Ação → Resultado", feedback: "Correto." },
          { id: "b", label: "Orçamento → Clique → Orçamento → Impressão", feedback: "Não representa a progressão." },
          { id: "c", label: "Receita → Impressão → Clique → Atenção", feedback: "A ordem está invertida." },
          { id: "d", label: "Conversão → Atenção → Orçamento → Visita", feedback: "A sequência não segue a jornada." },
        ],
        correctAnswer: "a",
        explanation: "A cadeia acompanha a pessoa da percepção até o resultado.",
        reviewStageId: "visual",
      },
      {
        id: "q7",
        kind: "interpretation",
        prompt: "Uma métrica deve ser interpretada de que forma?",
        options: [
          { id: "a", label: "Isoladamente, sem considerar o objetivo", feedback: "Pode induzir decisão ruim." },
          { id: "b", label: "Em conjunto com contexto e objetivo", feedback: "Correto." },
          { id: "c", label: "Apenas comparando com o mês anterior", feedback: "A comparação temporal é uma evidência, não o contexto inteiro." },
          { id: "d", label: "Somente quando melhora", feedback: "Métricas precisam ser lidas também quando pioram ou permanecem estáveis." },
        ],
        correctAnswer: "b",
        explanation: "O significado operacional depende das relações entre os sinais.",
        reviewStageId: "review",
      },
      {
        id: "q8",
        kind: "decision",
        prompt: "Qual ação deve preceder uma tentativa de escala?",
        options: [
          { id: "a", label: "Localizar a ruptura principal", feedback: "Correto." },
          { id: "b", label: "Ignorar a conversão e elevar o orçamento", feedback: "Pode multiplicar ineficiência." },
          { id: "c", label: "Duplicar campanhas sem hipótese", feedback: "Adiciona complexidade sem diagnóstico." },
          { id: "d", label: "Trocar lances automaticamente", feedback: "Ação sem leitura não substitui diagnóstico." },
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
          { id: "a", label: "Uma passagem, não o destino final", feedback: "Correto." },
          { id: "b", label: "A confirmação automática de lucro", feedback: "Clique não confirma lucro." },
          { id: "c", label: "A própria conversão final", feedback: "Clique e conversão são etapas diferentes." },
          { id: "d", label: "O valor de vida do cliente", feedback: "LTV é outra medida." },
        ],
        correctAnswer: "a",
        explanation: "O clique move a pessoa para uma etapa que ainda precisa funcionar.",
        reviewStageId: "context",
      },
      {
        id: "q10",
        kind: "diagnosis",
        prompt: "Qual comportamento combina com diagnóstico profissional?",
        options: [
          { id: "a", label: "Agir sobre a primeira métrica visível", feedback: "A primeira métrica nem sempre é a causa." },
          { id: "b", label: "Ler sinais, formular hipótese e priorizar investigação", feedback: "Correto." },
          { id: "c", label: "Copiar a ação feita em outra conta", feedback: "Contextos diferentes exigem leitura própria." },
          { id: "d", label: "Alterar várias variáveis ao mesmo tempo", feedback: "Isso dificulta isolar causa e efeito." },
        ],
        correctAnswer: "b",
        explanation: "Diagnóstico conecta evidência, hipótese e ordem de investigação.",
        reviewStageId: "audit",
      },
    ],
  },
  materials: [
    {
      id: "lesson-guide",
      type: "titanium-lesson",
      title: "Guia + Notas da Aula",
      purpose: "Material único para estudo e revisão do conteúdo.",
      status: "planned",
    },
    {
      id: "lesson-mindmap",
      type: "mindmap",
      title: "Mapa Mental",
      purpose: "Imagem visual para reconstruir o raciocínio central.",
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
