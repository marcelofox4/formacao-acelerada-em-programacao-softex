class Carro {
    // Método construtor para instânciar os objetos já passando os valores para os atributos.
    constructor(modelo, cor, ano) {
        // Atributos
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.ligado = false;
        this.andando = false;
    }

    // Métodos
    ligarMotor() {
        if (this.ligado === false) {
            console.log('Ligando o motor...');
            return this.ligado = true;
        }
        console.log('O motor já está ligado!')
    }

    desligarMotor() {
        if (this.ligado === true) {
            console.log('Desligando o motor...');
            return this.ligado = false;
        }
        console.log('O motor já está desligado!')
    }

    acelerar() {
        if (this.ligado === true) {
            console.log('Acelerando...');
            return this.andando = true;
        }
        console.log('O carro está desligado!');
    }

    frear() {
        if (this.andando === true) {
            console.log('Desacelerando...');
            return this.andando = false;
        }
        console.log('O carro já está parado!');
    }

    mostrarAtributos() {
        console.log(`\n+-----ATRIBUTOS----+`);
        for (const prop in this) {
            console.log(`  ${prop}: ${this[prop]}`);
        }
        console.log(`+------------------+`);
    }
}

// Utilizando a Classe Carro
let carroUm = new Carro('SUV', 'preto', 2023);

carroUm.mostraAtributos(carroUm);

carroUm.ligarMotor();
carroUm.acelerar();
carroUm.frear();

console.log(`+------------------+`);

let carroDois = new Carro('Esportivo', 'Vermelho', 2020);

carroDois.mostraAtributos(carroDois);

carroDois.desligarMotor()
carroDois.acelerar();