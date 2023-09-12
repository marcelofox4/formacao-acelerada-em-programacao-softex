# Resolução do problema

Antes de criar uma conexão com o banco de dados, é preciso prepará-lo, então no MySQL Workbench criarei um database company para acessá-lo via Sequelize em JavaScript. Então executarei o script SQL abaixo:

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m4-desenvolvimento-web-loops-e-bibliotecas/14-trabalho/conexao-com-bd-m4/img/01-script-sql-criacao-do-bd.png'>

<br>

Agora criarei um usuário manager, temporário, com todos os privilégios para acessar o database company, segue o script SQL:

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m4-desenvolvimento-web-loops-e-bibliotecas/14-trabalho/conexao-com-bd-m4/img/02-script-sql-criacao-usuario.png'>

<br>

Com essas configurações realizadas no banco, agora é a hora de acessa-los utilizando a biblioteca Sequelize.

<br>

Então, antes de tudo, é necessário criar um projeto em node com o comando `npm init -y`.

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m4-desenvolvimento-web-loops-e-bibliotecas/14-trabalho/conexao-com-bd-m4/img/03-criacao-projeto-node.png'>

<br>

Após a criação do projeto instalarei o drive do banco de dados que estou utilizando, que no meu caso é o MySQL, para isso, irei aplicar o comando: `npm i sequelize mysql2`.

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m4-desenvolvimento-web-loops-e-bibliotecas/14-trabalho/conexao-com-bd-m4/img/04-instalacao-do-sequelize.png'>

<br>

Criarei um arquivo `db.js` para poder criar a conexão com o database company, segue o código:

```jsx
const Sequelize = require('sequelize');

const sequelize = new Sequelize('company', 'manager', 'manager', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
```

<br>

Para teste de conexão criarei o arquivo `index.js`.

```jsx
const database = require('./db');

(async () => {
    try {
        await database.authenticate();
        console.log('Conexão com o banco de dados estabelecida com sucesso!');
    } catch (error) {
        console.error('Erro ao conectar ao banco de dados:', error);
    } finally {
        database.close();
    }
})();
```

<br>

Executarei o arquivo `index.js`  com o comando `node index.js` e a seguinte saída é apresentada:

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m4-desenvolvimento-web-loops-e-bibliotecas/14-trabalho/conexao-com-bd-m4/img/05-execucao-do-programa-de-conexao.png'>

<br>

Executarei o mesmo arquivo, mas com um porém, no arquivo `db.js`, tirarei do argumento ‘manager’, da senha, a letra (**r**) do final da palavra, para que a conexão não seja estabelecida corretamente, a saída no console, em parte, será:

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m4-desenvolvimento-web-loops-e-bibliotecas/14-trabalho/conexao-com-bd-m4/img/06-execucao-do-programa-de-conexao.png'>

<br>

A minha estrutura do projeto ficou da seguinte forma:

<img src='https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m4-desenvolvimento-web-loops-e-bibliotecas/14-trabalho/conexao-com-bd-m4/img/07-estrutura-do-projeto.png'>

<br>

O projeto completo se encontra no link abaixo:

[javascript-m04-sequelize](https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/tree/main/02-javascript/m4-desenvolvimento-web-loops-e-bibliotecas/14-trabalho/conexao-com-bd-m4/javascript-m04-sequelize)
