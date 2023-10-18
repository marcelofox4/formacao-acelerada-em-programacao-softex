import { ISTrategy } from "./IStrategy";

export class Division implements ISTrategy{
    execute(n1: number, n2: number): number {   
        if (n2 != 0) {
            return n1 / n2;
        }
        throw new Error("Não é possível dividir por zero!");
    }
}