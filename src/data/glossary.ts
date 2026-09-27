import type { GlossaryEntry } from "../types/learning"

export type GlobalGlossaryEntry = GlossaryEntry & {
  aliases?: string[]
  formula?: string
  example?: string
  caution?: string
}

export const glossaryEntries: GlobalGlossaryEntry[] = [
  {
    term: "CTR",
    original: "Click-through rate",
    translation: "Taxa de cliques",
    explanation:
      "Percentual de impressões que resultaram em clique. Ajuda a entender a resposta ao anúncio, mas não prova conversão, receita ou lucro.",
    aliases: ["Taxa de Cliques", "taxa de cliques"],
    formula: "Cliques ÷ Impressões × 100",
    example: "100 cliques em 2.000 impressões = CTR de 5%.",
    caution: "Nunca interprete CTR isoladamente como resultado final da campanha.",
  },
  {
    term: "CPC",
    original: "Cost per click",
    translation: "Custo por clique",
    explanation:
      "Valor médio pago por clique. Mostra o custo para gerar uma visita a partir do anúncio.",
    aliases: ["Custo por Clique", "custo por clique"],
    formula: "Custo de mídia ÷ Cliques",
    example: "R$ 400 de custo e 100 cliques = CPC médio de R$ 4,00.",
    caution: "CPC baixo não garante aquisição eficiente se a conversão ou a qualidade forem ruins.",
  },
  {
    term: "CPA",
    original: "Cost per acquisition / action",
    translation: "Custo por aquisição ou por ação",
    explanation:
      "Custo médio associado à conversão que a campanha está medindo. O significado exato depende de qual ação foi definida como conversão.",
    aliases: ["Custo por Aquisição", "custo por aquisição"],
    formula: "Custo de mídia ÷ Conversões",
    example: "R$ 1.000 de mídia e 20 conversões = CPA de R$ 50.",
    caution: "Antes de julgar o CPA, confirme o que conta como conversão e se essa ação tem valor real para o negócio.",
  },
  {
    term: "CVR",
    original: "Conversion rate",
    translation: "Taxa de conversão",
    explanation:
      "Percentual de visitas, cliques ou usuários que completaram a ação de conversão definida no contexto da análise.",
    aliases: ["Taxa de Conversão", "taxa de conversão"],
    formula: "Conversões ÷ base analisada × 100",
    example: "10 conversões em 100 visitas = taxa de conversão de 10%.",
    caution: "Sempre confirme qual é o denominador usado: cliques, sessões, usuários ou outra base.",
  },
  {
    term: "ROAS",
    original: "Return on ad spend",
    translation: "Retorno sobre investimento em anúncios",
    explanation:
      "Relação entre receita atribuída à publicidade e o valor investido em mídia.",
    aliases: ["Return on Ad Spend"],
    formula: "Receita atribuída ÷ Investimento em anúncios",
    example: "R$ 5.000 de receita para R$ 1.000 de mídia = ROAS de 5x.",
    caution: "ROAS não é sinônimo de lucro; margem e outros custos continuam importando.",
  },
  {
    term: "CAC",
    original: "Customer acquisition cost",
    translation: "Custo de aquisição de cliente",
    explanation:
      "Custo médio para conquistar um novo cliente. Em análise de negócio, pode incluir mais despesas do que apenas mídia paga.",
    aliases: ["Custo de Aquisição de Cliente", "custo de aquisição de cliente"],
    formula: "Custos de aquisição ÷ Novos clientes",
    example: "R$ 10.000 de custos de aquisição para 20 novos clientes = CAC de R$ 500.",
    caution: "Não confunda automaticamente CAC com CPA de uma conversão intermediária, como lead ou formulário.",
  },
  {
    term: "LTV",
    original: "Lifetime value",
    translation: "Valor do cliente ao longo do tempo",
    explanation:
      "Estimativa do valor econômico gerado por um cliente durante seu relacionamento com a empresa.",
    aliases: ["Lifetime Value"],
    example: "Um cliente que gera compras recorrentes pode ter LTV muito superior ao valor da primeira venda.",
    caution: "A forma de calcular LTV varia conforme o modelo de negócio e deve ser usada com premissas explícitas.",
  },
  {
    term: "GA4",
    original: "Google Analytics 4",
    translation: "Google Analytics 4",
    explanation:
      "Plataforma do Google para mensuração e análise de comportamento em sites e aplicativos.",
    aliases: ["Google Analytics 4"],
    caution: "GA4 e Google Ads têm funções diferentes e devem ser configurados de forma coerente para análise e mensuração.",
  },
  {
    term: "GTM",
    original: "Google Tag Manager",
    translation: "Gerenciador de tags do Google",
    explanation:
      "Ferramenta para gerenciar e publicar tags de mensuração sem depender de alterações manuais no código a cada implementação.",
    aliases: ["Google Tag Manager"],
    caution: "GTM facilita implementação; ele não corrige sozinho uma estratégia de mensuração mal definida.",
  },
  {
    term: "PMax",
    original: "Performance Max",
    translation: "Performance Max",
    explanation:
      "Tipo de campanha do Google Ads orientado por objetivos que pode distribuir anúncios por diferentes inventários do ecossistema Google.",
    aliases: ["Performance Max"],
    caution: "PMax não deve ser tratada como uma caixa-preta sem metas, sinais, mensuração e leitura de negócio adequados.",
  },
  {
    term: "Smart Bidding",
    original: "Smart Bidding",
    translation: "Estratégias de Lances Inteligentes",
    explanation:
      "Conjunto de estratégias automáticas de lances do Google Ads que utiliza sinais disponíveis para otimizar em direção a um objetivo definido.",
    aliases: ["Estratégias de Lances Inteligentes"],
    caution: "Automação depende da qualidade do objetivo e dos sinais enviados ao sistema.",
  },
  {
    term: "Broad Match",
    original: "Broad match",
    translation: "Correspondência ampla",
    explanation:
      "Tipo de correspondência de palavra-chave que permite ao Google considerar buscas relacionadas à intenção além de uma reprodução literal do termo.",
    aliases: ["Correspondência Ampla", "correspondência ampla"],
    caution: "A amplitude aumenta a importância de mensuração, negativos, qualidade do sinal e leitura dos termos de pesquisa.",
  },
  {
    term: "Conversão",
    translation: "Conversão",
    explanation:
      "Ação que foi definida como relevante para o objetivo medido, como compra, formulário, ligação, agendamento ou outra ação de valor.",
    aliases: ["conversão", "conversões", "Conversões"],
    caution: "Nem toda conversão possui o mesmo valor econômico ou a mesma qualidade.",
  },
  {
    term: "Bidding",
    original: "Bidding",
    translation: "Estratégia de lances",
    explanation:
      "Lógica usada para definir ou automatizar lances nos leilões de anúncios conforme objetivo, restrições e sinais disponíveis.",
    aliases: ["bidding", "estratégia de lances", "estratégias de lances"],
    caution: "Trocar bidding sem diagnosticar a causa do problema pode mascarar o verdadeiro gargalo.",
  },
  {
    term: "Search",
    original: "Search",
    translation: "Rede de Pesquisa",
    explanation:
      "Ambiente de anúncios acionados principalmente por buscas e intenção expressa pelo usuário em consultas de pesquisa.",
    aliases: ["Google Search", "Rede de Pesquisa"],
  },
  {
    term: "Impressão",
    translation: "Impressão",
    explanation:
      "Registro de exibição de um anúncio. Uma impressão indica que o anúncio foi apresentado, não que houve clique ou resultado.",
    aliases: ["impressão", "impressões", "Impressões"],
  },
  {
    term: "Lead",
    translation: "Lead",
    explanation:
      "Contato ou oportunidade identificada antes de se tornar cliente. A qualidade de um lead depende do contexto e do critério de qualificação.",
    aliases: ["lead", "leads", "Leads"],
  },
  {
    term: "Tracking",
    original: "Tracking",
    translation: "Rastreamento / mensuração",
    explanation:
      "Conjunto de implementações usado para registrar eventos, conversões e sinais necessários para análise e otimização.",
    aliases: ["tracking"],
  },
  {
    term: "IA",
    original: "Inteligência Artificial",
    translation: "Inteligência Artificial",
    explanation:
      "Sistemas computacionais capazes de executar tarefas de inferência, geração, classificação ou previsão. No Titanium, IA é ferramenta, não substituto para julgamento estratégico.",
    aliases: ["Inteligência Artificial"],
  },
  {
    term: "E5",
    translation: "Método E5",
    explanation:
      "Método de domínio do Titanium: Entender, Exemplificar, Executar, Examinar e Explicar.",
    aliases: ["Método E5"],
  },
]

const normalizedLookup = new Map<string, GlobalGlossaryEntry>()

for (const entry of glossaryEntries) {
  for (const alias of [entry.term, ...(entry.aliases ?? [])]) {
    normalizedLookup.set(alias.toLocaleLowerCase("pt-BR"), entry)
  }
}

export const glossaryAliases = Array.from(normalizedLookup.keys()).sort(
  (a, b) => b.length - a.length,
)

export function getGlossaryEntry(value: string) {
  return normalizedLookup.get(value.toLocaleLowerCase("pt-BR"))
}
