# Resolução do problema

## Primeiro Site

Para o primeiro site, escolhi o MDN web docs, que é um site que estou utilizando com muita frequência no curso.

<br>

Para o acesso do website, basta clicar no link abaixo:

[JavaScript | MDN](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)

<br>

Uma funcionalidade que é muito utilizada, é a área de pesquisa, onde é possível perceber na imagem abaixo, quando se digita algo nesta área, é exibido uma auto-complete para ajudar na pesquisa.

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m1-manipulacao-de-dados-em-javascript/01-trabalho/comportamento-do-javascript-m1/img/print-site-mdn-web-docs-01.png'>

<br>

Na ferramenta **DevTools**, acessando **Settings** existe uma opção no **Debugger** para desabilitar o JavaScript da página.

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m1-manipulacao-de-dados-em-javascript/01-trabalho/comportamento-do-javascript-m1/img/print-devtools-debugger.png'>

<br>

Ao fazer isto, é possível perceber que ao desabilitar o JavaScript, a funcionalidade de auto-complete não existe mais, como podemos visualizar na imagem abaixo.

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m1-manipulacao-de-dados-em-javascript/01-trabalho/comportamento-do-javascript-m1/img/print-site-mdn-web-docs-02.png'>

<br>

Outra coisa interessante de perceber, é que ao desabilitar o JavaScript da página não vemos mudanças significativas no layout da página.

<br>

Dentro do **DevTools** na área de **Elements**, é possível perceber que em sua estrutura html, a área de busca é um formulário, que reponde pela tag `<form> … código … </form>`.

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m1-manipulacao-de-dados-em-javascript/01-trabalho/comportamento-do-javascript-m1/img/print-devtools-elements.png'>

<br>

Ainda no **DevTools** na aba de **Console**, podemos interagir com o JavaScript da página, como teste, utilizarei o seguinte código:

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m1-manipulacao-de-dados-em-javascript/01-trabalho/comportamento-do-javascript-m1/img/print-devtools-console.png'>

<br>

E após isso, podemos notar que a área de pesquisa na página sumiu, pois utilizei o`document.querySelector(’#top-nav-search-form’)` para capturar o elemento desejado, que no meu caso, foi toda a tag `form` que responde pelo `id="top-nav-search-form"`, e após isso, defino o atributo `style.visibility` para `‘hidden’`, ou seja, escondido, possibilitando o efeito de “sumir”.

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m1-manipulacao-de-dados-em-javascript/01-trabalho/comportamento-do-javascript-m1/img/print-site-mdn-web-docs-03.png'>

<br>

## Segundo Site

No segundo site, escolho um site muito visitado por mim, para pesquisas e entretenimento, o famoso **YouTube**.

<br>

Irei fazer como fiz logo acima, irei na ferramenta **DevTools**, acessando **Settings** e desabilitarei o JavaScript da página para vermos como ela se comporta.

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m1-manipulacao-de-dados-em-javascript/01-trabalho/comportamento-do-javascript-m1/img/print-site-youtube.png'>

<br>

Diferente do primeiro site, que quando desabilitamos o JavaScript, ele meio que não mudou muito a navegação, no YouTube, não conseguimos navegar e nem interagir com o site, ou seja, nessa página o JavaScript é ESSENCIAL, pois é ele que possibilita toda a interação, e inclusive, toda a exibição do conteúdo da página.
