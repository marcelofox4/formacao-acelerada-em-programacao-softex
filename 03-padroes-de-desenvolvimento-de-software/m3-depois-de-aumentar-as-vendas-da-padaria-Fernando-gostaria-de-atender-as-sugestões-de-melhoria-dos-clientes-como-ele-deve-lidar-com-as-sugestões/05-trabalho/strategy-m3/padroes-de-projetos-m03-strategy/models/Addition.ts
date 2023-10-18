import { ISTrategy } from "./IStrategy";

export class Addition implements ISTrategy {

    execute(n1: number, n2: number): number {
        return n1 + n2;
    }
}