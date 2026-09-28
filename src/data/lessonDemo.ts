import type { Exam, Lesson } from "../types/learning"
import {
  assertTitaniumLessonArchitecture,
  TITANIUM_MASTERY_SCORE,
} from "./pedagogy"

// Aula 01 definitiva do Módulo 01.
// O nome de exportação permanece por compatibilidade com a engine existente.
export const lessonOneDemo: Lesson = {
  id: "01",
  moduleId: "01",
  number: "01",
  title: "O que realmente é tráfego pago",
  masteryTime: "45–65 minutos",
  objective:
    "Construir do zero o conceito de tráfego, distinguir tráfego pago de orgânico e entender o caminho entre uma pessoa, uma mensagem, um destino e um resultado.",
  overview:
    "A primeira aula parte do fenômeno antes do vocabulário profissional. Você aprende o que tráfego é, o que não é e qual papel ele ocupa dentro da aquisição.",
  demo: false,
  stages: [
    {
      id: "a01v2-root",
      type: "context",
      eyebrow: "Capítulo 01 · A raiz",
      title: "Antes de existir anúncio, existe uma necessidade simples",
      frames: [
        {
          id: "a01v2-root-problem",
          type: "learn",
          mode: "explain",
          frameLabel: "Problema",
          eyebrow: "Capítulo 01 · O problema",
          title: "Um negócio precisa ser encontrado por pessoas.",
          body: [
            "Imagine uma clínica excelente em uma rua onde ninguém passa. Ela pode ter ótimo atendimento, boa estrutura e uma oferta útil. Mesmo assim, poucas pessoas terão a chance de escolher aquele serviço se nunca descobrirem que ele existe.",
            "Antes de falar de plataformas, métricas ou configurações, precisamos entender esse fenômeno básico: pessoas precisam chegar até uma oportunidade para que algum resultado possa acontecer.",
          ],
          cards: [
            {
              title: "Negócio",
              description:
                "Tem uma oferta, serviço ou produto que pode resolver um problema.",
            },
            {
              title: "Pessoa",
              description:
                "Pode ou não conhecer o negócio e pode ou não estar procurando uma solução.",
            },
            {
              title: "Encontro",
              description:
                "Algum mecanismo precisa aproximar a pessoa da oportunidade.",
            },
          ],
        },
        {
          id: "a01v2-root-check",
          type: "think",
          mode: "apply",
          frameLabel: "Primeira leitura",
          eyebrow: "Capítulo 01 · Agora é com você",
          title: "Qual problema existe antes de qualquer plataforma?",
          scenario:
            "Um excelente consultório abriu em uma região movimentada, mas quase ninguém sabe que ele existe. Qual necessidade aparece primeiro?",
          options: [
            {
              id: "a",
              label:
                "Aumentar a complexidade da operação antes de pensar em como as pessoas descobrirão o consultório.",
              feedback:
                "A operação pode evoluir depois, mas o cenário mostra primeiro um problema de descoberta e acesso à oferta.",
            },
            {
              id: "b",
              label:
                "Criar uma forma de pessoas certas descobrirem a oferta e chegarem até um próximo passo.",
              feedback:
                "Correto. Antes de otimizar detalhes, precisamos criar a possibilidade de encontro entre pessoa e oferta.",
              recommended: true,
            },
            {
              id: "c",
              label:
                "Concluir que a qualidade do serviço é irrelevante sempre que o negócio ainda é pouco conhecido.",
              feedback:
                "Qualidade continua importante. O problema é que ela não pode gerar resultado se ninguém chega a conhecê-la.",
            },
            {
              id: "d",
              label:
                "Esperar que o negócio cresça sozinho, porque divulgação e descoberta não fazem parte do sistema de aquisição.",
              feedback:
                "Descoberta faz parte do caminho que antecede qualquer aquisição.",
            },
          ],
        },
      ],
    },
    {
      id: "a01v2-traffic",
      type: "learn",
      eyebrow: "Capítulo 02 · Conceito",
      title: "Agora podemos dar nome ao movimento",
      frames: [
        {
          id: "a01v2-traffic-phenomenon",
          type: "learn",
          mode: "explain",
          frameLabel: "Fenômeno",
          eyebrow: "Capítulo 02 · Primeiro o fenômeno",
          title: "Pessoas se movem entre uma origem e um destino.",
          body: [
            "Quando alguém sai de um ponto e chega a outro, existe movimento. Em uma rua, isso pode ser o fluxo de pessoas passando por uma loja. No ambiente digital, pode ser uma pessoa saindo de uma busca, de um vídeo, de uma rede social ou de outro ambiente e chegando a uma página.",
            "Esse movimento recebe um nome simples: tráfego.",
          ],
          highlight:
            "Tráfego descreve movimento. Ele ainda não diz se o resultado desejado aconteceu.",
        },
        {
          id: "a01v2-traffic-definition",
          type: "learn",
          mode: "focus",
          frameLabel: "Definição",
          eyebrow: "Capítulo 02 · Ponto-chave",
          canvasLayout: "visual-first",
          title: "Tráfego é movimento de pessoas até um destino.",
          body: [
            "No marketing digital, usamos a palavra tráfego para falar de pessoas chegando a um site, página, conversa, aplicativo ou outro ambiente.",
            "A ideia é simples. Depois, ao longo do curso, aprenderemos como observar a qualidade desse movimento e o que acontece depois que a pessoa chega.",
          ],
          quote:
            "Não confunda movimento com resultado. Tráfego cria oportunidade de resultado; ele não garante o resultado.",
          media: {
            src: "/images/modulo01/aula01/modulo01aula01imagem01.png",
            alt: "Tráfego como movimento de uma origem até um destino.",
            kind: "explanatory-image",
            caption:
              "Tráfego descreve movimento. Resultado acontece depois.",
            sourceLabel: "Visual Titanium",
            zoomable: true,
          },
        },
        {
          id: "a01v2-traffic-check",
          type: "think",
          mode: "apply",
          frameLabel: "Reconheça",
          eyebrow: "Capítulo 02 · Agora é com você",
          title: "Qual situação representa tráfego?",
          scenario:
            "Escolha a situação que melhor representa o conceito que acabamos de construir.",
          options: [
            {
              id: "a",
              label:
                "Uma pessoa vê o nome de uma empresa, mas não se move para nenhum outro ambiente.",
              feedback:
                "Existe exposição, mas o exemplo ainda não descreve chegada a um destino.",
            },
            {
              id: "b",
              label:
                "Uma empresa altera internamente o preço de um serviço sem que nenhuma pessoa veja a mudança.",
              feedback:
                "É uma decisão de oferta, não movimento de pessoas.",
            },
            {
              id: "c",
              label:
                "Uma pessoa sai de uma mensagem e chega à página onde pode conhecer melhor a oferta.",
              feedback:
                "Correto. Existe movimento entre uma origem e um destino.",
              recommended: true,
            },
            {
              id: "d",
              label:
                "Um negócio calcula seus custos internos sem gerar qualquer acesso de pessoas.",
              feedback:
                "O cálculo pode ser importante para o negócio, mas não representa tráfego.",
            },
          ],
        },
      ],
    },
    {
      id: "a01v2-paid-organic",
      type: "visual",
      eyebrow: "Capítulo 03 · Origem",
      title: "Nem todo tráfego é comprado",
      frames: [
        {
          id: "a01v2-paid-organic-main",
          type: "visual",
          mode: "explain",
          frameLabel: "Duas origens",
          eyebrow: "Capítulo 03 · Pago e orgânico",
          canvasLayout: "compare",
          title: "A diferença está em como a distribuição é conquistada.",
          body: [
            "Uma pessoa pode chegar até um negócio porque encontrou um conteúdo, recebeu uma indicação ou acessou uma busca sem que a empresa tenha comprado diretamente aquela distribuição. Chamamos isso, de forma ampla, de tráfego orgânico.",
            "Também é possível pagar para uma plataforma distribuir uma mensagem para pessoas. Quando esse investimento gera movimento até um destino, estamos falando de tráfego pago.",
          ],
          media: {
            src: "/images/modulo01/aula01/modulo01aula01imagem02.png",
            alt: "Comparação entre tráfego orgânico e tráfego pago.",
            kind: "explanatory-image",
            caption:
              "Ambos geram movimento; a diferença está na origem da distribuição.",
            sourceLabel: "Comparação Titanium",
            zoomable: true,
          },
        },
        {
          id: "a01v2-paid-organic-check",
          type: "decide",
          mode: "apply",
          frameLabel: "Classifique",
          eyebrow: "Capítulo 03 · Agora é com você",
          title: "Qual exemplo representa tráfego pago?",
          scenario:
            "Quatro pessoas chegaram ao mesmo site por caminhos diferentes. Em qual caso houve compra direta de distribuição?",
          options: [
            {
              id: "a",
              label:
                "A pessoa digitou o endereço do site porque já conhecia a empresa.",
              feedback:
                "Não houve compra direta de distribuição nesse exemplo.",
            },
            {
              id: "b",
              label:
                "A pessoa recebeu o link de um amigo e decidiu acessar a página.",
              feedback:
                "É uma chegada por indicação, não distribuição comprada.",
            },
            {
              id: "c",
              label:
                "A pessoa encontrou um conteúdo da empresa sem que aquela exibição tivesse sido comprada.",
              feedback:
                "Esse exemplo representa uma chegada orgânica.",
            },
            {
              id: "d",
              label:
                "A empresa pagou para uma plataforma exibir uma mensagem e a pessoa clicou para chegar ao site.",
              feedback:
                "Correto. Existe investimento direto para distribuir a mensagem e gerar o movimento.",
              recommended: true,
            },
          ],
        },
      ],
    },
    {
      id: "a01v2-attention-intent",
      type: "visual",
      eyebrow: "Capítulo 04 · Pessoa",
      title: "Pessoas podem estar em estados diferentes",
      frames: [
        {
          id: "a01v2-attention-intent-main",
          type: "visual",
          mode: "explain",
          frameLabel: "Atenção e intenção",
          eyebrow: "Capítulo 04 · Duas situações",
          canvasLayout: "compare",
          title: "Nem toda pessoa está procurando ativamente por uma solução.",
          body: [
            "Às vezes, uma pessoa está apenas navegando e uma mensagem conquista sua atenção. Em outras situações, ela já está procurando resolver algo e demonstra intenção.",
            "Essa diferença muda a forma como uma mensagem pode ser apresentada. Nesta aula, não precisamos dominar canais ou formatos. Precisamos apenas reconhecer que o estado da pessoa importa.",
          ],
          media: {
            src: "/images/modulo01/aula01/modulo01aula01imagem03.png",
            alt: "Comparação visual entre atenção e intenção.",
            kind: "explanatory-image",
            caption:
              "Atenção: a mensagem encontra a pessoa. Intenção: a pessoa já demonstra uma necessidade ou busca ativa.",
            sourceLabel: "Imagem explicativa Titanium",
            zoomable: true,
          },
        },
        {
          id: "a01v2-attention-intent-check",
          type: "think",
          mode: "apply",
          frameLabel: "Reconheça",
          eyebrow: "Capítulo 04 · Agora é com você",
          title: "Qual situação demonstra intenção mais clara?",
          scenario:
            "Quatro pessoas podem conhecer uma clínica. Qual delas demonstra a intenção mais evidente de resolver um problema agora?",
          options: [
            {
              id: "a",
              label:
                "Uma pessoa vê casualmente uma publicação enquanto passa o tempo em uma rede social.",
              feedback:
                "A mensagem pode conquistar atenção, mas o cenário não mostra busca ativa por solução.",
            },
            {
              id: "b",
              label:
                "Uma pessoa pesquisa por um especialista porque está procurando atendimento para um problema específico.",
              feedback:
                "Correto. Existe um sinal direto de necessidade e procura por uma solução.",
              recommended: true,
            },
            {
              id: "c",
              label:
                "Uma pessoa passa em frente à clínica sem perceber qual serviço é oferecido.",
              feedback:
                "Existe proximidade física, mas não há intenção demonstrada no cenário.",
            },
            {
              id: "d",
              label:
                "Uma pessoa conhece alguém que já foi atendido, mas não está procurando nenhum serviço agora.",
              feedback:
                "Existe referência, porém o cenário não mostra procura ativa no momento.",
            },
          ],
        },
      ],
    },
    {
      id: "a01v2-flow",
      type: "visual",
      eyebrow: "Capítulo 05 · Caminho",
      title: "O tráfego ocupa apenas uma parte do sistema",
      frames: [
        {
          id: "a01v2-click-passage",
          type: "visual",
          mode: "explain",
          frameLabel: "Passagem",
          eyebrow: "Capítulo 05 · Clique",
          canvasLayout: "visual-first",
          title: "O clique é uma passagem, não o resultado final.",
          body: [
            "Ao clicar, a pessoa deixa a mensagem e avança para um novo ambiente. Essa transição é importante, mas ainda não diz se a ação desejada aconteceu.",
          ],
          media: {
            src: "/images/modulo01/aula01/modulo01aula01imagem04.png",
            alt: "O clique como passagem entre uma mensagem e um destino.",
            kind: "explanatory-image",
            caption:
              "Clique significa avanço para um destino. O resultado ainda vem depois.",
            sourceLabel: "Visual Titanium",
            zoomable: true,
          },
        },
        {
          id: "a01v2-flow-image",
          type: "visual",
          mode: "explain",
          frameLabel: "Sistema",
          eyebrow: "Capítulo 05 · O caminho",
          canvasLayout: "visual-first",
          title: "Da oportunidade ao resultado existe uma sequência.",
          body: [
            "Tráfego pago ajuda a criar movimento entre uma pessoa e um destino. Depois que ela chega, outras partes do sistema precisam funcionar.",
            "O clique é apenas uma passagem. O destino precisa fazer sentido, a ação precisa ser possível e o resultado precisa ter valor para o negócio.",
          ],
          media: {
            src: "/images/modulo01/aula01/modulo01aula01imagem05.png",
            alt: "Fluxo básico do tráfego pago: pessoa, mensagem, clique, destino, ação e resultado.",
            kind: "diagram",
            caption:
              "O tráfego cria movimento. A aquisição depende do caminho completo.",
            sourceLabel: "Diagrama Titanium",
            zoomable: true,
          },
        },
        {
          id: "a01v2-flow-check",
          type: "decide",
          mode: "apply",
          frameLabel: "Ordene mentalmente",
          eyebrow: "Capítulo 05 · Agora é com você",
          title: "Qual sequência faz mais sentido?",
          scenario:
            "Uma pessoa é alcançada por uma mensagem paga e pode avançar até um resultado. Qual ordem representa melhor esse caminho básico?",
          options: [
            {
              id: "a",
              label:
                "Resultado → pessoa → mensagem → destino → clique → ação.",
              feedback:
                "O resultado não acontece antes da pessoa percorrer o caminho.",
            },
            {
              id: "b",
              label:
                "Pessoa → resultado → clique → mensagem → ação → destino.",
              feedback:
                "A sequência mistura etapas e coloca o resultado cedo demais.",
            },
            {
              id: "c",
              label:
                "Mensagem → resultado → pessoa → ação → destino → clique.",
              feedback:
                "O caminho não acompanha a progressão natural da pessoa.",
            },
            {
              id: "d",
              label:
                "Pessoa → mensagem → clique → destino → ação → resultado.",
              feedback:
                "Correto. Essa sequência representa o caminho básico que usaremos como fundação.",
              recommended: true,
            },
          ],
        },
      ],
    },
    {
      id: "a01v2-not-result",
      type: "learn",
      eyebrow: "Capítulo 06 · Limite",
      title: "Tráfego não é aquisição",
      frames: [
        {
          id: "a01v2-not-result-focus",
          type: "learn",
          mode: "focus",
          frameLabel: "Ponto-chave",
          eyebrow: "Capítulo 06 · Ponto-chave",
          title: "Trazer pessoas é diferente de transformar pessoas em resultado.",
          body: [
            "Tráfego termina no movimento até um destino. Aquisição é um processo maior, no qual esse movimento precisa atravessar outras etapas até produzir algo útil para o negócio.",
            "Essa diferença vai proteger você de um erro comum: comemorar atividade sem verificar se o sistema realmente está avançando.",
          ],
          quote:
            "Mais pessoas chegando pode ser bom. Mas o objetivo profissional é entender se esse movimento está ajudando o negócio.",
        },
        {
          id: "a01v2-not-result-check",
          type: "think",
          mode: "apply",
          frameLabel: "Interprete",
          eyebrow: "Capítulo 06 · Agora é com você",
          title: "O movimento aumentou. Podemos concluir que o resultado melhorou?",
          scenario:
            "Uma página recebeu o dobro de visitantes depois que uma empresa passou a investir em distribuição paga. Nenhuma outra informação foi apresentada. Qual conclusão é mais correta?",
          options: [
            {
              id: "a",
              label:
                "Sim. Dobrar os visitantes significa automaticamente dobrar o resultado do negócio.",
              feedback:
                "Mais visitantes não garantem que as etapas seguintes funcionaram.",
            },
            {
              id: "b",
              label:
                "Não. Sabemos que o movimento aumentou, mas ainda precisamos observar o que aconteceu depois da chegada.",
              feedback:
                "Correto. O cenário confirma tráfego maior, não resultado final maior.",
              recommended: true,
            },
            {
              id: "c",
              label:
                "Não. Investimento pago nunca pode gerar resultado de negócio.",
              feedback:
                "Tráfego pago pode contribuir para resultado; apenas não podemos concluir isso com o dado apresentado.",
            },
            {
              id: "d",
              label:
                "Sim. Qualquer aumento de tráfego é suficiente para considerar a aquisição bem-sucedida.",
              feedback:
                "Aquisição depende de mais etapas do que apenas movimento.",
            },
          ],
        },
      ],
    },
    {
      id: "a01v2-application",
      type: "decide",
      mode: "apply",
      eyebrow: "Capítulo 07 · Aplicação",
      title: "Use a base antes de buscar uma solução",
      scenario:
        "Uma empresa paga para levar pessoas até uma página. Muitas pessoas chegam, mas poucas realizam a ação que a empresa espera. Qual leitura deve vir primeiro?",
      allowRetry: true,
      options: [
        {
          id: "a",
          label:
            "O tráfego já cumpriu parte do papel ao gerar movimento; agora precisamos investigar o que acontece no destino e na ação esperada.",
          feedback:
            "Correto. Primeiro separamos o que funcionou do que ainda precisa ser compreendido.",
          recommended: true,
        },
        {
          id: "b",
          label:
            "O tráfego pago falhou completamente, porque qualquer pessoa que chega deveria realizar a ação desejada.",
          feedback:
            "Chegada e ação são etapas diferentes. O movimento pode existir mesmo quando outra parte falha.",
        },
        {
          id: "c",
          label:
            "A única solução possível é aumentar ainda mais a quantidade de pessoas enviadas para a página.",
          feedback:
            "Mais movimento pode ampliar um problema existente se o restante do caminho não estiver funcionando.",
        },
        {
          id: "d",
          label:
            "A quantidade de pessoas que chega não tem qualquer relação com o sistema de aquisição.",
          feedback:
            "O movimento é uma parte importante do sistema, apenas não é o sistema inteiro.",
        },
      ],
    },
    {
      id: "a01v2-mindmap",
      type: "mindmap",
      eyebrow: "Capítulo 08 · Mapa Mental",
      canvasLayout: "visual-first",
      title: "Reconstrua a base em uma única visão",
      media: {
        src: "/images/modulo01/aula01/modulo01aula01imagem06.png",
        alt: "Mapa mental da Aula 01 sobre tráfego pago.",
        kind: "mindmap",
        caption:
          "Tráfego, origens, estado da pessoa, caminho e diferença entre movimento e aquisição.",
        sourceLabel: "Mapa Mental Titanium",
        zoomable: true,
      },
    },
    {
      id: "a01v2-review",
      type: "review",
      eyebrow: "Capítulo 09 · Revisão",
      title: "O que precisa permanecer",
      frames: [
        {
          id: "a01v2-review-summary",
          type: "review",
          mode: "explain",
          frameLabel: "Síntese",
          eyebrow: "Capítulo 09 · Síntese",
          title: "Seis ideias formam a raiz desta aula.",
          reviewSections: [
            {
              title: "Base",
              items: [
                "Tráfego é movimento de pessoas até um destino.",
                "Tráfego pago usa investimento para comprar distribuição.",
                "Tráfego orgânico não depende da compra direta daquela distribuição.",
              ],
            },
            {
              title: "Caminho",
              items: [
                "Atenção e intenção descrevem estados diferentes da pessoa.",
                "Clique é uma passagem para um destino, não o resultado final.",
                "Tráfego é parte da aquisição, não a aquisição inteira.",
              ],
            },
          ],
        },
        {
          id: "a01v2-review-check",
          type: "review",
          mode: "apply",
          frameLabel: "Cheque",
          eyebrow: "Capítulo 09 · Antes da prova",
          title: "Qual frase resume melhor a Aula 01?",
          scenario:
            "Escolha a afirmação que preserva a ideia central construída ao longo da aula.",
          options: [
            {
              id: "a",
              label:
                "Tráfego pago é o processo completo que garante aquisição sempre que gera mais visitantes.",
              feedback:
                "Tráfego é uma parte do processo e não garante resultado por si só.",
            },
            {
              id: "b",
              label:
                "Tráfego pago é movimento comprado entre uma pessoa e um destino; o resultado depende do caminho que continua depois.",
              feedback:
                "Correto. Essa frase separa movimento de aquisição e preserva o papel do tráfego.",
              recommended: true,
            },
            {
              id: "c",
              label:
                "Tráfego pago significa apenas exibir uma mensagem, mesmo quando ninguém se move para um destino.",
              feedback:
                "Exposição pode anteceder o tráfego, mas o conceito desta aula envolve movimento até um destino.",
            },
            {
              id: "d",
              label:
                "Tráfego pago e tráfego orgânico são iguais porque a origem da distribuição não muda o conceito.",
              feedback:
                "Ambos geram movimento, mas a forma de conquistar distribuição é diferente.",
            },
          ],
        },
      ],
    },
    {
      id: "a01v2-exam",
      type: "exam",
      eyebrow: "Prova da Aula",
      title: "Prove que a base ficou clara",
      body: [
        "A prova cobra somente conceitos que foram formalmente ensinados nesta aula. A aprovação exige nota mínima 9,0.",
      ],
    },
  ],
  completionMode: "exam",
  exam: {
    id: "lesson-01-v2-exam",
    title: "Prova · Aula 01 — O que realmente é tráfego pago",
    passingScore: TITANIUM_MASTERY_SCORE,
    questions: [
      {
        id: "a01q01",
        kind: "objective",
        prompt: "Qual definição representa melhor tráfego no contexto desta aula?",
        options: [
          {
            id: "a",
            label:
              "Qualquer exposição de uma marca, mesmo quando ninguém se move para outro ambiente.",
            feedback:
              "Exposição pode gerar atenção, mas tráfego descreve movimento até um destino.",
          },
          {
            id: "b",
            label:
              "Movimento de pessoas entre uma origem e um destino.",
            feedback: "Correto.",
          },
          {
            id: "c",
            label:
              "O resultado financeiro produzido depois que uma venda acontece.",
            feedback:
              "Resultado financeiro é posterior e não define tráfego.",
          },
          {
            id: "d",
            label:
              "Somente pessoas que chegam a um site por uma busca.",
            feedback:
              "Tráfego pode vir de várias origens e chegar a vários tipos de destino.",
          },
        ],
        correctAnswer: "b",
        explanation:
          "Tráfego descreve movimento. No digital, pessoas chegam de uma origem a um destino.",
        reviewStageId: "a01v2-traffic",
      },
      {
        id: "a01q02",
        kind: "objective",
        prompt: "O que diferencia tráfego pago de tráfego orgânico nesta base?",
        options: [
          {
            id: "a",
            label:
              "No tráfego pago existe compra direta de distribuição para alcançar pessoas.",
            feedback: "Correto.",
          },
          {
            id: "b",
            label:
              "Tráfego orgânico nunca leva pessoas a um site ou página.",
            feedback:
              "Tráfego orgânico também pode levar pessoas a destinos digitais.",
          },
          {
            id: "c",
            label:
              "Tráfego pago só existe quando a pessoa já conhece a empresa.",
            feedback:
              "A pessoa pode conhecer ou não a empresa antes da distribuição paga.",
          },
          {
            id: "d",
            label:
              "Tráfego orgânico exige pagamento por cada pessoa que chega.",
            feedback:
              "Isso contradiz a diferença de origem explicada na aula.",
          },
        ],
        correctAnswer: "a",
        explanation:
          "A diferença está em como a distribuição é conquistada.",
        reviewStageId: "a01v2-paid-organic",
      },
      {
        id: "a01q03",
        kind: "interpretation",
        prompt:
          "Qual cenário demonstra intenção mais clara por parte de uma pessoa?",
        options: [
          {
            id: "a",
            label:
              "Ela vê casualmente uma mensagem enquanto navega sem procurar solução.",
            feedback:
              "Existe oportunidade de atenção, mas pouca intenção explícita.",
          },
          {
            id: "b",
            label:
              "Ela passa por uma fachada sem perceber qual serviço é oferecido.",
            feedback:
              "O cenário não mostra procura ou necessidade expressa.",
          },
          {
            id: "c",
            label:
              "Ela conhece o nome da empresa, mas não tem necessidade no momento.",
            feedback:
              "Conhecimento de marca não é o mesmo que intenção ativa.",
          },
          {
            id: "d",
            label:
              "Ela procura ativamente um serviço porque quer resolver um problema específico.",
            feedback: "Correto.",
          },
        ],
        correctAnswer: "d",
        explanation:
          "Intenção aparece quando existe sinal de necessidade ou procura ativa.",
        reviewStageId: "a01v2-attention-intent",
      },
      {
        id: "a01q04",
        kind: "objective",
        prompt: "Qual sequência representa melhor o caminho básico da aula?",
        options: [
          {
            id: "a",
            label:
              "Resultado → pessoa → mensagem → clique → destino → ação.",
            feedback:
              "O resultado foi colocado antes do caminho que pode produzi-lo.",
          },
          {
            id: "b",
            label:
              "Pessoa → ação → resultado → mensagem → destino → clique.",
            feedback:
              "A ordem mistura etapas anteriores e posteriores.",
          },
          {
            id: "c",
            label:
              "Pessoa → mensagem → clique → destino → ação → resultado.",
            feedback: "Correto.",
          },
          {
            id: "d",
            label:
              "Destino → resultado → pessoa → clique → mensagem → ação.",
            feedback:
              "A sequência não acompanha a progressão natural da pessoa.",
          },
        ],
        correctAnswer: "c",
        explanation:
          "A pessoa é alcançada, avança para um destino, pode agir e então produzir resultado.",
        reviewStageId: "a01v2-flow",
      },
      {
        id: "a01q05",
        kind: "interpretation",
        prompt:
          "Uma empresa dobrou a quantidade de visitantes de uma página. O que podemos afirmar apenas com essa informação?",
        options: [
          {
            id: "a",
            label:
              "O tráfego aumentou, mas ainda não sabemos se o resultado do negócio aumentou.",
            feedback: "Correto.",
          },
          {
            id: "b",
            label:
              "A aquisição dobrou automaticamente na mesma proporção.",
            feedback:
              "Movimento maior não garante que as etapas seguintes produziram resultado.",
          },
          {
            id: "c",
            label:
              "A página necessariamente passou a funcionar melhor.",
            feedback:
              "Não há informação sobre o que aconteceu depois da chegada.",
          },
          {
            id: "d",
            label:
              "O tráfego piorou, porque mais visitantes sempre significam menor qualidade.",
            feedback:
              "A quantidade isolada não permite essa conclusão.",
          },
        ],
        correctAnswer: "a",
        explanation:
          "O dado confirma mais movimento, não aquisição ou resultado final.",
        reviewStageId: "a01v2-not-result",
      },
      {
        id: "a01q06",
        kind: "objective",
        prompt: "Qual frase descreve melhor o papel do clique?",
        options: [
          {
            id: "a",
            label:
              "É o resultado final que encerra o sistema de aquisição.",
            feedback:
              "Clique é uma passagem; o sistema continua depois dele.",
          },
          {
            id: "b",
            label:
              "É uma passagem que pode levar a pessoa até um destino.",
            feedback: "Correto.",
          },
          {
            id: "c",
            label:
              "É sempre equivalente a uma compra concluída.",
            feedback:
              "Clique e compra são ações diferentes.",
          },
          {
            id: "d",
            label:
              "Só existe quando a origem do tráfego é orgânica.",
            feedback:
              "Cliques podem acontecer em diferentes origens de tráfego.",
          },
        ],
        correctAnswer: "b",
        explanation:
          "O clique move a pessoa para a próxima parte do caminho.",
        reviewStageId: "a01v2-flow",
      },
      {
        id: "a01q07",
        kind: "objective",
        prompt: "O que significa destino dentro do caminho estudado?",
        options: [
          {
            id: "a",
            label:
              "O custo que a empresa aceita pagar para alcançar uma pessoa.",
            feedback:
              "Custo não é a definição de destino.",
          },
          {
            id: "b",
            label:
              "A origem de qualquer pessoa antes de perceber uma mensagem.",
            feedback:
              "Origem e destino são pontos diferentes do movimento.",
          },
          {
            id: "c",
            label:
              "O ambiente para o qual a pessoa é conduzida depois de uma interação.",
            feedback: "Correto.",
          },
          {
            id: "d",
            label:
              "O resultado financeiro que sempre acontece depois de um clique.",
            feedback:
              "Destino é um ambiente intermediário; resultado não é garantido.",
          },
        ],
        correctAnswer: "c",
        explanation:
          "Destino pode ser página, site, conversa, aplicativo ou outro ambiente.",
        reviewStageId: "a01v2-flow",
      },
      {
        id: "a01q08",
        kind: "decision",
        prompt:
          "Muitas pessoas chegam a uma página, mas poucas realizam a ação esperada. Qual leitura vem primeiro?",
        options: [
          {
            id: "a",
            label:
              "A única resposta possível é aumentar imediatamente o número de pessoas enviadas.",
            feedback:
              "Mais movimento pode ampliar um problema existente.",
          },
          {
            id: "b",
            label:
              "O tráfego não possui qualquer relação com o sistema porque o problema está depois da chegada.",
            feedback:
              "Tráfego continua sendo uma parte do sistema, mesmo quando outra etapa precisa de atenção.",
          },
          {
            id: "c",
            label:
              "Toda pessoa que chega deveria agir, então o tráfego pago falhou por definição.",
            feedback:
              "Chegada e ação são etapas diferentes.",
          },
          {
            id: "d",
            label:
              "O movimento aconteceu; agora precisamos investigar o que ocorre no destino e na ação esperada.",
            feedback: "Correto.",
          },
        ],
        correctAnswer: "d",
        explanation:
          "A análise separa o que já aconteceu do que ainda precisa funcionar.",
        reviewStageId: "a01v2-application",
      },
      {
        id: "a01q09",
        kind: "objective",
        prompt: "Qual afirmação diferencia melhor tráfego de aquisição?",
        options: [
          {
            id: "a",
            label:
              "Tráfego e aquisição são nomes diferentes para exatamente a mesma etapa.",
            feedback:
              "Aquisição é um processo maior do que o movimento até um destino.",
          },
          {
            id: "b",
            label:
              "Tráfego cria movimento; aquisição envolve o caminho até um resultado de negócio.",
            feedback: "Correto.",
          },
          {
            id: "c",
            label:
              "Aquisição acontece antes de qualquer pessoa chegar a um destino.",
            feedback:
              "O processo depende de etapas que incluem a chegada e o que acontece depois.",
          },
          {
            id: "d",
            label:
              "Tráfego só existe quando a aquisição já foi concluída.",
            feedback:
              "Tráfego é anterior ao resultado final.",
          },
        ],
        correctAnswer: "b",
        explanation:
          "Tráfego é uma parte do sistema de aquisição, não o sistema inteiro.",
        reviewStageId: "a01v2-not-result",
      },
      {
        id: "a01q10",
        kind: "interpretation",
        prompt:
          "Uma pessoa vê uma mensagem paga, clica e chega a uma página. O que já podemos afirmar com segurança?",
        options: [
          {
            id: "a",
            label:
              "Houve tráfego pago até um destino, mas ainda não sabemos se o resultado esperado aconteceu.",
            feedback: "Correto.",
          },
          {
            id: "b",
            label:
              "A aquisição foi concluída porque qualquer clique representa resultado de negócio.",
            feedback:
              "Clique representa passagem, não resultado final.",
          },
          {
            id: "c",
            label:
              "O tráfego foi orgânico porque a pessoa escolheu clicar por vontade própria.",
            feedback:
              "A distribuição foi paga, portanto a origem do movimento é paga.",
          },
          {
            id: "d",
            label:
              "A página necessariamente converteu porque a pessoa chegou ao destino.",
            feedback:
              "Chegada ao destino não comprova que a ação desejada aconteceu.",
          },
        ],
        correctAnswer: "a",
        explanation:
          "Já sabemos que houve movimento comprado. O que aconteceu depois precisa ser observado separadamente.",
        reviewStageId: "a01v2-flow",
      },
    ],
  },
  materials: [
    {
      id: "a01-guide",
      type: "titanium-lesson",
      title: "Guia + Notas — Aula 01",
      purpose:
        "Material único para estudar e revisar tráfego, origem, atenção, intenção, clique, destino e aquisição.",
      status: "available",
      asset: "/materials/aula-01/Titanium_Guia_e_Notas_Aula_01.pdf",
    },
    {
      id: "a01-mindmap",
      type: "mindmap",
      title: "Mapa Mental — Aula 01",
      purpose:
        "Imagem para reconstruir a diferença entre movimento, origem, caminho e resultado.",
      status: "available",
      reviewStageId: "a01v2-mindmap",
      asset: "/images/modulo01/aula01/modulo01aula01imagem06.png",
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
