import { Veiculo } from "./Veiculo";

export class Caminhao extends Veiculo {
    
    private qtdPortas: number;

    public constructor(modelo: string, marca: string, cor: string, numeroRodas: number, qtdPortas: number) {
        super(modelo, marca, cor, numeroRodas);
        this.qtdPortas = qtdPortas;
    }

    public clone(): Caminhao {
        return new Caminhao(this.modelo, this.marca, this.cor, this.numeroRodas, this.qtdPortas);
    }

    public represent(): string {
        return `${super.represent()} - Quantidade de Portas: ${this.qtdPortas}`;
    }
}