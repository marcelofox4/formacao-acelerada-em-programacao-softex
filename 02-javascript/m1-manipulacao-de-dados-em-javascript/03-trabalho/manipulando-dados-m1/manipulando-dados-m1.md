# Resolução do problema

Na primeira parte da atividade é solicitado que seja criada variáveis dos seguintes tipos:

- Boolean;
- BigInt;
- String;
- Symbol.

<br>

Como em JavaScript a tipagem é dinâmica, os tipos são atribuídos as variáveis de acordo com a atribuição de valores, mas para fins do exercício, utilizarei como nomes nas variáveis os respectivos tipos que foram solicitados no enunciado da atividade, assim a declaração das variáveis ficarão da seguinte forma:

```jsx
let varBoolean;
let varBigInt;
let varString;
let varSymbol;
```

<br>

Para que o conteúdo das variáveis apareçam como `undefined`, basta exibir a variável sem ter atribuído nenhum valor, que no nosso caso, já foi feito, então apenas exibiremos o conteúdo delas. Para isso criarei a função `imprimeConteudo()`.

```jsx
function imprimeConteudo() {
    console.log('Conteúdo da variável varBoolean:', varBoolean);
    console.log('Conteúdo da variável varBigInt:', varBigInt);
    console.log('Conteúdo da variável varString:', varString);
    console.log('Conteúdo da variável varSymbol:', varSymbol);
    console.log('---------------------------------------------')
}

imprimeConteudo();

/*
Saída do console:
Conteúdo da variável varBoolean: undefined
Conteúdo da variável varBigInt: undefined
Conteúdo da variável varString: undefined
Conteúdo da variável varSymbol: undefined
---------------------------------------------
*/
```

<br>

Para deixar as variáveis com valores nulos, basta atribuir `null` a cada uma delas.

```jsx
varBoolean = null;
varBigInt = null;
varString = null;
varSymbol = null;

imprimeConteudo();

/*
Saída do console:
Conteúdo da variável varBoolean: null
Conteúdo da variável varBigInt: null
Conteúdo da variável varString: null
Conteúdo da variável varSymbol: null
---------------------------------------------
*/
```

<br>

Por último, agora atribuirei os valores de acordo com o tipo solicitado na atividade.

```jsx
varBoolean = true;
// Interessante resaltar que para a variável varBigInt é possível fazer a
// atribuição de valor de três formas diferentes, são elas:
// - Pela função BigInt(value):
//   varBigInt = BigInt(9007199254740991);
// - Acrescentando como valor Number.MAX_SAFE_INTEGER;
//   varBigInt = Number.MAX_SAFE_INTEGER;
// - Acrescentando um n ao final do valor inteiro;
varBigInt = 9007199254740991n;
varString = 'Isso é uma String, ou seja, uma cadeia de caracteres.';
varSymbol = Symbol('valorUnico');

imprimeConteudo();

/*
Saída do console:
Conteúdo da variável varBoolean: true
Conteúdo da variável varBigInt: 9007199254740991n
Conteúdo da variável varString: Isso é uma String, ou seja, uma cadeia de caracteres.
Conteúdo da variável varSymbol: Symbol(valorUnico)
---------------------------------------------
*/
```

<br>

Como teste final, para visualizar se os valores inseridos nas variáveis são do tipo correto, utilizarei o operador `typeof` para retornar os tipos de cada variável.

```jsx
console.log(typeof varBoolean);
console.log(typeof varBigInt);
console.log(typeof varString);
console.log(typeof varSymbol);

/*
Saída do console:
boolean
bigint
string
symbol
*/
```

<br>

O código completo se encontra no link abaixo:

[manipulando-dados.js](https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m1-manipulacao-de-dados-em-javascript/03-trabalho/manipulando-dados-m1/javascript-m01-manipulando-dados/manipulando-dados.js)
