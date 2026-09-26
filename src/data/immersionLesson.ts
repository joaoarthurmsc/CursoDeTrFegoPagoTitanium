import type { DiagnosticQuestion, ExamOption, Lesson } from "../types/learning"
import { assertTitaniumLessonArchitecture } from "./pedagogy"

const option = (id: string, label: string): ExamOption => ({
  id,
  label,
  feedback: "",
})

const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: "d01",
    competence: "Fundamentos",
    prompt:
      "Uma campanha recebeu 20.000 impressões e 1.400 cliques. O responsável afirma: “Tivemos muitos cliques. Portanto, a campanha foi um sucesso.” Qual é a análise mais adequada?",
    options: [
      option("a", "Correto. Clique é o objetivo final do tráfego pago."),
      option("b", "Correto, desde que o CTR seja superior a 5%."),
      option(
        "c",
        "Ainda não existe informação suficiente para avaliar o resultado econômico da campanha.",
      ),
      option("d", "A campanha foi ruim porque 1.400 cliques são poucos."),
    ],
    correctAnswer: "c",
  },
  {
    id: "d02",
    competence: "Fundamentos",
    prompt: "Qual descrição melhor representa tráfego pago?",
    options: [
      option(
        "a",
        "Comprar seguidores e visitas para aumentar presença digital.",
      ),
      option("b", "Comprar cliques pelo menor preço possível."),
      option(
        "c",
        "Utilizar investimento em mídia para gerar e direcionar atenção/intenção dentro de um sistema de aquisição mensurável.",
      ),
      option("d", "Utilizar exclusivamente Google Ads para gerar leads."),
    ],
    correctAnswer: "c",
  },
  {
    id: "d03",
    competence: "Negócio e Economia",
    prompt:
      "Uma clínica ganha, em média, R$ 400 de contribuição econômica por novo paciente depois dos principais custos variáveis. Seu CAC é de R$ 550. Qual afirmação é mais adequada?",
    options: [
      option(
        "a",
        "O marketing está funcionando porque existem novos pacientes.",
      ),
      option(
        "b",
        "Existe um possível problema econômico porque adquirir o cliente custa mais do que o valor disponível nessa relação analisada.",
      ),
      option("c", "CAC não deve ser comparado com economia do negócio."),
      option("d", "Basta aumentar o orçamento para compensar."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d04",
    competence: "Negócio e Economia",
    prompt:
      "O que melhor representa LTV — Lifetime Value (Valor do Cliente ao Longo do Tempo)?",
    options: [
      option("a", "O valor da primeira compra."),
      option("b", "O custo médio de um clique."),
      option(
        "c",
        "O valor econômico que um cliente gera ao longo de sua relação com o negócio.",
      ),
      option("d", "O orçamento mensal de marketing."),
    ],
    correctAnswer: "c",
  },
  {
    id: "d05",
    competence: "Google Ads",
    prompt: "Em termos gerais, a publicidade no Google Ads opera através de:",
    options: [
      option("a", "uma tabela fixa de preços definida pelo Google."),
      option(
        "b",
        "um sistema de leilões que considera múltiplos fatores para determinar oportunidades de exibição.",
      ),
      option("c", "compra antecipada obrigatória de posições."),
      option("d", "ordem de chegada dos anunciantes."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d06",
    competence: "Google Ads",
    prompt:
      "Uma empresa acabou de abrir uma conta no Google Ads. Qual sequência demonstra maior maturidade?",
    options: [
      option(
        "a",
        "Criar campanha → escolher orçamento → anunciar → pensar em conversões depois.",
      ),
      option(
        "b",
        "Definir resultado de negócio → preparar mensuração → estruturar campanha → anunciar → analisar.",
      ),
      option(
        "c",
        "Escolher palavras-chave com maior volume → utilizar orçamento máximo.",
      ),
      option("d", "Copiar a campanha de um concorrente."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d07",
    competence: "Search",
    prompt:
      "O anunciante configurou a Keyword “ortopedista fortaleza”. Um usuário pesquisou “médico especialista em joelho perto de mim”. Qual é o segundo texto?",
    options: [
      option("a", "Keyword."),
      option("b", "Search Term — Termo de pesquisa."),
      option("c", "Negative Keyword."),
      option("d", "Asset."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d08",
    competence: "Search",
    prompt:
      "Uma clínica de ortopedia aparece frequentemente para pesquisas contendo “curso de ortopedia”. Essas pessoas procuram formação acadêmica, não uma consulta. Qual recurso merece ser investigado?",
    options: [
      option("a", "Aumentar os lances."),
      option("b", "Negative Keywords — Palavras-chave negativas."),
      option("c", "Aumentar o raio geográfico."),
      option("d", "Aumentar orçamento."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d09",
    competence: "Conversão",
    prompt:
      "Uma campanha gera tráfego altamente relevante, mas quase ninguém completa o formulário da página. Qual hipótese merece investigação?",
    options: [
      option("a", "Somente o anúncio."),
      option(
        "b",
        "A experiência e a capacidade de conversão da página de destino.",
      ),
      option("c", "Apenas o orçamento diário."),
      option("d", "Apenas o número de impressões."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d10",
    competence: "Conversão",
    prompt:
      "Uma empresa dobra o número de visitantes de uma página que possui graves problemas de conversão. O que necessariamente acontecerá?",
    options: [
      option("a", "As vendas dobrarão."),
      option("b", "O CAC cairá pela metade."),
      option(
        "c",
        "Nada garante que o resultado econômico melhorará apenas porque o tráfego aumentou.",
      ),
      option("d", "O Google corrigirá automaticamente a página."),
    ],
    correctAnswer: "c",
  },
  {
    id: "d11",
    competence: "Tracking e Mensuração",
    prompt:
      "Uma campanha gera formulários, mas o Google Ads não possui conversões configuradas corretamente. Qual é o principal problema?",
    options: [
      option("a", "O site ficará mais lento."),
      option(
        "b",
        "O sistema e o gestor terão uma visão incompleta dos resultados usados para análise e otimização.",
      ),
      option("c", "O CPC necessariamente aumentará."),
      option("d", "Os anúncios serão automaticamente suspensos."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d12",
    competence: "Tracking e Mensuração",
    prompt:
      "Uma clínica registra no Google Ads todos os formulários como conversões, mas não diferencia lead inválido, lead qualificado, paciente agendado e paciente que comprou. Qual risco existe?",
    options: [
      option("a", "Nenhum. Toda conversão possui o mesmo valor."),
      option(
        "b",
        "Otimizar para quantidade sem compreender qualidade ou resultado real.",
      ),
      option("c", "O Google Ads deixa de funcionar."),
      option("d", "Isso afeta apenas o design da campanha."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d13",
    competence: "Diagnóstico",
    prompt: "O CPA subiu 35% nesta semana. Qual deve ser a primeira postura?",
    options: [
      option("a", "Reduzir imediatamente orçamento em 35%."),
      option("b", "Criar outra campanha."),
      option(
        "c",
        "Decompor o resultado e investigar quais variáveis mudaram antes de prescrever uma ação.",
      ),
      option("d", "Trocar todas as palavras-chave."),
    ],
    correctAnswer: "c",
  },
  {
    id: "d14",
    competence: "Diagnóstico",
    prompt:
      "Qual mudança oferece a pista mais forte para explicar o aumento do CPA?",
    table: {
      headers: ["Métrica", "Antes", "Agora"],
      rows: [
        ["CPC", "R$ 4,00", "R$ 4,10"],
        ["CVR", "10%", "5%"],
        ["CPA", "R$ 40", "aproximadamente R$ 82"],
      ],
    },
    options: [
      option("a", "A pequena mudança do CPC."),
      option("b", "A queda da taxa de conversão."),
      option("c", "Nenhuma das duas."),
      option("d", "Não existe relação entre essas métricas."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d15",
    competence: "Bidding e Automação",
    prompt:
      "O que melhor descreve Smart Bidding — Estratégias de Lances Inteligentes?",
    options: [
      option("a", "O gestor escolhe manualmente o lance de cada leilão."),
      option(
        "b",
        "O Google utiliza automação e sinais disponíveis para ajustar lances conforme determinado objetivo.",
      ),
      option("c", "O Google cria automaticamente todo o negócio."),
      option("d", "É sinônimo de Broad Match."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d16",
    competence: "Bidding e Automação",
    prompt: "Qual mentalidade é mais adequada sobre automação?",
    options: [
      option(
        "a",
        "Automatizar tudo porque algoritmos sempre sabem mais que o gestor.",
      ),
      option(
        "b",
        "Evitar toda automação porque o controle manual é sempre superior.",
      ),
      option(
        "c",
        "Automatizar decisões mecânicas quando apropriado, preservando decisões estratégicas e qualidade dos sinais.",
      ),
      option("d", "Utilizar automação apenas quando a campanha estiver ruim."),
    ],
    correctAnswer: "c",
  },
  {
    id: "d17",
    competence: "Ecossistema Google",
    prompt: "Performance Max — PMax opera exclusivamente na Rede de Pesquisa?",
    options: [
      option("a", "Sim."),
      option(
        "b",
        "Não. É uma abordagem que pode utilizar diferentes inventários/canais do ecossistema Google.",
      ),
      option("c", "Sim, mas apenas em mobile."),
      option("d", "Somente se houver Merchant Center."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d18",
    competence: "Ecossistema Google",
    prompt:
      "Uma loja virtual possui centenas de produtos. Qual elemento ganha especial importância para campanhas de Shopping?",
    options: [
      option("a", "Apenas o texto da homepage."),
      option(
        "b",
        "A qualidade e estrutura dos dados do catálogo/feed de produtos.",
      ),
      option("c", "Quantidade de seguidores no Instagram."),
      option("d", "Número de funcionários."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d19",
    competence: "Estratégia e Escala",
    prompt:
      "Uma campanha apresenta ROAS de 5x. Podemos concluir automaticamente que o negócio é altamente lucrativo?",
    options: [
      option("a", "Sim. ROAS 5x sempre significa lucro excelente."),
      option(
        "b",
        "Não. Precisamos compreender margem, custos e demais elementos econômicos do negócio.",
      ),
      option("c", "Sim, desde que existam mais de 100 conversões."),
      option("d", "Não, porque ROAS nunca deve ser utilizado."),
    ],
    correctAnswer: "b",
  },
  {
    id: "d20",
    competence: "Estratégia e Escala",
    prompt:
      "Uma campanha está gerando resultado rentável e consistente. Qual decisão representa melhor uma abordagem profissional de escala?",
    options: [
      option(
        "a",
        "Dobrar imediatamente o orçamento e esperar o mesmo desempenho proporcional.",
      ),
      option("b", "Nunca aumentar orçamento."),
      option(
        "c",
        "Escalar de forma monitorada, observando capacidade do mercado, economia, estabilidade e possíveis mudanças marginais de desempenho.",
      ),
      option("d", "Duplicar a campanha dez vezes."),
    ],
    correctAnswer: "c",
  },
]

export const immersionLesson: Lesson = {
  id: "a00",
  moduleId: "00",
  number: "00",
  title: "Imersão Titanium",
  masteryTime: "35–50 minutos",
  objective:
    "Compreender como estudar dentro do Titanium, como funcionam progresso, domínio, avaliações, revisão, níveis, Cases e Diário de Decisões.",
  overview:
    "Abertura da formação. Pré-requisito: nenhum. Esta aula acontece antes do Módulo 01 e não pertence aos dez módulos.",
  completionMode: "diagnostic",
  stages: [
    {
      id: "welcome",
      type: "context",
      eyebrow: "Etapa 01 · Abertura",
      title: "Bem-vindo ao Titanium.",
      body: [
        "Você não está entrando em uma biblioteca de vídeos.",
        "Também não está entrando em um lugar onde assistir, clicar em “concluído” e seguir em frente é suficiente.",
        "O Titanium foi construído para transformar conteúdo em capacidade.",
        "Ao longo da formação, você será constantemente convidado a compreender, interpretar, decidir, executar, diagnosticar, errar, corrigir e tentar novamente.",
      ],
      sequence: [
        { label: "ter visto" },
        { label: "ter entendido" },
        { label: "saber fazer" },
      ],
      afterSequenceLead: "Nosso objetivo é a terceira.",
      quote:
        "Nenhuma aula é considerada concluída por consumo. Ela é concluída por domínio demonstrado.",
    },
    {
      id: "what-is-learning",
      type: "think",
      eyebrow: "Etapa 02 · Think",
      title: "O que significa aprender?",
      prompt: "Quando você pode dizer que realmente aprendeu alguma coisa?",
      body: [
        "Não existe uma resposta “correta” aqui. Escreva com suas palavras.",
      ],
      modelAnswer:
        "Uma boa definição de aprendizagem vai além de lembrar informações. Você realmente domina um assunto quando consegue explicar o princípio com suas próprias palavras, reconhecê-lo em situações diferentes, tomar uma decisão utilizando esse conhecimento, aplicá-lo sem depender constantemente de instruções e identificar quando algo não está funcionando.",
      selfAssessment: {
        prompt:
          "Sua definição inicial estava mais próxima de lembrar conteúdo ou de ser capaz de utilizá-lo?",
        options: [
          "Mais próxima de lembrar",
          "Mais próxima de utilizar",
          "Mistura das duas",
        ],
      },
    },
    {
      id: "consumption-is-not-mastery",
      type: "learn",
      eyebrow: "Etapa 03 · Learn",
      title: "Assistir não significa dominar.",
      body: [
        "É possível assistir a uma aula inteira e, algumas horas depois, não conseguir responder: “Qual decisão você tomaria nesta situação?”",
        "É possível memorizar que CTR — Click-Through Rate (Taxa de Cliques) representa a relação entre impressões e cliques e ainda não saber dizer se determinado CTR é um problema, um sintoma ou sequer uma métrica relevante para a decisão em questão.",
      ],
      sequence: [
        {
          label: "Informação",
          detail: "Você entrou em contato com o conceito.",
        },
        {
          label: "Compreensão",
          detail: "Você entende o que ele significa.",
        },
        {
          label: "Aplicação",
          detail: "Você consegue utilizá-lo.",
        },
        {
          label: "Diagnóstico",
          detail: "Você consegue relacioná-lo a um problema real.",
        },
        {
          label: "Domínio",
          detail:
            "Você consegue decidir e justificar sem depender do professor.",
        },
      ],
      afterSequence: [
        "A formação foi construída para avançar progressivamente por essas camadas.",
      ],
    },
    {
      id: "learning-cycle",
      type: "visual",
      eyebrow: "Etapa 04 · Visual",
      title: "Ciclo de Aprendizagem Titanium",
      body: [],
      highlight: "Errar faz parte do processo.",
      sequence: [
        { label: "APRENDER" },
        { label: "PENSAR" },
        { label: "APLICAR" },
        { label: "TESTAR" },
        { label: "ERRAR" },
        { label: "CORRIGIR" },
        { label: "TESTAR NOVAMENTE" },
        { label: "DOMINAR" },
      ],
      afterSequenceLead: "Errar não interrompe o processo.",
      afterSequence: [
        "O problema não é responder incorretamente. O problema é passar por um erro sem descobrir por que seu raciocínio levou até ele.",
        "Por isso o Titanium não trabalha apenas com gabaritos. Trabalha com correção de raciocínio.",
      ],
    },
    {
      id: "lesson-anatomy",
      type: "learn",
      eyebrow: "Etapa 05 · Learn",
      title: "Uma aula não é uma página.",
      body: [
        "Cada Aula Titanium substitui aquilo que normalmente seria uma aula gravada longa.",
        "Mas, em vez de uma hora assistindo passivamente alguém falar, o conteúdo é dividido em pequenas experiências.",
        "Também existirão exemplos, tabelas, screenshots, comparações, Cases, simulações, mapas, revisões e avaliações.",
      ],
      cards: [
        {
          title: "LEARN — Aprenda",
          description: "Explicação de conceitos.",
        },
        {
          title: "THINK — Pense",
          description: "Você precisa formular uma resposta antes de continuar.",
        },
        {
          title: "DECIDE — Decida",
          description: "Uma situação exige uma decisão.",
        },
        {
          title: "DO — Execute",
          description: "Você precisa colocar algo em prática.",
        },
        {
          title: "AUDIT — Diagnostique",
          description:
            "Você recebe informações e precisa encontrar o problema.",
        },
      ],
      quote: "Uma ideia por vez. Profundidade no conjunto.",
    },
    {
      id: "e5",
      type: "visual",
      eyebrow: "Etapa 06 · Método",
      title: "E5 — o ciclo de domínio",
      body: [],
      sequence: [
        {
          label: "Entender",
          detail: "Compreender o conceito e sua lógica.",
        },
        {
          label: "Exemplificar",
          detail: "Conseguir reconhecer e produzir exemplos.",
        },
        { label: "Executar", detail: "Aplicar na prática." },
        {
          label: "Examinar",
          detail: "Analisar resultado, problemas e evidências.",
        },
        {
          label: "Explicar",
          detail:
            "Ser capaz de justificar o que aconteceu e o que deve ser feito.",
        },
      ],
      afterSequence: [
        "Se você só consegue repetir a definição, provavelmente ainda está em Entender.",
        "Quando consegue executar e depois explicar por que tomou determinada decisão, estamos chegando a domínio real.",
      ],
    },
    {
      id: "first-decision",
      type: "decide",
      eyebrow: "Etapa 07 · Decision Point",
      title: "Primeiro Decision Point",
      scenario:
        "Uma campanha recebeu muitos cliques. O gestor afirma: “A campanha está excelente porque o CTR é alto.” Qual é a melhor reação?",
      allowRetry: true,
      options: [
        {
          id: "a",
          label: "Concordar. CTR alto significa boa campanha.",
          feedback:
            "Você está concluindo o resultado da campanha a partir de uma métrica intermediária. CTR pode indicar interesse ou relevância do anúncio, mas ainda não responde se houve conversão, receita ou lucro.",
        },
        {
          id: "b",
          label: "Discordar. CTR nunca é importante.",
          feedback:
            "O problema não é o CTR. O problema é tratar qualquer métrica isolada como resposta completa.",
        },
        {
          id: "c",
          label:
            "Pedir mais contexto antes de concluir se a campanha está funcionando.",
          feedback: "Correto. Uma decisão profissional exige contexto.",
          recommended: true,
        },
      ],
      body: ["Você acabou de experimentar um pequeno Decision Point."],
    },
    {
      id: "language",
      type: "learn",
      eyebrow: "Etapa 08 · Linguagem",
      title: "Você não precisa fingir que já conhece a linguagem.",
      body: [
        "Marketing e Google Ads possuem muitos termos em inglês e muitas siglas.",
        "Sempre que um termo importante aparecer pela primeira vez, o Titanium deve explicar termo original, tradução e significado simples.",
      ],
      glossary: [
        {
          term: "CTR",
          original: "Click-Through Rate",
          translation: "Taxa de Cliques",
          explanation:
            "Percentual das impressões de um anúncio que resultaram em clique.",
        },
        {
          term: "Bidding",
          translation: "Estratégia de lances",
          explanation:
            "Forma como o sistema define ou ajusta lances para disputar oportunidades em um leilão de anúncios.",
        },
      ],
      quote: "Primeiro entender a linguagem. Depois dominar a ferramenta.",
    },
    {
      id: "lesson-exams",
      type: "learn",
      eyebrow: "Etapa 09 · Avaliação",
      title: "Chegar ao final da aula não significa concluir a aula.",
      body: [
        "Depois do conteúdo existe a Prova da Aula.",
        "A escala vai de 0 a 10. Para concluir, a nota mínima é 9,0.",
        "Isso é propositalmente exigente.",
        "O objetivo não é punir erro. É impedir a falsa sensação de domínio.",
      ],
      sequence: [
        { label: "Conteúdo concluído" },
        { label: "Prova: 8,0", detail: "REVISÃO NECESSÁRIA" },
        { label: "Nova tentativa: 9,3", detail: "AULA CONCLUÍDA" },
      ],
    },
    {
      id: "completion-state",
      type: "decide",
      eyebrow: "Etapa 10 · Decide",
      title: "Você terminaria esta aula?",
      scenario:
        "Você percorreu 100% do conteúdo. Fez a prova e obteve 7,8. Qual é o estado da aula?",
      options: [
        {
          id: "a",
          label: "Concluída, porque o conteúdo acabou.",
          feedback: "Consumo de conteúdo e domínio são estados diferentes.",
        },
        {
          id: "b",
          label: "Em revisão, porque domínio ainda não foi demonstrado.",
          feedback:
            "Correto. No Titanium, progresso de conteúdo e domínio são coisas diferentes.",
          recommended: true,
        },
        {
          id: "c",
          label: "Concluída parcialmente.",
          feedback:
            "A aula permanece em revisão até que o domínio seja demonstrado.",
        },
      ],
      cards: [
        {
          title: "100% do conteúdo consumido",
          subtitle: "≠",
          description: "Aula concluída · REVISÃO NECESSÁRIA",
        },
      ],
    },
    {
      id: "error-map",
      type: "learn",
      eyebrow: "Etapa 11 · Correção",
      title: "O erro precisa ensinar.",
      cards: [
        {
          title: "Questão",
          subtitle: "Qual é a diferença entre Keyword e Search Term?",
          description:
            "Sua resposta: São dois nomes para a palavra usada no anúncio.",
        },
        {
          title: "O problema",
          description:
            "Você misturou aquilo que o anunciante configura com aquilo que o usuário realmente pesquisou.",
        },
        {
          title: "Keyword — Palavra-chave",
          description:
            "Configuração utilizada pelo anunciante para ajudar a determinar quando um anúncio pode participar do leilão.",
        },
        {
          title: "Search Term — Termo de pesquisa",
          description: "Consulta que o usuário realmente digitou.",
        },
        {
          title: "Revise",
          description: "Etapa 07 — Keyword ≠ Search Term",
        },
      ],
      body: ["Esta etapa é uma demonstração do mecanismo."],
      demoActions: ["REVISAR CONCEITO", "REFAZER PROVA"],
    },
    {
      id: "module-final-exam",
      type: "learn",
      eyebrow: "Etapa 12 · Provão",
      title: "Uma aula testa uma parte. O Provão testa o sistema.",
      body: [
        "Cada aula testa conhecimento específico.",
        "Mas isso ainda não garante que você consegue combinar os conhecimentos.",
        "Depois de todas as aulas existe a Prova Final do Módulo.",
        "Ela poderá combinar conceitos, interpretação de dados, situações, decisões e diagnóstico.",
        "A nota mínima é 9,0.",
      ],
      quote: "Somente depois da aprovação o módulo recebe o estado CONCLUÍDO.",
    },
    {
      id: "levels",
      type: "visual",
      eyebrow: "Etapa 13 · Progressão",
      title: "Os níveis medem capacidade. Não status.",
      body: [],
      sequence: [
        { label: "N0 — Iniciante" },
        { label: "N1 — Compreensão" },
        { label: "N2 — Execução guiada" },
        { label: "N3 — Operação autônoma" },
        { label: "N4 — Diagnóstico" },
        { label: "N5 — Estratégia" },
        { label: "N6 — Arquitetura" },
      ],
      afterSequence: [
        "Os níveis não são pontos.",
        "Não são medalhas.",
        "Não são ranking.",
        "Eles representam maturidade operacional.",
        "O objetivo da formação é chegar a um ponto em que você não apenas saiba operar Google Ads, mas consiga entender negócios, diagnosticar problemas, escolher alavancas e arquitetar sistemas de aquisição.",
      ],
    },
    {
      id: "cases",
      type: "learn",
      eyebrow: "Etapa 14 · Cases",
      title: "Você encontrará os mesmos negócios várias vezes.",
      body: [
        "São negócios fictícios e cenários simulados realistas.",
        "Você verá essas empresas evoluírem conforme seu próprio conhecimento evolui.",
      ],
      cards: [
        {
          title: "Titanium Clinic",
          subtitle: "Clínica médica",
          description: "Aquisição, agendamento, comparecimento, CRM e receita.",
        },
        {
          title: "Titanium Dental",
          subtitle: "Odontologia",
          description:
            "Leads, ticket alto, fechamento e economia da aquisição.",
        },
        {
          title: "Titanium Local",
          subtitle: "Negócio local",
          description: "Área geográfica, ligações, intenção e presença local.",
        },
        {
          title: "Titanium E-commerce",
          subtitle: "Loja virtual",
          description: "Catálogo, margem, ROAS, Shopping e Performance Max.",
        },
        {
          title: "Titanium SaaS",
          subtitle: "Software B2B",
          description:
            "Lead qualificado, ciclo de venda longo, CRM, vendas offline e LTV.",
        },
      ],
    },
    {
      id: "decision-journal",
      type: "journal",
      eyebrow: "Etapa 15 · Do",
      title: "Estratégia melhora quando decisões deixam rastros.",
      body: [
        "Pense em uma decisão de marketing, negócio ou estudo que você tomou recentemente.",
      ],
      sequence: [
        { label: "Problema observado" },
        { label: "Dados" },
        { label: "Hipótese" },
        { label: "Decisão" },
        { label: "Resultado esperado" },
        { label: "Resultado observado" },
        { label: "Aprendizado" },
      ],
      journalFields: [
        { id: "problem", label: "Qual era o problema?" },
        { id: "decision", label: "Qual decisão você tomou?" },
        { id: "expected", label: "O que esperava acontecer?" },
      ],
    },
    {
      id: "curriculum-map",
      type: "visual",
      eyebrow: "Etapa 16 · Formação",
      title: "Mapa da Formação",
      body: [],
      highlight:
        "Antes de apertar botões, você precisa saber o que está tentando construir e como avaliar se funcionou.",
      sequence: [
        { label: "01 — Fundamentos de Tráfego e Aquisição" },
        { label: "02 — Negócio, Cliente e Economia da Aquisição" },
        {
          label: "03 — Google Ads: Infraestrutura e Arquitetura",
        },
        { label: "04 — Google Search: Dominando a Intenção" },
        { label: "05 — Anúncios, Oferta e Conversão" },
        { label: "06 — Tracking, GA4 e GTM" },
        { label: "07 — Otimização e Diagnóstico" },
        {
          label: "08 — Bidding, Automação e Inteligência Artificial",
        },
        {
          label:
            "09 — Ecossistema Google: PMax, Demand Gen, YouTube e Shopping",
        },
        {
          label: "10 — Escala, Gestão e Estratégia Profissional",
        },
      ],
      afterSequenceLead:
        "Existe uma razão para começarmos longe dos botões do Google Ads.",
    },
    {
      id: "immersion-mindmap",
      type: "mindmap",
      eyebrow: "Etapa 17 · Mapa Mental",
      title: "Sistema Titanium de Aprendizagem",
      mindmapBranches: [
        {
          title: "APRENDER",
          detail: "LEARN / THINK → compreender",
        },
        {
          title: "APLICAR",
          detail: "DO / AUDIT → decidir",
        },
        {
          title: "AVALIAR",
          detail: "PROVA → ≥9,0",
        },
        {
          title: "ERRAR — CORRIGIR",
          detail: "Correção orientada",
          result: "DOMÍNIO",
        },
        {
          title: "PROVA FINAL DO MÓDULO",
          detail: "Integração dos conhecimentos",
          result: "PROGRESSÃO",
        },
      ],
    },
    {
      id: "immersion-review",
      type: "review",
      eyebrow: "Etapa 18 · Revisão",
      title: "Antes de continuar, você precisa lembrar disto.",
      reviewSections: [
        {
          title: "Princípios da formação",
          items: [
            "Consumo não significa domínio.",
            "As aulas avançam progressivamente.",
            "Termos difíceis serão explicados.",
            "O Mapa Mental aparece depois que você construiu as peças.",
            "Toda aula termina em avaliação.",
          ],
        },
        {
          title: "Critérios de domínio",
          items: [
            "A nota mínima normal é 9,0.",
            "Erro gera correção e revisão, não apenas um X vermelho.",
            "A Prova Final verifica domínio do módulo inteiro.",
            "N0–N6 representam capacidade, não gamificação.",
          ],
        },
      ],
      prompt:
        "Se você tivesse que explicar a filosofia do Titanium em uma frase, o que diria?",
    },
    {
      id: "initial-diagnostic",
      type: "diagnostic",
      eyebrow: "Etapa 19 · Diagnóstico",
      title: "Diagnóstico Inicial",
      body: [
        "Agora queremos registrar seu ponto de partida.",
        "Você encontrará assuntos que ainda não estudou. Isso é esperado.",
      ],
      quote:
        "Este diagnóstico não aprova, não reprova e não permite pular conteúdos.",
    },
    {
      id: "closing",
      type: "context",
      eyebrow: "Etapa 20 · Encerramento",
      title: "Você está pronto.",
      body: [
        "Agora você sabe como o Titanium funciona.",
        "Daqui em diante, cada aula exigirá mais de você.",
        "Algumas serão conceituais.",
        "Outras serão técnicas.",
        "Algumas farão você abrir ferramentas.",
        "Outras colocarão uma conta problemática na sua frente e perguntarão: “O que você faria?”",
        "No início, haverá mais orientação.",
        "Com o tempo, haverá menos.",
        "Esse é o objetivo.",
      ],
      quote: "O professor deve se tornar progressivamente menos necessário.",
      sequence: [
        { label: "Aula 00 concluída" },
        { label: "Diagnóstico inicial registrado" },
      ],
    },
  ],
  diagnostic: {
    id: "initial-diagnostic",
    title: "Diagnóstico Inicial",
    questions: diagnosticQuestions,
    pointsPerQuestion: 0.5,
  },
  materials: [
    {
      id: "a00-lesson",
      type: "titanium-lesson",
      title: "Titanium Lesson — Imersão Titanium",
      purpose: "Referência completa da experiência.",
      status: "planned",
    },
    {
      id: "a00-notes",
      type: "titanium-notes",
      title: "Titanium Notes — Como estudar no Titanium",
      purpose: "Resumo rápido para consulta.",
      status: "planned",
    },
    {
      id: "a00-mindmap",
      type: "mindmap",
      title: "Mapa Mental — Sistema Titanium de Aprendizagem",
      purpose: "Síntese visual.",
      status: "available",
      reviewStageId: "immersion-mindmap",
    },
  ],
}

assertTitaniumLessonArchitecture(immersionLesson)
