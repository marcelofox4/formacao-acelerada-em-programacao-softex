# Resolução do problema

Irei implementar, primeiramente, a classe `Pessoa`, para a classe `Funcionario` poder estender todos os atributos e funcionalidade:

```jsx
class Pessoa {
    constructor(nome, idade, documento) {
        this._nome = nome;
        this._idade = idade;
        this._documento = documento;
    }

    get nome() {
        return this._nome; 
    }

    get idade() {
        return this._idade;
    }

    get documento() {
        return this._documento;
    }

    atualizarDoc(novoDoc) {
        this._documento = novoDoc;
    }

    fazerAniversario() {
        this._idade++;
    }
}
```

<br>

Pronto, agora posso implementar a classe `Funcionario`:

```jsx
// O extends permitir fazer essa conexão estendendo todos os atributos
// e funcionalidades da classe Pessoa.
class Funcionario extends Pessoa {
    constructor(nome, idade, documento, cargo, salario) {
				// Com o super() relaciono os atributos de Funcionario com a classe Perssoa
        super(nome, idade, documento);
        this._cargo = cargo;
        this._salario = salario;
    }

    get cargo() {
        return this._cargo;
    }

    get salario() {
        return this._salario;
    }

    ganharAumento(valor) {
        this._salario += valor;
    }

    atualizarCargo(novoCargo) {
        this._cargo = novoCargo;
    }

    imprimeInfo() {
        console.log('+------------------+')
        console.log(` Nome: ${this.nome}\\n Idade: ${this.idade}\\n Documento: ${this.documento}\\n Cargo: ${this._cargo}\\n Salário: ${this.salario}`);
        console.log('+------------------+')
    }
}
```

<br>

Agora posso utilizar normalmente a classe `Funcionario` e chamar métodos e acessar atributos que foram implementados na classe `Pessoa`.

```jsx
const funcionario = new Funcionario('Marcelo', '32', 'cpf', 'Programador', 4000.00);

funcionario.atualizarCargo('Arquiteto de Software');
funcionario.ganharAumento(4000);
funcionario.fazerAniversario();
funcionario.imprimeInfo();
/*
Saída:
+------------------+
 Nome: Marcelo
 Idade: 33
 Documento: cpf
 Cargo: Arquiteto de Software
 Salário: 8000
+------------------+
*/
```

<br>

O link do projeto completo está logo abaixo:

[javascript-m05-heranca](https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/tree/main/02-javascript/m5-programacao-orientada-a-objetos/20-trabalho/heranca-m5/javascript-m05-heranca)
