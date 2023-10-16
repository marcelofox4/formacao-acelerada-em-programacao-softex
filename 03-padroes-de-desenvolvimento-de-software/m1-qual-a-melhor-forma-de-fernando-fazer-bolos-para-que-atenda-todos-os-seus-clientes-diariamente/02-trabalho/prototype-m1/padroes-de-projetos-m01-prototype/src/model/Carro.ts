import { Veiculo } from "./Veiculo";

export class Carro extends Veiculo{
    
    private qtdPortas: number;

    public constructor(modelo: string, marca: string, cor: string, numeroRodas: number, qtdPortas: number) {
        super(modelo, marca, cor, numeroRodas);
        this.qtdPortas = qtdPortas;
    }

    public clone(): Carro {
        return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.qtdPortas);
    }

    public represent(): string {
        return `${super.represent()} - Quantidade de Portas: ${this.qtdPortas}`;
    }
}