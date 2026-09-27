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
    "Aula de abertura da formação. Ensina o método, demonstra o padrão de raciocínio e prepara o aluno para aprender por domínio.",
  completionMode: "diagnostic",
  stages: [
    {
      id: "a00v3-welcome",
      type: "context",
      eyebrow: "Capítulo 01 · Bem-vindo",
      title: "O que é o Titanium",
      frames: [
        {
          id: "a00v3-welcome-main",
          type: "learn",
          mode: "explain",
          frameLabel: "Abertura",
          eyebrow: "Capítulo 01 · Abertura",
          title: "Você não entrou em um curso para aprender onde clicar.",
          body: [
            "O Titanium foi construído para levar você do entendimento básico de tráfego pago até a capacidade de analisar um negócio, estruturar aquisição, diagnosticar problemas, tomar decisões e defender uma estratégia.",
            "Google Ads será uma ferramenta central. Mas dominar a ferramenta não é o objetivo final. O objetivo é desenvolver o raciocínio de quem consegue localizar gargalos, interpretar evidências e escolher prioridades.",
          ],
          cards: [
            {
              title: "Entenda",
              description: "Como o método, as aulas e a progressão foram organizados.",
            },
            {
              title: "Experimente",
              description: "Uma mini aula com leitura de métrica e decisão prática.",
            },
            {
              title: "Registre",
              description: "Seu ponto de partida no Diagnóstico Inicial.",
            },
          ],
          highlight:
            "A pergunta deve deixar de ser 'onde eu clico?' e passar a ser 'qual decisão faz sentido e por quê?'.",
        },
      ],
    },
    {
      id: "a00v3-professional",
      type: "visual",
      eyebrow: "Capítulo 02 · Profissional",
      title: "O profissional que você vai se tornar",
      frames: [
        {
          id: "a00v3-professional-map",
          type: "visual",
          mode: "explain",
          frameLabel: "Evolução",
          eyebrow: "Capítulo 02 · Evolução",
          title: "Ferramenta é capacidade operacional. Estratégia exige mais.",
          sequence: [
            { label: "Operador de plataforma", detail: "Configura e executa tarefas." },
            { label: "Operador autônomo", detail: "Conduz rotinas com consistência." },
            { label: "Diagnosticador", detail: "Encontra causas antes de alterar." },
            { label: "Estrategista", detail: "Conecta mídia, economia e prioridade." },
            { label: "Arquiteto", detail: "Desenha e defende o sistema de aquisição." },
          ],
          afterSequence: [
            "Trocar uma estratégia de lances porque o CPA aumentou é ação. Descobrir por que o CPA aumentou é diagnóstico. Entender se aquele CPA ainda é saudável para o negócio é estratégia.",
          ],
        },
        {
          id: "a00v3-professional-focus",
          type: "learn",
          mode: "focus",
          frameLabel: "Ponto-chave",
          eyebrow: "Capítulo 02 · Ponto-chave",
          title: "Saber usar Google Ads não significa saber gerar crescimento.",
          body: [
            "Uma pessoa pode conhecer campanhas, palavras-chave, públicos e estratégias de lances e ainda tomar decisões ruins.",
            "O Titanium quer desenvolver capacidade de pensar antes de operar.",
          ],
          quote:
            "Quando a formação avançar, queremos que sua pergunta principal seja: qual decisão faz sentido e por quê?",
        },
      ],
    },
    {
      id: "a00v3-e5",
      type: "learn",
      eyebrow: "Capítulo 03 · Método E5",
      title: "Como você vai aprender",
      frames: [
        {
          id: "a00v3-e5-main",
          type: "learn",
          mode: "explain",
          frameLabel: "E5",
          eyebrow: "Capítulo 03 · E5",
          title: "Saber a definição não é o mesmo que dominar o conceito.",
          body: [
            "Uma pessoa pode saber que CTR significa Taxa de Cliques e ainda não saber interpretar se um CTR é bom, ruim ou irrelevante para a decisão atual.",
            "O E5 impede que reconhecimento de termos seja confundido com capacidade profissional.",
          ],
          sequence: [
            { label: "Entender", detail: "Compreender o conceito e sua função." },
            { label: "Exemplificar", detail: "Reconhecer o conceito em casos concretos." },
            { label: "Executar", detail: "Aplicar o conhecimento na prática." },
            { label: "Examinar", detail: "Interpretar evidências, causas e resultados." },
            { label: "Explicar", detail: "Defender o raciocínio e a decisão." },
          ],
        },
        {
          id: "a00v3-e5-check",
          type: "think",
          mode: "apply",
          frameLabel: "Teste rápido",
          eyebrow: "Capítulo 03 · Agora é com você",
          title: "Conhecer um conceito é suficiente?",
          scenario:
            "Uma pessoa consegue repetir perfeitamente o que significa CPA, mas diante de uma conta real não sabe explicar por que ele aumentou. Qual leitura é a mais correta?",
          allowRetry: true,
          options: [
            {
              id: "a",
              label: "Ela domina CPA porque conhece a definição.",
              feedback: "Definição é apenas uma camada. Ainda falta aplicação e diagnóstico.",
            },
            {
              id: "b",
              label: "Ela conhece o conceito, mas ainda não demonstrou domínio de aplicação e diagnóstico.",
              feedback: "Correto. O E5 diferencia reconhecer um termo de conseguir usá-lo profissionalmente.",
              recommended: true,
            },
            {
              id: "c",
              label: "Ela domina CPA se conseguir fazer a fórmula matemática.",
              feedback: "Calcular ajuda, mas não prova interpretação de causa, contexto ou decisão.",
            },
            {
              id: "d",
              label: "CPA não pode ser utilizado para diagnóstico.",
              feedback: "CPA é um sinal importante; o erro é tratá-lo sem contexto.",
            },
          ],
        },
      ],
    },
    {
      id: "a00v3-mastery",
      type: "discovery",
      eyebrow: "Capítulo 04 · Domínio",
      title: "Consumo não é domínio",
      frames: [
        {
          id: "a00v3-mastery-compare",
          type: "discovery",
          mode: "explain",
          frameLabel: "Compare",
          eyebrow: "Capítulo 04 · Compare",
          title: "Quem está realmente mais preparado?",
          body: [
            "Não olhe apenas para horas consumidas. Observe o que cada pessoa foi capaz de fazer com o conhecimento.",
          ],
          comparison: [
            {
              label: "Pessoa A",
              metrics: [
                { label: "Conteúdo consumido", value: "20h" },
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
                { label: "Decisões avaliadas", value: "11" },
                { label: "Erros corrigidos", value: "6" },
              ],
            },
          ],
        },
        {
          id: "a00v3-mastery-focus",
          type: "learn",
          mode: "focus",
          frameLabel: "Regra de domínio",
          eyebrow: "Capítulo 04 · Ponto-chave",
          title: "No Titanium, terminar não significa chegar ao fim.",
          body: [
            "Assistir e ler ajudam você a aprender. Mas conclusão exige capacidade demonstrada por aplicação, avaliação e correção dos erros.",
          ],
          sequence: [
            { label: "Aprender" },
            { label: "Aplicar" },
            { label: "Receber feedback" },
            { label: "Corrigir" },
            { label: "Demonstrar domínio" },
          ],
          quote:
            "Você não conclui porque consumiu. Você conclui porque demonstrou.",
        },
      ],
    },
    {
      id: "a00v3-mini-lesson",
      type: "think",
      eyebrow: "Capítulo 05 · Mini Aula",
      title: "Experimente uma aula Titanium",
      frames: [
        {
          id: "a00v3-mini-think",
          type: "think",
          mode: "apply",
          frameLabel: "Think",
          eyebrow: "Capítulo 05 · THINK",
          title: "Pense antes de receber a explicação.",
          scenario:
            "Uma campanha recebeu muitos cliques e apresenta CTR alto. Mesmo assim, poucas vendas aconteceram. Qual conclusão é mais madura?",
          options: [
            {
              id: "a",
              label: "A campanha está performando bem porque CTR alto significa resultado.",
              feedback: "CTR descreve a passagem até o clique, não o resultado econômico.",
            },
            {
              id: "b",
              label: "A campanha está ruim porque muitos cliques sempre reduzem a qualidade.",
              feedback: "Quantidade de cliques, isoladamente, não prova baixa qualidade.",
            },
            {
              id: "c",
              label: "Ainda não há informação suficiente; precisamos investigar o que acontece depois do clique.",
              feedback: "Correto. A leitura precisa continuar pela conversão, qualidade e economia.",
              recommended: true,
            },
            {
              id: "d",
              label: "O CTR deve ser ignorado porque nunca é útil.",
              feedback: "CTR é útil, mas precisa ser interpretado dentro do sistema.",
            },
          ],
        },
        {
          id: "a00v3-mini-learn",
          type: "visual",
          mode: "explain",
          frameLabel: "Learn",
          eyebrow: "Capítulo 05 · LEARN",
          title: "Uma métrica descreve uma parte do sistema.",
          body: [
            "CTR alto pode indicar que anúncio, mensagem ou intenção geraram cliques. Ele não informa, sozinho, se essas pessoas compraram, se a página converteu, se os leads eram qualificados ou se a aquisição foi economicamente saudável.",
          ],
          media: {
            src: "/lessons/aula-00/Titanium_CTR_Sistema.png",
            alt: "Fluxo visual de impressão, clique, visita, conversão, cliente e receita.",
            kind: "explanatory-image",
            caption: "CTR observa principalmente a passagem entre impressão e clique; o sistema continua depois disso.",
            sourceLabel: "Imagem explicativa Titanium",
            zoomable: true,
          },
        },
        {
          id: "a00v3-mini-decide",
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
              label: "Aumentaria o orçamento para recuperar volume.",
              feedback: "Escalar um sistema cuja conversão deteriorou pode amplificar o problema.",
            },
            {
              id: "b",
              label: "Criaria uma nova campanha imediatamente.",
              feedback: "Isso adiciona complexidade antes de localizar a ruptura.",
            },
            {
              id: "c",
              label: "Investigaria a experiência e a conversão após o clique.",
              feedback: "Correto. CPC estável e CVR em queda deslocam a investigação para a etapa de conversão.",
              recommended: true,
            },
            {
              id: "d",
              label: "Mudaria imediatamente a estratégia de lances.",
              feedback: "A alteração pode ser considerada depois, mas os sinais apresentados apontam primeiro para conversão.",
            },
          ],
        },
        {
          id: "a00v3-mini-review",
          type: "decide",
          mode: "apply",
          frameLabel: "Review",
          eyebrow: "Capítulo 05 · REVIEW",
          title: "Qual princípio deve permanecer?",
          body: [
            "Você pensou antes da explicação, construiu um modelo mental e tomou uma decisão com base nos sinais.",
          ],
          scenario:
            "Depois desta mini aula, qual afirmação resume melhor o raciocínio profissional esperado?",
          options: [
            {
              id: "a",
              label: "Uma métrica forte é suficiente para declarar sucesso.",
              feedback: "O sistema não pode ser reduzido a uma única métrica.",
            },
            {
              id: "b",
              label: "Toda queda de resultado deve ser resolvida com mudança de bidding.",
              feedback: "A solução precisa seguir o diagnóstico, não uma prescrição automática.",
            },
            {
              id: "c",
              label: "A leitura deve seguir a cadeia e priorizar a investigação onde o sinal mudou.",
              feedback: "Correto. Métrica, contexto e ordem de investigação precisam caminhar juntos.",
              recommended: true,
            },
            {
              id: "d",
              label: "CTR não possui utilidade em nenhuma análise.",
              feedback: "CTR é útil; o problema é tratá-lo como resposta final.",
            },
          ],
        },
      ],
    },
    {
      id: "a00v3-lesson-system",
      type: "visual",
      eyebrow: "Capítulo 06 · Jornada da Aula",
      title: "Como uma Aula Titanium funciona",
      frames: [
        {
          id: "a00v3-lesson-system-main",
          type: "visual",
          mode: "explain",
          frameLabel: "Arquitetura",
          eyebrow: "Capítulo 06 · Jornada da Aula",
          title: "Cada bloco existe porque cumpre uma função de aprendizagem.",
          body: [
            "Nem toda aula terá a mesma quantidade de blocos, mas a narrativa pedagógica segue uma ordem clara: relevância, ensino, exemplo, aplicação, correção, síntese e avaliação.",
          ],
          sequence: [
            { label: "Abertura", detail: "Por que isso importa?" },
            { label: "Ensino", detail: "O que preciso compreender?" },
            { label: "Exemplo", detail: "Como aparece na realidade?" },
            { label: "Aplicação A-D", detail: "Qual leitura ou decisão faz sentido?" },
            { label: "Erro e revisão", detail: "Onde meu raciocínio falhou?" },
            { label: "Mapa mental", detail: "Como as peças se conectam?" },
            { label: "Avaliação", detail: "Consigo demonstrar domínio?" },
          ],
          highlight:
            "Pergunta fechada não significa pergunta fácil. Podemos testar cálculo, diagnóstico, interpretação e estratégia com quatro alternativas bem construídas.",
        },
      ],
    },
    {
      id: "a00v3-levels",
      type: "visual",
      eyebrow: "Capítulo 07 · Níveis",
      title: "N0–N6 mede capacidade, não status",
      frames: [
        {
          id: "a00v3-levels-main",
          type: "visual",
          mode: "explain",
          frameLabel: "Mapa de níveis",
          eyebrow: "Capítulo 07 · N0–N6",
          title: "A progressão vai muito além de saber configurar campanhas.",
          media: {
            src: "/lessons/aula-00/Titanium_Niveis_N0_N6.png",
            alt: "Progressão visual dos níveis N0 a N6 do Titanium.",
            kind: "explanatory-image",
            caption: "Os níveis representam tipos crescentes de capacidade profissional.",
            sourceLabel: "Imagem explicativa Titanium",
            zoomable: true,
          },
        },
      ],
    },
    {
      id: "a00v3-assessment",
      type: "learn",
      eyebrow: "Capítulo 08 · Avaliação",
      title: "Como provas e erro funcionam",
      frames: [
        {
          id: "a00v3-assessment-criteria",
          type: "learn",
          mode: "explain",
          frameLabel: "O que avaliamos",
          eyebrow: "Capítulo 08 · Avaliação",
          title: "Toda pergunta usa alternativas A-D, mas pode testar níveis diferentes de raciocínio.",
          cards: [
            { title: "Conhecimento", description: "Você reconhece o princípio correto?" },
            { title: "Interpretação", description: "Você sabe ler sinais e contexto?" },
            { title: "Diagnóstico", description: "Você separa sintoma de causa?" },
            { title: "Decisão", description: "Você escolhe a próxima ação coerente?" },
            { title: "Estratégia", description: "Você conecta decisão e objetivo de negócio?" },
          ],
          afterSequence: [
            "Como todas as respostas são fechadas, o Titanium consegue corrigir imediatamente, registrar histórico e mostrar feedback sem depender de IA ou avaliação manual.",
          ],
        },
        {
          id: "a00v3-assessment-focus",
          type: "learn",
          mode: "focus",
          frameLabel: "Nota 9",
          eyebrow: "Capítulo 08 · Ponto-chave",
          title: "Por que a nota mínima é 9,0?",
          body: [
            "O 9 não existe para punir. Ele existe porque pequenas lacunas ignoradas no início se tornam decisões maiores e mais caras quando o sistema fica complexo.",
            "Erro não é fracasso. Erro é evidência sobre o que precisa ser revisado.",
          ],
          sequence: [
            { label: "Tentativa", detail: "O sistema registra suas respostas." },
            { label: "Mapa de Erros", detail: "Cada erro aponta para o conceito relacionado." },
            { label: "Revisão", detail: "Você volta ao trecho necessário." },
            { label: "Nova tentativa", detail: "Você demonstra domínio novamente." },
          ],
        },
      ],
    },
    {
      id: "a00v3-journal",
      type: "learn",
      eyebrow: "Capítulo 09 · Decisões",
      title: "Diagnosticar antes de prescrever",
      frames: [
        {
          id: "a00v3-journal-example",
          type: "learn",
          mode: "explain",
          frameLabel: "Exemplo",
          eyebrow: "Capítulo 09 · Exemplo",
          title: "Uma decisão sem evidência é apenas um palpite.",
          body: [
            "Cenário: o CPA aumentou 35%. Uma reação fraca seria mudar bidding imediatamente. Uma decisão profissional começa separando problema, evidência, hipótese e próxima investigação.",
          ],
          cards: [
            {
              title: "Prescrição precoce",
              subtitle: "Trocar bidding",
              description: "Age antes de validar onde ocorreu a quebra.",
            },
            {
              title: "Diagnóstico",
              subtitle: "CPC estável + CVR caiu",
              description: "Investiga página, oferta, qualidade do tráfego e mensuração antes de alterar lances.",
            },
          ],
        },
        {
          id: "a00v3-journal-check",
          type: "journal",
          mode: "apply",
          frameLabel: "Decisão",
          eyebrow: "Capítulo 09 · Agora é com você",
          title: "Qual registro representa uma decisão profissional?",
          scenario:
            "O CPA subiu 35%, o CPC permaneceu estável e a taxa de conversão caiu. Qual registro é o mais útil para orientar a próxima ação?",
          options: [
            {
              id: "a",
              label: "Problema: CPA subiu. Decisão: aumentar orçamento.",
              feedback: "O registro pula evidência, hipótese e investigação.",
            },
            {
              id: "b",
              label: "Problema: CPA subiu. Hipótese: o Google piorou. Decisão: trocar tudo.",
              feedback: "A hipótese não está sustentada pelos sinais apresentados.",
            },
            {
              id: "c",
              label: "Problema: CPA +35%. Evidência: CPC estável e CVR caiu. Hipótese: quebra após o clique. Próxima ação: auditar conversão antes de alterar lances.",
              feedback: "Correto. O registro conecta problema, evidência, hipótese e investigação.",
              recommended: true,
            },
            {
              id: "d",
              label: "Problema: CPA subiu. Decisão: esperar indefinidamente sem investigar.",
              feedback: "Evitar a investigação também não produz aprendizado nem ação orientada.",
            },
          ],
        },
      ],
    },
    {
      id: "a00v3-curriculum",
      type: "visual",
      eyebrow: "Capítulo 10 · Formação",
      title: "Mapa completo da formação",
      frames: [
        {
          id: "a00v3-curriculum-1",
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
        },
        {
          id: "a00v3-curriculum-2",
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
          highlight:
            "A ordem é intencional. Cada módulo adiciona uma camada que será exigida nos seguintes.",
        },
      ],
    },
    {
      id: "a00v3-review",
      type: "mindmap",
      eyebrow: "Capítulo 11 · Revisão Guiada",
      title: "Reconstrua o sistema antes de seguir",
      frames: [
        {
          id: "a00v3-review-map",
          type: "mindmap",
          mode: "explain",
          frameLabel: "Mapa Mental",
          eyebrow: "Capítulo 11 · Mapa Mental",
          title: "Sistema Titanium de Aprendizagem",
          body: [
            "Use o mapa para reconstruir as conexões principais da aula. Abra a imagem em tamanho maior se quiser revisar cada ramo.",
          ],
          media: {
            src: "/materials/aula-00/Titanium_Mind_Map_Aula_00.png",
            alt: "Mapa mental do Sistema Titanium de Aprendizagem.",
            kind: "mindmap",
            caption: "Objetivo, E5, aula, avaliação, erro e uso de imagens conectados ao domínio demonstrado.",
            sourceLabel: "Mapa Mental Titanium",
            zoomable: true,
          },
        },
        {
          id: "a00v3-review-check",
          type: "review",
          mode: "apply",
          frameLabel: "Revisão",
          eyebrow: "Capítulo 11 · Revisão",
          title: "Qual afirmação representa melhor a filosofia da formação?",
          scenario:
            "Escolha a opção que melhor conecta aprendizagem, avaliação e progressão no Titanium.",
          options: [
            {
              id: "a",
              label: "Concluir conteúdos rapidamente é a principal medida de progresso.",
              feedback: "Velocidade de consumo não demonstra capacidade.",
            },
            {
              id: "b",
              label: "Aprender significa memorizar conceitos e evitar erros.",
              feedback: "Erro analisado faz parte do processo de domínio.",
            },
            {
              id: "c",
              label: "O aluno aprende, aplica, recebe feedback, revisa e avança quando demonstra domínio.",
              feedback: "Correto. Essa sequência resume o sistema de aprendizagem do Titanium.",
              recommended: true,
            },
            {
              id: "d",
              label: "A ferramenta é mais importante do que a qualidade do raciocínio.",
              feedback: "A ferramenta é importante, mas o curso busca desenvolver decisão e diagnóstico.",
            },
          ],
        },
      ],
    },
    {
      id: "a00v3-diagnostic",
      type: "diagnostic",
      eyebrow: "Capítulo 12 · Diagnóstico Inicial",
      title: "Registre seu ponto de partida",
      body: [
        "Este diagnóstico não possui aprovação nem reprovação. Ele existe para registrar exatamente onde você está hoje.",
        "Não pesquise, não peça ajuda e não tente parecer mais avançado. Todas as 20 questões têm quatro alternativas, A a D.",
      ],
      quote:
        "O valor deste diagnóstico depende da honestidade do ponto de partida.",
    },
    {
      id: "a00v3-closing",
      type: "context",
      eyebrow: "Capítulo 13 · Encerramento",
      title: "Ponto de partida registrado",
      frames: [
        {
          id: "a00v3-closing-main",
          type: "learn",
          mode: "focus",
          frameLabel: "Encerramento",
          eyebrow: "Capítulo 13 · Encerramento",
          title: "Agora a formação começa de verdade.",
          body: [
            "Você já sabe como o Titanium ensina: contexto, explicação, imagem, pergunta A-D, feedback, revisão e demonstração de domínio.",
            "Seu diagnóstico inicial cria a referência que será comparada com sua evolução ao final da formação.",
          ],
          sequence: [
            { label: "Aula 00 concluída" },
            { label: "Diagnóstico inicial registrado" },
            { label: "Guia + Notas liberado" },
            { label: "Mapa Mental em imagem liberado" },
            { label: "Módulo 01 liberado" },
          ],
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
      id: "a00-guide",
      type: "titanium-lesson",
      title: "Guia + Notas — Aula 00",
      purpose: "Um único PDF para estudo e revisão, reunindo método, níveis, avaliação, imagens e notas essenciais.",
      status: "available",
      asset: "/materials/aula-00/Titanium_Guia_e_Notas_Aula_00.pdf",
    },
    {
      id: "a00-mindmap",
      type: "mindmap",
      title: "Mapa Mental — Sistema Titanium",
      purpose: "Imagem visual para revisar objetivo, E5, avaliação, erro e domínio em uma única visão.",
      status: "available",
      reviewStageId: "a00v3-review",
      asset: "/materials/aula-00/Titanium_Mind_Map_Aula_00.png",
    },
  ],
}

assertTitaniumLessonArchitecture(immersionLesson)
