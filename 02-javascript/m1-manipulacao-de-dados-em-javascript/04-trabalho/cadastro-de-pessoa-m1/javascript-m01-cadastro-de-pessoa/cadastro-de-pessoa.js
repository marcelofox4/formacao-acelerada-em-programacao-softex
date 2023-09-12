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

const pessoaUm = new Pessoa('João', 6000.00, 30, true);
pessoaUm.imprime();
pessoaUm.imprimeTiposDados();

const pessoaDois = new Pessoa('Maria', 2500.35, 25, false );
pessoaDois.imprime();
pessoaDois.imprimeTiposDados();