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
  masteryTime: "45–70 minutos + diagnóstico inicial",
  objective:
    "Entender como a formação funciona, experimentar o método Titanium e registrar um ponto de partida antes de entrar no Módulo 01.",
  overview:
    "Aula de abertura da formação. Não é um tutorial de interface: é a primeira experiência pedagógica do Titanium.",
  completionMode: "diagnostic",
  stages: [
    {
      id: "a00v2-welcome",
      type: "context",
      eyebrow: "Capítulo 01 · Bem-vindo",
      title: "Bem-vindo ao Titanium",
      frames: [
        {
          id: "a00v2-welcome-main",
          type: "learn",
          mode: "explain",
          frameLabel: "Abertura",
          eyebrow: "Capítulo 01 · Abertura",
          title: "Você não entrou em um curso para aprender onde clicar.",
          body: [
            "O Titanium foi construído para levar você do entendimento básico de tráfego pago até a capacidade de analisar um negócio, estruturar aquisição, diagnosticar problemas, tomar decisões e defender uma estratégia.",
            "Google Ads será uma ferramenta central. Mas dominar a ferramenta não é o objetivo final. O objetivo é desenvolver o raciocínio de quem entende o sistema antes de alterar uma campanha.",
          ],
          cards: [
            {
              title: "Ao terminar esta aula",
              description:
                "Você saberá como estudar, como funcionam as avaliações, o que representam N0–N6, como registrar decisões e por que o Módulo 01 só começa depois do diagnóstico inicial.",
            },
            {
              title: "Pergunta que guia a formação",
              description:
                "O que está impedindo o resultado, qual evidência sustenta essa leitura e qual decisão faz sentido agora?",
            },
          ],
          highlight:
            "O Titanium não foi criado para formar um clicador de plataforma. Foi criado para formar operador, diagnosticador e estrategista.",
        },
      ],
    },
    {
      id: "a00v2-professional",
      type: "visual",
      eyebrow: "Capítulo 02 · Evolução",
      title: "O profissional que você vai se tornar",
      frames: [
        {
          id: "a00v2-professional-map",
          type: "visual",
          mode: "explain",
          frameLabel: "Mapa de evolução",
          eyebrow: "Capítulo 02 · Evolução",
          title: "Existe uma diferença enorme entre operar e pensar.",
          body: [
            "A formação progride por camadas. Configurar uma campanha é importante, mas é apenas uma parte do trabalho profissional.",
          ],
          visualItems: [
            {
              label: "Operador de plataforma",
              detail: "Sabe configurar e executar tarefas dentro da ferramenta.",
            },
            {
              label: "Operador autônomo",
              detail: "Consegue gerir a rotina sem depender de um roteiro para cada passo.",
            },
            {
              label: "Diagnosticador",
              detail: "Investiga a causa antes de prescrever uma mudança.",
            },
            {
              label: "Estrategista / Arquiteto",
              detail: "Conecta mídia, negócio, economia e desenho do sistema de aquisição.",
            },
          ],
          afterSequence: [
            "Trocar uma estratégia de lances porque o CPA aumentou é uma ação operacional. Descobrir por que o CPA aumentou antes de tocar na campanha é diagnóstico. Entender se aquele CPA ainda é economicamente saudável para o negócio é estratégia.",
          ],
        },
        {
          id: "a00v2-professional-focus",
          type: "learn",
          mode: "focus",
          frameLabel: "Ponto-chave",
          eyebrow: "Capítulo 02 · Ponto-chave",
          title: "Saber usar Google Ads não significa saber gerar crescimento.",
          body: [
            "Uma pessoa pode conhecer campanhas, palavras-chave, públicos, Performance Max e estratégias de lances e ainda tomar decisões ruins.",
            "Ferramenta é capacidade operacional. O Titanium quer desenvolver capacidade de pensar antes de operar.",
          ],
          quote:
            "Quando a formação avançar, a pergunta deve deixar de ser 'onde eu clico?' e passar a ser 'qual decisão faz sentido e por quê?'",
        },
      ],
    },
    {
      id: "a00v2-e5",
      type: "visual",
      eyebrow: "Capítulo 03 · Método E5",
      title: "Como você vai aprender",
      frames: [
        {
          id: "a00v2-e5-context",
          type: "learn",
          mode: "explain",
          frameLabel: "O problema",
          eyebrow: "Capítulo 03 · Método E5",
          title: "Saber a definição não é o mesmo que dominar o conceito.",
          body: [
            "Imagine alguém que sabe dizer que CTR significa Click-Through Rate - Taxa de Cliques - e consegue repetir a fórmula corretamente.",
            "Agora pergunte: um CTR de 8% é bom? Sem contexto, a resposta profissional é 'depende'. É preciso entender objetivo, intenção, qualidade do tráfego e o que acontece depois do clique.",
          ],
          highlight:
            "Conhecimento declarativo é uma camada do domínio. O Titanium exige que o conhecimento sobreviva ao contato com um caso real.",
        },
        {
          id: "a00v2-e5-map",
          type: "visual",
          mode: "explain",
          frameLabel: "E5",
          eyebrow: "Capítulo 03 · Método E5",
          title: "E5 transforma conteúdo em capacidade.",
          visualItems: [
            { label: "Entender", detail: "Compreender o conceito e sua lógica." },
            { label: "Exemplificar", detail: "Reconhecer e produzir exemplos." },
            { label: "Executar", detail: "Aplicar o conhecimento na prática." },
            { label: "Examinar", detail: "Ler evidências, problemas e resultados." },
          ],
          afterSequenceLead:
            "A quinta camada é Explicar: justificar o que aconteceu, qual decisão foi tomada e por que ela é defensável.",
        },
        {
          id: "a00v2-e5-check",
          type: "decide",
          mode: "apply",
          frameLabel: "Teste rápido",
          eyebrow: "Capítulo 03 · Teste rápido",
          title: "Conhecer a definição basta?",
          scenario:
            "Uma pessoa consegue repetir perfeitamente o que significa CPA, mas diante de uma conta real não sabe dizer por que o CPA aumentou. Essa pessoa domina CPA?",
          allowRetry: true,
          options: [
            {
              id: "a",
              label: "Sim. Saber a definição é suficiente.",
              feedback:
                "Isso mede lembrança, não domínio operacional. Ainda falta usar o conceito para interpretar e decidir.",
            },
            {
              id: "b",
              label:
                "Parcialmente. Ela conhece o conceito, mas ainda não domina aplicação e diagnóstico.",
              feedback:
                "Correto. O E5 existe justamente para impedir que reconhecimento de termos seja confundido com capacidade profissional.",
              recommended: true,
            },
            {
              id: "c",
              label: "Sim, desde que consiga calcular o CPA.",
              feedback:
                "Calcular é útil, mas ainda não mostra se a pessoa sabe interpretar causa, consequência e decisão.",
            },
          ],
        },
      ],
    },
    {
      id: "a00v2-mastery",
      type: "discovery",
      eyebrow: "Capítulo 04 · Domínio",
      title: "Consumo não é domínio",
      frames: [
        {
          id: "a00v2-mastery-compare",
          type: "discovery",
          mode: "explain",
          frameLabel: "Compare",
          eyebrow: "Capítulo 04 · Compare",
          title: "Quem está realmente mais preparado?",
          body: [
            "Dois alunos tiveram experiências muito diferentes. Não olhe apenas para horas consumidas; olhe para o que cada um foi capaz de fazer.",
          ],
          comparison: [
            {
              label: "Pessoa A",
              metrics: [
                { label: "Vídeos assistidos", value: "20h" },
                { label: "Diagnósticos", value: "0" },
                { label: "Decisões justificadas", value: "0" },
                { label: "Erros analisados", value: "0" },
              ],
            },
            {
              label: "Pessoa B",
              metrics: [
                { label: "Estudo ativo", value: "8h" },
                { label: "Cases resolvidos", value: "15" },
                { label: "Decisões justificadas", value: "11" },
                { label: "Erros corrigidos", value: "6" },
              ],
            },
          ],
        },
        {
          id: "a00v2-mastery-focus",
          type: "learn",
          mode: "focus",
          frameLabel: "Regra de domínio",
          eyebrow: "Capítulo 04 · Ponto-chave",
          title: "No Titanium, terminar não significa chegar ao fim.",
          body: [
            "Assistir, ler e percorrer todas as telas pode ajudar você a aprender. Mas isso não demonstra competência.",
            "A conclusão acontece quando você demonstra o nível mínimo de domínio esperado por meio de aplicação, avaliação e correção dos erros.",
          ],
          sequence: [
            { label: "Aprender" },
            { label: "Aplicar" },
            { label: "Errar e entender o erro" },
            { label: "Corrigir e demonstrar domínio" },
          ],
          quote:
            "Você não conclui uma aula Titanium porque chegou ao fim. Você conclui porque demonstrou domínio.",
        },
      ],
    },
    {
      id: "a00v2-mini-lesson",
      type: "think",
      eyebrow: "Capítulo 05 · Mini Aula",
      title: "Experimente uma aula Titanium",
      frames: [
        {
          id: "a00v2-mini-think",
          type: "think",
          mode: "apply",
          frameLabel: "Think",
          eyebrow: "Capítulo 05 · THINK",
          title: "Antes de receber a resposta, formule a sua.",
          body: [
            "Uma campanha recebeu muitos cliques e apresenta CTR alto. Mesmo assim, poucas vendas aconteceram.",
          ],
          prompt:
            "Você diria que a campanha está performando bem? Explique com suas palavras.",
          modelAnswer:
            "Ainda não existe informação suficiente para concluir que a campanha está performando bem. CTR alto indica uma relação forte entre impressão e clique, mas resultado de negócio depende do que acontece depois: qualidade do tráfego, conversão, custo de aquisição, receita e margem.",
          selfAssessment: {
            prompt: "Depois de comparar, como você avalia sua resposta inicial?",
            options: [
              "Eu concluí rápido demais a partir do CTR",
              "Eu pedi contexto antes de concluir",
              "Minha resposta estava parcialmente estruturada",
            ],
          },
        },
        {
          id: "a00v2-mini-learn",
          type: "visual",
          mode: "explain",
          frameLabel: "Learn",
          eyebrow: "Capítulo 05 · LEARN",
          title: "Uma métrica descreve uma parte do sistema.",
          body: [
            "CTR alto pode indicar que anúncio, mensagem ou intenção geraram cliques. Ele não informa, sozinho, se essas pessoas compraram, se a página converteu, se os leads eram qualificados ou se a aquisição foi economicamente saudável.",
          ],
          visualItems: [
            { label: "Impressão", detail: "O anúncio teve oportunidade de ser visto." },
            { label: "Clique", detail: "CTR observa principalmente a relação até aqui." },
            { label: "Conversão", detail: "A visita realizou a ação esperada?" },
            { label: "Cliente / Receita", detail: "A aquisição produziu resultado econômico?" },
          ],
          highlight:
            "Resultado exige entender o sistema inteiro, não eleger uma métrica intermediária como resposta final.",
        },
        {
          id: "a00v2-mini-decide",
          type: "decide",
          mode: "apply",
          frameLabel: "Decide",
          eyebrow: "Capítulo 05 · DECIDE",
          title: "Agora transforme leitura em decisão.",
          scenario:
            "CTR está alto, CPC estável, a taxa de conversão da página caiu e o CPA aumentou. Onde você investigaria primeiro?",
          allowRetry: true,
          options: [
            {
              id: "a",
              label: "Criaria outra campanha imediatamente.",
              feedback:
                "Criar uma nova campanha antes de entender a quebra adiciona complexidade sem diagnosticar a causa.",
            },
            {
              id: "b",
              label: "Aumentaria o orçamento.",
              feedback:
                "Escalar um sistema cuja taxa de conversão deteriorou pode apenas amplificar o problema.",
            },
            {
              id: "c",
              label: "Investigaria a experiência e a conversão após o clique.",
              feedback:
                "Correto. O sinal mais forte está depois do clique: CPC estável e CVR em queda deslocam a investigação para a etapa de conversão.",
              recommended: true,
            },
            {
              id: "d",
              label: "Mudaria imediatamente a estratégia de lances.",
              feedback:
                "A mudança pode até ser considerada depois, mas os dados apresentados apontam primeiro para uma deterioração de conversão.",
            },
          ],
        },
        {
          id: "a00v2-mini-review",
          type: "review",
          mode: "explain",
          frameLabel: "Review",
          eyebrow: "Capítulo 05 · REVIEW",
          title: "Perceba o que acabou de acontecer.",
          reviewSections: [
            {
              title: "THINK",
              items: ["Você formulou um raciocínio antes de receber o modelo."],
            },
            {
              title: "LEARN",
              items: ["Você construiu um modelo mental sobre CTR e resultado."],
            },
            {
              title: "DECIDE",
              items: ["Você precisou escolher uma investigação e justificar a prioridade."],
            },
            {
              title: "REVIEW",
              items: ["Você compara o raciocínio inicial com o raciocínio atual."],
            },
          ],
          prompt:
            "Em uma frase: o que mudou na forma como você olha para um CTR alto?",
        },
      ],
    },
    {
      id: "a00v2-lesson-system",
      type: "visual",
      eyebrow: "Capítulo 06 · Jornada da Aula",
      title: "Como uma Aula Titanium funciona",
      frames: [
        {
          id: "a00v2-lesson-system-main",
          type: "visual",
          mode: "explain",
          frameLabel: "Arquitetura",
          eyebrow: "Capítulo 06 · Jornada da Aula",
          title: "Cada bloco existe porque cumpre uma função de aprendizagem.",
          body: [
            "Nem toda aula terá exatamente a mesma quantidade de blocos, mas a narrativa pedagógica segue uma ordem: entender por que algo importa, construir o conceito, ver o conceito em ação, aplicar, corrigir e demonstrar domínio.",
          ],
          sequence: [
            { label: "Abertura", detail: "Por que isso importa?" },
            { label: "Ensino", detail: "O que eu preciso compreender?" },
            { label: "Exemplo", detail: "Como isso aparece na realidade?" },
            { label: "Aplicação", detail: "Consigo usar ou decidir?" },
            { label: "Erro e revisão", detail: "Onde meu raciocínio falhou?" },
            { label: "Mapa mental", detail: "Como as peças se conectam?" },
            { label: "Avaliação", detail: "Consigo demonstrar domínio?" },
          ],
          highlight:
            "O player apresenta a aula. A pedagogia decide a aula. Nenhum conteúdo deve ser quebrado apenas porque atingiu uma altura de tela.",
        },
      ],
    },
    {
      id: "a00v2-levels",
      type: "visual",
      eyebrow: "Capítulo 07 · Níveis",
      title: "N0–N6 mede capacidade, não status",
      frames: [
        {
          id: "a00v2-levels-main",
          type: "visual",
          mode: "explain",
          frameLabel: "Mapa de níveis",
          eyebrow: "Capítulo 07 · N0–N6",
          title: "A progressão vai muito além de saber configurar campanhas.",
          sequence: [
            { label: "N0 — Iniciante", detail: "Constrói vocabulário e referências." },
            { label: "N1 — Compreensão", detail: "Consegue explicar conceitos e relações." },
            { label: "N2 — Execução guiada", detail: "Executa seguindo processo e supervisão." },
            { label: "N3 — Operação autônoma", detail: "Opera sozinho com consistência." },
            { label: "N4 — Diagnóstico", detail: "Encontra causas e prioriza investigação." },
            { label: "N5 — Estratégia", detail: "Conecta mídia, economia e decisão de negócio." },
            { label: "N6 — Arquitetura", detail: "Desenha e defende sistemas completos de aquisição." },
          ],
          quote:
            "O Titanium não termina quando você sabe criar uma campanha. Isso ainda é apenas uma parte da jornada.",
        },
      ],
    },
    {
      id: "a00v2-assessment",
      type: "learn",
      eyebrow: "Capítulo 08 · Avaliação",
      title: "Como provas e erro funcionam",
      frames: [
        {
          id: "a00v2-assessment-criteria",
          type: "learn",
          mode: "explain",
          frameLabel: "O que avaliamos",
          eyebrow: "Capítulo 08 · Avaliação",
          title: "Uma prova Titanium não mede apenas memória.",
          cards: [
            { title: "Conhecimento", description: "Você sabe explicar o princípio?" },
            { title: "Interpretação", description: "Você sabe ler os sinais e o contexto?" },
            { title: "Diagnóstico", description: "Você sabe separar sintoma de causa?" },
            { title: "Decisão", description: "Você sabe escolher a próxima ação?" },
            { title: "Defesa", description: "Você consegue justificar por que faria isso?" },
          ],
          afterSequence: [
            "Questões objetivas podem ser corrigidas automaticamente. Respostas abertas são registradas para comparação com modelo, autoavaliação e, nas atividades avaliativas apropriadas, correção por rubrica no Professor Mode.",
          ],
        },
        {
          id: "a00v2-assessment-focus",
          type: "learn",
          mode: "focus",
          frameLabel: "Nota 9",
          eyebrow: "Capítulo 08 · Ponto-chave",
          title: "Por que a nota mínima é 9,0?",
          body: [
            "O 9 não existe para punir. Ele existe porque pequenas lacunas ignoradas no início se tornam decisões maiores e mais caras quando o sistema fica complexo.",
            "Erro não é fracasso. Erro é evidência sobre o que precisa ser revisado. Por isso a correção deve apontar a causa do erro e o conceito que merece nova atenção.",
          ],
          sequence: [
            { label: "Tentativa", detail: "Você demonstra o raciocínio atual." },
            { label: "Mapa de Erros", detail: "O sistema identifica onde revisar." },
            { label: "Revisão", detail: "Você reconstrói a parte frágil." },
            { label: "Nova tentativa", detail: "Você demonstra o domínio novamente." },
          ],
        },
      ],
    },
    {
      id: "a00v2-journal",
      type: "journal",
      eyebrow: "Capítulo 09 · Diário de Decisões",
      title: "Estratégia melhora quando decisões deixam rastros",
      frames: [
        {
          id: "a00v2-journal-example",
          type: "learn",
          mode: "explain",
          frameLabel: "Exemplo",
          eyebrow: "Capítulo 09 · Exemplo",
          title: "Uma decisão sem evidência é apenas um palpite registrado.",
          body: [
            "Cenário: o CPA aumentou 35%. Uma reação fraca seria escrever apenas 'trocar bidding'. Isso não registra o problema de forma investigável e não explica por que a ação deveria funcionar.",
          ],
          cards: [
            {
              title: "Decisão fraca",
              subtitle: "Trocar bidding",
              description:
                "Não registra evidência, hipótese, prioridade de investigação ou resultado esperado.",
            },
            {
              title: "Decisão Titanium",
              subtitle: "Diagnosticar antes de prescrever",
              description:
                "CPC estável + CVR em queda -> hipótese de problema após o clique -> auditar landing antes de alterar lances.",
            },
          ],
          highlight:
            "Uma boa decisão permite voltar depois e descobrir se seu raciocínio estava correto, incompleto ou errado.",
        },
        {
          id: "a00v2-journal-do",
          type: "journal",
          mode: "apply",
          frameLabel: "Seu primeiro registro",
          eyebrow: "Capítulo 09 · Registre",
          title: "Crie seu primeiro rastro de decisão.",
          body: [
            "Use uma decisão real de marketing, negócio ou estudo. Não precisa ser complexa; o objetivo é praticar a estrutura.",
          ],
          journalFields: [
            { id: "problem", label: "Qual era o problema ou situação?" },
            { id: "decision", label: "Qual decisão você tomou?" },
            { id: "expected", label: "O que você esperava que acontecesse?" },
          ],
        },
      ],
    },
    {
      id: "a00v2-curriculum",
      type: "visual",
      eyebrow: "Capítulo 10 · Formação",
      title: "Mapa completo da formação",
      frames: [
        {
          id: "a00v2-curriculum-1",
          type: "visual",
          mode: "explain",
          frameLabel: "Módulos 01–05",
          eyebrow: "Capítulo 10 · Módulos 01–05",
          title: "Primeiro, construímos a base do sistema.",
          sequence: [
            { label: "01 — Fundamentos de Tráfego e Aquisição" },
            { label: "02 — Negócio, Cliente e Economia da Aquisição" },
            { label: "03 — Google Ads: Infraestrutura e Arquitetura" },
            { label: "04 — Google Search: Dominando a Intenção" },
            { label: "05 — Anúncios, Oferta e Conversão" },
          ],
          highlight:
            "A ordem é intencional: antes de otimizar botões, precisamos entender aquisição, economia, intenção e conversão.",
        },
        {
          id: "a00v2-curriculum-2",
          type: "visual",
          mode: "explain",
          frameLabel: "Módulos 06–10",
          eyebrow: "Capítulo 10 · Módulos 06–10",
          title: "Depois, aumentamos profundidade, diagnóstico e escala.",
          sequence: [
            { label: "06 — Tracking, GA4 e GTM" },
            { label: "07 — Otimização e Diagnóstico" },
            { label: "08 — Bidding, Automação e Inteligência Artificial" },
            { label: "09 — Ecossistema Google: PMax, Demand Gen, YouTube e Shopping" },
            { label: "10 — Escala, Gestão e Estratégia Profissional" },
          ],
          afterSequence: [
            "A formação avança de fundamentos para arquitetura. Cada módulo adiciona uma camada que será exigida nos seguintes.",
          ],
        },
      ],
    },
    {
      id: "a00v2-review",
      type: "mindmap",
      eyebrow: "Capítulo 11 · Revisão Guiada",
      title: "Reconstrua o sistema antes de seguir",
      frames: [
        {
          id: "a00v2-review-map",
          type: "mindmap",
          mode: "explain",
          frameLabel: "Mapa Mental",
          eyebrow: "Capítulo 11 · Mapa Mental",
          title: "Sistema Titanium de Aprendizagem",
          mindmapBranches: [
            { title: "OBJETIVO", detail: "N5 / N6", result: "pensar e arquitetar" },
            { title: "APRENDER", detail: "E5", result: "entender até explicar" },
            { title: "AULA", detail: "ensino + aplicação", result: "raciocínio ativo" },
            { title: "DOMÍNIO", detail: "nota ≥ 9", result: "progressão" },
            { title: "ERRO", detail: "Mapa de Erros", result: "revisão orientada" },
            { title: "DECISÕES", detail: "Diário", result: "aprendizado acumulado" },
          ],
        },
        {
          id: "a00v2-review-recall",
          type: "review",
          mode: "apply",
          frameLabel: "Recuperação ativa",
          eyebrow: "Capítulo 11 · Revisão",
          title: "Explique o sistema sem reler a aula.",
          reviewSections: [
            {
              title: "Perguntas para recuperar da memória",
              items: [
                "O que diferencia consumo de domínio?",
                "Para que serve o E5?",
                "Qual é a diferença entre operar e diagnosticar?",
                "Por que uma decisão deve registrar evidências e hipótese?",
              ],
            },
            {
              title: "O que precisa permanecer",
              items: [
                "Ferramenta não substitui raciocínio.",
                "Aula é experiência de aprendizagem, não sequência de telas.",
                "Erro precisa apontar o que revisar.",
                "Domínio é demonstrado, não declarado.",
              ],
            },
          ],
          prompt:
            "Se você tivesse que explicar a filosofia do Titanium em uma frase para outra pessoa, o que diria?",
        },
      ],
    },
    {
      id: "a00v2-diagnostic",
      type: "diagnostic",
      eyebrow: "Capítulo 12 · Diagnóstico Inicial",
      title: "Registre seu ponto de partida",
      body: [
        "Este diagnóstico não possui aprovação nem reprovação. Ele existe para registrar exatamente onde você está hoje.",
        "Não pesquise, não peça ajuda e não tente parecer mais avançado. Escolha aquilo que você consegue defender agora.",
      ],
      quote:
        "O valor deste diagnóstico depende da honestidade do ponto de partida.",
    },
    {
      id: "a00v2-closing",
      type: "context",
      eyebrow: "Capítulo 13 · Encerramento",
      title: "Ponto de partida registrado",
      frames: [
        {
          id: "a00v2-closing-main",
          type: "learn",
          mode: "focus",
          frameLabel: "Encerramento",
          eyebrow: "Capítulo 13 · Encerramento",
          title: "Agora a formação começa de verdade.",
          body: [
            "Você já sabe o que o Titanium exige: compreender, aplicar, decidir, corrigir e demonstrar domínio.",
            "Seu diagnóstico inicial foi registrado. Ele não define seu teto; ele cria uma referência para comparar sua evolução ao final da formação.",
          ],
          sequence: [
            { label: "Aula 00 concluída" },
            { label: "Diagnóstico inicial registrado" },
            { label: "Módulo 01 liberado" },
          ],
          quote:
            "Daqui em diante, o professor deve se tornar progressivamente menos necessário e o seu raciocínio progressivamente mais forte.",
        },
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
      title: "Titanium Lesson — Guia de Início",
      purpose: "Guia completo da formação, método E5, níveis, avaliações e rotina de estudo.",
      status: "available",
      asset: "/materials/aula-00/Titanium_Lesson_Guia_de_Inicio.pdf",
    },
    {
      id: "a00-notes",
      type: "titanium-notes",
      title: "Titanium Notes — Aula 00",
      purpose: "Resumo de revisão em duas páginas com os princípios que precisam permanecer.",
      status: "available",
      asset: "/materials/aula-00/Titanium_Notes_Aula_00.pdf",
    },
    {
      id: "a00-mindmap",
      type: "mindmap",
      title: "Mapa Mental — Sistema Titanium",
      purpose: "Mapa visual de uma página conectando E5, domínio, erro, níveis e decisões.",
      status: "available",
      reviewStageId: "a00v2-review",
      asset: "/materials/aula-00/Titanium_Mind_Map_Aula_00.pdf",
    },
  ],
}

assertTitaniumLessonArchitecture(immersionLesson)
