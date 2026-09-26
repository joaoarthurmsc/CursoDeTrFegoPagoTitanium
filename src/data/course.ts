export type ModuleState = "disponível" | "bloqueado" | "concluído"

export type CourseModule = {
  id: string
  number: string
  title: string
  lessons: number
  progress: number
  state: ModuleState
}

export const modules: CourseModule[] = [
  {
    id: "01",
    number: "01",
    title: "Fundamentos de Tráfego e Aquisição",
    lessons: 6,
    progress: 0,
    state: "bloqueado",
  },
  {
    id: "02",
    number: "02",
    title: "Negócio, Cliente e Economia da Aquisição",
    lessons: 6,
    progress: 0,
    state: "bloqueado",
  },
  {
    id: "03",
    number: "03",
    title: "Google Ads: Infraestrutura e Arquitetura",
    lessons: 6,
    progress: 0,
    state: "bloqueado",
  },
  {
    id: "04",
    number: "04",
    title: "Google Search: Dominando a Intenção",
    lessons: 6,
    progress: 0,
    state: "bloqueado",
  },
  {
    id: "05",
    number: "05",
    title: "Anúncios, Oferta e Conversão",
    lessons: 6,
    progress: 0,
    state: "bloqueado",
  },
  {
    id: "06",
    number: "06",
    title: "Tracking, GA4 e GTM",
    lessons: 6,
    progress: 0,
    state: "bloqueado",
  },
  {
    id: "07",
    number: "07",
    title: "Otimização e Diagnóstico",
    lessons: 6,
    progress: 0,
    state: "bloqueado",
  },
  {
    id: "08",
    number: "08",
    title: "Bidding, Automação e Inteligência Artificial",
    lessons: 6,
    progress: 0,
    state: "bloqueado",
  },
  {
    id: "09",
    number: "09",
    title: "Ecossistema Google: PMax, Demand Gen, YouTube e Shopping",
    lessons: 6,
    progress: 0,
    state: "bloqueado",
  },
  {
    id: "10",
    number: "10",
    title: "Escala, Gestão e Estratégia Profissional",
    lessons: 6,
    progress: 0,
    state: "bloqueado",
  },
]

export const moduleOneLessons = [
  "O que realmente é tráfego pago",
  "Como funciona a publicidade digital",
  "Atenção, intenção e jornada",
  "As métricas fundamentais",
  "Da campanha ao resultado econômico",
  "Titanium Lab 01",
]

export const levels = [
  {
    code: "N0",
    name: "Iniciante",
    description: "Construção do vocabulário e da base mental.",
  },
  {
    code: "N1",
    name: "Compreensão",
    description: "Leitura dos fundamentos e das relações de causa.",
  },
  {
    code: "N2",
    name: "Execução guiada",
    description: "Aplicação com processos, checklists e supervisão.",
  },
  {
    code: "N3",
    name: "Operação autônoma",
    description: "Gestão consistente de campanhas e rotinas.",
  },
  {
    code: "N4",
    name: "Diagnóstico",
    description: "Identificação de gargalos e priorização de ações.",
  },
  {
    code: "N5",
    name: "Estratégia",
    description: "Decisões conectadas a negócio, economia e escala.",
  },
  {
    code: "N6",
    name: "Arquitetura",
    description: "Desenho de sistemas profissionais de aquisição.",
  },
]

export const competencies = [
  "Fundamentos",
  "Negócio e Economia",
  "Google Ads",
  "Search",
  "Conversão",
  "Tracking e Mensuração",
  "Diagnóstico",
  "Bidding e Automação",
  "Ecossistema Google",
  "Estratégia e Escala",
]

export const cases = [
  ["Titanium Clinic", "Clínica médica"],
  ["Titanium Dental", "Odontologia"],
  ["Titanium Local", "Negócio local"],
  ["Titanium E-commerce", "Loja virtual"],
  ["Titanium SaaS", "Software B2B"],
]

export const libraryCategories = [
  "Titanium Lesson",
  "Titanium Notes",
  "Titanium Visual",
  "Titanium Cheat Sheet",
  "Titanium Checklist",
  "Titanium Workbook",
  "Titanium Template",
  "Titanium Calculator",
  "Titanium Case",
  "Titanium Exam",
]
