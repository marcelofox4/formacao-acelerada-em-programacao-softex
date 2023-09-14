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

class Funcionario extends Pessoa {
    constructor(nome, idade, documento, cargo, salario) {
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
        console.log(` Nome: ${this.nome}\n Idade: ${this.idade}\n Documento: ${this.documento}\n Cargo: ${this._cargo}\n Salário: ${this.salario}`);
        console.log('+------------------+')
    }
}

let funcionario = new Funcionario('Marcelo', '32', 'cpf', 'Programador', 4000.00);

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