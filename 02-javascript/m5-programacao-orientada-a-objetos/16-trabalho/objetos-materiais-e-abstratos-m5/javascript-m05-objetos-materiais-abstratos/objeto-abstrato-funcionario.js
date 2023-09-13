class Funcionario {
    // Método construtor para instânciar os objetos já passando os valores para os atributos.
    constructor(nome, cpf, departamento) {
        // Atributos
        this.nome = nome;
        this.cpf = cpf;
        this.departamento = departamento;
        this.ferias = false;
    }

    // Métodos
    tirarFerias() {
        if (this.ferias === false) {
            this.ferias = true;
            console.log('Tirar férias!');
            return;
        }
        console.log('Já está de férias!');
    }

    mudarDepartamento(novoDepartamento) {
        this.departamento = novoDepartamento;
    }

    mostrarAtributos() {
        console.log(`\n+-----ATRIBUTOS----+`);
        for (const prop in this) {
            console.log(`  ${prop}: ${this[prop]}`);
        }
        console.log(`+------------------+`);
    }
}

let funcionarioUm = new Funcionario('Marcelo', '11122233344', 'Desenvolvimento');

funcionarioUm.mostrarAtributos(funcionarioUm);

funcionarioUm.mudarDepartamento('Administrativo');
funcionarioUm.tirarFerias();

funcionarioUm.mostrarAtributos(funcionarioUm);