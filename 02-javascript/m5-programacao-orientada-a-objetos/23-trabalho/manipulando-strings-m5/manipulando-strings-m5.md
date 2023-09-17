# Resolução do problema

Os métodos que utilizarei são:

- `charAt()`: para acessar um caractere de uma string;
- `toUpperCase()`: para deixar toda a string em Maiúscula;
- *`string*.substr()`: para fazer a extração de parte de uma string;
- `replace()`: para substituir parte de uma string por outra;

<br>

Na exemplificação dos métodos no código, utilizei da seguinte forma:

1 - Criei uma função `capitalizer()`, para deixar a primeira letra de um nome em maiúscula.

```jsx
capitalizer(string) {
		let newString = string.charAt(0).toUpperCase() + string.substr(1);
		return newString;
}
```

<br>

2 - Também criei uma função para emitir uma mensagem para o usuário utilizando o `captalizer()`, e para isso utilizei o método `replace()` para poder customizar a mensagem emitida.

```jsx
mensagemConfirmacao(nomeUsuario) {
		let mensagem = 'Olá, usuario, seu cadastro foi realizado com sucesso!'
		return mensagem.replace('usuario', nomeUsuario);
}
```

<br>

Esse duas funções foram implementadas em um arquivo `mpStr.js` para serem exportadas. Fiz isso para poder aplicar alguns conceitos que foram trabalhados nesse modulo 5.

```jsx
// mpStr.js
module.exports = {
    capitalizer(string) {
        let newString = string.charAt(0).toUpperCase() + string.substr(1);
        return newString;
    },
    
    mensagemConfirmacao(nomeUsuario) {
        let mensagem = 'Olá, usuario, seu cadastro foi realizado com sucesso!'
        return mensagem.replace('usuario', nomeUsuario);
    }
}
```

<br>

Para utilizar essas funções em um contexto, criei um programinha de cadastro de usuários, então no arquivo `bancoDeDados.js`, criei um array `bancoDeDados` e implementei duas funções `inserirUsuario()`e `exibir()`.

```jsx
// bancoDeDados.js
const bancoDeDados = [];

module.exports = {
	inserirUsuario(nome, senha, email) {
        let usuario = {
            nome: nome,
            senha: senha,
            email: email
        };
    
        bancoDeDados.push(usuario);
    },

    exibir() {
        console.table(bancoDeDados);
    }
}
```

<br>

Com esses módulos criados e armazenados no diretório `meus_modulos`, implementei um programa para utilizá-los:

```jsx
// index.js
const bd = require('./meus_modulos/bancoDeDados');
const mpStr = require('./meus_modulos/mpStr');
const prompt = require('prompt-sync')();

console.log('+-----------------------+');
console.log('|  Cadastro de Usuário  |');
console.log('+-----------------------+');

let opcao = 0;
while(opcao == 0) {
    let nome = prompt('Digite seu Nome: ');
    let email = prompt('Digite seu E-mail: ');
    let senha = prompt('Digite sua Senha: ');

    console.log('')
    bd.inserirUsuario(nome, senha, email);
    let nomeCapitalizer = mpStr.capitalizer(nome);
    console.log(mpStr.mensagemConfirmacao(nomeCapitalizer));

    opcao = Number(prompt('Se Deseja continuar digite 0: '));
    console.log("")
}

bd.exibir();
```

<br>

O link do projeto completo se encontra abaixo:

[javascript-m05-manipulando-strings]()
