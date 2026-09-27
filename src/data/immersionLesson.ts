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
      asset: "/materials/aula-00/Titanium_Mind_Map_Aula_00.png",
    },
  ],
}

assertTitaniumLessonArchitecture(immersionLesson)
