"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Caminhao = void 0;
const Veiculo_1 = require("./Veiculo");
class Caminhao extends Veiculo_1.Veiculo {
    constructor(modelo, marca, cor, numeroRodas, qtdPortas) {
        super(modelo, marca, cor, numeroRodas);
        this.qtdPortas = qtdPortas;
    }
    clone() {
        return new Caminhao(this.modelo, this.marca, this.cor, this.numeroRodas, this.qtdPortas);
    }
    represent() {
        return `${super.represent()} - Quantidade de Portas: ${this.qtdPortas}`;
    }
}
exports.Caminhao = Caminhao;
