# Resolução do problema

Farei esse Trabalho em TypeScript, que é uma linguagem que estamos estudando em sala de aula, pois ela permite uma melhor aplicação dos conceitos de orientação a objetos.

<br>

Vamos começar implementado a classe abstrata `Veiculo`, que será estendida:

```tsx
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
```

O método `clone()`, foi feito estático para poder ser implementado pelas classes filhas.

<br>

As subclasses que serão implementadas serão `Carro` e `Caminhao`:

- **`Carro`**

```tsx
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
```

- **`Caminhao`**

```tsx
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
```

<br>

Agora na classe `Aplicacao`,  instanciarei as classe `Carro` e `Caminhao` para serem utilizadas:

```tsx
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
```

- Criei os métodos estáticos `criarVeiculos()` que retornaram um array de veículos, então será instanciado vários objetos.
- O método `clonarVeiculos()` que receberá como parâmetro um arrai de veículos e retornara um array de veículos clonados.
- E o por último o método `printVeiculos()` que, também, receberá um array de veículos e exibirá os itens do array.

<br>

No arquivo `index.ts` estará o seguinte código:

```tsx
import { Aplicacao } from "./model/Aplicacao";

const veiculos = Aplicacao.criarVeiculos();
const veiculosClonados = Aplicacao.clonarVeiculos(veiculos);

console.log("Lista - Veículos");
Aplicacao.printVeiculos(veiculos);

console.log('');

console.log("Lista - Veículos Clonados");
Aplicacao.printVeiculos(veiculosClonados);

/*
Saídas:
Lista - Veículos
Modelo: T40 - Marca: JAC - Cor: Marrom - Número de Rodas: 4 - Quantidade de Portas: 4
Modelo: Strada - Marca: FIAT - Cor: Branco - Número de Rodas: 4 - Quantidade de Portas: 2
Modelo: Gol - Marca: Volkswagen - Cor: Preto - Número de Rodas: 4 - Quantidade de Portas: 4
Modelo: Accelo - Marca: Mercedes-Benz - Cor: Preto - Número de Rodas: 6 - Quantidade de Portas: 2
Modelo: Volvo - Marca: FMX - Cor: Branco - Número de Rodas: 12 - Quantidade de Portas: 2
Modelo: Polo - Marca: Volkswagen - Cor: Cinza - Número de Rodas: 4 - Quantidade de Portas: 4

Lista - Veículos Clonados
Modelo: T40 - Marca: JAC - Cor: Marrom - Número de Rodas: 4 - Quantidade de Portas: 4
Modelo: Strada - Marca: FIAT - Cor: Branco - Número de Rodas: 4 - Quantidade de Portas: 2
Modelo: Gol - Marca: Volkswagen - Cor: Preto - Número de Rodas: 4 - Quantidade de Portas: 4
Modelo: Accelo - Marca: Mercedes-Benz - Cor: Preto - Número de Rodas: 6 - Quantidade de Portas: 2
Modelo: Volvo - Marca: FMX - Cor: Branco - Número de Rodas: 12 - Quantidade de Portas: 2
Modelo: Polo - Marca: Volkswagen - Cor: Cinza - Número de Rodas: 4 - Quantidade de Portas: 4
*/
```

<br>

Segue o link do projeto completo:

[padroes-de-projetos-m01-prototype](https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/tree/main/03-padroes-de-desenvolvimento-de-software/m1-qual-a-melhor-forma-de-fernando-fazer-bolos-para-que-atenda-todos-os-seus-clientes-diariamente/02-trabalho/prototype-m1/padroes-de-projetos-m01-prototype)
