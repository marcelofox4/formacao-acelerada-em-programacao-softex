# Resolução do problema

**1 - Qual é o pacote que Luiza precisa utilizar?**

A biblioteca que Luiza terá que utilizar é Lodash, pois essa biblioteca, oferece várias funções que permitem a manipulção de arrays, entre outras estruturas. A lista de funcionalidade está dividida em 13 categorias, são elas:

- Array;
- Collection;
- Date;
- Function;
- Lang;
- Math;
- Number;
- Object;
- Seq;
- String;
- Util;
- Properties;
- Methods.

<br>

No casso de Luiza só será utilizada a categoria de manipulação de Array.

<br>

**2 - Se for preciso instalar esse pacote, qual é o comando que deve ser utilizado?**

Segundo a [documentação do Lodash](https://lodash.com/), os comandos a serem utilizados são: `npm i -g npm` e `npm i --save lodash`. Segue um print dos comandos sendo executados no terminal:

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/3a6d463f-cf47-4e07-9103-39b1db7c87a2/06dff75a-926b-40de-842a-c8a3652d61b2/Untitled.png)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/3a6d463f-cf47-4e07-9103-39b1db7c87a2/fc857342-0753-4a26-8e3f-609d841e952b/Untitled.png)

<br>

**3 - Qual é o comando para importar esse pacote?**

Dentro do projeto no arquivo que será utilizado, será executado o seguinte comando:

```jsx
// O (_) é uma convenção para utilizar a biblioteca.
const _ = require('lodash/array');
```

<br>

**4 - Quais as funções utilizadas neste pacote?**

Para fazer as manipulações que foram propostas, será utilizadas as seguintes funções:

- `_.chunk(array, [size=1])`, onde nos parâmetros: `array` - será o array que será dividido; `[size=1]` - será a quantidade de blocos que o array será divido.
- `_.concat(array, [values])`, onde nos parâmetros: `array` e values]` - serão os valores que serão concatenados.

<br>

**5 - Quais serão os arrays resultantes dessa operação?**

A saída no console com os arrays resultantes:

```jsx
/*
Saída no console:
-------------------------------------------------------------
arrayUm que será dividido: [ 23, 9, 4, 45 ]
Primeira parte: [ 23, 9 ]
Segunda parte: [ 4, 45 ]
-------------------------------------------------------------
-------------------------------------------------------------
As partes do arrayUm divido serão concatenados ao arrayDois: [ 7, 12 ]
Primeira parte concatenada com arrayDois: [ 7, 12, 23, 9 ]
Segunda parte concatenada com arrayDois: [ 7, 12, 4, 45 ]
-------------------------------------------------------------
*/
```

<br>

O código completo da manipulação dos arrays com a biblioteca Lodash:

[javascript-m05-utilizando-pacotes]()

## Referências:

Instalação e utilização da biblioteca:

[Lodash](https://lodash.com/)

Utilização dos métodos que foram implementados no trabalho:

[Lodash Documentation](https://lodash.com/docs/4.17.15)
