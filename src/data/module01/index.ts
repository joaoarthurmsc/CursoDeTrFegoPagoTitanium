import type { Exam, Lesson } from "../../types/learning"
import { lessonOneDemo } from "../lessonDemo"
import { assertTitaniumLessonArchitecture } from "../pedagogy"

export const lessonTwo: Lesson = {
  "id": "02",
  "moduleId": "01",
  "number": "02",
  "title": "Como funciona a publicidade digital",
  "masteryTime": "50–70 minutos",
  "objective": "Entender, sem depender de uma plataforma específica, quem participa da publicidade digital, como a distribuição é organizada e por que um leilão não é simplesmente “quem paga mais”.",
  "overview": "Você sai do conceito de tráfego e passa a compreender o sistema que permite comprar distribuição: anunciante, plataforma, inventário, campanha, orçamento e leilão.",
  "demo": false,
  "completionMode": "exam",
  "stages": [
    {
      "id": "a02-system",
      "type": "context",
      "eyebrow": "Capítulo 01 · Sistema",
      "title": "Publicidade digital é um sistema de distribuição",
      "frames": [
        {
          "id": "a02-system-root",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Visão geral",
          "eyebrow": "Capítulo 01 · A raiz",
          "title": "Antes da plataforma, existem três participantes.",
          "body": [
            "Um negócio quer alcançar pessoas. Uma pessoa vive um contexto e pode perceber uma mensagem. Entre os dois existe uma plataforma que organiza oportunidades de distribuição.",
            "Publicidade digital é o sistema que permite ao anunciante comprar parte dessa distribuição para aumentar a chance de encontro entre mensagem e pessoa."
          ],
          "cards": [
            {
              "title": "Anunciante",
              "description": "Define o que quer comunicar, para quem faz sentido e quanto pode investir."
            },
            {
              "title": "Plataforma",
              "description": "Organiza regras, espaços, contextos e oportunidades de distribuição."
            },
            {
              "title": "Pessoa",
              "description": "Recebe ou encontra mensagens enquanto navega, pesquisa, assiste ou utiliza serviços digitais."
            }
          ],
          "highlight": "Comprar mídia não significa comprar resultado. Significa comprar oportunidades de distribuição."
        },
        {
          "id": "a02-system-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Reconheça",
          "eyebrow": "Capítulo 01 · Agora é com você",
          "title": "Qual descrição representa melhor publicidade digital?",
          "scenario": "Uma empresa quer ser descoberta por mais pessoas e decide investir em uma plataforma digital. O que ela está comprando primeiro?",
          "allowRetry": true,
          "options": [
            {
              "id": "a",
              "label": "Um número garantido de clientes, porque o pagamento transfere o risco do negócio para a plataforma.",
              "feedback": "Pagamento por mídia não garante clientes ou resultado."
            },
            {
              "id": "b",
              "label": "Oportunidades de distribuição para que uma mensagem possa alcançar pessoas em determinados contextos.",
              "feedback": "Correto. O investimento compra distribuição, não o resultado final.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "A propriedade definitiva dos espaços digitais onde os anúncios poderão aparecer.",
              "feedback": "O anunciante compra acesso à distribuição, não propriedade do inventário."
            },
            {
              "id": "d",
              "label": "A certeza de que toda pessoa alcançada estará procurando exatamente aquela oferta.",
              "feedback": "Pessoas podem estar em diferentes estados de atenção e intenção."
            }
          ]
        }
      ]
    },
    {
      "id": "a02-inventory",
      "type": "visual",
      "eyebrow": "Capítulo 02 · Distribuição",
      "title": "Onde a publicidade pode aparecer",
      "frames": [
        {
          "id": "a02-inventory-visual",
          "type": "visual",
          "mode": "explain",
          "frameLabel": "Visual",
          "canvasLayout": "visual-first",
          "eyebrow": "Capítulo 02 · Inventário",
          "title": "Inventário é o conjunto de oportunidades de exibição disponíveis.",
          "body": [
            "Uma plataforma possui espaços, formatos e momentos em que mensagens publicitárias podem ser distribuídas. Esse conjunto é chamado de inventário publicitário.",
            "O inventário não é uma “prateleira fixa”. As oportunidades mudam conforme contexto, usuário, conteúdo, pesquisa, dispositivo, horário e outras condições."
          ],
          "media": {
            "src": "/images/modulo01/aula02/modulo01aula02imagem01.png",
            "alt": "Sistema de publicidade digital com anunciante, plataforma, inventário e pessoa.",
            "kind": "diagram",
            "caption": "Publicidade digital organiza a distribuição entre anunciante, plataforma, inventário e pessoa.",
            "sourceLabel": "Visual Titanium",
            "zoomable": true
          }
        },
        {
          "id": "a02-inventory-check",
          "type": "decide",
          "mode": "apply",
          "frameLabel": "Interprete",
          "eyebrow": "Capítulo 02 · Agora é com você",
          "title": "O que significa inventário?",
          "scenario": "Uma plataforma oferece diferentes momentos e espaços onde mensagens podem aparecer. Como devemos interpretar isso?",
          "options": [
            {
              "id": "a",
              "label": "Como o conjunto de oportunidades de distribuição que a plataforma pode disponibilizar.",
              "feedback": "Correto. Inventário descreve as oportunidades onde anúncios podem ser apresentados.",
              "recommended": true
            },
            {
              "id": "b",
              "label": "Como a lista de clientes que a plataforma promete entregar a cada anunciante.",
              "feedback": "Inventário não é uma lista de clientes garantidos."
            },
            {
              "id": "c",
              "label": "Como o saldo de dinheiro existente na conta do anunciante.",
              "feedback": "Saldo e orçamento são conceitos financeiros, não inventário."
            },
            {
              "id": "d",
              "label": "Como o conjunto de resultados econômicos que o anunciante já alcançou.",
              "feedback": "Inventário antecede resultado; ele se refere à distribuição."
            }
          ]
        }
      ]
    },
    {
      "id": "a02-campaign",
      "type": "learn",
      "eyebrow": "Capítulo 03 · Organização",
      "title": "Campanha organiza uma intenção de mídia",
      "frames": [
        {
          "id": "a02-campaign-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Conceito",
          "eyebrow": "Capítulo 03 · Campanha",
          "title": "Campanha é uma estrutura de organização, não um resultado.",
          "body": [
            "Na prática, plataformas precisam de uma estrutura para agrupar decisões de distribuição. Chamamos essa estrutura de campanha.",
            "Uma campanha costuma reunir um objetivo, um orçamento e regras de entrega. Em plataformas diferentes, a arquitetura interna muda, mas a ideia de organizar a distribuição permanece."
          ],
          "highlight": "Campanha é o contêiner de decisões de mídia. O negócio continua existindo fora dela."
        },
        {
          "id": "a02-campaign-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Diferencie",
          "eyebrow": "Capítulo 03 · Agora é com você",
          "title": "Qual afirmação é mais madura?",
          "scenario": "Uma empresa criou uma campanha nova. O que podemos afirmar apenas com essa informação?",
          "options": [
            {
              "id": "a",
              "label": "Que o negócio já possui um sistema organizado para comprar distribuição, mas ainda não sabemos se haverá resultado.",
              "feedback": "Correto. Criar a estrutura não comprova performance.",
              "recommended": true
            },
            {
              "id": "b",
              "label": "Que a empresa já aumentou a receita, porque toda campanha criada gera resultado.",
              "feedback": "A existência da campanha não comprova receita."
            },
            {
              "id": "c",
              "label": "Que a plataforma já escolheu exatamente quem se tornará cliente.",
              "feedback": "A plataforma organiza distribuição, não define antecipadamente clientes."
            },
            {
              "id": "d",
              "label": "Que orçamento e resultado são equivalentes, já que ambos ficam dentro da campanha.",
              "feedback": "Orçamento é limite de investimento; resultado é consequência do sistema."
            }
          ]
        }
      ]
    },
    {
      "id": "a02-budget",
      "type": "learn",
      "eyebrow": "Capítulo 04 · Orçamento",
      "title": "Orçamento limita investimento; não promete entrega",
      "frames": [
        {
          "id": "a02-budget-main",
          "type": "learn",
          "mode": "focus",
          "frameLabel": "Ponto-chave",
          "eyebrow": "Capítulo 04 · Orçamento",
          "title": "Orçamento responde “quanto podemos disponibilizar?”, não “quanto vamos ganhar?”.",
          "body": [
            "O orçamento define a quantidade de recurso financeiro que pode ser usada na distribuição dentro de um período ou regra de plataforma.",
            "Ele funciona como restrição e planejamento. A plataforma ainda precisa encontrar oportunidades compatíveis com as regras da campanha."
          ],
          "quote": "Mais orçamento aumenta capacidade de participar de oportunidades; não transforma uma estratégia ruim em boa."
        },
        {
          "id": "a02-budget-check",
          "type": "decide",
          "mode": "apply",
          "frameLabel": "Decida",
          "eyebrow": "Capítulo 04 · Agora é com você",
          "title": "Aumentar orçamento resolve qualquer problema?",
          "scenario": "Uma campanha encontra poucas oportunidades adequadas por causa das regras definidas. O anunciante dobra o orçamento. Qual leitura vem primeiro?",
          "allowRetry": true,
          "options": [
            {
              "id": "a",
              "label": "O dobro do orçamento garante o dobro de resultado, independentemente das oportunidades disponíveis.",
              "feedback": "Orçamento não cria automaticamente oportunidades compatíveis."
            },
            {
              "id": "b",
              "label": "O aumento pode ampliar capacidade de gasto, mas não corrige sozinho regras, contexto ou qualidade da distribuição.",
              "feedback": "Correto. Primeiro é preciso separar limitação de orçamento de outras limitações do sistema.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "O orçamento deixa de importar sempre que existe qualquer regra de distribuição.",
              "feedback": "Orçamento continua sendo uma restrição relevante."
            },
            {
              "id": "d",
              "label": "A plataforma obrigatoriamente gastará todo o valor e produzirá o mesmo retorno proporcional.",
              "feedback": "Nem gasto integral nem retorno proporcional são garantidos."
            }
          ]
        }
      ]
    },
    {
      "id": "a02-auction",
      "type": "learn",
      "eyebrow": "Capítulo 05 · Leilão",
      "title": "Como a plataforma escolhe entre oportunidades",
      "frames": [
        {
          "id": "a02-auction-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Conceito",
          "eyebrow": "Capítulo 05 · Leilão",
          "title": "Um leilão digital é uma seleção rápida entre participantes elegíveis.",
          "body": [
            "Quando existe uma oportunidade de mostrar publicidade, a plataforma precisa decidir quais anúncios estão aptos a participar e como ordená-los. Esse processo é chamado de leilão.",
            "No Google Ads, o lance participa da decisão, mas não age sozinho. Elegibilidade, qualidade, contexto e outros fatores também influenciam se e onde um anúncio pode aparecer."
          ],
          "cards": [
            {
              "title": "Elegibilidade",
              "description": "Primeiro a mensagem precisa estar apta a participar daquela oportunidade."
            },
            {
              "title": "Lance",
              "description": "Representa disposição de pagar dentro das regras daquele sistema."
            },
            {
              "title": "Qualidade e contexto",
              "description": "A plataforma também considera relevância, experiência e circunstâncias da oportunidade."
            }
          ],
          "highlight": "Leilão não significa “quem oferece mais vence automaticamente”."
        },
        {
          "id": "a02-auction-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Aplique",
          "eyebrow": "Capítulo 05 · Agora é com você",
          "title": "Dois anunciantes competem. Quem vence?",
          "scenario": "O Anunciante A oferece um lance maior. O Anunciante B possui lance menor, mas melhor combinação de elegibilidade, qualidade e contexto. Qual conclusão é mais segura?",
          "options": [
            {
              "id": "a",
              "label": "A vence obrigatoriamente porque o maior lance determina sozinho qualquer leilão digital.",
              "feedback": "O lance é importante, mas não é o único fator."
            },
            {
              "id": "b",
              "label": "B vence obrigatoriamente porque qualidade sempre substitui completamente o lance.",
              "feedback": "Também não existe essa regra absoluta."
            },
            {
              "id": "c",
              "label": "Não podemos decidir apenas pelo lance: o resultado depende do conjunto de fatores usado pelo leilão.",
              "feedback": "Correto. A leitura madura evita reduzir o leilão a uma única variável.",
              "recommended": true
            },
            {
              "id": "d",
              "label": "Nenhum dos dois participa, porque leilões digitais só existem quando os lances são iguais.",
              "feedback": "Leilões existem justamente para selecionar entre diferentes participantes elegíveis."
            }
          ]
        }
      ]
    },
    {
      "id": "a02-mindmap",
      "type": "mindmap",
      "eyebrow": "Capítulo 06 · Mapa Mental",
      "title": "Publicidade digital em uma única visão",
      "media": {
        "src": "/images/modulo01/aula02/modulo01aula02imagem02.png",
        "alt": "Mapa mental da Aula 02 sobre publicidade digital.",
        "kind": "mindmap",
        "caption": "Anunciante, plataforma, inventário, campanha e leilão.",
        "sourceLabel": "Mapa Mental Titanium",
        "zoomable": true
      }
    },
    {
      "id": "a02-review",
      "type": "review",
      "eyebrow": "Capítulo 07 · Revisão",
      "title": "Reconstrua o sistema antes da prova",
      "frames": [
        {
          "id": "a02-review-main",
          "type": "review",
          "mode": "explain",
          "frameLabel": "Síntese",
          "eyebrow": "Capítulo 07 · Síntese",
          "title": "Cinco ideias sustentam esta aula.",
          "reviewSections": [
            {
              "title": "Distribuição",
              "items": [
                "Publicidade digital compra oportunidades de distribuição, não clientes garantidos.",
                "Inventário é o conjunto de oportunidades disponíveis."
              ]
            },
            {
              "title": "Organização",
              "items": [
                "Campanha organiza decisões de mídia.",
                "Orçamento limita recurso disponível.",
                "Leilão seleciona entre participantes elegíveis usando mais do que apenas lance."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "a02-exam",
      "type": "exam",
      "eyebrow": "Prova da Aula",
      "title": "Demonstre domínio da publicidade digital",
      "body": [
        "A prova cobra apenas conceitos ensinados nesta aula. Nota mínima: 9,0."
      ]
    }
  ],
  "exam": {
    "id": "lesson-02-exam",
    "title": "Prova · Aula 02 — Como funciona a publicidade digital",
    "passingScore": 9,
    "questions": [
      {
        "id": "a02q01",
        "kind": "objective",
        "prompt": "O que um anunciante compra primeiro ao investir em publicidade digital?",
        "options": [
          {
            "id": "a",
            "label": "Oportunidades de distribuição para colocar mensagens diante de pessoas.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "Uma quantidade garantida de clientes.",
            "feedback": "Resultado não é garantido."
          },
          {
            "id": "c",
            "label": "A propriedade dos espaços da plataforma.",
            "feedback": "A plataforma mantém o inventário."
          },
          {
            "id": "d",
            "label": "Receita futura já contratada.",
            "feedback": "Receita é resultado posterior."
          }
        ],
        "correctAnswer": "a",
        "explanation": "O investimento compra distribuição, não resultado final.",
        "reviewStageId": "a02-system"
      },
      {
        "id": "a02q02",
        "kind": "objective",
        "prompt": "Qual definição representa melhor inventário publicitário?",
        "options": [
          {
            "id": "a",
            "label": "O dinheiro disponível na conta do anunciante.",
            "feedback": "Isso descreve recurso financeiro."
          },
          {
            "id": "b",
            "label": "O conjunto de espaços, formatos e oportunidades onde publicidade pode aparecer.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "A lista de clientes conquistados pela campanha.",
            "feedback": "Inventário antecede resultado."
          },
          {
            "id": "d",
            "label": "O histórico de decisões do anunciante.",
            "feedback": "Não é inventário."
          }
        ],
        "correctAnswer": "b",
        "explanation": "Inventário descreve oportunidades de distribuição.",
        "reviewStageId": "a02-inventory"
      },
      {
        "id": "a02q03",
        "kind": "interpretation",
        "prompt": "Uma campanha foi criada hoje. O que isso comprova?",
        "options": [
          {
            "id": "a",
            "label": "Que a receita vai crescer automaticamente.",
            "feedback": "Não comprova."
          },
          {
            "id": "b",
            "label": "Que o orçamento será totalmente gasto.",
            "feedback": "Não é garantido."
          },
          {
            "id": "c",
            "label": "Que existe uma estrutura organizada para decisões de mídia.",
            "feedback": "Correto."
          },
          {
            "id": "d",
            "label": "Que todos os usuários verão o anúncio.",
            "feedback": "Distribuição depende de oportunidades e regras."
          }
        ],
        "correctAnswer": "c",
        "explanation": "Campanha é estrutura de organização da mídia.",
        "reviewStageId": "a02-campaign"
      },
      {
        "id": "a02q04",
        "kind": "objective",
        "prompt": "Qual é o papel mais básico do orçamento?",
        "options": [
          {
            "id": "a",
            "label": "Garantir o retorno financeiro da campanha.",
            "feedback": "Orçamento não garante retorno."
          },
          {
            "id": "b",
            "label": "Escolher sozinho quais pessoas serão alcançadas.",
            "feedback": "Há outras regras e contextos."
          },
          {
            "id": "c",
            "label": "Eliminar a necessidade de leilão.",
            "feedback": "Orçamento não elimina seleção."
          },
          {
            "id": "d",
            "label": "Definir quanto recurso pode ser disponibilizado à distribuição.",
            "feedback": "Correto."
          }
        ],
        "correctAnswer": "d",
        "explanation": "Orçamento é restrição financeira do sistema.",
        "reviewStageId": "a02-budget"
      },
      {
        "id": "a02q05",
        "kind": "interpretation",
        "prompt": "Se o orçamento dobra, qual conclusão é segura?",
        "options": [
          {
            "id": "a",
            "label": "A capacidade potencial de gasto aumenta, mas o restante do sistema continua importando.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "O resultado também dobra.",
            "feedback": "Não é garantido."
          },
          {
            "id": "c",
            "label": "A campanha deixa de depender de oportunidades de distribuição.",
            "feedback": "Ainda depende."
          },
          {
            "id": "d",
            "label": "O leilão passa a ignorar contexto e qualidade.",
            "feedback": "Não passa."
          }
        ],
        "correctAnswer": "a",
        "explanation": "Mais orçamento não elimina outras restrições.",
        "reviewStageId": "a02-budget"
      },
      {
        "id": "a02q06",
        "kind": "objective",
        "prompt": "O que é um leilão publicitário em nível conceitual?",
        "options": [
          {
            "id": "a",
            "label": "Um contrato que garante clientes ao maior investidor.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Um processo de seleção entre participantes elegíveis para uma oportunidade.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "Uma compra permanente do inventário.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Uma etapa usada apenas quando dois lances são iguais.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "b",
        "explanation": "Leilão seleciona entre participantes elegíveis.",
        "reviewStageId": "a02-auction"
      },
      {
        "id": "a02q07",
        "kind": "interpretation",
        "prompt": "Por que o maior lance isolado não permite prever sempre o vencedor?",
        "options": [
          {
            "id": "a",
            "label": "Porque o lance nunca é usado.",
            "feedback": "O lance importa."
          },
          {
            "id": "b",
            "label": "Porque todos os anunciantes aparecem juntos.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "Porque a plataforma também considera elegibilidade, qualidade, contexto e outras regras.",
            "feedback": "Correto."
          },
          {
            "id": "d",
            "label": "Porque o orçamento substitui o lance.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "c",
        "explanation": "O leilão usa um conjunto de fatores.",
        "reviewStageId": "a02-auction"
      },
      {
        "id": "a02q08",
        "kind": "decision",
        "prompt": "Uma campanha tem verba disponível, mas encontra poucas oportunidades compatíveis. Qual primeira leitura?",
        "options": [
          {
            "id": "a",
            "label": "Aumentar o orçamento obrigatoriamente resolverá.",
            "feedback": "Pode não resolver."
          },
          {
            "id": "b",
            "label": "A plataforma está impedida de distribuir qualquer anúncio.",
            "feedback": "Não sabemos."
          },
          {
            "id": "c",
            "label": "Campanhas com orçamento disponível nunca podem ter limitação de entrega.",
            "feedback": "Podem."
          },
          {
            "id": "d",
            "label": "É preciso investigar regras, elegibilidade e contexto antes de atribuir o problema apenas ao orçamento.",
            "feedback": "Correto."
          }
        ],
        "correctAnswer": "d",
        "explanation": "Diagnóstico separa orçamento de outras limitações.",
        "reviewStageId": "a02-budget"
      },
      {
        "id": "a02q09",
        "kind": "objective",
        "prompt": "Qual elemento conecta organização, orçamento e regras de distribuição?",
        "options": [
          {
            "id": "a",
            "label": "A campanha.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "A receita.",
            "feedback": "Receita é resultado."
          },
          {
            "id": "c",
            "label": "O cliente.",
            "feedback": "Cliente é resultado posterior."
          },
          {
            "id": "d",
            "label": "A indicação orgânica.",
            "feedback": "Não é a estrutura de mídia."
          }
        ],
        "correctAnswer": "a",
        "explanation": "Campanha organiza decisões de distribuição.",
        "reviewStageId": "a02-campaign"
      },
      {
        "id": "a02q10",
        "kind": "interpretation",
        "prompt": "Qual frase resume melhor a aula?",
        "options": [
          {
            "id": "a",
            "label": "Publicidade digital transforma orçamento diretamente em clientes.",
            "feedback": "Isso ignora o sistema."
          },
          {
            "id": "b",
            "label": "Publicidade digital compra distribuição; campanha e orçamento organizam a participação em oportunidades selecionadas por regras e leilões.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "Publicidade digital é apenas um sinônimo de tráfego orgânico.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Leilões digitais são definidos exclusivamente pelo maior lance.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "b",
        "explanation": "Essa frase preserva a arquitetura conceitual da aula.",
        "reviewStageId": "a02-review"
      }
    ]
  },
  "materials": [
    {
      "id": "a02-guide",
      "type": "titanium-lesson",
      "title": "Guia + Notas — Aula 02",
      "purpose": "Material único para estudar, anotar e revisar os fundamentos ensinados nesta aula.",
      "status": "available",
      "asset": "/materials/aula-02/Titanium_Guia_e_Notas_Aula_02.pdf"
    },
    {
      "id": "a02-mindmap",
      "type": "mindmap",
      "title": "Mapa Mental — Aula 02",
      "purpose": "Síntese visual para reconstruir os conceitos e relações centrais da aula.",
      "status": "available",
      "reviewStageId": "a02-mindmap",
      "asset": "/images/modulo01/aula02/modulo01aula02imagem02.png"
    }
  ]
}

export const lessonThree: Lesson = {
  "id": "03",
  "moduleId": "01",
  "number": "03",
  "title": "Da impressão ao resultado",
  "masteryTime": "55–75 minutos",
  "objective": "Construir a jornada mensurável desde a exibição de uma mensagem até conversão, cliente e receita, distinguindo claramente cada etapa.",
  "overview": "Agora o caminho ganha pontos observáveis: impressão, clique, visita, conversão, lead ou cliente e receita. Você aprende a não confundir uma etapa anterior com uma etapa posterior.",
  "demo": false,
  "completionMode": "exam",
  "stages": [
    {
      "id": "a03-exposure",
      "type": "learn",
      "eyebrow": "Capítulo 01 · Exposição",
      "title": "Antes do clique, a mensagem precisa aparecer",
      "frames": [
        {
          "id": "a03-exposure-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Conceito",
          "eyebrow": "Capítulo 01 · Impressão",
          "title": "Impressão é o registro de que um anúncio foi exibido.",
          "body": [
            "Quando uma plataforma apresenta um anúncio, essa exibição pode ser registrada como uma impressão.",
            "Impressão responde uma pergunta muito específica: “a mensagem apareceu?”. Ela não diz se a pessoa prestou atenção, clicou ou realizou algo depois."
          ],
          "highlight": "Impressão mede exibição, não interesse nem resultado."
        },
        {
          "id": "a03-exposure-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Diferencie",
          "eyebrow": "Capítulo 01 · Agora é com você",
          "title": "O que uma impressão comprova?",
          "scenario": "Um anúncio registrou 10.000 impressões. Qual afirmação podemos sustentar apenas com esse dado?",
          "options": [
            {
              "id": "a",
              "label": "O anúncio foi exibido 10.000 vezes segundo a regra de contagem da plataforma.",
              "feedback": "Correto. É exatamente o que o dado representa.",
              "recommended": true
            },
            {
              "id": "b",
              "label": "10.000 pessoas demonstraram interesse profundo na oferta.",
              "feedback": "Exibição não prova interesse."
            },
            {
              "id": "c",
              "label": "10.000 pessoas visitaram o destino.",
              "feedback": "Visita exige uma etapa posterior."
            },
            {
              "id": "d",
              "label": "10.000 resultados de negócio aconteceram.",
              "feedback": "Resultado não pode ser inferido da exposição."
            }
          ]
        }
      ]
    },
    {
      "id": "a03-journey",
      "type": "visual",
      "eyebrow": "Capítulo 02 · Jornada",
      "title": "Cada passagem responde uma pergunta diferente",
      "frames": [
        {
          "id": "a03-journey-visual",
          "type": "visual",
          "mode": "explain",
          "frameLabel": "Visual",
          "canvasLayout": "visual-first",
          "eyebrow": "Capítulo 02 · Caminho mensurável",
          "title": "Da impressão à receita existe uma sequência.",
          "body": [
            "Depois da exposição, algumas pessoas podem clicar. Depois do clique, o destino precisa carregar e receber a visita. Depois da visita, algumas pessoas podem realizar a ação definida como conversão.",
            "Mais adiante, uma conversão pode ou não se transformar em cliente e receita. Quanto mais avançamos, mais próximos estamos do valor econômico."
          ],
          "media": {
            "src": "/images/modulo01/aula03/modulo01aula03imagem01.png",
            "alt": "Fluxo da impressão ao clique, visita, conversão, cliente e receita.",
            "kind": "diagram",
            "caption": "Uma etapa anterior não comprova a seguinte.",
            "sourceLabel": "Visual Titanium",
            "zoomable": true
          }
        },
        {
          "id": "a03-journey-check",
          "type": "decide",
          "mode": "apply",
          "frameLabel": "Interprete",
          "eyebrow": "Capítulo 02 · Agora é com você",
          "title": "Qual sequência está correta?",
          "scenario": "Queremos organizar a jornada do anúncio até valor para o negócio. Qual ordem é mais coerente?",
          "allowRetry": true,
          "options": [
            {
              "id": "a",
              "label": "Receita → impressão → cliente → clique → conversão → visita.",
              "feedback": "A sequência começa pelo resultado e mistura as etapas."
            },
            {
              "id": "b",
              "label": "Impressão → clique → visita → conversão → cliente → receita.",
              "feedback": "Correto. Essa é a sequência conceitual construída na aula.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "Clique → impressão → receita → visita → cliente → conversão.",
              "feedback": "Clique não precede a exibição e receita não aparece no meio do caminho."
            },
            {
              "id": "d",
              "label": "Impressão → receita → clique → cliente → visita → conversão.",
              "feedback": "A ordem mistura eventos anteriores e posteriores."
            }
          ]
        }
      ]
    },
    {
      "id": "a03-visit",
      "type": "learn",
      "eyebrow": "Capítulo 03 · Chegada",
      "title": "Clique e visita são próximos, mas não idênticos",
      "frames": [
        {
          "id": "a03-visit-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Distinção",
          "eyebrow": "Capítulo 03 · Clique x visita",
          "title": "Clique registra a interação; visita observa a chegada ao destino.",
          "body": [
            "Uma pessoa pode clicar e, por algum motivo, não completar a chegada: a página pode demorar, falhar, ser fechada ou o mecanismo de mensuração pode contar eventos de forma diferente.",
            "Por isso, sistemas profissionais não tratam automaticamente “cliques” e “visitas” como o mesmo registro."
          ],
          "quote": "Quando duas etapas têm significados diferentes, medir as duas ajuda a localizar onde o caminho pode estar quebrando."
        },
        {
          "id": "a03-visit-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Aplique",
          "eyebrow": "Capítulo 03 · Agora é com você",
          "title": "Há mais cliques do que visitas. O que isso sugere?",
          "scenario": "Uma campanha registrou cliques, mas o destino registrou menos visitas. Qual leitura inicial é mais coerente?",
          "options": [
            {
              "id": "a",
              "label": "É impossível; cliques e visitas são obrigatoriamente idênticos.",
              "feedback": "As medições podem divergir por comportamento, carregamento ou implementação."
            },
            {
              "id": "b",
              "label": "Existe uma diferença entre interação e chegada que merece investigação.",
              "feedback": "Correto. Primeiro localizamos a passagem que não está se confirmando.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "Todas as pessoas que não visitaram já devem ser consideradas clientes.",
              "feedback": "Não há relação lógica."
            },
            {
              "id": "d",
              "label": "A receita necessariamente aumentou.",
              "feedback": "Não sabemos nada sobre receita."
            }
          ]
        }
      ]
    },
    {
      "id": "a03-conversion",
      "type": "learn",
      "eyebrow": "Capítulo 04 · Ação",
      "title": "Conversão é a ação que decidimos tratar como valiosa",
      "frames": [
        {
          "id": "a03-conversion-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Definição",
          "eyebrow": "Capítulo 04 · Conversão",
          "title": "Conversão não é uma ação universal. Ela depende do objetivo medido.",
          "body": [
            "Compra, formulário, ligação, agendamento ou cadastro podem ser tratados como conversões quando foram definidos como ações relevantes.",
            "Isso cria uma responsabilidade importante: antes de analisar “quantas conversões houve”, precisamos saber o que está sendo contado como conversão."
          ],
          "cards": [
            {
              "title": "E-commerce",
              "description": "Uma compra concluída pode ser a conversão principal."
            },
            {
              "title": "Clínica",
              "description": "Um agendamento pode ser registrado como conversão, embora ainda exista caminho até atendimento e receita."
            },
            {
              "title": "Serviço para empresas",
              "description": "Um formulário pode ser uma conversão intermediária antes de uma venda."
            }
          ],
          "highlight": "O nome “conversão” só ganha sentido quando sabemos qual ação está sendo medida."
        },
        {
          "id": "a03-conversion-check",
          "type": "decide",
          "mode": "apply",
          "frameLabel": "Decida",
          "eyebrow": "Capítulo 04 · Agora é com você",
          "title": "Duas empresas têm 100 conversões. Elas tiveram o mesmo resultado?",
          "scenario": "Na Empresa A, conversão significa compra. Na Empresa B, conversão significa formulário enviado. Qual leitura é correta?",
          "options": [
            {
              "id": "a",
              "label": "Sim. O número 100 torna os resultados economicamente equivalentes.",
              "feedback": "A ação medida é diferente, então o significado também é."
            },
            {
              "id": "b",
              "label": "Não podemos comparar economicamente sem entender o valor e o que acontece depois de cada ação.",
              "feedback": "Correto. O rótulo não torna as ações equivalentes.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "A Empresa B teve necessariamente melhor resultado porque formulário acontece antes da compra.",
              "feedback": "A ordem não define valor."
            },
            {
              "id": "d",
              "label": "A Empresa A teve necessariamente pior resultado porque compra é mais difícil.",
              "feedback": "Dificuldade não determina o valor comparativo do cenário."
            }
          ]
        }
      ]
    },
    {
      "id": "a03-value",
      "type": "business",
      "eyebrow": "Capítulo 05 · Valor",
      "title": "Cliente e receita aproximam a análise do negócio",
      "frames": [
        {
          "id": "a03-value-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Negócio",
          "eyebrow": "Capítulo 05 · Resultado econômico",
          "title": "Nem toda conversão já é cliente. Nem todo cliente gera o mesmo valor.",
          "body": [
            "Uma conversão pode ser intermediária. Um lead precisa ser qualificado; um agendamento precisa comparecer; uma oportunidade pode ou não virar venda.",
            "Quando o sistema consegue ligar a mídia a cliente e receita, a análise fica mais próxima do que realmente importa ao negócio."
          ],
          "highlight": "Quanto mais perto do valor econômico estamos, mais forte fica a leitura — desde que a mensuração seja confiável."
        },
        {
          "id": "a03-value-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Priorize",
          "eyebrow": "Capítulo 05 · Agora é com você",
          "title": "Qual dado está mais próximo do resultado econômico?",
          "scenario": "Uma clínica acompanha quatro etapas. Qual delas está mais próxima de valor efetivamente capturado?",
          "options": [
            {
              "id": "a",
              "label": "Impressões do anúncio.",
              "feedback": "É a etapa mais distante."
            },
            {
              "id": "b",
              "label": "Cliques para o site.",
              "feedback": "Ainda é movimento."
            },
            {
              "id": "c",
              "label": "Formulários enviados.",
              "feedback": "Pode ser uma ação intermediária."
            },
            {
              "id": "d",
              "label": "Receita dos pacientes atendidos atribuída ao período.",
              "feedback": "Correto. Esse dado está mais próximo do valor capturado pelo negócio.",
              "recommended": true
            }
          ]
        }
      ]
    },
    {
      "id": "a03-mindmap",
      "type": "mindmap",
      "eyebrow": "Capítulo 06 · Mapa Mental",
      "title": "Da exposição ao valor",
      "media": {
        "src": "/images/modulo01/aula03/modulo01aula03imagem02.png",
        "alt": "Mapa mental da jornada mensurável.",
        "kind": "mindmap",
        "caption": "Exposição, movimento, ação, relação comercial e valor.",
        "sourceLabel": "Mapa Mental Titanium",
        "zoomable": true
      }
    },
    {
      "id": "a03-review",
      "type": "review",
      "eyebrow": "Capítulo 07 · Revisão",
      "title": "Cada etapa prova apenas o que mede",
      "frames": [
        {
          "id": "a03-review-main",
          "type": "review",
          "mode": "explain",
          "frameLabel": "Síntese",
          "eyebrow": "Capítulo 07 · Síntese",
          "title": "A jornada fica clara quando não pulamos etapas.",
          "reviewSections": [
            {
              "title": "Antes da ação",
              "items": [
                "Impressão registra exibição.",
                "Clique registra interação.",
                "Visita registra chegada ao destino."
              ]
            },
            {
              "title": "Depois da chegada",
              "items": [
                "Conversão é a ação definida como valiosa.",
                "Conversão pode ser intermediária antes de cliente e receita.",
                "Receita aproxima a leitura do resultado econômico."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "a03-exam",
      "type": "exam",
      "eyebrow": "Prova da Aula",
      "title": "Demonstre domínio da jornada mensurável",
      "body": [
        "Nota mínima: 9,0."
      ]
    }
  ],
  "exam": {
    "id": "lesson-03-exam",
    "title": "Prova · Aula 03 — Da impressão ao resultado",
    "passingScore": 9,
    "questions": [
      {
        "id": "a03q01",
        "kind": "objective",
        "prompt": "O que uma impressão representa?",
        "options": [
          {
            "id": "a",
            "label": "O registro de que o anúncio foi exibido.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "Uma venda concluída.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "Um clique confirmado.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Uma visita ao destino.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "a",
        "explanation": "Impressão é exposição registrada.",
        "reviewStageId": "a03-exposure"
      },
      {
        "id": "a03q02",
        "kind": "interpretation",
        "prompt": "10.000 impressões permitem concluir o quê?",
        "options": [
          {
            "id": "a",
            "label": "Que houve 10.000 visitas.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Que houve 10.000 exibições segundo a regra de contagem.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "Que houve 10.000 conversões.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Que a campanha gerou lucro.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "b",
        "explanation": "A impressão não comprova etapas posteriores.",
        "reviewStageId": "a03-exposure"
      },
      {
        "id": "a03q03",
        "kind": "objective",
        "prompt": "Qual ordem representa melhor a jornada construída?",
        "options": [
          {
            "id": "a",
            "label": "Clique → impressão → conversão → visita → receita.",
            "feedback": "Ordem incorreta."
          },
          {
            "id": "b",
            "label": "Receita → cliente → conversão → clique → impressão.",
            "feedback": "Invertida."
          },
          {
            "id": "c",
            "label": "Impressão → clique → visita → conversão → cliente → receita.",
            "feedback": "Correto."
          },
          {
            "id": "d",
            "label": "Visita → impressão → clique → receita → conversão.",
            "feedback": "Ordem incorreta."
          }
        ],
        "correctAnswer": "c",
        "explanation": "A sequência acompanha exposição, movimento, ação e valor.",
        "reviewStageId": "a03-journey"
      },
      {
        "id": "a03q04",
        "kind": "interpretation",
        "prompt": "Por que cliques e visitas podem ter números diferentes?",
        "options": [
          {
            "id": "a",
            "label": "Porque visita sempre acontece antes do clique.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Porque clique só existe no tráfego orgânico.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "Porque qualquer visita é automaticamente uma compra.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Porque clique observa interação e visita observa chegada; falhas, abandono ou medição podem separar as etapas.",
            "feedback": "Correto."
          }
        ],
        "correctAnswer": "d",
        "explanation": "São eventos diferentes.",
        "reviewStageId": "a03-visit"
      },
      {
        "id": "a03q05",
        "kind": "objective",
        "prompt": "O que define uma conversão?",
        "options": [
          {
            "id": "a",
            "label": "Uma ação definida como relevante para o objetivo medido.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "Qualquer impressão registrada.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "Toda visita, independentemente do objetivo.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Somente uma compra em e-commerce.",
            "feedback": "Conversões podem representar outras ações."
          }
        ],
        "correctAnswer": "a",
        "explanation": "Conversão depende da ação definida.",
        "reviewStageId": "a03-conversion"
      },
      {
        "id": "a03q06",
        "kind": "interpretation",
        "prompt": "Duas contas mostram 100 conversões. O que falta antes de comparar?",
        "options": [
          {
            "id": "a",
            "label": "A cor dos anúncios.",
            "feedback": "Irrelevante."
          },
          {
            "id": "b",
            "label": "Saber que ação cada conta considera conversão e qual valor ela gera.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "Apenas o número de impressões.",
            "feedback": "Não basta."
          },
          {
            "id": "d",
            "label": "O nome da plataforma.",
            "feedback": "Não resolve o significado da ação."
          }
        ],
        "correctAnswer": "b",
        "explanation": "O significado da conversão vem da ação medida.",
        "reviewStageId": "a03-conversion"
      },
      {
        "id": "a03q07",
        "kind": "objective",
        "prompt": "Qual etapa está mais próxima do valor econômico capturado?",
        "options": [
          {
            "id": "a",
            "label": "Impressão.",
            "feedback": "Mais distante."
          },
          {
            "id": "b",
            "label": "Clique.",
            "feedback": "Ainda é movimento."
          },
          {
            "id": "c",
            "label": "Receita.",
            "feedback": "Correto."
          },
          {
            "id": "d",
            "label": "Visita.",
            "feedback": "Ainda é chegada."
          }
        ],
        "correctAnswer": "c",
        "explanation": "Receita está mais próxima do valor econômico.",
        "reviewStageId": "a03-value"
      },
      {
        "id": "a03q08",
        "kind": "interpretation",
        "prompt": "Um formulário pode ser conversão e ainda não ser cliente. Por quê?",
        "options": [
          {
            "id": "a",
            "label": "Porque clientes não podem preencher formulários.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Porque toda conversão é inválida.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "Porque receita acontece antes do formulário.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Porque conversão pode representar uma ação intermediária.",
            "feedback": "Correto."
          }
        ],
        "correctAnswer": "d",
        "explanation": "Conversão não precisa ser o resultado final do negócio.",
        "reviewStageId": "a03-conversion"
      },
      {
        "id": "a03q09",
        "kind": "decision",
        "prompt": "Há muitos cliques e poucas visitas. Onde começa a investigação?",
        "options": [
          {
            "id": "a",
            "label": "Na passagem entre interação e chegada ao destino.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "Diretamente na receita futura.",
            "feedback": "Pula a quebra observada."
          },
          {
            "id": "c",
            "label": "Na quantidade de clientes recorrentes.",
            "feedback": "Não é a primeira quebra."
          },
          {
            "id": "d",
            "label": "Em aumentar a exposição sem investigar.",
            "feedback": "Mais volume não explica a diferença."
          }
        ],
        "correctAnswer": "a",
        "explanation": "A divergência localiza a passagem a investigar.",
        "reviewStageId": "a03-visit"
      },
      {
        "id": "a03q10",
        "kind": "interpretation",
        "prompt": "Qual frase resume melhor a aula?",
        "options": [
          {
            "id": "a",
            "label": "Uma impressão já contém todas as informações sobre resultado.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Cada etapa da jornada mede algo diferente e uma etapa anterior não prova automaticamente a seguinte.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "Clique, visita e conversão são sinônimos.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Receita não deve fazer parte da análise de aquisição.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "b",
        "explanation": "O valor da jornada está em distinguir as etapas.",
        "reviewStageId": "a03-review"
      }
    ]
  },
  "materials": [
    {
      "id": "a03-guide",
      "type": "titanium-lesson",
      "title": "Guia + Notas — Aula 03",
      "purpose": "Material único para estudar, anotar e revisar os fundamentos ensinados nesta aula.",
      "status": "available",
      "asset": "/materials/aula-03/Titanium_Guia_e_Notas_Aula_03.pdf"
    },
    {
      "id": "a03-mindmap",
      "type": "mindmap",
      "title": "Mapa Mental — Aula 03",
      "purpose": "Síntese visual para reconstruir os conceitos e relações centrais da aula.",
      "status": "available",
      "reviewStageId": "a03-mindmap",
      "asset": "/images/modulo01/aula03/modulo01aula03imagem02.png"
    }
  ]
}

export const lessonFour: Lesson = {
  "id": "04",
  "moduleId": "01",
  "number": "04",
  "title": "As métricas fundamentais",
  "masteryTime": "65–85 minutos",
  "objective": "Aprender CTR, CPC, CVR, CPA e ROAS individualmente: cálculo, significado, utilidade e limite de interpretação.",
  "overview": "Esta é a primeira aula matemática do Titanium. Cada métrica é construída a partir de uma situação simples antes de receber a sigla profissional.",
  "demo": false,
  "completionMode": "exam",
  "stages": [
    {
      "id": "a04-metric",
      "type": "context",
      "eyebrow": "Capítulo 01 · Métrica",
      "title": "Métrica é uma lente, não o resultado inteiro",
      "frames": [
        {
          "id": "a04-metric-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Fundamento",
          "eyebrow": "Capítulo 01 · Fundamento",
          "title": "Uma métrica responde uma pergunta específica.",
          "body": [
            "Contagens mostram volume. Taxas mostram proporções. Custos médios relacionam gasto a uma unidade. Métricas de retorno relacionam valor gerado ao investimento.",
            "O erro mais comum do iniciante é perguntar “essa métrica está boa?” sem antes perguntar “o que exatamente ela mede?”."
          ],
          "highlight": "Primeiro entenda a pergunta que a métrica responde. Só depois julgue o número."
        }
      ]
    },
    {
      "id": "a04-overview",
      "type": "visual",
      "eyebrow": "Capítulo 02 · Visão geral",
      "title": "Cinco métricas para cinco perguntas",
      "frames": [
        {
          "id": "a04-overview-visual",
          "type": "visual",
          "mode": "explain",
          "frameLabel": "Visual",
          "canvasLayout": "visual-first",
          "eyebrow": "Capítulo 02 · Mapa de métricas",
          "title": "CTR, CPC, CVR, CPA e ROAS observam partes diferentes do sistema.",
          "body": [
            "Nesta aula vamos aprender cada uma isoladamente. As relações entre elas ficam para a Aula 05."
          ],
          "media": {
            "src": "/images/modulo01/aula04/modulo01aula04imagem01.png",
            "alt": "Cinco métricas fundamentais: CTR, CPC, CVR, CPA e ROAS.",
            "kind": "diagram",
            "caption": "Cada métrica responde uma pergunta diferente.",
            "sourceLabel": "Visual Titanium",
            "zoomable": true
          }
        }
      ]
    },
    {
      "id": "a04-ctr",
      "type": "learn",
      "eyebrow": "Capítulo 03 · CTR",
      "title": "Da exibição ao clique",
      "frames": [
        {
          "id": "a04-ctr-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Construa",
          "eyebrow": "Capítulo 03 · Taxa de cliques",
          "title": "Se 100 pessoas veem e 5 clicam, 5% das exibições viraram clique.",
          "body": [
            "Essa proporção recebe o nome CTR — Click-through rate, ou taxa de cliques.",
            "No Google Ads, CTR é calculada como cliques divididos por impressões. Ela ajuda a observar a resposta ao anúncio, mas não prova conversão ou lucro."
          ],
          "cards": [
            {
              "title": "Fórmula",
              "subtitle": "CTR",
              "description": "Cliques ÷ Impressões × 100"
            },
            {
              "title": "Exemplo",
              "subtitle": "5 ÷ 100",
              "description": "5 cliques em 100 impressões = CTR de 5%."
            }
          ],
          "highlight": "CTR responde “com que frequência a exibição virou clique?”."
        },
        {
          "id": "a04-ctr-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Calcule",
          "eyebrow": "Capítulo 03 · Agora é com você",
          "title": "Qual é a CTR?",
          "scenario": "Um anúncio recebeu 2.000 impressões e 100 cliques.",
          "allowRetry": true,
          "options": [
            {
              "id": "a",
              "label": "2%",
              "feedback": "100 ÷ 2.000 não é 2%."
            },
            {
              "id": "b",
              "label": "5%",
              "feedback": "Correto. 100 ÷ 2.000 = 0,05 = 5%.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "10%",
              "feedback": "Seriam necessários 200 cliques."
            },
            {
              "id": "d",
              "label": "20%",
              "feedback": "Seriam necessários 400 cliques."
            }
          ]
        }
      ]
    },
    {
      "id": "a04-cpc",
      "type": "learn",
      "eyebrow": "Capítulo 04 · CPC",
      "title": "Quanto custou, em média, cada clique?",
      "frames": [
        {
          "id": "a04-cpc-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Construa",
          "eyebrow": "Capítulo 04 · Custo por clique",
          "title": "R$ 400 de custo e 100 cliques significam R$ 4 por clique, em média.",
          "body": [
            "Esse indicador é o CPC médio — custo por clique médio. No Google Ads, é o custo total dividido pelo número de cliques.",
            "CPC mostra o custo do movimento gerado pelo anúncio. CPC baixo não garante resultado se as pessoas não avançarem depois."
          ],
          "cards": [
            {
              "title": "Fórmula",
              "subtitle": "CPC médio",
              "description": "Custo ÷ Cliques"
            },
            {
              "title": "Exemplo",
              "subtitle": "R$ 400 ÷ 100",
              "description": "CPC médio = R$ 4,00."
            }
          ]
        },
        {
          "id": "a04-cpc-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Calcule",
          "eyebrow": "Capítulo 04 · Agora é com você",
          "title": "Qual é o CPC médio?",
          "scenario": "Uma campanha gastou R$ 900 e recebeu 300 cliques.",
          "options": [
            {
              "id": "a",
              "label": "R$ 0,30",
              "feedback": "O decimal está deslocado."
            },
            {
              "id": "b",
              "label": "R$ 3,00",
              "feedback": "Correto. R$ 900 ÷ 300 = R$ 3,00.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "R$ 30,00",
              "feedback": "Esse valor multiplicado por 300 excederia o custo."
            },
            {
              "id": "d",
              "label": "R$ 300,00",
              "feedback": "Isso confunde quantidade de cliques com custo médio."
            }
          ]
        }
      ]
    },
    {
      "id": "a04-cvr",
      "type": "learn",
      "eyebrow": "Capítulo 05 · CVR",
      "title": "Qual proporção das interações virou conversão?",
      "frames": [
        {
          "id": "a04-cvr-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Construa",
          "eyebrow": "Capítulo 05 · Taxa de conversão",
          "title": "10 conversões em 200 interações elegíveis representam 5%.",
          "body": [
            "Essa proporção é a taxa de conversão, frequentemente abreviada como CVR. No Google Ads, a taxa de conversão considera conversões divididas pelas interações do anúncio que podem ser ligadas a uma conversão.",
            "Em outros contextos, equipes podem calcular conversão usando visitas, sessões ou usuários. Sempre confirme o denominador antes de comparar."
          ],
          "cards": [
            {
              "title": "Fórmula do contexto",
              "subtitle": "CVR",
              "description": "Conversões ÷ base analisada × 100"
            },
            {
              "title": "Regra de leitura",
              "subtitle": "Pergunte antes",
              "description": "Qual é a base: interações, cliques, visitas, sessões ou usuários?"
            }
          ],
          "highlight": "Taxa de conversão sem denominador explícito é uma informação incompleta."
        },
        {
          "id": "a04-cvr-check",
          "type": "decide",
          "mode": "apply",
          "frameLabel": "Calcule",
          "eyebrow": "Capítulo 05 · Agora é com você",
          "title": "Qual é a taxa de conversão?",
          "scenario": "Neste exercício, a base são 500 cliques. A campanha gerou 25 conversões.",
          "options": [
            {
              "id": "a",
              "label": "2%",
              "feedback": "Seriam 10 conversões."
            },
            {
              "id": "b",
              "label": "5%",
              "feedback": "Correto. 25 ÷ 500 = 5%.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "20%",
              "feedback": "Isso inverteria parte da relação."
            },
            {
              "id": "d",
              "label": "50%",
              "feedback": "Seriam 250 conversões."
            }
          ]
        }
      ]
    },
    {
      "id": "a04-cpa",
      "type": "learn",
      "eyebrow": "Capítulo 06 · CPA",
      "title": "Quanto custou, em média, gerar a ação medida?",
      "frames": [
        {
          "id": "a04-cpa-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Construa",
          "eyebrow": "Capítulo 06 · Custo por ação",
          "title": "R$ 1.000 de custo e 20 conversões significam R$ 50 por conversão.",
          "body": [
            "Esse indicador é o CPA — custo por ação ou aquisição no contexto da conversão medida. O Google Ads o calcula como custo total dividido pelo total de conversões.",
            "A interpretação depende da ação definida. Um CPA de R$ 50 por formulário não é igual a R$ 50 por compra."
          ],
          "cards": [
            {
              "title": "Fórmula",
              "subtitle": "CPA",
              "description": "Custo ÷ Conversões"
            },
            {
              "title": "Pergunta obrigatória",
              "subtitle": "Antes de julgar",
              "description": "Qual ação está sendo contabilizada como conversão?"
            }
          ]
        },
        {
          "id": "a04-cpa-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Calcule",
          "eyebrow": "Capítulo 06 · Agora é com você",
          "title": "Qual é o CPA?",
          "scenario": "Foram investidos R$ 2.400 e registradas 60 conversões.",
          "options": [
            {
              "id": "a",
              "label": "R$ 20",
              "feedback": "Seriam 120 conversões."
            },
            {
              "id": "b",
              "label": "R$ 40",
              "feedback": "Correto. R$ 2.400 ÷ 60 = R$ 40.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "R$ 60",
              "feedback": "Isso usa a contagem de conversões como valor."
            },
            {
              "id": "d",
              "label": "R$ 144",
              "feedback": "Não corresponde à divisão."
            }
          ]
        }
      ]
    },
    {
      "id": "a04-roas",
      "type": "learn",
      "eyebrow": "Capítulo 07 · ROAS",
      "title": "Quanto valor de conversão voltou para cada real de mídia?",
      "frames": [
        {
          "id": "a04-roas-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Construa",
          "eyebrow": "Capítulo 07 · Retorno da mídia",
          "title": "R$ 5.000 de valor atribuído para R$ 1.000 de custo representam ROAS de 5x.",
          "body": [
            "ROAS significa Return on ad spend — retorno sobre gasto com anúncios. Ele relaciona valor de conversão atribuído à publicidade e custo de mídia.",
            "ROAS não é lucro. Margem, custos operacionais, impostos e outras despesas continuam existindo e serão aprofundados no Módulo 02."
          ],
          "cards": [
            {
              "title": "Fórmula",
              "subtitle": "ROAS",
              "description": "Valor da conversão ÷ Custo de mídia"
            },
            {
              "title": "Exemplo",
              "subtitle": "R$ 5.000 ÷ R$ 1.000",
              "description": "ROAS = 5x, ou 500% quando expresso em percentual."
            }
          ],
          "highlight": "ROAS mede retorno da mídia; não substitui análise de lucro."
        },
        {
          "id": "a04-roas-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Calcule",
          "eyebrow": "Capítulo 07 · Agora é com você",
          "title": "Qual é o ROAS?",
          "scenario": "Uma operação atribuiu R$ 12.000 em valor de conversão a R$ 3.000 de mídia.",
          "options": [
            {
              "id": "a",
              "label": "2x",
              "feedback": "Seria R$ 6.000 de valor."
            },
            {
              "id": "b",
              "label": "3x",
              "feedback": "Seria R$ 9.000."
            },
            {
              "id": "c",
              "label": "4x",
              "feedback": "Correto. 12.000 ÷ 3.000 = 4.",
              "recommended": true
            },
            {
              "id": "d",
              "label": "12x",
              "feedback": "Isso usa o valor total sem dividir pelo custo."
            }
          ]
        }
      ]
    },
    {
      "id": "a04-mindmap",
      "type": "mindmap",
      "eyebrow": "Capítulo 08 · Mapa Mental",
      "title": "Cinco métricas, cinco perguntas",
      "media": {
        "src": "/images/modulo01/aula04/modulo01aula04imagem02.png",
        "alt": "Mapa mental de CTR, CPC, CVR, CPA e ROAS.",
        "kind": "mindmap",
        "caption": "Resposta, custo, conversão e retorno.",
        "sourceLabel": "Mapa Mental Titanium",
        "zoomable": true
      }
    },
    {
      "id": "a04-review",
      "type": "review",
      "eyebrow": "Capítulo 09 · Revisão",
      "title": "Não julgue uma métrica pela função de outra",
      "frames": [
        {
          "id": "a04-review-main",
          "type": "review",
          "mode": "explain",
          "frameLabel": "Síntese",
          "eyebrow": "Capítulo 09 · Síntese",
          "title": "Memorize a pergunta antes da fórmula.",
          "reviewSections": [
            {
              "title": "Resposta e custo",
              "items": [
                "CTR: com que frequência a exibição vira clique?",
                "CPC: quanto custa, em média, cada clique?"
              ]
            },
            {
              "title": "Conversão e retorno",
              "items": [
                "CVR: qual proporção da base analisada converte?",
                "CPA: quanto custa, em média, cada conversão?",
                "ROAS: quanto valor atribuído retorna por unidade de gasto?"
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "a04-exam",
      "type": "exam",
      "eyebrow": "Prova da Aula",
      "title": "Prove domínio das métricas fundamentais",
      "body": [
        "Nota mínima: 9,0."
      ]
    }
  ],
  "exam": {
    "id": "lesson-04-exam",
    "title": "Prova · Aula 04 — As métricas fundamentais",
    "passingScore": 9,
    "questions": [
      {
        "id": "a04q01",
        "kind": "objective",
        "prompt": "Qual fórmula calcula CTR?",
        "options": [
          {
            "id": "a",
            "label": "Cliques ÷ impressões × 100.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "Custo ÷ cliques.",
            "feedback": "Isso é CPC médio."
          },
          {
            "id": "c",
            "label": "Custo ÷ conversões.",
            "feedback": "Isso é CPA."
          },
          {
            "id": "d",
            "label": "Valor de conversão ÷ custo.",
            "feedback": "Isso é ROAS."
          }
        ],
        "correctAnswer": "a",
        "explanation": "CTR relaciona cliques a impressões.",
        "reviewStageId": "a04-ctr"
      },
      {
        "id": "a04q02",
        "kind": "objective",
        "prompt": "100 cliques em 2.000 impressões resultam em qual CTR?",
        "options": [
          {
            "id": "a",
            "label": "2%",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "5%",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "10%",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "20%",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "b",
        "explanation": "100 ÷ 2.000 = 5%.",
        "reviewStageId": "a04-ctr"
      },
      {
        "id": "a04q03",
        "kind": "objective",
        "prompt": "R$ 900 de custo e 300 cliques resultam em qual CPC médio?",
        "options": [
          {
            "id": "a",
            "label": "R$ 0,30",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "R$ 30,00",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "R$ 3,00",
            "feedback": "Correto."
          },
          {
            "id": "d",
            "label": "R$ 300,00",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "c",
        "explanation": "Custo ÷ cliques.",
        "reviewStageId": "a04-cpc"
      },
      {
        "id": "a04q04",
        "kind": "interpretation",
        "prompt": "Qual cuidado é obrigatório ao ler uma taxa de conversão?",
        "options": [
          {
            "id": "a",
            "label": "Assumir que sempre usa impressões.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Assumir que sempre usa receita.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "Ignorar a ação definida como conversão.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Confirmar qual base foi usada como denominador.",
            "feedback": "Correto."
          }
        ],
        "correctAnswer": "d",
        "explanation": "CVR depende da base analisada.",
        "reviewStageId": "a04-cvr"
      },
      {
        "id": "a04q05",
        "kind": "objective",
        "prompt": "25 conversões em 500 cliques equivalem a qual CVR neste exercício?",
        "options": [
          {
            "id": "a",
            "label": "5%",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "2%",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "4%",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "20%",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "a",
        "explanation": "25 ÷ 500 = 5%.",
        "reviewStageId": "a04-cvr"
      },
      {
        "id": "a04q06",
        "kind": "objective",
        "prompt": "R$ 2.400 de custo e 60 conversões resultam em qual CPA?",
        "options": [
          {
            "id": "a",
            "label": "R$ 20",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "R$ 40",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "R$ 60",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "R$ 144",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "b",
        "explanation": "Custo ÷ conversões.",
        "reviewStageId": "a04-cpa"
      },
      {
        "id": "a04q07",
        "kind": "interpretation",
        "prompt": "Por que um CPA de R$ 50 não pode ser julgado sem contexto?",
        "options": [
          {
            "id": "a",
            "label": "Porque CPA nunca usa custo.",
            "feedback": "Usa."
          },
          {
            "id": "b",
            "label": "Porque CPA é sempre igual ao CPC.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "Porque precisamos saber qual ação está sendo contada como conversão e seu valor.",
            "feedback": "Correto."
          },
          {
            "id": "d",
            "label": "Porque CPA só existe em e-commerce.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "c",
        "explanation": "O significado econômico depende da conversão medida.",
        "reviewStageId": "a04-cpa"
      },
      {
        "id": "a04q08",
        "kind": "objective",
        "prompt": "R$ 12.000 de valor atribuído e R$ 3.000 de custo representam qual ROAS?",
        "options": [
          {
            "id": "a",
            "label": "2x",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "3x",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "12x",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "4x",
            "feedback": "Correto."
          }
        ],
        "correctAnswer": "d",
        "explanation": "12.000 ÷ 3.000 = 4x.",
        "reviewStageId": "a04-roas"
      },
      {
        "id": "a04q09",
        "kind": "interpretation",
        "prompt": "ROAS de 5x significa automaticamente lucro alto?",
        "options": [
          {
            "id": "a",
            "label": "Não. ROAS relaciona valor atribuído à mídia e custo; margem e outros custos continuam importando.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "Sim, porque receita atribuída e lucro são iguais.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "Sim, desde que o CTR seja alto.",
            "feedback": "CTR não resolve lucro."
          },
          {
            "id": "d",
            "label": "Não, porque ROAS não usa valor de conversão.",
            "feedback": "Usa."
          }
        ],
        "correctAnswer": "a",
        "explanation": "ROAS não é sinônimo de lucro.",
        "reviewStageId": "a04-roas"
      },
      {
        "id": "a04q10",
        "kind": "interpretation",
        "prompt": "Qual princípio resume a aula?",
        "options": [
          {
            "id": "a",
            "label": "Uma única métrica deve decidir toda a campanha.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Cada métrica responde uma pergunta específica e precisa ser interpretada dentro dessa função.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "Toda métrica alta é boa.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Fórmulas são dispensáveis porque siglas bastam.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "b",
        "explanation": "Métricas são lentes específicas.",
        "reviewStageId": "a04-review"
      }
    ]
  },
  "materials": [
    {
      "id": "a04-guide",
      "type": "titanium-lesson",
      "title": "Guia + Notas — Aula 04",
      "purpose": "Material único para estudar, anotar e revisar os fundamentos ensinados nesta aula.",
      "status": "available",
      "asset": "/materials/aula-04/Titanium_Guia_e_Notas_Aula_04.pdf"
    },
    {
      "id": "a04-mindmap",
      "type": "mindmap",
      "title": "Mapa Mental — Aula 04",
      "purpose": "Síntese visual para reconstruir os conceitos e relações centrais da aula.",
      "status": "available",
      "reviewStageId": "a04-mindmap",
      "asset": "/images/modulo01/aula04/modulo01aula04imagem02.png"
    }
  ]
}

export const lessonFive: Lesson = {
  "id": "05",
  "moduleId": "01",
  "number": "05",
  "title": "Como as métricas se conectam",
  "masteryTime": "65–90 minutos",
  "objective": "Conectar as métricas do Módulo 01 para decompor sintomas, localizar a passagem que mudou e escolher a primeira investigação coerente.",
  "overview": "Depois de aprender cada métrica isoladamente, você passa a enxergar relações. O objetivo não é decorar correlações; é decompor o sistema sem prescrever antes do diagnóstico.",
  "demo": false,
  "completionMode": "exam",
  "stages": [
    {
      "id": "a05-system",
      "type": "visual",
      "eyebrow": "Capítulo 01 · Sistema",
      "title": "Métricas são observações do mesmo caminho",
      "frames": [
        {
          "id": "a05-system-visual",
          "type": "visual",
          "mode": "explain",
          "frameLabel": "Visual",
          "canvasLayout": "visual-first",
          "eyebrow": "Capítulo 01 · Relações",
          "title": "Impressões, cliques, conversões e valor pertencem à mesma cadeia.",
          "body": [
            "CTR observa a passagem da exposição para o clique. CPC observa o custo do clique. CVR observa a passagem da interação para a conversão. CPA relaciona custo e conversões. ROAS relaciona valor e custo.",
            "Quando o resultado muda, decompor a cadeia ajuda a localizar onde a mudança apareceu."
          ],
          "media": {
            "src": "/images/modulo01/aula05/modulo01aula05imagem01.png",
            "alt": "Diagrama de relação entre CTR, CPC, CVR, CPA e ROAS.",
            "kind": "diagram",
            "caption": "Diagnóstico começa decompondo o resultado em partes observáveis.",
            "sourceLabel": "Visual Titanium",
            "zoomable": true
          }
        }
      ]
    },
    {
      "id": "a05-cpa",
      "type": "learn",
      "eyebrow": "Capítulo 02 · CPA",
      "title": "CPC e CVR ajudam a explicar o CPA",
      "frames": [
        {
          "id": "a05-cpa-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Relação",
          "eyebrow": "Capítulo 02 · Decomposição",
          "title": "Quando CVR usa cliques como base, CPA pode ser entendido como CPC ÷ CVR.",
          "body": [
            "Imagine CPC de R$ 2 e CVR de 5%. A cada 100 cliques, esperamos 5 conversões. O custo dos 100 cliques é R$ 200; R$ 200 ÷ 5 = CPA de R$ 40.",
            "A mesma relação pode ser escrita como R$ 2 ÷ 0,05 = R$ 40. Essa decomposição ajuda a investigar se o CPA mudou por custo do clique, eficiência de conversão ou ambos."
          ],
          "highlight": "A fórmula é uma lente de diagnóstico, não uma causa automática."
        },
        {
          "id": "a05-cpa-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Interprete",
          "eyebrow": "Capítulo 02 · Agora é com você",
          "title": "CPC ficou igual e CVR caiu. O que tende a acontecer com CPA?",
          "scenario": "CPC permaneceu em R$ 2. A CVR caiu de 5% para 2,5%. Nenhuma outra mudança foi considerada neste exercício.",
          "allowRetry": true,
          "options": [
            {
              "id": "a",
              "label": "O CPA tende a cair pela metade.",
              "feedback": "Com menos conversão para o mesmo custo por clique, o CPA não cai."
            },
            {
              "id": "b",
              "label": "O CPA tende a dobrar.",
              "feedback": "Correto. R$ 2 ÷ 0,05 = R$ 40; R$ 2 ÷ 0,025 = R$ 80.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "O CPA permanece obrigatoriamente igual.",
              "feedback": "A eficiência de conversão mudou."
            },
            {
              "id": "d",
              "label": "Não existe qualquer relação matemática entre CPC, CVR e CPA.",
              "feedback": "Existe quando usamos a mesma base de interação."
            }
          ]
        }
      ]
    },
    {
      "id": "a05-diagnosis",
      "type": "learn",
      "eyebrow": "Capítulo 03 · Diagnóstico",
      "title": "Sintoma não é causa",
      "frames": [
        {
          "id": "a05-diagnosis-main",
          "type": "learn",
          "mode": "focus",
          "frameLabel": "Ponto-chave",
          "eyebrow": "Capítulo 03 · Diagnose antes de prescrever",
          "title": "“CPA subiu” descreve o sintoma. Ainda falta descobrir por quê.",
          "body": [
            "Uma resposta apressada seria reduzir orçamento, trocar campanha ou mudar lances imediatamente. Uma resposta profissional começa decompondo as variáveis que formam o resultado.",
            "Primeiro verifique o que mudou. Depois formule a hipótese. Só então escolha intervenção."
          ],
          "sequence": [
            {
              "label": "1. Sintoma",
              "detail": "Qual resultado mudou?"
            },
            {
              "label": "2. Decomposição",
              "detail": "Quais variáveis formam esse resultado?"
            },
            {
              "label": "3. Evidência",
              "detail": "Qual variável realmente se moveu?"
            },
            {
              "label": "4. Hipótese",
              "detail": "O que pode explicar a mudança?"
            },
            {
              "label": "5. Próxima investigação",
              "detail": "Que dado confirma ou derruba a hipótese?"
            }
          ],
          "quote": "Diagnóstico reduz o espaço entre “acho” e “sei”."
        },
        {
          "id": "a05-diagnosis-check",
          "type": "decide",
          "mode": "apply",
          "frameLabel": "Decida",
          "eyebrow": "Capítulo 03 · Agora é com você",
          "title": "CPA subiu, CPC estável, CVR caiu. Onde investigar primeiro?",
          "scenario": "O custo por clique não mudou. A eficiência de conversão caiu. Qual investigação é mais coerente para começar?",
          "options": [
            {
              "id": "a",
              "label": "Aumentar o orçamento antes de olhar o destino.",
              "feedback": "Mais verba não explica a queda de conversão."
            },
            {
              "id": "b",
              "label": "Investigar o que acontece depois do clique: destino, oferta, formulário e qualidade da chegada.",
              "feedback": "Correto. A mudança está no trecho observado pela CVR.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "Concluir que o leilão encareceu, apesar do CPC estável.",
              "feedback": "O dado não sustenta essa hipótese como primeira leitura."
            },
            {
              "id": "d",
              "label": "Ignorar a CVR e analisar apenas impressões.",
              "feedback": "A variável que mudou merece prioridade."
            }
          ]
        }
      ]
    },
    {
      "id": "a05-ctr",
      "type": "learn",
      "eyebrow": "Capítulo 04 · Limites",
      "title": "CTR alto não garante resultado",
      "frames": [
        {
          "id": "a05-ctr-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Limite",
          "eyebrow": "Capítulo 04 · Não confunda sinais",
          "title": "Uma etapa pode melhorar enquanto outra piora.",
          "body": [
            "CTR pode subir porque mais pessoas clicaram proporcionalmente às exibições. Se essas pessoas não avançarem depois, CVR pode cair e CPA pode piorar.",
            "Isso não significa que CTR “causa” CVR baixa. Significa apenas que precisamos acompanhar a cadeia completa e não transformar uma métrica isolada em sentença final."
          ],
          "highlight": "Uma métrica upstream melhor não garante uma métrica downstream melhor."
        },
        {
          "id": "a05-ctr-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Interprete",
          "eyebrow": "Capítulo 04 · Agora é com você",
          "title": "CTR subiu e vendas não. O que isso prova?",
          "scenario": "O anúncio passou a receber mais cliques proporcionalmente às impressões, mas o resultado final não aumentou. Qual conclusão é mais madura?",
          "options": [
            {
              "id": "a",
              "label": "CTR maior prova que toda a campanha melhorou.",
              "feedback": "Não prova etapas posteriores."
            },
            {
              "id": "b",
              "label": "O anúncio parece gerar mais resposta, mas precisamos analisar o que acontece depois do clique.",
              "feedback": "Correto.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "CTR maior causa obrigatoriamente queda de conversão.",
              "feedback": "Não existe essa causalidade automática."
            },
            {
              "id": "d",
              "label": "CTR deve ser ignorado porque não é resultado final.",
              "feedback": "Ele é útil dentro da função correta."
            }
          ]
        }
      ]
    },
    {
      "id": "a05-roas",
      "type": "business",
      "eyebrow": "Capítulo 05 · Valor",
      "title": "CPA e ROAS respondem perguntas diferentes",
      "frames": [
        {
          "id": "a05-roas-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Compare",
          "eyebrow": "Capítulo 05 · Custo x valor",
          "title": "Duas operações podem ter o mesmo CPA e ROAS diferentes.",
          "body": [
            "Se duas campanhas custam R$ 50 por conversão, mas uma gera R$ 100 de valor por conversão e outra gera R$ 300, o retorno sobre mídia será diferente.",
            "CPA observa custo por ação. ROAS incorpora o valor atribuído às ações. Por isso, custo eficiente e valor alto são dimensões relacionadas, mas distintas."
          ],
          "comparison": [
            {
              "label": "Campanha A",
              "metrics": [
                {
                  "label": "CPA",
                  "value": "R$ 50"
                },
                {
                  "label": "Valor médio",
                  "value": "R$ 100"
                },
                {
                  "label": "Leitura",
                  "value": "menor retorno"
                }
              ]
            },
            {
              "label": "Campanha B",
              "metrics": [
                {
                  "label": "CPA",
                  "value": "R$ 50"
                },
                {
                  "label": "Valor médio",
                  "value": "R$ 300"
                },
                {
                  "label": "Leitura",
                  "value": "maior retorno"
                }
              ]
            }
          ]
        },
        {
          "id": "a05-roas-check",
          "type": "decide",
          "mode": "apply",
          "frameLabel": "Priorize",
          "eyebrow": "Capítulo 05 · Agora é com você",
          "title": "Mesmo CPA, ROAS diferente. Onde está a diferença?",
          "scenario": "Duas campanhas têm CPA de R$ 50. A segunda possui ROAS maior. Qual explicação é compatível com os dados?",
          "options": [
            {
              "id": "a",
              "label": "A segunda gera maior valor atribuído por conversão, mantendo custo semelhante.",
              "feedback": "Correto. Mesmo custo por conversão pode produzir retornos diferentes quando o valor muda.",
              "recommended": true
            },
            {
              "id": "b",
              "label": "A segunda necessariamente tem CPC maior.",
              "feedback": "ROAS maior não exige CPC maior."
            },
            {
              "id": "c",
              "label": "A segunda necessariamente tem CTR menor.",
              "feedback": "Não decorre dos dados."
            },
            {
              "id": "d",
              "label": "CPA e ROAS são a mesma métrica, então o cenário é impossível.",
              "feedback": "São métricas diferentes."
            }
          ]
        }
      ]
    },
    {
      "id": "a05-mindmap",
      "type": "mindmap",
      "eyebrow": "Capítulo 06 · Mapa Mental",
      "title": "Diagnóstico por decomposição",
      "media": {
        "src": "/images/modulo01/aula05/modulo01aula05imagem02.png",
        "alt": "Mapa mental de diagnóstico conectando CTR, CPC, CVR, CPA e ROAS.",
        "kind": "mindmap",
        "caption": "Decomponha o sintoma antes de intervir.",
        "sourceLabel": "Mapa Mental Titanium",
        "zoomable": true
      }
    },
    {
      "id": "a05-review",
      "type": "review",
      "eyebrow": "Capítulo 07 · Revisão",
      "title": "Localize a quebra antes de agir",
      "frames": [
        {
          "id": "a05-review-main",
          "type": "review",
          "mode": "explain",
          "frameLabel": "Síntese",
          "eyebrow": "Capítulo 07 · Síntese",
          "title": "Três regras para levar ao Lab.",
          "reviewSections": [
            {
              "title": "Decomponha",
              "items": [
                "CPA pode ser decomposto em custo do clique e eficiência de conversão quando a base é compatível.",
                "ROAS incorpora valor, não apenas quantidade de conversões."
              ]
            },
            {
              "title": "Não confunda",
              "items": [
                "Sinal melhor em uma etapa não garante resultado melhor nas etapas seguintes.",
                "Sintoma descreve o que mudou; diagnóstico procura a causa."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "a05-exam",
      "type": "exam",
      "eyebrow": "Prova da Aula",
      "title": "Prove que consegue conectar métricas",
      "body": [
        "Nota mínima: 9,0."
      ]
    }
  ],
  "exam": {
    "id": "lesson-05-exam",
    "title": "Prova · Aula 05 — Como as métricas se conectam",
    "passingScore": 9,
    "questions": [
      {
        "id": "a05q01",
        "kind": "objective",
        "prompt": "Quando CVR usa cliques como base, qual relação ajuda a decompor o CPA?",
        "options": [
          {
            "id": "a",
            "label": "CPA ≈ CPC ÷ CVR.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "CPA = CTR × impressões.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "CPA = ROAS ÷ receita.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "CPA = cliques ÷ custo.",
            "feedback": "Isso inverte CPC."
          }
        ],
        "correctAnswer": "a",
        "explanation": "A relação ajuda a investigar custo e eficiência de conversão.",
        "reviewStageId": "a05-cpa"
      },
      {
        "id": "a05q02",
        "kind": "interpretation",
        "prompt": "CPC fica em R$ 2 e CVR cai de 5% para 2,5%. O que tende a acontecer com CPA?",
        "options": [
          {
            "id": "a",
            "label": "Cair de R$ 40 para R$ 20.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Subir de R$ 40 para R$ 80.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "Ficar em R$ 40.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Virar 5%.",
            "feedback": "CPA é custo, não taxa."
          }
        ],
        "correctAnswer": "b",
        "explanation": "Menor conversão para o mesmo custo por clique eleva o CPA.",
        "reviewStageId": "a05-cpa"
      },
      {
        "id": "a05q03",
        "kind": "diagnosis",
        "prompt": "CPA aumentou e CPC ficou estável. CVR caiu. Qual variável merece prioridade?",
        "options": [
          {
            "id": "a",
            "label": "A quantidade de impressões apenas.",
            "feedback": "Não é a mudança central."
          },
          {
            "id": "b",
            "label": "O nome da campanha.",
            "feedback": "Irrelevante."
          },
          {
            "id": "c",
            "label": "CVR e o trecho após o clique.",
            "feedback": "Correto."
          },
          {
            "id": "d",
            "label": "O orçamento, obrigatoriamente.",
            "feedback": "Não decorre dos dados."
          }
        ],
        "correctAnswer": "c",
        "explanation": "A decomposição localiza a mudança na eficiência de conversão.",
        "reviewStageId": "a05-diagnosis"
      },
      {
        "id": "a05q04",
        "kind": "interpretation",
        "prompt": "CTR aumentou. Podemos concluir que CPA melhorou?",
        "options": [
          {
            "id": "a",
            "label": "Sim, sempre.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Sim, desde que haja impressões.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "Não, porque CTR nunca é útil.",
            "feedback": "É útil dentro da função correta."
          },
          {
            "id": "d",
            "label": "Não. CTR descreve resposta à exibição e etapas posteriores ainda precisam ser verificadas.",
            "feedback": "Correto."
          }
        ],
        "correctAnswer": "d",
        "explanation": "Métrica upstream não garante resultado downstream.",
        "reviewStageId": "a05-ctr"
      },
      {
        "id": "a05q05",
        "kind": "diagnosis",
        "prompt": "Qual ordem representa um diagnóstico profissional?",
        "options": [
          {
            "id": "a",
            "label": "Sintoma → decomposição → evidência → hipótese → próxima investigação.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "Intervenção → sintoma → evidência → hipótese.",
            "feedback": "Começa cedo demais."
          },
          {
            "id": "c",
            "label": "Hipótese → aumentar orçamento → observar.",
            "feedback": "Pula decomposição."
          },
          {
            "id": "d",
            "label": "Resultado → ignorar variáveis → trocar campanha.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "a",
        "explanation": "Diagnóstico precede prescrição.",
        "reviewStageId": "a05-diagnosis"
      },
      {
        "id": "a05q06",
        "kind": "interpretation",
        "prompt": "Duas campanhas têm o mesmo CPA e ROAS diferentes. O que pode explicar?",
        "options": [
          {
            "id": "a",
            "label": "CPA e ROAS são idênticos.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Valor de conversão diferente.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "Mesmo CPA obriga o mesmo ROAS.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "ROAS não usa valor.",
            "feedback": "Usa."
          }
        ],
        "correctAnswer": "b",
        "explanation": "ROAS incorpora valor atribuído.",
        "reviewStageId": "a05-roas"
      },
      {
        "id": "a05q07",
        "kind": "objective",
        "prompt": "Qual métrica observa retorno de valor atribuído sobre gasto de mídia?",
        "options": [
          {
            "id": "a",
            "label": "CTR.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "CPC.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "ROAS.",
            "feedback": "Correto."
          },
          {
            "id": "d",
            "label": "CPA.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "c",
        "explanation": "ROAS relaciona valor e custo.",
        "reviewStageId": "a05-roas"
      },
      {
        "id": "a05q08",
        "kind": "decision",
        "prompt": "CTR alto, CPC estável e CVR baixa. Qual primeira investigação?",
        "options": [
          {
            "id": "a",
            "label": "Aumentar impressões imediatamente.",
            "feedback": "Não explica a baixa conversão."
          },
          {
            "id": "b",
            "label": "Concluir que CTR alto é o problema.",
            "feedback": "Não existe causalidade automática."
          },
          {
            "id": "c",
            "label": "Ignorar CVR.",
            "feedback": "É a variável que indica o gargalo."
          },
          {
            "id": "d",
            "label": "O trecho após o clique e a qualidade da chegada.",
            "feedback": "Correto."
          }
        ],
        "correctAnswer": "d",
        "explanation": "A cadeia mostra onde a eficiência se perdeu.",
        "reviewStageId": "a05-diagnosis"
      },
      {
        "id": "a05q09",
        "kind": "interpretation",
        "prompt": "Por que “CPA subiu” não é diagnóstico completo?",
        "options": [
          {
            "id": "a",
            "label": "Porque descreve o sintoma, mas ainda não explica qual componente mudou e por quê.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "Porque CPA não existe.",
            "feedback": "Existe."
          },
          {
            "id": "c",
            "label": "Porque só CTR pode ser diagnosticado.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Porque toda subida de CPA é causada por CPC.",
            "feedback": "Pode ser CPC, CVR ou ambos."
          }
        ],
        "correctAnswer": "a",
        "explanation": "Diagnóstico procura causa.",
        "reviewStageId": "a05-diagnosis"
      },
      {
        "id": "a05q10",
        "kind": "interpretation",
        "prompt": "Qual regra resume melhor a aula?",
        "options": [
          {
            "id": "a",
            "label": "Escolha uma métrica favorita e ignore as outras.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Decomponha o resultado, identifique a variável que mudou e só então escolha a próxima ação.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "Intervenha primeiro e investigue depois.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Toda correlação observada prova causalidade.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "b",
        "explanation": "Essa é a lógica de diagnóstico por decomposição.",
        "reviewStageId": "a05-review"
      }
    ]
  },
  "materials": [
    {
      "id": "a05-guide",
      "type": "titanium-lesson",
      "title": "Guia + Notas — Aula 05",
      "purpose": "Material único para estudar, anotar e revisar os fundamentos ensinados nesta aula.",
      "status": "available",
      "asset": "/materials/aula-05/Titanium_Guia_e_Notas_Aula_05.pdf"
    },
    {
      "id": "a05-mindmap",
      "type": "mindmap",
      "title": "Mapa Mental — Aula 05",
      "purpose": "Síntese visual para reconstruir os conceitos e relações centrais da aula.",
      "status": "available",
      "reviewStageId": "a05-mindmap",
      "asset": "/images/modulo01/aula05/modulo01aula05imagem02.png"
    }
  ]
}

export const lessonSix: Lesson = {
  "id": "06",
  "moduleId": "01",
  "number": "06",
  "title": "Titanium Lab 01",
  "masteryTime": "70–100 minutos",
  "objective": "Integrar os fundamentos do Módulo 01 em um caso simples: calcular métricas, comparar dois períodos, localizar a quebra e escolher uma investigação coerente.",
  "overview": "O Lab transforma conceitos isolados em leitura de sistema. Você recebe dados de uma operação simplificada e precisa separar exposição, movimento, conversão, custo e valor antes de decidir.",
  "demo": false,
  "completionMode": "exam",
  "stages": [
    {
      "id": "a06-case",
      "type": "case",
      "eyebrow": "Lab 01 · Caso",
      "title": "Titanium Clinic: mesmo tráfego, resultado diferente",
      "frames": [
        {
          "id": "a06-case-main",
          "type": "visual",
          "mode": "explain",
          "frameLabel": "Caso",
          "canvasLayout": "visual-first",
          "eyebrow": "Lab 01 · Cenário",
          "title": "Dois períodos. A mesma quantidade de exposição e cliques. Resultado diferente.",
          "body": [
            "A clínica mede agendamento como conversão. Para simplificar o Lab, o valor de receita apresentado já foi atribuído aos pacientes originados no período.",
            "Seu trabalho é calcular as métricas, comparar os períodos e localizar onde a mudança aconteceu antes de sugerir ação."
          ],
          "media": {
            "src": "/images/modulo01/aula06/modulo01aula06imagem01.png",
            "alt": "Comparação dos períodos A e B do Titanium Lab 01.",
            "kind": "diagram",
            "caption": "Período A e B usam os mesmos dados de exposição, cliques e custo; conversão e valor mudam.",
            "sourceLabel": "Case Titanium",
            "zoomable": true
          }
        },
        {
          "id": "a06-case-check",
          "type": "think",
          "mode": "apply",
          "frameLabel": "Primeira leitura",
          "eyebrow": "Lab 01 · Agora é com você",
          "title": "Antes de calcular, o que já podemos notar?",
          "scenario": "Impressões, cliques e custo ficaram iguais. Agendamentos e receita caíram pela metade. Qual leitura inicial é mais segura?",
          "options": [
            {
              "id": "a",
              "label": "A quebra parece ocorrer depois do clique, porque a parte de exposição, movimento e custo permaneceu igual.",
              "feedback": "Correto. Ainda não sabemos a causa, mas já localizamos o trecho a investigar.",
              "recommended": true
            },
            {
              "id": "b",
              "label": "O problema está obrigatoriamente no volume de impressões.",
              "feedback": "Impressões não mudaram."
            },
            {
              "id": "c",
              "label": "O CPC certamente dobrou.",
              "feedback": "Custo e cliques ficaram iguais."
            },
            {
              "id": "d",
              "label": "Nada mudou, porque a quantidade de cliques foi igual.",
              "feedback": "Agendamentos e receita mudaram de forma relevante."
            }
          ]
        }
      ]
    },
    {
      "id": "a06-calc1",
      "type": "practice",
      "eyebrow": "Lab 01 · Cálculo 1",
      "title": "Calcule CTR e CPC dos dois períodos",
      "frames": [
        {
          "id": "a06-calc1-main",
          "type": "think",
          "mode": "apply",
          "frameLabel": "CTR",
          "eyebrow": "Lab 01 · Cálculo",
          "title": "Qual é a CTR nos dois períodos?",
          "scenario": "Cada período teve 40.000 impressões e 2.000 cliques.",
          "allowRetry": true,
          "options": [
            {
              "id": "a",
              "label": "2,5% em ambos.",
              "feedback": "Não."
            },
            {
              "id": "b",
              "label": "5% em ambos.",
              "feedback": "Correto. 2.000 ÷ 40.000 = 5%.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "10% em ambos.",
              "feedback": "Não."
            },
            {
              "id": "d",
              "label": "5% no A e 2,5% no B.",
              "feedback": "Impressões e cliques são iguais nos dois períodos."
            }
          ]
        },
        {
          "id": "a06-calc1-cpc",
          "type": "think",
          "mode": "apply",
          "frameLabel": "CPC",
          "eyebrow": "Lab 01 · Cálculo",
          "title": "Qual é o CPC médio nos dois períodos?",
          "scenario": "Cada período custou R$ 4.000 e recebeu 2.000 cliques.",
          "options": [
            {
              "id": "a",
              "label": "R$ 1,00.",
              "feedback": "Não."
            },
            {
              "id": "b",
              "label": "R$ 2,00.",
              "feedback": "Correto. R$ 4.000 ÷ 2.000 = R$ 2,00.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "R$ 4,00.",
              "feedback": "Não."
            },
            {
              "id": "d",
              "label": "R$ 8,00.",
              "feedback": "Não."
            }
          ]
        }
      ]
    },
    {
      "id": "a06-calc2",
      "type": "practice",
      "eyebrow": "Lab 01 · Cálculo 2",
      "title": "Agora calcule CVR e CPA",
      "frames": [
        {
          "id": "a06-calc2-cvr",
          "type": "think",
          "mode": "apply",
          "frameLabel": "CVR",
          "eyebrow": "Lab 01 · Cálculo",
          "title": "Como mudou a taxa de conversão?",
          "scenario": "Período A: 100 agendamentos em 2.000 cliques. Período B: 50 agendamentos em 2.000 cliques.",
          "allowRetry": true,
          "options": [
            {
              "id": "a",
              "label": "A: 5% · B: 2,5%.",
              "feedback": "Correto.",
              "recommended": true
            },
            {
              "id": "b",
              "label": "A: 2,5% · B: 5%.",
              "feedback": "Invertido."
            },
            {
              "id": "c",
              "label": "A: 10% · B: 5%.",
              "feedback": "Os cálculos não correspondem."
            },
            {
              "id": "d",
              "label": "5% em ambos.",
              "feedback": "As conversões mudaram."
            }
          ]
        },
        {
          "id": "a06-calc2-cpa",
          "type": "think",
          "mode": "apply",
          "frameLabel": "CPA",
          "eyebrow": "Lab 01 · Cálculo",
          "title": "Como mudou o CPA?",
          "scenario": "O custo foi R$ 4.000 nos dois períodos. Houve 100 conversões no A e 50 no B.",
          "options": [
            {
              "id": "a",
              "label": "A: R$ 80 · B: R$ 40.",
              "feedback": "Invertido."
            },
            {
              "id": "b",
              "label": "A: R$ 40 · B: R$ 80.",
              "feedback": "Correto.",
              "recommended": true
            },
            {
              "id": "c",
              "label": "R$ 40 em ambos.",
              "feedback": "O número de conversões caiu."
            },
            {
              "id": "d",
              "label": "R$ 80 em ambos.",
              "feedback": "Não."
            }
          ]
        }
      ]
    },
    {
      "id": "a06-value",
      "type": "business",
      "eyebrow": "Lab 01 · Valor",
      "title": "Feche a leitura com ROAS",
      "frames": [
        {
          "id": "a06-value-main",
          "type": "think",
          "mode": "apply",
          "frameLabel": "ROAS",
          "eyebrow": "Lab 01 · Cálculo",
          "title": "Qual foi o ROAS em cada período?",
          "scenario": "Período A: R$ 20.000 de receita atribuída e R$ 4.000 de custo. Período B: R$ 10.000 de receita atribuída e R$ 4.000 de custo.",
          "allowRetry": true,
          "options": [
            {
              "id": "a",
              "label": "A: 5x · B: 2,5x.",
              "feedback": "Correto.",
              "recommended": true
            },
            {
              "id": "b",
              "label": "A: 2,5x · B: 5x.",
              "feedback": "Invertido."
            },
            {
              "id": "c",
              "label": "A: 4x · B: 4x.",
              "feedback": "Não."
            },
            {
              "id": "d",
              "label": "A: 20x · B: 10x.",
              "feedback": "Isso ignora o custo."
            }
          ]
        },
        {
          "id": "a06-value-read",
          "type": "decide",
          "mode": "apply",
          "frameLabel": "Interprete",
          "eyebrow": "Lab 01 · Diagnóstico",
          "title": "Qual leitura integra melhor todos os dados?",
          "scenario": "CTR e CPC ficaram iguais; CVR caiu pela metade; CPA dobrou; ROAS caiu pela metade.",
          "options": [
            {
              "id": "a",
              "label": "A mudança central está na eficiência depois do clique; o próximo passo é investigar por que menos cliques viraram agendamentos.",
              "feedback": "Correto. A decomposição localiza o trecho da quebra.",
              "recommended": true
            },
            {
              "id": "b",
              "label": "O leilão ficou necessariamente mais caro.",
              "feedback": "CPC ficou estável."
            },
            {
              "id": "c",
              "label": "A exposição piorou porque CTR caiu.",
              "feedback": "CTR ficou igual."
            },
            {
              "id": "d",
              "label": "O volume de cliques deve ser dobrado antes de investigar.",
              "feedback": "Mais volume não explica a queda de eficiência."
            }
          ]
        }
      ]
    },
    {
      "id": "a06-investigate",
      "type": "guided",
      "eyebrow": "Lab 01 · Investigação",
      "title": "Do número para a próxima pergunta",
      "frames": [
        {
          "id": "a06-investigate-main",
          "type": "learn",
          "mode": "explain",
          "frameLabel": "Raciocínio",
          "eyebrow": "Lab 01 · Próxima investigação",
          "title": "O Lab termina quando você sabe o que investigar — não quando inventa uma causa.",
          "body": [
            "A queda da CVR mostra que uma proporção menor de cliques virou agendamento. Isso reduz o espaço de busca, mas ainda não identifica a causa final.",
            "Hipóteses possíveis incluem mudança no destino, formulário, disponibilidade, oferta, qualidade do tráfego ou falha de mensuração. O Módulo 01 não precisa resolver todas; precisa ensinar você a não pular da métrica para uma prescrição."
          ],
          "sequence": [
            {
              "label": "Evidência",
              "detail": "CVR caiu de 5% para 2,5%."
            },
            {
              "label": "Consequência",
              "detail": "CPA subiu de R$ 40 para R$ 80."
            },
            {
              "label": "Impacto de valor",
              "detail": "ROAS caiu de 5x para 2,5x."
            },
            {
              "label": "Próxima investigação",
              "detail": "Descobrir por que menos cliques viraram agendamentos."
            }
          ],
          "highlight": "“Onde mudou?” vem antes de “o que fazer?”."
        }
      ]
    },
    {
      "id": "a06-mindmap",
      "type": "mindmap",
      "eyebrow": "Lab 01 · Mapa Mental",
      "title": "Roteiro do primeiro diagnóstico integrado",
      "media": {
        "src": "/images/modulo01/aula06/modulo01aula06imagem02.png",
        "alt": "Mapa mental do Titanium Lab 01.",
        "kind": "mindmap",
        "caption": "Contexto, contagens, custos, eficiência e valor.",
        "sourceLabel": "Mapa Mental Titanium",
        "zoomable": true
      }
    },
    {
      "id": "a06-review",
      "type": "review",
      "eyebrow": "Lab 01 · Revisão",
      "title": "Você já consegue fazer uma primeira leitura de sistema",
      "frames": [
        {
          "id": "a06-review-main",
          "type": "review",
          "mode": "explain",
          "frameLabel": "Síntese",
          "eyebrow": "Lab 01 · Síntese",
          "title": "O Módulo 01 termina com um método simples.",
          "reviewSections": [
            {
              "title": "1. Organize",
              "items": [
                "Separe exposição, movimento, ação e valor.",
                "Calcule as métricas com denominadores claros."
              ]
            },
            {
              "title": "2. Compare",
              "items": [
                "Veja quais variáveis mudaram e quais ficaram estáveis.",
                "Localize a passagem onde o resultado se deteriorou."
              ]
            },
            {
              "title": "3. Investigue",
              "items": [
                "Formule hipóteses compatíveis com a evidência.",
                "Não prescreva solução antes de reduzir a incerteza."
              ]
            }
          ]
        }
      ]
    },
    {
      "id": "a06-exam",
      "type": "exam",
      "eyebrow": "Prova do Lab",
      "title": "Demonstre domínio integrado do Módulo 01",
      "body": [
        "A avaliação final do Lab exige cálculo e diagnóstico. Nota mínima: 9,0."
      ]
    }
  ],
  "exam": {
    "id": "lesson-06-exam",
    "title": "Prova · Titanium Lab 01",
    "passingScore": 9,
    "questions": [
      {
        "id": "a06q01",
        "kind": "objective",
        "prompt": "40.000 impressões e 2.000 cliques resultam em qual CTR?",
        "options": [
          {
            "id": "a",
            "label": "5%.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "2,5%.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "10%.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "20%.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "a",
        "explanation": "CTR = 2.000 ÷ 40.000 = 5%.",
        "reviewStageId": "a06-calc1"
      },
      {
        "id": "a06q02",
        "kind": "objective",
        "prompt": "R$ 4.000 de custo e 2.000 cliques resultam em qual CPC médio?",
        "options": [
          {
            "id": "a",
            "label": "R$ 1.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "R$ 2.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "R$ 4.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "R$ 8.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "b",
        "explanation": "CPC = custo ÷ cliques.",
        "reviewStageId": "a06-calc1"
      },
      {
        "id": "a06q03",
        "kind": "objective",
        "prompt": "100 conversões em 2.000 cliques resultam em qual CVR neste Lab?",
        "options": [
          {
            "id": "a",
            "label": "2,5%.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "10%.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "5%.",
            "feedback": "Correto."
          },
          {
            "id": "d",
            "label": "20%.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "c",
        "explanation": "100 ÷ 2.000 = 5%.",
        "reviewStageId": "a06-calc2"
      },
      {
        "id": "a06q04",
        "kind": "objective",
        "prompt": "R$ 4.000 e 100 conversões resultam em qual CPA?",
        "options": [
          {
            "id": "a",
            "label": "R$ 20.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "R$ 80.",
            "feedback": "Esse é o período B."
          },
          {
            "id": "c",
            "label": "R$ 100.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "R$ 40.",
            "feedback": "Correto."
          }
        ],
        "correctAnswer": "d",
        "explanation": "CPA = R$ 40.",
        "reviewStageId": "a06-calc2"
      },
      {
        "id": "a06q05",
        "kind": "objective",
        "prompt": "R$ 20.000 de valor atribuído e R$ 4.000 de custo representam qual ROAS?",
        "options": [
          {
            "id": "a",
            "label": "5x.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "2,5x.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "4x.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "20x.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "a",
        "explanation": "ROAS = 5x.",
        "reviewStageId": "a06-value"
      },
      {
        "id": "a06q06",
        "kind": "diagnosis",
        "prompt": "Entre os períodos, CTR e CPC ficaram iguais e CVR caiu. Onde está a primeira quebra observável?",
        "options": [
          {
            "id": "a",
            "label": "Antes da impressão.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Na eficiência depois do clique.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "No custo por clique.",
            "feedback": "Ficou igual."
          },
          {
            "id": "d",
            "label": "No volume de impressões.",
            "feedback": "Ficou igual."
          }
        ],
        "correctAnswer": "b",
        "explanation": "A mudança aparece no trecho clique → conversão.",
        "reviewStageId": "a06-value"
      },
      {
        "id": "a06q07",
        "kind": "interpretation",
        "prompt": "Por que o CPA dobrou no período B?",
        "options": [
          {
            "id": "a",
            "label": "Porque CPC dobrou.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Porque as impressões dobraram.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "Porque o custo foi igual e houve metade das conversões.",
            "feedback": "Correto."
          },
          {
            "id": "d",
            "label": "Porque CTR caiu.",
            "feedback": "Não caiu."
          }
        ],
        "correctAnswer": "c",
        "explanation": "Mesmo custo dividido por menos conversões eleva CPA.",
        "reviewStageId": "a06-calc2"
      },
      {
        "id": "a06q08",
        "kind": "decision",
        "prompt": "Qual é a próxima ação mais profissional?",
        "options": [
          {
            "id": "a",
            "label": "Dobrar o orçamento sem investigar.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Trocar toda a campanha imediatamente.",
            "feedback": "Prescrição precoce."
          },
          {
            "id": "c",
            "label": "Ignorar a mudança porque cliques ficaram iguais.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Investigar por que menos cliques viraram agendamentos.",
            "feedback": "Correto."
          }
        ],
        "correctAnswer": "d",
        "explanation": "A investigação segue a variável que mudou.",
        "reviewStageId": "a06-investigate"
      },
      {
        "id": "a06q09",
        "kind": "interpretation",
        "prompt": "O que o ROAS menor adiciona ao diagnóstico?",
        "options": [
          {
            "id": "a",
            "label": "Mostra que a piora de conversão também reduziu o valor atribuído por unidade de gasto.",
            "feedback": "Correto."
          },
          {
            "id": "b",
            "label": "Prova que CPC aumentou.",
            "feedback": "Não."
          },
          {
            "id": "c",
            "label": "Prova que CTR caiu.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Mostra apenas quantidade de impressões.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "a",
        "explanation": "ROAS conecta valor e gasto.",
        "reviewStageId": "a06-value"
      },
      {
        "id": "a06q10",
        "kind": "decision",
        "prompt": "Qual frase resume a competência demonstrada no Lab?",
        "options": [
          {
            "id": "a",
            "label": "Aumentar mídia sempre que resultado cai.",
            "feedback": "Não."
          },
          {
            "id": "b",
            "label": "Calcular, comparar, localizar a quebra e escolher uma investigação antes de intervir.",
            "feedback": "Correto."
          },
          {
            "id": "c",
            "label": "Decorar siglas sem relacioná-las.",
            "feedback": "Não."
          },
          {
            "id": "d",
            "label": "Usar apenas a métrica com melhor aparência.",
            "feedback": "Não."
          }
        ],
        "correctAnswer": "b",
        "explanation": "Essa é a sequência de diagnóstico fundamental.",
        "reviewStageId": "a06-review"
      }
    ]
  },
  "materials": [
    {
      "id": "a06-guide",
      "type": "titanium-lesson",
      "title": "Guia + Notas — Aula 06",
      "purpose": "Material único para estudar, anotar e revisar os fundamentos ensinados nesta aula.",
      "status": "available",
      "asset": "/materials/aula-06/Titanium_Guia_e_Notas_Aula_06.pdf"
    },
    {
      "id": "a06-mindmap",
      "type": "mindmap",
      "title": "Mapa Mental — Aula 06",
      "purpose": "Síntese visual para reconstruir os conceitos e relações centrais da aula.",
      "status": "available",
      "reviewStageId": "a06-mindmap",
      "asset": "/images/modulo01/aula06/modulo01aula06imagem02.png"
    }
  ]
}

export const moduleOneLessonDefinitions: Lesson[] = [
  lessonOneDemo,
  lessonTwo,
  lessonThree,
  lessonFour,
  lessonFive,
  lessonSix,
]

export function getModuleOneLessonById(id: string) {
  return moduleOneLessonDefinitions.find((lesson) => lesson.id === id)
}

export const moduleOneFinalExam: Exam = {
  "id": "module-01-final",
  "title": "Prova Final · Módulo 01 — Fundamentos de Tráfego e Aquisição",
  "passingScore": 9,
  "questions": [
    {
      "id": "m01q01",
      "kind": "objective",
      "prompt": "O que tráfego descreve em sua forma mais básica?",
      "options": [
        {
          "id": "a",
          "label": "Movimento de pessoas entre uma origem e um destino.",
          "feedback": "Correto."
        },
        {
          "id": "b",
          "label": "Lucro gerado pela campanha.",
          "feedback": "Não."
        },
        {
          "id": "c",
          "label": "Apenas anúncios em busca.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "Toda aquisição concluída.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "a",
      "explanation": "Tráfego é movimento.",
      "reviewStageId": "a01v2-traffic"
    },
    {
      "id": "m01q02",
      "kind": "interpretation",
      "prompt": "Uma empresa paga para distribuir uma mensagem. O que ela compra primeiro?",
      "options": [
        {
          "id": "a",
          "label": "Clientes garantidos.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "Oportunidades de distribuição.",
          "feedback": "Correto."
        },
        {
          "id": "c",
          "label": "Receita futura.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "Propriedade da plataforma.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "b",
      "explanation": "Publicidade paga compra distribuição.",
      "reviewStageId": "a02-system"
    },
    {
      "id": "m01q03",
      "kind": "objective",
      "prompt": "O que inventário publicitário representa?",
      "options": [
        {
          "id": "a",
          "label": "Saldo financeiro.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "Histórico de clientes.",
          "feedback": "Não."
        },
        {
          "id": "c",
          "label": "Conjunto de oportunidades onde anúncios podem aparecer.",
          "feedback": "Correto."
        },
        {
          "id": "d",
          "label": "Apenas receita.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "c",
      "explanation": "Inventário é oportunidade de distribuição.",
      "reviewStageId": "a02-inventory"
    },
    {
      "id": "m01q04",
      "kind": "interpretation",
      "prompt": "Por que o maior lance não garante sozinho a melhor posição?",
      "options": [
        {
          "id": "a",
          "label": "Porque lance nunca importa.",
          "feedback": "Importa."
        },
        {
          "id": "b",
          "label": "Porque orçamento substitui lance.",
          "feedback": "Não."
        },
        {
          "id": "c",
          "label": "Porque todos sempre aparecem.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "Porque elegibilidade, qualidade, contexto e outros fatores também participam.",
          "feedback": "Correto."
        }
      ],
      "correctAnswer": "d",
      "explanation": "Leilão considera múltiplos fatores.",
      "reviewStageId": "a02-auction"
    },
    {
      "id": "m01q05",
      "kind": "objective",
      "prompt": "O que uma impressão comprova?",
      "options": [
        {
          "id": "a",
          "label": "Que o anúncio foi exibido.",
          "feedback": "Correto."
        },
        {
          "id": "b",
          "label": "Que houve visita.",
          "feedback": "Não."
        },
        {
          "id": "c",
          "label": "Que houve conversão.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "Que houve receita.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "a",
      "explanation": "Impressão é exibição.",
      "reviewStageId": "a03-exposure"
    },
    {
      "id": "m01q06",
      "kind": "objective",
      "prompt": "Qual sequência é mais coerente?",
      "options": [
        {
          "id": "a",
          "label": "Receita → impressão → clique.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "Impressão → clique → visita → conversão → cliente → receita.",
          "feedback": "Correto."
        },
        {
          "id": "c",
          "label": "Clique → receita → impressão.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "Conversão → impressão → visita.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "b",
      "explanation": "A sequência acompanha a jornada.",
      "reviewStageId": "a03-journey"
    },
    {
      "id": "m01q07",
      "kind": "interpretation",
      "prompt": "Por que 100 conversões em duas empresas podem significar coisas diferentes?",
      "options": [
        {
          "id": "a",
          "label": "Porque conversões não podem ser medidas.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "Porque impressão e conversão são iguais.",
          "feedback": "Não."
        },
        {
          "id": "c",
          "label": "Porque conversão depende da ação definida e do valor dela.",
          "feedback": "Correto."
        },
        {
          "id": "d",
          "label": "Porque toda conversão é receita.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "c",
      "explanation": "Conversão depende do objetivo medido.",
      "reviewStageId": "a03-conversion"
    },
    {
      "id": "m01q08",
      "kind": "objective",
      "prompt": "Qual fórmula calcula CTR?",
      "options": [
        {
          "id": "a",
          "label": "Custo ÷ cliques.",
          "feedback": "CPC."
        },
        {
          "id": "b",
          "label": "Conversões ÷ cliques.",
          "feedback": "CVR no contexto."
        },
        {
          "id": "c",
          "label": "Valor ÷ custo.",
          "feedback": "ROAS."
        },
        {
          "id": "d",
          "label": "Cliques ÷ impressões × 100.",
          "feedback": "Correto."
        }
      ],
      "correctAnswer": "d",
      "explanation": "CTR relaciona cliques e impressões.",
      "reviewStageId": "a04-ctr"
    },
    {
      "id": "m01q09",
      "kind": "objective",
      "prompt": "R$ 600 de custo e 200 cliques resultam em qual CPC médio?",
      "options": [
        {
          "id": "a",
          "label": "R$ 3.",
          "feedback": "Correto."
        },
        {
          "id": "b",
          "label": "R$ 1.",
          "feedback": "Não."
        },
        {
          "id": "c",
          "label": "R$ 30.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "R$ 300.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "a",
      "explanation": "600 ÷ 200 = 3.",
      "reviewStageId": "a04-cpc"
    },
    {
      "id": "m01q10",
      "kind": "objective",
      "prompt": "20 conversões em 400 cliques equivalem a qual CVR neste exercício?",
      "options": [
        {
          "id": "a",
          "label": "2%.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "5%.",
          "feedback": "Correto."
        },
        {
          "id": "c",
          "label": "4%.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "20%.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "b",
      "explanation": "20 ÷ 400 = 5%.",
      "reviewStageId": "a04-cvr"
    },
    {
      "id": "m01q11",
      "kind": "objective",
      "prompt": "R$ 1.500 de custo e 30 conversões resultam em qual CPA?",
      "options": [
        {
          "id": "a",
          "label": "R$ 30.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "R$ 5.",
          "feedback": "Não."
        },
        {
          "id": "c",
          "label": "R$ 50.",
          "feedback": "Correto."
        },
        {
          "id": "d",
          "label": "R$ 500.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "c",
      "explanation": "1.500 ÷ 30 = 50.",
      "reviewStageId": "a04-cpa"
    },
    {
      "id": "m01q12",
      "kind": "objective",
      "prompt": "R$ 8.000 de valor atribuído e R$ 2.000 de custo representam qual ROAS?",
      "options": [
        {
          "id": "a",
          "label": "2x.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "3x.",
          "feedback": "Não."
        },
        {
          "id": "c",
          "label": "8x.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "4x.",
          "feedback": "Correto."
        }
      ],
      "correctAnswer": "d",
      "explanation": "8.000 ÷ 2.000 = 4.",
      "reviewStageId": "a04-roas"
    },
    {
      "id": "m01q13",
      "kind": "interpretation",
      "prompt": "ROAS alto prova lucro alto?",
      "options": [
        {
          "id": "a",
          "label": "Não; margem e outros custos ainda importam.",
          "feedback": "Correto."
        },
        {
          "id": "b",
          "label": "Sempre.",
          "feedback": "Não."
        },
        {
          "id": "c",
          "label": "Sim, se CTR for alto.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "Sim, porque ROAS já desconta todos os custos.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "a",
      "explanation": "ROAS não é lucro.",
      "reviewStageId": "a04-roas"
    },
    {
      "id": "m01q14",
      "kind": "diagnosis",
      "prompt": "CPC estável e CVR cai pela metade. O que tende a ocorrer com CPA, mantendo o resto do exercício?",
      "options": [
        {
          "id": "a",
          "label": "Tende a cair pela metade.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "Tende a dobrar.",
          "feedback": "Correto."
        },
        {
          "id": "c",
          "label": "Fica obrigatoriamente igual.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "Vira uma taxa.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "b",
      "explanation": "CPA ≈ CPC ÷ CVR.",
      "reviewStageId": "a05-cpa"
    },
    {
      "id": "m01q15",
      "kind": "diagnosis",
      "prompt": "CPA subiu, CPC ficou estável e CVR caiu. Onde investigar primeiro?",
      "options": [
        {
          "id": "a",
          "label": "Impressões, apenas.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "Maior orçamento.",
          "feedback": "Prescrição precoce."
        },
        {
          "id": "c",
          "label": "Trecho pós-clique: destino e conversão.",
          "feedback": "Correto."
        },
        {
          "id": "d",
          "label": "Nome da campanha.",
          "feedback": "Irrelevante."
        }
      ],
      "correctAnswer": "c",
      "explanation": "A variável que mudou localiza a primeira investigação.",
      "reviewStageId": "a05-diagnosis"
    },
    {
      "id": "m01q16",
      "kind": "interpretation",
      "prompt": "CTR alto com poucas vendas significa o quê?",
      "options": [
        {
          "id": "a",
          "label": "A campanha é ótima.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "CTR é inútil.",
          "feedback": "Não."
        },
        {
          "id": "c",
          "label": "CTR alto causa vendas baixas.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "Há boa resposta ao anúncio, mas ainda precisamos avaliar o caminho depois do clique.",
          "feedback": "Correto."
        }
      ],
      "correctAnswer": "d",
      "explanation": "Métrica upstream não garante resultado downstream.",
      "reviewStageId": "a05-ctr"
    },
    {
      "id": "m01q17",
      "kind": "interpretation",
      "prompt": "Duas campanhas têm o mesmo CPA e ROAS diferentes. Qual variável pode explicar?",
      "options": [
        {
          "id": "a",
          "label": "Valor atribuído por conversão.",
          "feedback": "Correto."
        },
        {
          "id": "b",
          "label": "O nome da campanha.",
          "feedback": "Não."
        },
        {
          "id": "c",
          "label": "Obrigatoriamente CTR.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "CPA é igual a ROAS.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "a",
      "explanation": "ROAS incorpora valor.",
      "reviewStageId": "a05-roas"
    },
    {
      "id": "m01q18",
      "kind": "diagnosis",
      "prompt": "No Lab, impressões, cliques e custo ficam iguais; conversões caem pela metade. O que muda diretamente?",
      "options": [
        {
          "id": "a",
          "label": "CTR e CPC dobram.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "CVR cai e CPA sobe.",
          "feedback": "Correto."
        },
        {
          "id": "c",
          "label": "Impressões desaparecem.",
          "feedback": "Não."
        },
        {
          "id": "d",
          "label": "CPC vira ROAS.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "b",
      "explanation": "Menos conversões com mesmo custo e cliques pioram CVR e CPA.",
      "reviewStageId": "a06-calc2"
    },
    {
      "id": "m01q19",
      "kind": "decision",
      "prompt": "Qual sequência representa melhor o primeiro diagnóstico profissional?",
      "options": [
        {
          "id": "a",
          "label": "Ação → hipótese → ignorar dados.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "Aumentar orçamento → observar.",
          "feedback": "Prescrição precoce."
        },
        {
          "id": "c",
          "label": "Sintoma → decomposição → evidência → hipótese → investigação.",
          "feedback": "Correto."
        },
        {
          "id": "d",
          "label": "Escolher uma métrica e ignorar as outras.",
          "feedback": "Não."
        }
      ],
      "correctAnswer": "c",
      "explanation": "Diagnóstico precede intervenção.",
      "reviewStageId": "a05-diagnosis"
    },
    {
      "id": "m01q20",
      "kind": "decision",
      "prompt": "Qual competência o Módulo 01 pretende consolidar?",
      "options": [
        {
          "id": "a",
          "label": "Configurar uma plataforma avançada sem entender o sistema.",
          "feedback": "Não."
        },
        {
          "id": "b",
          "label": "Decorar siglas.",
          "feedback": "Não."
        },
        {
          "id": "c",
          "label": "Dominar Smart Bidding.",
          "feedback": "Assunto posterior."
        },
        {
          "id": "d",
          "label": "Entender o caminho de aquisição, calcular métricas fundamentais e localizar uma primeira quebra antes de agir.",
          "feedback": "Correto."
        }
      ],
      "correctAnswer": "d",
      "explanation": "O módulo constrói a raiz para operação e diagnóstico futuros.",
      "reviewStageId": "a06-review"
    }
  ]
}

for (const lesson of [lessonTwo, lessonThree, lessonFour, lessonFive, lessonSix]) {
  assertTitaniumLessonArchitecture(lesson)
}
