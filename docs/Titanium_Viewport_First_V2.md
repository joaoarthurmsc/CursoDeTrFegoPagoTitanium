# Titanium Viewport First V2

## Objetivo

Em notebook e desktop, cada unidade curta de ensino ou avaliação deve caber na área útil do Lesson Player sem exigir rolagem para compreender a tela ou alcançar a ação principal.

Scroll continua sendo fallback para mobile, telas excepcionalmente baixas e conteúdos que realmente não podem ser reduzidos sem perda pedagógica.

## 1. Imagens no Teaching Canvas

As artes finais não são recortadas, reeditadas ou distorcidas para caber no player.

O player é responsável por adaptar a apresentação:

- `object-fit: contain`;
- preservação da proporção original;
- altura limitada pela área útil do stage;
- centralização dentro do canvas;
- zoom continua disponível por clique;
- título e conteúdo da imagem permanecem integralmente visíveis.

Uma imagem grande nunca pode criar rolagem apenas porque sua largura ocupou todo o canvas.

## 2. Perguntas ao longo da aula

Uma interação A–D deve caber na área útil com:

- kicker;
- título;
- cenário/enunciado;
- quatro alternativas;
- botão de confirmação.

O ritmo vertical deve ser mais compacto do que uma tela de conteúdo editorial.

## 3. Feedback da interação

Depois de confirmar uma alternativa, o feedback não é mais um bloco discreto abaixo das opções.

Ele aparece como um card modal central contendo:

1. status da escolha;
2. letra e texto da alternativa selecionada;
3. raciocínio/feedback correspondente;
4. ação de fechar ou tentar novamente.

O objetivo é transformar o feedback em um momento pedagógico deliberado.

## 4. Provas

Cada questão de prova usa a área útil inteira como uma tela de avaliação.

A composição é:

`progresso -> enunciado + alternativas -> navegação`

A introdução genérica da etapa da prova não é repetida acima de cada questão.

No desktop, perguntas do padrão Titanium devem caber sem rolagem em alturas usuais de notebook. O sistema mantém fallback de scroll apenas como proteção para condições fora do padrão.

## 5. Densidade editorial

Como guarda de autoria:

- enunciado/cenário: preferencialmente até 240 caracteres;
- alternativa: preferencialmente até 180 caracteres;
- quatro alternativas por pergunta;
- evitar explicações redundantes dentro da alternativa.

Se a pergunta precisa de mais espaço, revisar primeiro a escrita ou dividir a evidência em um visual/tabela apropriado.

## 6. Regra de implementação

Nunca resolver overflow de uma arte editando ou cortando o arquivo final.

Resolver no player através de geometria responsiva.
