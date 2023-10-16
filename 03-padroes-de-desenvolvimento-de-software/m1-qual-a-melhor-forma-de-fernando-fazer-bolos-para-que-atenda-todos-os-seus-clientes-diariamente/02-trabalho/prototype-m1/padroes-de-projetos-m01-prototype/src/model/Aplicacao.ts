import { Carro } from "./Carro";
import { Caminhao } from "./Caminhao";
import { Veiculo } from "./Veiculo";

export class Aplicacao {
    public static criarVeiculos(): Veiculo[] {
        const veiculos: Veiculo[] = [];

        veiculos.push(
            new Carro("T40", "JAC", "Marrom", 4, 4),
            new Carro("Strada", "FIAT", "Branco", 4, 2),
            new Carro("Gol", "Volkswagen", "Preto", 4, 4),
            new Caminhao("Accelo", "Mercedes-Benz", "Preto", 6, 2),
            new Caminhao("Volvo", "FMX", "Branco", 12, 2),
            new Carro("Polo", "Volkswagen", "Cinza", 4, 4)
        );

        return veiculos;
    }

    public static clonarVeiculos(veiculos: Veiculo[]): Veiculo[] {
        const veiculosClonados: Veiculo[] = [];
        veiculos.forEach(veiculo => {
            veiculosClonados.push(veiculo.clone());
        });
        return veiculosClonados;
    }

    public static printVeiculos(veiculos: Veiculo[]): void{
        veiculos.forEach(veiculo => {
            console.log(veiculo.represent());
        });
    }
}
