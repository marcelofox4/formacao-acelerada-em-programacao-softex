# Resolução do problema

Para esse padrão, irei criar uma interface `IStrategy`:

```tsx
export interface ISTrategy {
    execute(n1: number, n2: number): number;
}
```

<br>

Em seguida implemento a classe `Calculator` que utilizará as classes com as operações matemáticas:

```tsx
import { ISTrategy } from "./IStrategy";

export class Calculator {
    private numberOne: number;
    private numberTwo: number;
    private result: number;

    private strategy: ISTrategy;

    constructor(n1: number, n2: number, strategy: ISTrategy) {
        this.numberOne = n1;
        this.numberTwo = n2;
        this.strategy = strategy;
        this.result = 0;
    }

    public getNumberOne(): number {
        return this.numberOne;
    }

    public setNumberOne(number: number): void {
        this.numberOne = number;
    }

    public getNumberTwo(): number {
        return this.numberTwo;
    }

    public setNumberTwo(number: number): void {
        this.numberTwo = number;
    }
    
    public calculate(): number {
        return this.result = this.strategy.execute(this.numberOne, this.numberTwo);
    }

    public twistStrategy(strategy: ISTrategy): void{
        this.strategy = strategy;
    }
}
```

Na classe temos um atributo do tipo `IStrategy` que será setado no construtor ele será utilizado para executar o método `execute()`. Também temos um método `twistStrategy()` para modificar o atributo `strategy` e utilizar lógicas diferentes no método `execute()`.

<br>

Agora é hora de criar as classes Addition, Subtraction, Multiplication e Division, a última operação não estava no escopo do projeto, mas resolvi coloca-la para deixar a aplicação de Calculadora completa. Vamos a elas:

**Addition**

```tsx
import { ISTrategy } from "./IStrategy";

export class Addition implements ISTrategy {

    execute(n1: number, n2: number): number {
        return n1 + n2;
    }
}
```

**Subtraction**

```tsx
import { ISTrategy } from "./IStrategy";

export class Subtraction implements ISTrategy{
    
    execute(n1: number, n2: number): number {   
        return n1 - n2;
    }
}
```

**Multiplication**

```tsx
import { ISTrategy } from "./IStrategy";

export class Multiplication implements ISTrategy{
    
    execute(n1: number, n2: number): number {   
        return n1 * n2;
    }
}
```

**Division**

```tsx
import { ISTrategy } from "./IStrategy";

export class Division implements ISTrategy{
    execute(n1: number, n2: number): number {   
        if (n2 != 0) {
            return n1 / n2;
        }
        throw new Error("Não é possível dividir por zero!");
    }
}
```

<br>

Vamos a aplicação que será executada no arquivo index:

```tsx
import { Calculator } from "./models/Calculator";
import { ISTrategy } from "./models/IStrategy";
import { Subtraction } from "./models/Subtraction";
import { Addition } from "./models/Addition";
import { Multiplication } from "./models/Multiplication";
import { Division } from "./models/Division";

const prompt = require('prompt-sync')();

const addition: ISTrategy = new Addition();
const subtraction: ISTrategy = new Subtraction()
const multiplication: ISTrategy = new Multiplication();
const division: ISTrategy = new Division();

const calculator: Calculator = new Calculator(0, 0, addition);
let start = "1";

while (start == "1") {
    console.clear();
    let numberOne = parseInt(prompt("Digite o Primeiro número: "));
    let numberTwo = parseInt(prompt("Digite o Segundo número: "));
    calculator.setNumberOne(numberOne);
    calculator.setNumberTwo(numberTwo);

    console.log("\\nQual operação matemática você deseja utilizar?");
    console.log("[1] Adição\\n[2] Subtração\\n[3] Multiplicação\\n[4] Divisão");
    let option = Number(prompt("--> "));

    switch (option) {
        case 1:
            calculator.twistStrategy(addition);
            console.log(`\\n${calculator.getNumberOne()} + ${calculator.getNumberTwo()} = ${calculator.calculate()}`);
            break;
        case 2:
            calculator.twistStrategy(subtraction);
            console.log(`\\n${calculator.getNumberOne()} - ${calculator.getNumberTwo()} = ${calculator.calculate()}`);
            break;
        case 3:
            calculator.twistStrategy(multiplication);
            console.log(`\\n${calculator.getNumberOne()} x ${calculator.getNumberTwo()} = ${calculator.calculate()}`);
            break;
        case 4:
            calculator.twistStrategy(division);
            try {
                console.log(`\\n${calculator.getNumberOne()} x ${calculator.getNumberTwo()} = ${calculator.calculate()}`);
            } catch (error) {
                console.log(error)
            } finally {
                break;
            }
        default:
            console.log("\\nEscolha uma das opções!")
            break;
    }
    
    console.log("\\nDigite:\\n[1] Continuar\\n[Qualquer tecla] Sair");
    start = prompt("--> ");
}
```

[padroes-de-projetos-m03-strategy](https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/tree/main/03-padroes-de-desenvolvimento-de-software/m3-depois-de-aumentar-as-vendas-da-padaria-Fernando-gostaria-de-atender-as-sugest%C3%B5es-de-melhoria-dos-clientes-como-ele-deve-lidar-com-as-sugest%C3%B5es/05-trabalho/strategy-m3/padroes-de-projetos-m03-strategy)
