# Resolução do problema

Foi pedido para identificar os tipos das variáveis antes da codificação, então vamos aos tipos:

- nome ⇒ string;
- salario ⇒ number;
- idade ⇒ number;
- temDiploma ⇒ boolean;

<br>

Para representar a pessoa, implementarei uma classe `Pessoa`, onde o método construtor recebe os parâmetros necessários para criar a classe, também implementarei dois métodos, o  `imprime()` para “printar” os valores, e o `imprimeTiposDados()` para “printar” a saída dos tipos, para conferência dos tipos dos dados.

```jsx
class Pessoa {
    constructor(nome, salario, idade, temDiploma) {
        this.nome = nome;
        this.salario = salario;
        this.idade = idade;
        this.temDiploma = temDiploma;
    }
    
    imprime() {
        console.log(`-------- Profile ${this.nome} ----------`);
        console.log("Nome:", this.nome);
        console.log("Salário:", this.salario);
        console.log("Idade:", this.idade);
        console.log("Tem Diploma:", this.temDiploma);
        console.log('---------------------------------');
    }
    
    imprimeTiposDados() {
        console.log(`---- Tipos dos Dados: ${this.nome} ------`);
        console.log("Nome:", typeof this.nome);
        console.log("Salário:", typeof this.salario);
        console.log("Idade:", typeof this.idade);
        console.log("Tem Diploma:", typeof this.temDiploma);
        console.log('---------------------------------');
    }
}
```

<br>

Basta criar dois objetos da classe `Pessoa`, para inserir os dados de exemplos e testar os tipos.

```jsx
const pessoaUm = new Pessoa('João', 6000.00, 30, true);
pessoaUm.imprime();
pessoaUm.imprimeTiposDados();

const pessoaDois = new Pessoa('Maria', 2500.35, 25, false );
pessoaDois.imprime();
pessoaDois.imprimeTiposDados();

/*
Saída:
-------- Profile João ----------
Nome: João
Salário: 6000
Idade: 30
Tem Diploma: true
---------------------------------
---- Tipos dos Dados: João ------
Nome: string
Salário: number
Idade: number
Tem Diploma: boolean
---------------------------------
-------- Profile Maria ----------
Nome: Maria
Salário: 2500.35
Idade: 25
Tem Diploma: false
---------------------------------
---- Tipos dos Dados: Maria ------
Nome: string
Salário: number
Idade: number
Tem Diploma: boolean
---------------------------------
*/
```

O código completo se encontra no link abaixo:

[cadastro-de-pessoa.js]()
