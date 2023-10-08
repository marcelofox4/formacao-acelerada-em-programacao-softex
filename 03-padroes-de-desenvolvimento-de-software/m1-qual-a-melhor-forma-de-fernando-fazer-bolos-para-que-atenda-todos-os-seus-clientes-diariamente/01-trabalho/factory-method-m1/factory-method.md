# Resolução do problema

Farei esse Trabalho em TypeScript, que é uma linguagem que estamos estudando em sala de aula, pois ela permite uma melhor aplicação dos conceitos de orientação a objetos.

<br>

Primeiro implementei uma Interface `IComputer` e adicionei o método `toString()`.

```tsx
//IComputer
export interface IComputer {
    
    toString(): string;
}
```

<br>

Criei as duas classes `Pc` e `Server` e implementei a interface nelas:

```tsx
// Pc
import { IComputer } from "./IComputer";

export class Pc implements IComputer {

    private ram: number;
    private hdd: number;
    private cpu: number;
    private type: string = "PC";

    constructor(ram: number, hdd: number, cpu: number) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    
    public getRam(): number {
        return this.ram;
    }

    public getHdd(): number {
        return this.hdd;
    }

    public getCpu(): number {
        return this.cpu;
    }

    public getType(): string {
        return this.type;
    }
    
    public toString(): string {
        return `RAM: ${this.getRam()}, HDD: ${this.getHdd()}, CPU: ${this.getCpu()}, Type: ${this.getType()}`;
    }
}

// Server
import { IComputer } from "./IComputer";

export class Server implements IComputer {

    private ram: number;
    private hdd: number;
    private cpu: number;
    private type: string = "Server";

    constructor(ram: number, hdd: number, cpu: number) {
        this.ram = ram;
        this.hdd = hdd;
        this.cpu = cpu;
    }

    
    public getRam(): number {
        return this.ram;
    }

    public getHdd(): number {
        return this.hdd;
    }

    public getCpu(): number {
        return this.cpu;
    }

    public getType(): string {
        return this.type;
    }
    
    public toString(): string {
        return `RAM: ${this.getRam()}, HDD: ${this.getHdd()}, CPU: ${this.getCpu()}, Type: ${this.getType()}`;
    }
}
```

<br>

Para instanciar os objetos das classes `Pc` e `Server`, criarei uma classe estática chamada `ComputerFactory` com um método estático `createComputer()` que servirá como um factory method. Então a depender to tipo que será passado como parâmetro instanciará um objeto do tipo `Pc` ou `Server`.

```tsx
// ComputerFactory
import { IComputer } from "./IComputer";
import { Pc } from "./Pc";
import { Server } from "./Server";

export class ComputerFactory {
    public static createComputer(ram: number, hdd: number, cpu: number, type: string): IComputer {
        if (type === "PC") {
            return new Pc(ram, hdd, cpu);
        } else if (type === "Server") {
            return new Server(ram, hdd, cpu);
        } else {
            throw new Error("Tipo de computador não suportado");
        }
    }
}
```

<br>

Como cliente para utilizar o factory method criarei um arquivo `index.ts`.

```tsx
import { ComputerFactory } from "./models/ComputerFactory";

const computerOne = ComputerFactory.createComputer(32, 500, 3.46, "PC");
const computerTwo = ComputerFactory.createComputer(8, 1000, 2.4, "Server");

console.log(computerOne.toString());
console.log(computerTwo.toString());

/*
Saída no console:
RAM: 32, HDD: 500, CPU: 3.46, Type: PC
RAM: 8, HDD: 1000, CPU: 2.4, Type: Server
*/
```



[calculadora-de-media.js](https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/blob/main/02-javascript/m1-manipulacao-de-dados-em-javascript/05-trabalho/calculadora-de-media-m1/javascript-m01-calculadora-de-media/calculadora-de-media.js)
