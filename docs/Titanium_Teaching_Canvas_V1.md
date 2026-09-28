# Titanium Teaching Canvas V1

## Objetivo

O Teaching Canvas é a gramática visual das telas de ensino do Titanium.

A interface não trata imagem como anexo. Texto, tese, imagem, ponto-chave e estrutura editorial dividem a responsabilidade de ensinar.

## Escopo

Aplica-se às telas de ensino e revisão.

Não altera:
- provas;
- diagnóstico;
- questões A-D;
- resultados;
- Sala de Controle;
- telas de desempenho.

## Layouts oficiais

### split

Usado quando texto e visual precisam ser compreendidos juntos.

Estrutura:
- kicker pedagógico;
- título e explicação à esquerda;
- visual principal à direita;
- ponto-chave próximo do texto;
- extras editoriais abaixo.

### visual-first

Usado quando a imagem ensina melhor do que o texto.

Estrutura:
- kicker;
- título;
- explicação curta;
- imagem em largura ampla;
- síntese e complementos depois.

### compare

Usado para contrastes conceituais.

A imagem comparativa recebe protagonismo e o texto apenas prepara a leitura.

### standard

Mantém o layout editorial de leitura para frames que não precisam de visual dominante.

## Regra de densidade

Não colocar imagem apenas para decorar.

Uma imagem deve:
- reduzir abstração;
- mostrar relações;
- comparar estados;
- representar um processo;
- sintetizar uma arquitetura;
- mostrar interface real quando a operação depende da interface.

## Largura

O player pode ocupar até 88rem nas telas de ensino.

Telas de aplicação e avaliação preservam largura de leitura menor para manter foco.

## Assets

Padrão físico oficial:

`/public/images/moduloXX/aulaXX/moduloXXaulaXXimagemXX.png`

Regras:
- minúsculas;
- dois dígitos;
- sem espaço;
- sem acento;
- sem hífen;
- PNG para artes finais;
- a ordem do número segue a ordem pedagógica na aula.

O tipo semântico da imagem pertence aos dados da aula (`kind`), não ao nome do arquivo.

## Aula 00

1. `modulo00aula00imagem01.png` — Da base à estratégia
2. `modulo00aula00imagem02.png` — Método E5
3. `modulo00aula00imagem03.png` — Como uma Aula Titanium funciona
4. `modulo00aula00imagem04.png` — Escala N0–N6
5. `modulo00aula00imagem05.png` — Mind Map da Aula 00

## Aula 01

1. `modulo01aula01imagem01.png` — Tráfego = movimento
2. `modulo01aula01imagem02.png` — Tráfego pago x orgânico
3. `modulo01aula01imagem03.png` — Atenção x intenção
4. `modulo01aula01imagem04.png` — O clique é uma passagem
5. `modulo01aula01imagem05.png` — Do primeiro contato ao resultado
6. `modulo01aula01imagem06.png` — Mind Map da Aula 01

## Direção de arte

- fundo `#090B0D`;
- grafite `#15191D`;
- carvão `#20262B`;
- linhas `#2B3136`;
- dourado `#C8A467`;
- paper `#F5F3EF`;
- prata `#C8C5BE`;
- muted `#85898B`;
- Manrope em títulos;
- DM Sans em corpo;
- monospace em labels técnicos.

O objetivo é manter aproximadamente 70% engenharia/editorial e 30% luxo visual.

## Regra de interface real

Quando o aluno precisa aprender uma operação do Google Ads, usar captura real e atual da interface com fonte e data.

Artes geradas podem explicar conceitos, mas nunca podem fingir ser uma captura real da plataforma.
