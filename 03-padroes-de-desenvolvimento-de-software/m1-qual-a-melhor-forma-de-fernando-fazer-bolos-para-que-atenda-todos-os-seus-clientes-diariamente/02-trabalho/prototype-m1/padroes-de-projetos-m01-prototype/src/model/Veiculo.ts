export abstract class Veiculo {

    protected modelo: string;
    protected marca: string;
    protected cor: string;
    protected numeroRodas: number;

    public constructor(modelo: string, marca: string, cor: string, numeroRodas: number) {
        this.modelo = modelo;
        this.marca = marca;
        this.cor = cor;
        this.numeroRodas = numeroRodas;
    }

    public abstract clone(): Veiculo;

    public represent(): string {
        return `Modelo: ${this.modelo} - Marca: ${this.marca} - Cor: ${this.cor} - Número de Rodas: ${this.numeroRodas}`;
    }
}