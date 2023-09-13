class Pessoa {
    constructor(nome, cpf, idade) {
        this.nome = nome;
        this.cpf = cpf;
        this.idade = idade;
    }

    apresentacao() {
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos de idade!`);
    }

    fazerAniversario() {
        this.idade += 1
    }

    mostrarAtributos() {
        console.log(`\n+-----ATRIBUTOS----+`);
        for (const prop in this) {
            console.log(`  ${prop}: ${this[prop]}`);
        }
        console.log(`+------------------+`);
    }
}

let pessoa = new Pessoa('Marcelo', '11122233344', 32);

pessoa.mostrarAtributos();
pessoa.apresentacao()
pessoa.fazerAniversario();
pessoa.mostrarAtributos();