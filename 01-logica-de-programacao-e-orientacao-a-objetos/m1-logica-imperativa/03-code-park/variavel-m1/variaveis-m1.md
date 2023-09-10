# Resolução do problema

**Nome** ⇒ Caracteres (String);

Identifico esse questionamento, “A proposta das variáveis”, como identificar o tipo de dado que será gravado na variável, pois o computador precisa de dados para a realização do processamento. Então vamos aos tipos:

**CPF** ⇒ Caracteres (String);

**RG** ⇒ Caracteres (String);

**Altura ⇒** Número Real (Float);

**Endereço ⇒** Caracteres (String);

**Obs**: Utilizarei o **Portugol** como linguagem para exemplificação do Algoritmo. Logo abaixo, é possível acessar algumas referências utilizadas por mim com um pouco da sintaxe desse **pseudocódigo**:

- https://docente.ifrn.edu.br/joaoqueiroz/disciplinas/programacao-estruturada-e-orientada-a-objetos/tabela-portugol-vs-java
- http://www.deinf.ufma.br/~portela/portugol
- http://www.decom.ufop.br/romildo/cea030.2011-1/slides/03-portugol.pdf

<br>

Vamos a tipificação das variáveis e suas declarações:

```bash
caracteres: nome;
caracteres: cpf;
caracteres: rg;
real: altura;
caracteres: endereco;
```

<br>

Após a declaração é necessário que seja atribuído um valor para essas variáveis, para isso, no Portugol, utiliza-se o  `<-` para essa atribuição.

O código para atribuição será:

```bash
nome <- "José Almeida da Silva";
cpf <- "12345678900";
rg <- "9517530";
altura <- 1.78;
endereco <- "Rua A, 380 – Centro – Recife/PE";
```

<br>

O código completo com a declaração e atribuição fica assim:

```bash
Algortimo "cadastro"

Inicio

Var
// Seção de declarações das variáveis
caractere: nome;
caractere: cpf;
caractere: rg;
real: altura;
caractere: endereco;

nome <- "José Almeida da Silva";
cpf <- "12345678900";
rg <- "9517530";
altura <- 1.78;
endereco <- "Rua A, 380 – Centro – Recife/PE";

Fimalgortimo
```

<br>

## Para Curiosidade

Na aula presencial do dia 17/07/2023, nos foi apresentado um pouco da sintaxe do Javascript, e é interessante notar que essa tipificação não é feita por nós, programadores, a linguagem já tipifica as variáveis “por debaixo dos panos”. O código para declaração e atribuição ficaria assim:

```jsx
let nome = 'José Almeida da Silva';
let cpf = '12345678900';
let rg = '9517530';
let altura = 1.78;
let endereco = 'Rua A, 380 – Centro – Recife/PE';
```

<br>

Para conseguir visualizar o tipo do dado que foi atribuído na variável, utiliza-se o `typeof nomeVariavel`.

```jsx
console.log(typeof nome);
console.log(typeof cpf);
console.log(typeof rg);
console.log(typeof altura);
console.log(typeof endereco);

// Saída do console no Programiz
node /tmp/CZxoDslT8t.js
string
string
string
number
string
```
