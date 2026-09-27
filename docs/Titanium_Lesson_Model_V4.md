# Titanium Lesson Model V4

## 1. Princípio central

A pedagogia determina a aula. O player apenas apresenta.

Uma tela deve carregar uma unidade completa de aprendizagem. Não criamos uma página apenas para destacar uma frase e não comprimimos tipografia para evitar scroll.

## 2. Perguntas

Não usamos perguntas abertas na jornada de aprendizagem.

Toda pergunta deve possuir exatamente quatro alternativas:

- A
- B
- C
- D

Cada alternativa recebe feedback específico.

Perguntas fechadas podem testar:

- conhecimento;
- interpretação;
- cálculo;
- diagnóstico;
- priorização;
- decisão;
- estratégia;
- reconhecimento de erro.

A conclusão normal de uma aula não depende de IA nem de correção manual.

## 3. Narrativa de uma aula

A sequência de referência é:

1. Por que isso importa?
2. O que você precisa entender?
3. Como isso funciona?
4. Veja um exemplo ou imagem.
5. Escolha entre A-D.
6. Aplique ou diagnostique.
7. Entenda os erros comuns.
8. Faça a síntese.
9. Revise o mapa mental.
10. Prove domínio quando houver avaliação.

## 4. Modos de ensino

### APRENDA

Explicação estruturada, exemplo, imagem, contexto e vocabulário.

### PONTO-CHAVE

Momento de atenção reforçada para uma tese estrutural.

### AGORA É COM VOCÊ

Pergunta A-D, diagnóstico, decisão, checklist ou execução guiada.

## 5. Materiais oficiais

Toda aula finalizada possui dois materiais obrigatórios.

### Guia + Notas da Aula

Um único PDF reúne:

- conteúdo de referência;
- exemplos;
- conceitos;
- erros comuns;
- notas de revisão;
- rotina de estudo.

Não existe PDF separado de Titanium Notes.

### Mapa Mental

Arquivo de imagem real:

- PNG;
- JPG;
- WebP;
- ou SVG.

O mapa aparece dentro da aula e também na Biblioteca.

## 6. Imagens

Imagens não são decoração. Elas reduzem abstração.

Usamos:

- screenshots reais da interface;
- imagens explicativas;
- diagramas;
- mapas mentais;
- evidências de cases;
- tabelas e visuais operacionais.

### Google Ads

Quando ensinamos uma operação da plataforma:

- usamos captura autêntica e atual;
- permitimos zoom;
- podemos destacar regiões;
- podemos usar hotspots;
- podemos criar sequência “Faça comigo”.

Nunca apresentamos uma interface gerada por IA como se fosse uma captura real do Google Ads.

## 7. Glossário contextual

Nenhuma sigla ou termo técnico relevante pode aparecer para o aluno sem ter sido ensinado ou sem estar acessível pelo Glossário Titanium.

O glossário é centralizado em `src/data/glossary.ts`. O conteúdo da aula não deve repetir definições manualmente apenas para criar tooltips.

### Comportamento

- termos reconhecidos recebem sublinhado pontilhado discreto;
- mouse exibe a explicação;
- clique/toque abre a explicação;
- foco por teclado abre a explicação;
- `Esc` fecha e devolve o foco;
- o card pode mostrar nome original, tradução, explicação, fórmula, exemplo e alerta;
- o glossário deve funcionar em explicações, títulos, tabelas, cenários, perguntas e feedbacks quando não houver conflito com outro controle interativo.

### Regra editorial

Antes de publicar uma aula, revise todas as siglas e termos especializados. Se um termo ainda não estiver no glossário central, cadastre-o antes de liberar a aula.

Não transformar palavras comuns em links em excesso. O glossário existe para remover fricção cognitiva, não para poluir a leitura.

## 8. Domínio

Quando houver prova:

- nota mínima: 9,0;
- respostas A-D;
- histórico de tentativas;
- Mapa de Erros;
- retorno ao conceito relacionado;
- nova tentativa.

Aula não é concluída por consumo.

## 9. Histórico de desempenho

O perfil do aluno preserva:

- aulas iniciadas e concluídas;
- tempo ativo;
- respostas A-D;
- feedback das interações;
- tentativas de prova;
- notas;
- diagnóstico inicial;
- mapa de erros.

Não existe fluxo de correção de respostas abertas.

## 10. Pipeline de criação

pedagogical objective  
→ professor script  
→ examples/cases  
→ authentic screenshots / explanatory images  
→ A-D interactions  
→ mind map  
→ assessment  
→ Guide + Notes PDF  
→ interface implementation

A Aula 00 V3 com Glossário Titanium é a referência atual.
