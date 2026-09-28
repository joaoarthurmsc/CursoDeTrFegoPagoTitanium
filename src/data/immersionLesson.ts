import type { DiagnosticQuestion, ExamOption, Lesson } from "../types/learning"
import { assertTitaniumLessonArchitecture } from "./pedagogy"

const option = (id: string, label: string): ExamOption => ({
  id,
  label,
  feedback: "",
})

const diagnosticQuestions: DiagnosticQuestion[] = [
  {
    id: "d01v2",
    competence: "Fundamentos",
    prompt:
      "Uma campanha gerou 20.000 impressões, 1.400 cliques e 56 formulários. O responsável afirma que a campanha foi um sucesso porque o CTR ficou em 7%. Qual leitura é mais adequada?",
    options: [
      option(
        "a",
        "O CTR alto já permite considerar a campanha bem-sucedida, desde que esteja acima da média histórica da conta.",
      ),
      option(
        "b",
        "Os dados de mídia devem ser ignorados; apenas a receita final é útil para avaliar qualquer campanha.",
      ),
      option(
        "c",
        "O anúncio parece gerar resposta, mas ainda precisamos avaliar conversão, qualidade, CPA e economia antes de concluir sobre sucesso.",
      ),
      option(
        "d",
        "A campanha deve ser considerada fraca porque uma taxa de 4% entre clique e formulário é necessariamente baixa.",
      ),
    ],
    correctAnswer: "c",
  },
  {
    id: "d02v2",
    competence: "Fundamentos",
    prompt:
      "Qual definição representa melhor o papel do tráfego pago em uma estratégia profissional de aquisição?",
    options: [
      option(
        "a",
        "Usar investimento em mídia para acessar atenção ou intenção e conduzir pessoas por uma jornada mensurável de aquisição.",
      ),
      option(
        "b",
        "Maximizar a quantidade de visitas compradas, priorizando sempre o menor CPC possível em cada canal.",
      ),
      option(
        "c",
        "Substituir os canais orgânicos por mídia paga para tornar o crescimento mais rápido e totalmente previsível.",
      ),
      option(
        "d",
        "Comprar exposição apenas em plataformas nas quais o anunciante paga exclusivamente quando ocorre um clique.",
      ),
    ],
    correctAnswer: "a",
  },
  {
    id: "d03v2",
    competence: "Negócio e Economia",
    prompt:
      "Uma clínica obtém R$ 400 de contribuição econômica por novo paciente no horizonte analisado e apresenta CAC de R$ 550. Qual interpretação é mais madura?",
    options: [
      option(
        "a",
        "O crescimento de pacientes compensa automaticamente a diferença, pois escala de volume é mais importante que margem unitária.",
      ),
      option(
        "b",
        "O CAC deve ser comparado apenas ao preço da primeira consulta, independentemente de custos e recorrência do paciente.",
      ),
      option(
        "c",
        "A aquisição pode ser mantida sem revisão desde que a campanha esteja gerando um número crescente de conversões.",
      ),
      option(
        "d",
        "Nesse horizonte existe pressão econômica negativa; é preciso verificar recorrência, LTV e demais contribuições antes de decidir escalar.",
      ),
    ],
    correctAnswer: "d",
  },
  {
    id: "d04v2",
    competence: "Negócio e Economia",
    prompt:
      "Qual alternativa descreve melhor LTV — Lifetime Value — em uma análise de aquisição?",
    options: [
      option(
        "a",
        "A receita bruta obtida na primeira compra, antes de considerar custos, recorrência ou retenção.",
      ),
      option(
        "b",
        "O valor econômico acumulado que um cliente tende a gerar durante sua relação com o negócio.",
      ),
      option(
        "c",
        "O limite máximo de orçamento que a empresa pode investir mensalmente em mídia para adquirir clientes.",
      ),
      option(
        "d",
        "O valor médio de uma conversão registrado na plataforma de anúncios durante um determinado mês.",
      ),
    ],
    correctAnswer: "b",
  },
  {
    id: "d05v2",
    competence: "Google Ads",
    prompt:
      "Dois anunciantes participam de uma oportunidade de exibição no Google Ads. Um deles oferece lance maior. O que melhor descreve como a decisão de exibição acontece?",
    options: [
      option(
        "a",
        "O anunciante com maior lance vence automaticamente, porque o valor ofertado determina sozinho a posição.",
      ),
      option(
        "b",
        "A posição é comprada por uma tabela fixa e o leilão serve apenas para definir quanto será cobrado depois.",
      ),
      option(
        "c",
        "O leilão considera lance e outros fatores de qualidade, contexto e elegibilidade; maior lance isolado não garante a melhor posição.",
      ),
      option(
        "d",
        "O anunciante com maior orçamento diário recebe prioridade, desde que ambas as campanhas estejam ativas.",
      ),
    ],
    correctAnswer: "c",
  },
  {
    id: "d06v2",
    competence: "Google Ads",
    prompt:
      "Uma empresa está estruturando sua primeira operação no Google Ads. Qual sequência demonstra maior maturidade de implementação?",
    options: [
      option(
        "a",
        "Definir resultado de negócio → estruturar mensuração → desenhar campanhas → ativar tráfego → analisar e ajustar.",
      ),
      option(
        "b",
        "Criar campanhas → gerar volume → observar cliques → configurar conversões depois que houver dados suficientes.",
      ),
      option(
        "c",
        "Escolher palavras-chave de maior volume → definir o maior orçamento possível → otimizar apenas depois da primeira semana.",
      ),
      option(
        "d",
        "Copiar a estrutura de um concorrente → manter os mesmos lances → adaptar os anúncios quando o desempenho estabilizar.",
      ),
    ],
    correctAnswer: "a",
  },
  {
    id: "d07v2",
    competence: "Search",
    prompt:
      "Uma campanha possui a Keyword “ortopedista fortaleza”. Um usuário pesquisou “especialista em joelho perto de mim” e acionou o anúncio. Como devemos classificar os dois textos?",
    options: [
      option(
        "a",
        "Os dois são Search Terms; o primeiro é apenas o termo cadastrado manualmente pelo anunciante.",
      ),
      option(
        "b",
        "Os dois são Keywords; a diferença é que o segundo foi escolhido automaticamente pelo algoritmo.",
      ),
      option(
        "c",
        "O primeiro é Search Term e o segundo é Keyword porque a pesquisa real sempre substitui o critério configurado.",
      ),
      option(
        "d",
        "O primeiro é a Keyword configurada; o segundo é o Search Term realmente digitado pelo usuário.",
      ),
    ],
    correctAnswer: "d",
  },
  {
    id: "d08v2",
    competence: "Search",
    prompt:
      "Uma clínica de ortopedia recebe cliques recorrentes de pessoas que pesquisam “curso de ortopedia” e “residência em ortopedia”. Qual ação merece prioridade na investigação?",
    options: [
      option(
        "a",
        "Reduzir o raio geográfico, porque buscas educacionais normalmente indicam que a campanha está alcançando cidades distantes.",
      ),
      option(
        "b",
        "Revisar Search Terms e aplicar Negative Keywords para excluir intenções educacionais que não correspondem à oferta.",
      ),
      option(
        "c",
        "Reduzir os lances de todas as Keywords, porque o problema principal é o custo associado a esses cliques irrelevantes.",
      ),
      option(
        "d",
        "Migrar todas as Keywords para correspondência exata, porque isso elimina qualquer possibilidade de tráfego irrelevante.",
      ),
    ],
    correctAnswer: "b",
  },
  {
    id: "d09v2",
    competence: "Conversão",
    prompt:
      "CTR e CPC permanecem estáveis, mas a taxa de conversão da landing page caiu de 8% para 2%. Onde deve começar a investigação?",
    options: [
      option(
        "a",
        "Nos anúncios, porque qualquer queda de conversão indica que a mensagem do anúncio deixou de gerar interesse.",
      ),
      option(
        "b",
        "No orçamento diário, porque pouca verba pode reduzir a qualidade do tráfego mesmo quando CPC e CTR permanecem estáveis.",
      ),
      option(
        "c",
        "Na experiência pós-clique: página, oferta, formulário, velocidade, confiança e eventuais mudanças no processo de conversão.",
      ),
      option(
        "d",
        "Na estratégia de lances, porque uma queda de CVR deve ser corrigida primeiro alterando a forma como o Google participa do leilão.",
      ),
    ],
    correctAnswer: "c",
  },
  {
    id: "d10v2",
    competence: "Conversão",
    prompt:
      "Uma empresa dobra o tráfego para uma landing page com problemas conhecidos de conversão. Qual afirmação é mais correta?",
    options: [
      option(
        "a",
        "O volume adicional pode gerar mais conversões absolutas, mas não garante ganho proporcional nem melhora da economia enquanto o gargalo permanecer.",
      ),
      option(
        "b",
        "O número de conversões tende a dobrar na mesma proporção porque o volume de visitantes é o principal determinante do resultado.",
      ),
      option(
        "c",
        "O CAC tende a cair pela metade, já que o mesmo custo fixo da página passa a ser distribuído entre mais visitantes.",
      ),
      option(
        "d",
        "A plataforma de anúncios tende a compensar automaticamente os problemas da página ao identificar o aumento de tráfego.",
      ),
    ],
    correctAnswer: "a",
  },
  {
    id: "d11v2",
    competence: "Tracking e Mensuração",
    prompt:
      "Uma campanha gera leads reais, mas o acompanhamento de conversões do Google Ads está configurado de forma incompleta. Qual é o risco principal?",
    options: [
      option(
        "a",
        "O CPC aumentará necessariamente, porque a plataforma cobra mais quando não recebe dados de conversão suficientes.",
      ),
      option(
        "b",
        "A campanha deixará de participar de leilões até que todas as conversões sejam corrigidas e importadas para a conta.",
      ),
      option(
        "c",
        "O problema afeta apenas relatórios; as decisões do gestor e os sistemas de automação continuam recebendo os mesmos sinais.",
      ),
      option(
        "d",
        "Gestor e automação passam a trabalhar com sinais incompletos, prejudicando leitura, aprendizado e otimização da campanha.",
      ),
    ],
    correctAnswer: "d",
  },
  {
    id: "d12v2",
    competence: "Tracking e Mensuração",
    prompt:
      "Uma clínica registra todos os formulários como conversão, sem distinguir lead inválido, lead qualificado, agendamento e paciente que comprou. Qual consequência é mais provável?",
    options: [
      option(
        "a",
        "A mensuração permanece adequada porque volume de conversões é suficiente para representar qualidade ao longo do funil.",
      ),
      option(
        "b",
        "A operação pode otimizar para quantidade de ações sem perceber se elas estão gerando qualidade e resultado econômico.",
      ),
      option(
        "c",
        "O problema afeta somente o relatório financeiro; a plataforma consegue inferir automaticamente quais leads compraram.",
      ),
      option(
        "d",
        "A principal consequência é estética, porque diferentes tipos de conversão servem apenas para organizar os relatórios da conta.",
      ),
    ],
    correctAnswer: "b",
  },
  {
    id: "d13v2",
    competence: "Diagnóstico",
    prompt:
      "O CPA de uma campanha aumentou 35% nesta semana. Qual postura representa melhor um diagnóstico profissional?",
    options: [
      option(
        "a",
        "Reduzir o orçamento aproximadamente na mesma proporção para limitar perdas antes de analisar outras variáveis.",
      ),
      option(
        "b",
        "Reverter a última alteração realizada na campanha, porque a mudança mais recente é normalmente a causa mais provável.",
      ),
      option(
        "c",
        "Decompor o CPA em variáveis como CPC, CVR, mix, qualidade e volume antes de escolher a intervenção.",
      ),
      option(
        "d",
        "Migrar para uma estratégia de Target CPA para forçar a plataforma a retornar imediatamente ao custo anterior.",
      ),
    ],
    correctAnswer: "c",
  },
  {
    id: "d14v2",
    competence: "Diagnóstico",
    prompt:
      "Com base na tabela, qual mudança oferece a explicação mais forte para o aumento do CPA?",
    table: {
      headers: ["Métrica", "Antes", "Agora"],
      rows: [
        ["CPC", "R$ 4,00", "R$ 4,10"],
        ["CVR", "10%", "5%"],
        ["CPA", "R$ 40", "aprox. R$ 82"],
      ],
    },
    options: [
      option(
        "a",
        "A queda do CVR é a principal pista, porque reduziu pela metade a proporção de cliques que viraram conversão.",
      ),
      option(
        "b",
        "O aumento do CPC é a principal pista, porque qualquer aumento no custo do clique tende a explicar a maior parte do CPA.",
      ),
      option(
        "c",
        "CPC e CVR tiveram impacto aproximadamente equivalente, portanto nenhuma variável merece prioridade sobre a outra.",
      ),
      option(
        "d",
        "Não é possível relacionar essas métricas; CPA deve ser analisado separadamente de CPC e taxa de conversão.",
      ),
    ],
    correctAnswer: "a",
  },
  {
    id: "d15v2",
    competence: "Bidding e Automação",
    prompt:
      "Uma campanha utiliza Smart Bidding com objetivo de conversão. Qual descrição representa melhor o papel dessa automação?",
    options: [
      option(
        "a",
        "O gestor continua definindo manualmente o lance de cada leilão, enquanto o algoritmo apenas registra os resultados.",
      ),
      option(
        "b",
        "A estratégia de Keyword define os lances automaticamente; mensuração e qualidade dos sinais têm pouca influência.",
      ),
      option(
        "c",
        "O Google assume as decisões econômicas do negócio e define sozinho quanto a empresa deve aceitar pagar por um cliente.",
      ),
      option(
        "d",
        "O sistema ajusta lances em cada oportunidade usando sinais disponíveis para perseguir o objetivo definido, dependendo de boa mensuração.",
      ),
    ],
    correctAnswer: "d",
  },
  {
    id: "d16v2",
    competence: "Bidding e Automação",
    prompt:
      "Qual postura representa melhor o uso profissional de automação em mídia paga?",
    options: [
      option(
        "a",
        "Usar automação apenas depois de longos períodos de operação manual, independentemente do objetivo e da qualidade dos sinais.",
      ),
      option(
        "b",
        "Automatizar decisões mecânicas quando objetivo e mensuração são confiáveis, mantendo estratégia, economia e qualidade dos sinais sob gestão.",
      ),
      option(
        "c",
        "Priorizar controle manual sempre que o orçamento for alto, porque automação se torna mais arriscada conforme o investimento aumenta.",
      ),
      option(
        "d",
        "Transferir para a plataforma também as decisões estratégicas para reduzir interferência humana e evitar vieses do gestor.",
      ),
    ],
    correctAnswer: "b",
  },
  {
    id: "d17v2",
    competence: "Ecossistema Google",
    prompt:
      "Qual afirmação descreve melhor Performance Max — PMax — dentro do ecossistema Google?",
    options: [
      option(
        "a",
        "É uma campanha de Search com maior nível de automação, mas continua restrita aos resultados de pesquisa do Google.",
      ),
      option(
        "b",
        "É uma estrutura exclusiva de e-commerce que exige Merchant Center e não pode ser usada para outros objetivos.",
      ),
      option(
        "c",
        "É uma campanha orientada a objetivo que pode acessar múltiplos inventários do Google com forte uso de automação.",
      ),
      option(
        "d",
        "É um formato criado principalmente para substituir campanhas de marca quando a conta alcança alto volume de conversões.",
      ),
    ],
    correctAnswer: "c",
  },
  {
    id: "d18v2",
    competence: "Ecossistema Google",
    prompt:
      "Duas lojas possuem orçamento semelhante em Shopping. Uma mantém feed completo, preciso e atualizado; a outra possui dados incompletos e inconsistentes. Qual leitura é mais adequada?",
    options: [
      option(
        "a",
        "A qualidade do feed pode influenciar correspondência, apresentação e capacidade de otimização, portanto é parte importante da operação.",
      ),
      option(
        "b",
        "O feed tem pouca relevância depois que a campanha recebe orçamento suficiente, porque os lances passam a dominar a entrega.",
      ),
      option(
        "c",
        "A loja com mais seguidores em redes sociais tende a compensar automaticamente um feed pior por possuir maior autoridade digital.",
      ),
      option(
        "d",
        "O texto da homepage é mais importante que os dados de produto, pois o Shopping utiliza principalmente o conteúdo da página inicial.",
      ),
    ],
    correctAnswer: "a",
  },
  {
    id: "d19v2",
    competence: "Estratégia e Escala",
    prompt:
      "Uma campanha apresenta ROAS de 5x, mas o produto possui margem estreita, devoluções relevantes e custos operacionais elevados. O que podemos concluir?",
    options: [
      option(
        "a",
        "ROAS de 5x já comprova alta lucratividade, porque cada real de mídia gerou cinco reais de receita atribuída.",
      ),
      option(
        "b",
        "A campanha deve ser escalada enquanto o ROAS permanecer acima de 1x, pois toda receita adicional aumenta o lucro.",
      ),
      option(
        "c",
        "O número de conversões é suficiente para julgar rentabilidade; margem e devoluções importam apenas para o financeiro.",
      ),
      option(
        "d",
        "ROAS isolado não determina lucro; precisamos conectar receita atribuída a margem, devoluções, custos e economia do negócio.",
      ),
    ],
    correctAnswer: "d",
  },
  {
    id: "d20v2",
    competence: "Estratégia e Escala",
    prompt:
      "Uma campanha está rentável e estável em R$ 500 por dia. Qual abordagem representa melhor uma decisão profissional de escala?",
    options: [
      option(
        "a",
        "Dobrar imediatamente para R$ 1.000 por dia, porque estabilidade recente indica que o desempenho tende a crescer proporcionalmente.",
      ),
      option(
        "b",
        "Aumentar investimento de forma controlada e acompanhar desempenho marginal, capacidade do mercado, qualidade e economia.",
      ),
      option(
        "c",
        "Duplicar a campanha em várias cópias para preservar a eficiência da original enquanto cada nova estrutura encontra inventário adicional.",
      ),
      option(
        "d",
        "Manter o orçamento sem alterações até completar pelo menos trinta dias de estabilidade, independentemente da oportunidade de mercado.",
      ),
    ],
    correctAnswer: "b",
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
      id: "a00v4-welcome",
      type: "context",
      eyebrow: "Capítulo 01 · Bem-vindo",
      title: "O que é o Titanium",
      frames: [
        {
          id: "a00v4-welcome-main",
          type: "learn",
          mode: "explain",
          frameLabel: "Abertura",
          eyebrow: "Capítulo 01 · Abertura",
          canvasLayout: "split",
          title: "Você vai começar do fundamento e avançar até a estratégia.",
          body: [
            "O Titanium foi construído para quem pode começar sem familiaridade com mídia paga e quer chegar à capacidade de pensar, operar, diagnosticar e decidir profissionalmente.",
            "Não vamos pressupor que você já conhece siglas, métricas ou telas. Quando um conceito for importante, ele será apresentado, explicado, exemplificado, praticado e só depois usado como conhecimento prévio.",
          ],
          cards: [
            {
              title: "Comece pela raiz",
              description:
                "Primeiro entendemos o fenômeno. Depois damos nome profissional ao que você acabou de compreender.",
            },
            {
              title: "Construa camada por camada",
              description:
                "Um conceito novo não será cobrado junto com outros conceitos que ainda não foram ensinados.",
            },
            {
              title: "Chegue à estratégia",
              description:
                "A complexidade aumenta apenas quando a base necessária já foi construída.",
            },
          ],
          highlight:
            "O curso começa no zero. O objetivo é terminar com capacidade profissional, não parecer avançado logo no início.",
          media: {
            src: "/images/modulo00/aula00/modulo00aula00imagem01.png",
            alt: "Da base à estratégia: fundação, linguagem, compreensão, aplicação, diagnóstico e estratégia.",
            kind: "explanatory-image",
            caption:
              "A complexidade cresce sobre uma base construída.",
            sourceLabel: "Visual Titanium",
            zoomable: true,
          },
        },
      ],
    },
    {
      id: "a00v4-professional",
      type: "visual",
      eyebrow: "Capítulo 02 · Profissional",
      title: "O profissional que você vai se tornar",
      frames: [
        {
          id: "a00v4-professional-map",
          type: "visual",
          mode: "explain",
          frameLabel: "Evolução",
          eyebrow: "Capítulo 02 · Evolução",
          title: "A capacidade cresce em camadas.",
          sequence: [
            {
              label: "Iniciante",
              detail: "Constrói vocabulário e entende como as partes básicas funcionam.",
            },
            {
              label: "Executor guiado",
              detail: "Consegue aplicar processos com orientação.",
            },
            {
              label: "Operador autônomo",
              detail: "Executa com consistência sem depender de um passo a passo.",
            },
            {
              label: "Diagnosticador",
              detail: "Encontra onde o sistema está quebrando antes de agir.",
            },
            {
              label: "Estrategista",
              detail: "Escolhe prioridades conectando evidências e objetivo de negócio.",
            },
            {
              label: "Arquiteto",
              detail: "Desenha e defende sistemas completos de aquisição.",
            },
          ],
          afterSequence: [
            "Quando um resultado piora, mudar alguma coisa imediatamente é ação. Descobrir primeiro onde ocorreu a quebra é diagnóstico. Escolher a melhor resposta considerando o negócio é estratégia.",
          ],
        },
        {
          id: "a00v4-professional-focus",
          type: "learn",
          mode: "focus",
          frameLabel: "Ponto-chave",
          eyebrow: "Capítulo 02 · Ponto-chave",
          title: "Você não precisa chegar sabendo. Precisa aprender na ordem certa.",
          body: [
            "O Titanium vai introduzir a linguagem profissional progressivamente. Termos avançados só passam a aparecer naturalmente depois que a base correspondente tiver sido construída.",
          ],
          quote:
            "Profundidade sem fundamento vira confusão. Fundamento bem construído permite profundidade de verdade.",
        },
      ],
    },
    {
      id: "a00v4-e5",
      type: "learn",
      eyebrow: "Capítulo 03 · Método E5",
      title: "Como você vai aprender",
      frames: [
        {
          id: "a00v4-e5-main",
          type: "learn",
          mode: "explain",
          frameLabel: "E5",
          eyebrow: "Capítulo 03 · E5",
          canvasLayout: "visual-first",
          title: "Saber repetir uma definição não significa dominar.",
          body: [
            "Imagine alguém que decorou a frase 'tráfego é movimento de pessoas', mas não consegue reconhecer de onde essas pessoas vêm, para onde estão indo ou qual resultado se espera depois.",
            "Essa pessoa reconhece uma definição, mas ainda não domina o conceito. O E5 existe para transformar informação em capacidade.",
          ],
          media: {
            src: "/images/modulo00/aula00/modulo00aula00imagem02.png",
            alt: "Método E5: entender, exemplificar, executar, examinar e explicar.",
            kind: "explanatory-image",
            caption:
              "O E5 transforma informação em capacidade utilizável.",
            sourceLabel: "Framework Titanium",
            zoomable: true,
          },
        },
        {
          id: "a00v4-e5-check",
          type: "think",
          mode: "apply",
          frameLabel: "Teste rápido",
          eyebrow: "Capítulo 03 · Agora é com você",
          title: "Qual situação demonstra maior domínio?",
          scenario:
            "Duas pessoas estudaram o mesmo conceito. Qual delas demonstra uma compreensão mais completa?",
          allowRetry: true,
          options: [
            {
              id: "a",
              label:
                "A pessoa que consegue repetir a definição exatamente como estava no material.",
              feedback:
                "Memorizar a definição ajuda, mas ainda não demonstra aplicação ou interpretação.",
            },
            {
              id: "b",
              label:
                "A pessoa que reconhece o conceito em uma situação real e consegue explicar por que ele se aplica.",
              feedback:
                "Correto. Reconhecimento em contexto e explicação mostram uma camada mais profunda de domínio.",
              recommended: true,
            },
            {
              id: "c",
              label:
                "A pessoa que terminou o conteúdo mais rápido, mesmo sem testar o que aprendeu.",
              feedback:
                "Velocidade de consumo não demonstra domínio.",
            },
            {
              id: "d",
              label:
                "A pessoa que viu o mesmo conteúdo várias vezes, mas nunca precisou usá-lo.",
              feedback:
                "Repetição pode ajudar a lembrar, mas domínio exige uso e interpretação.",
            },
          ],
        },
      ],
    },
    {
      id: "a00v4-mastery",
      type: "discovery",
      eyebrow: "Capítulo 04 · Domínio",
      title: "Consumo não é domínio",
      frames: [
        {
          id: "a00v4-mastery-compare",
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
                { label: "Aplicações", value: "0" },
                { label: "Decisões justificadas", value: "0" },
                { label: "Erros analisados", value: "0" },
              ],
            },
            {
              label: "Pessoa B",
              metrics: [
                { label: "Estudo ativo", value: "8h" },
                { label: "Casos resolvidos", value: "15" },
                { label: "Decisões avaliadas", value: "11" },
                { label: "Erros corrigidos", value: "6" },
              ],
            },
          ],
        },
        {
          id: "a00v4-mastery-focus",
          type: "learn",
          mode: "focus",
          frameLabel: "Regra de domínio",
          eyebrow: "Capítulo 04 · Ponto-chave",
          title: "No Titanium, terminar não significa chegar ao fim.",
          body: [
            "Ler e assistir ajudam você a aprender. Mas conclusão exige capacidade demonstrada por aplicação, avaliação e correção dos erros.",
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
      id: "a00v4-mini-lesson",
      type: "think",
      eyebrow: "Capítulo 05 · Mini Aula",
      title: "Experimente o método sem precisar conhecer marketing",
      frames: [
        {
          id: "a00v4-mini-think",
          type: "think",
          mode: "apply",
          frameLabel: "Pense",
          eyebrow: "Capítulo 05 · Primeiro raciocínio",
          title: "Mais movimento significa automaticamente mais resultado?",
          scenario:
            "Ontem, uma loja recebeu 100 visitantes e fez 5 vendas. Hoje recebeu 200 visitantes e fez as mesmas 5 vendas. Qual conclusão é mais adequada?",
          options: [
            {
              id: "a",
              label:
                "Hoje foi necessariamente melhor porque a loja recebeu o dobro de visitantes.",
              feedback:
                "Mais movimento aconteceu, mas o número de vendas não aumentou.",
            },
            {
              id: "b",
              label:
                "Hoje foi necessariamente pior porque mais visitantes sempre aumentam os custos do negócio.",
              feedback:
                "O cenário não fornece informação suficiente sobre custos para afirmar isso.",
            },
            {
              id: "c",
              label:
                "O movimento aumentou, mas precisamos entender por que esse aumento não se transformou em mais vendas.",
              feedback:
                "Correto. Movimento e resultado são partes relacionadas, mas não são a mesma coisa.",
              recommended: true,
            },
            {
              id: "d",
              label:
                "Não existe relação útil entre quantidade de visitantes e quantidade de vendas.",
              feedback:
                "Existe relação, mas ela precisa ser observada ao longo do caminho completo.",
            },
          ],
        },
        {
          id: "a00v4-mini-learn",
          type: "learn",
          mode: "explain",
          frameLabel: "Aprenda",
          eyebrow: "Capítulo 05 · Explicação",
          title: "Movimento é uma etapa. Resultado acontece depois.",
          body: [
            "Trazer mais pessoas para um ambiente pode ser útil, mas o valor aparece quando o restante do caminho funciona. Pessoas precisam compreender a oferta, confiar, conseguir agir e finalmente produzir o resultado esperado.",
            "Ao longo do curso, você aprenderá nomes e medidas profissionais para observar cada passagem. Nesta aula, basta guardar a lógica: primeiro existe movimento; depois precisamos entender o que acontece com esse movimento.",
          ],
          sequence: [
            { label: "Pessoas percebem uma oportunidade" },
            { label: "Algumas se aproximam" },
            { label: "Algumas demonstram interesse" },
            { label: "Algumas realizam a ação desejada" },
            { label: "O negócio recebe um resultado" },
          ],
        },
        {
          id: "a00v4-mini-decide",
          type: "decide",
          mode: "apply",
          frameLabel: "Decida",
          eyebrow: "Capítulo 05 · Próxima investigação",
          title: "Onde você olharia primeiro?",
          scenario:
            "A quantidade de visitantes dobrou, mas as vendas permaneceram iguais. Qual próxima investigação é mais coerente?",
          allowRetry: true,
          options: [
            {
              id: "a",
              label:
                "Trazer ainda mais visitantes imediatamente, antes de entender o que já está acontecendo.",
              feedback:
                "Mais volume pode ampliar o problema sem explicar onde o caminho deixou de funcionar.",
            },
            {
              id: "b",
              label:
                "Investigar o que acontece entre a entrada do visitante e a decisão de compra.",
              feedback:
                "Correto. Primeiro localizamos onde o caminho está perdendo resultado.",
              recommended: true,
            },
            {
              id: "c",
              label:
                "Concluir que todos os novos visitantes eram ruins sem observar nenhum outro dado.",
              feedback:
                "É uma hipótese possível, mas o cenário ainda não fornece evidência suficiente para concluir.",
            },
            {
              id: "d",
              label:
                "Ignorar a mudança porque o número final de vendas não caiu.",
              feedback:
                "O comportamento mudou e merece investigação, mesmo com o mesmo número final de vendas.",
            },
          ],
        },
        {
          id: "a00v4-mini-review",
          type: "review",
          mode: "focus",
          frameLabel: "Síntese",
          eyebrow: "Capítulo 05 · O que mudou",
          title: "Você acabou de usar o raciocínio que o Titanium vai desenvolver.",
          body: [
            "Primeiro você recebeu um cenário. Depois separou movimento de resultado. Por fim, escolheu uma investigação antes de prescrever uma solução.",
          ],
          highlight:
            "Nas próximas aulas, o mesmo raciocínio ganhará nomes, métricas, ferramentas e níveis crescentes de complexidade.",
        },
      ],
    },
    {
      id: "a00v4-lesson-system",
      type: "visual",
      eyebrow: "Capítulo 06 · Sistema",
      title: "Como uma Aula Titanium funciona",
      frames: [
        {
          id: "a00v4-lesson-system-main",
          type: "visual",
          mode: "explain",
          frameLabel: "Arquitetura",
          eyebrow: "Capítulo 06 · Jornada da Aula",
          canvasLayout: "visual-first",
          title: "Cada bloco existe porque cumpre uma função de aprendizagem.",
          body: [
            "Nem toda aula terá a mesma quantidade de blocos, mas a narrativa pedagógica segue uma ordem clara: relevância, fundamento, exemplo, aplicação, correção, síntese e avaliação.",
          ],
          media: {
            src: "/images/modulo00/aula00/modulo00aula00imagem03.png",
            alt: "Como uma Aula Titanium funciona: relevância, fundamento, exemplo, aplicação, feedback, síntese, mapa mental e prova.",
            kind: "explanatory-image",
            caption:
              "Aprender, aplicar, corrigir e dominar formam uma única jornada.",
            sourceLabel: "Arquitetura Titanium",
            zoomable: true,
          },
          highlight:
            "Pergunta fechada não significa pergunta fácil. A complexidade cresce junto com o conhecimento que já foi construído.",
        },
      ],
    },
    {
      id: "a00v4-levels",
      type: "visual",
      eyebrow: "Capítulo 07 · Níveis",
      title: "N0–N6 mede capacidade, não status",
      frames: [
        {
          id: "a00v4-levels-main",
          type: "visual",
          mode: "explain",
          frameLabel: "Mapa de níveis",
          eyebrow: "Capítulo 07 · N0–N6",
          canvasLayout: "visual-first",
          title: "A progressão começa na base e termina em arquitetura.",
          media: {
            src: "/images/modulo00/aula00/modulo00aula00imagem04.png",
            alt: "Progressão visual dos níveis N0 a N6 do Titanium.",
            kind: "explanatory-image",
            caption:
              "Os níveis representam tipos crescentes de capacidade profissional.",
            sourceLabel: "Imagem explicativa Titanium",
            zoomable: true,
          },
        },
      ],
    },
    {
      id: "a00v4-assessment",
      type: "learn",
      eyebrow: "Capítulo 08 · Avaliação",
      title: "Como provas e erro funcionam",
      frames: [
        {
          id: "a00v4-assessment-criteria",
          type: "learn",
          mode: "explain",
          frameLabel: "O que avaliamos",
          eyebrow: "Capítulo 08 · Avaliação",
          title: "As perguntas ficam mais difíceis conforme sua base fica maior.",
          cards: [
            {
              title: "Conhecimento",
              description: "Você reconhece o princípio correto?",
            },
            {
              title: "Interpretação",
              description: "Você entende o que uma situação está mostrando?",
            },
            {
              title: "Diagnóstico",
              description: "Você consegue localizar onde existe um problema?",
            },
            {
              title: "Decisão",
              description: "Você escolhe uma próxima ação coerente?",
            },
            {
              title: "Estratégia",
              description: "Você conecta a decisão ao objetivo do negócio?",
            },
          ],
          afterSequence: [
            "Todas as respostas avaliativas usam A-D. O sistema corrige imediatamente e registra seu histórico sem depender de IA ou avaliação manual.",
          ],
        },
        {
          id: "a00v4-assessment-focus",
          type: "learn",
          mode: "focus",
          frameLabel: "Nota 9",
          eyebrow: "Capítulo 08 · Ponto-chave",
          title: "Por que a nota mínima é 9,0?",
          body: [
            "O 9 não existe para punir. Ele existe porque lacunas pequenas no fundamento se tornam erros maiores quando o conteúdo fica mais complexo.",
            "Erro não é fracasso. Erro é evidência sobre o que precisa ser revisado.",
          ],
          sequence: [
            { label: "Tentativa", detail: "O sistema registra suas respostas." },
            {
              label: "Mapa de Erros",
              detail: "Cada erro aponta para o fundamento relacionado.",
            },
            { label: "Revisão", detail: "Você volta ao trecho necessário." },
            {
              label: "Nova tentativa",
              detail: "Você demonstra domínio novamente.",
            },
          ],
        },
      ],
    },
    {
      id: "a00v4-journal",
      type: "learn",
      eyebrow: "Capítulo 09 · Decisões",
      title: "Investigar antes de agir",
      frames: [
        {
          id: "a00v4-journal-example",
          type: "learn",
          mode: "explain",
          frameLabel: "Exemplo",
          eyebrow: "Capítulo 09 · Exemplo",
          title: "Uma decisão sem evidência é apenas um palpite.",
          body: [
            "Cenário: uma loja continua recebendo a mesma quantidade de pessoas, mas as vendas caíram pela metade. Uma reação fraca seria simplesmente tentar trazer mais pessoas.",
            "Uma decisão profissional começa registrando o problema, separando o que sabemos do que imaginamos e escolhendo a próxima investigação.",
          ],
          cards: [
            {
              title: "Prescrição precoce",
              subtitle: "Trazer mais pessoas",
              description:
                "Age antes de entender por que o mesmo movimento passou a gerar menos resultado.",
            },
            {
              title: "Investigação",
              subtitle: "Observar o caminho",
              description:
                "Verifica oferta, disponibilidade, atendimento e experiência antes de decidir aumentar o movimento.",
            },
          ],
        },
        {
          id: "a00v4-journal-check",
          type: "journal",
          mode: "apply",
          frameLabel: "Decisão",
          eyebrow: "Capítulo 09 · Agora é com você",
          title: "Qual registro ajuda mais a tomar uma boa decisão?",
          scenario:
            "As visitas permaneceram estáveis, mas as vendas caíram pela metade. Qual registro orienta melhor a investigação?",
          options: [
            {
              id: "a",
              label:
                "Problema: vendas caíram. Decisão: trazer mais pessoas imediatamente.",
              feedback:
                "A decisão pula a investigação do que mudou no caminho existente.",
            },
            {
              id: "b",
              label:
                "Problema: vendas caíram. Evidência: visitas estáveis. Hipótese: algo entre entrada e compra piorou. Próxima ação: investigar esse caminho.",
              feedback:
                "Correto. O registro separa evidência, hipótese e próxima investigação.",
              recommended: true,
            },
            {
              id: "c",
              label:
                "Problema: vendas caíram. Hipótese: todos os visitantes ficaram piores. Decisão: trocar tudo.",
              feedback:
                "A hipótese foi tratada como certeza sem evidência suficiente.",
            },
            {
              id: "d",
              label:
                "Problema: vendas caíram. Decisão: esperar até o número voltar sozinho.",
              feedback:
                "Esperar sem investigar não constrói entendimento nem orienta ação.",
            },
          ],
        },
      ],
    },
    {
      id: "a00v4-curriculum",
      type: "visual",
      eyebrow: "Capítulo 10 · Formação",
      title: "Mapa completo da formação",
      frames: [
        {
          id: "a00v4-curriculum-1",
          type: "visual",
          mode: "explain",
          frameLabel: "Módulos 01–05",
          eyebrow: "Capítulo 10 · Base",
          title: "Primeiro, construímos o sistema por baixo.",
          sequence: [
            { label: "01 — Fundamentos de tráfego e aquisição" },
            { label: "02 — Negócio, cliente e economia" },
            { label: "03 — Estrutura do Google Ads" },
            { label: "04 — Pesquisa e intenção" },
            { label: "05 — Anúncios, oferta e conversão" },
          ],
        },
        {
          id: "a00v4-curriculum-2",
          type: "visual",
          mode: "explain",
          frameLabel: "Módulos 06–10",
          eyebrow: "Capítulo 10 · Profundidade",
          title: "Depois, aumentamos mensuração, diagnóstico e escala.",
          sequence: [
            { label: "06 — Mensuração e dados" },
            { label: "07 — Otimização e diagnóstico" },
            { label: "08 — Lances e automação" },
            { label: "09 — Ecossistema de campanhas Google" },
            { label: "10 — Escala, gestão e estratégia" },
          ],
          highlight:
            "Você não precisa compreender os nomes avançados agora. Cada módulo apresentará sua própria linguagem quando chegar a hora.",
        },
      ],
    },
    {
      id: "a00v4-review",
      type: "mindmap",
      eyebrow: "Capítulo 11 · Revisão Guiada",
      title: "Reconstrua o sistema antes de seguir",
      frames: [
        {
          id: "a00v4-review-map",
          type: "mindmap",
          mode: "explain",
          frameLabel: "Mapa Mental",
          eyebrow: "Capítulo 11 · Mapa Mental",
          canvasLayout: "visual-first",
          title: "Sistema Titanium de Aprendizagem",
          body: [
            "Use o mapa para reconstruir as conexões principais da aula. A imagem continua disponível na Biblioteca depois da conclusão.",
          ],
          media: {
            src: "/images/modulo00/aula00/modulo00aula00imagem05.png",
            alt: "Mapa mental do Sistema Titanium de Aprendizagem.",
            kind: "mindmap",
            caption:
              "Objetivo, E5, aula, avaliação, erro e domínio em uma única visão.",
            sourceLabel: "Mapa Mental Titanium",
            zoomable: true,
          },
        },
        {
          id: "a00v4-review-check",
          type: "review",
          mode: "apply",
          frameLabel: "Revisão",
          eyebrow: "Capítulo 11 · Revisão",
          title: "Qual afirmação representa melhor a filosofia da formação?",
          scenario:
            "Escolha a opção que melhor conecta fundamento, prática e progressão no Titanium.",
          options: [
            {
              id: "a",
              label:
                "O curso deve usar linguagem avançada desde o começo para acelerar a adaptação do aluno.",
              feedback:
                "Complexidade precoce sem base produz confusão, não aceleração real.",
            },
            {
              id: "b",
              label:
                "O aluno aprende uma base, aplica, recebe feedback e só depois usa esse conhecimento em problemas mais complexos.",
              feedback:
                "Correto. A progressão depende de pré-requisitos construídos em ordem.",
              recommended: true,
            },
            {
              id: "c",
              label:
                "Concluir mais telas é a principal evidência de que um conteúdo foi dominado.",
              feedback:
                "Consumo não demonstra capacidade.",
            },
            {
              id: "d",
              label:
                "O glossário substitui a necessidade de ensinar conceitos básicos durante as aulas.",
              feedback:
                "O glossário é apoio. Ele nunca substitui ensino formal.",
            },
          ],
        },
      ],
    },
    {
      id: "a00v4-diagnostic",
      type: "diagnostic",
      eyebrow: "Capítulo 12 · Diagnóstico Inicial",
      title: "Registre seu ponto de partida",
      body: [
        "Este diagnóstico não possui aprovação nem reprovação. Ele mede o que você já sabe antes da formação.",
        "Algumas perguntas usam termos que ainda não foram ensinados. Isso é intencional. Durante o diagnóstico, o glossário fica fora da questão para não transformar medição em aula.",
        "Não pesquise, não peça ajuda e não tente parecer mais avançado. Responda com aquilo que consegue sustentar hoje.",
      ],
      quote:
        "Errar aqui é esperado. O valor do diagnóstico depende da honestidade do ponto de partida.",
    },
    {
      id: "a00v4-closing",
      type: "context",
      eyebrow: "Capítulo 13 · Encerramento",
      title: "Ponto de partida registrado",
      frames: [
        {
          id: "a00v4-closing-main",
          type: "learn",
          mode: "focus",
          frameLabel: "Encerramento",
          eyebrow: "Capítulo 13 · Encerramento",
          title: "Agora a formação começa pela raiz.",
          body: [
            "Você já sabe como o Titanium ensina: fundamento primeiro, linguagem profissional depois, aplicação progressiva e domínio demonstrado.",
            "Na Aula 01, não vamos começar com siglas ou diagnósticos avançados. Vamos começar entendendo o que tráfego realmente é.",
          ],
          sequence: [
            { label: "Aula 00 concluída" },
            { label: "Diagnóstico inicial registrado" },
            { label: "Guia + Notas liberado" },
            { label: "Mapa Mental liberado" },
            { label: "Módulo 01 liberado" },
          ],
        },
      ],
    },
  ],
  diagnostic: {
    id: "initial-diagnostic-v2",
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
      asset: "/images/modulo00/aula00/modulo00aula00imagem05.png",
    },
  ],
}

assertTitaniumLessonArchitecture(immersionLesson)
