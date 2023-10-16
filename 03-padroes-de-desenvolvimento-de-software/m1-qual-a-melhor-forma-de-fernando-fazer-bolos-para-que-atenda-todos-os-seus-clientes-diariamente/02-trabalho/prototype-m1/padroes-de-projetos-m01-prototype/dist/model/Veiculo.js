"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Veiculo = void 0;
class Veiculo {
    constructor(modelo, marca, cor, numeroRodas) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }
    represent() {
        return `Modelo: ${this.modelo} - Marca: ${this.marca} - Cor: ${this.cor} - Número de Rodas: ${this.numeroRodas}`;
    }
}
exports.Veiculo = Veiculo;
