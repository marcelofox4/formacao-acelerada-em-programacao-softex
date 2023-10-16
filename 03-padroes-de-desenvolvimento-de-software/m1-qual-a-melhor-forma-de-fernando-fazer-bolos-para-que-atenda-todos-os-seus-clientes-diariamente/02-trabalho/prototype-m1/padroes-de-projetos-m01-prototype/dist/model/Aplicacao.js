"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Aplicacao = void 0;
const Carro_1 = require("./Carro");
const Caminhao_1 = require("./Caminhao");
class Aplicacao {
    static criarVeiculos() {
        const veiculos = [];
        veiculos.push(new Carro_1.Carro("T40", "JAC", "Marrom", 4, 4), new Carro_1.Carro("Strada", "FIAT", "Branco", 4, 2), new Carro_1.Carro("Gol", "Volkswagen", "Preto", 4, 4), new Caminhao_1.Caminhao("Accelo", "Mercedes-Benz", "Preto", 6, 2), new Caminhao_1.Caminhao("Volvo", "FMX", "Branco", 12, 2), new Carro_1.Carro("Polo", "Volkswagen", "Cinza", 4, 4));
        return veiculos;
    }
    static clonarVeiculos(veiculos) {
        const veiculosClonados = [];
        veiculos.forEach(veiculo => {
            veiculosClonados.push(veiculo.clone());
        });
        return veiculosClonados;
    }
    static printVeiculos(veiculos) {
        veiculos.forEach(veiculo => {
            console.log(veiculo.represent());
        });
    }
}
exports.Aplicacao = Aplicacao;
