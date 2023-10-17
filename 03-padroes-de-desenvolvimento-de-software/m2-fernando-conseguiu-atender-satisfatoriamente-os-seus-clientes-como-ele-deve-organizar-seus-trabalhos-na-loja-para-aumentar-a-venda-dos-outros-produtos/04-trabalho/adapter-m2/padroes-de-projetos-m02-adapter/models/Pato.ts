import { IPatoCaracteristica } from "./IPatoCaracteristica";

export class Pato implements IPatoCaracteristica {

    emitirSom(): void {
        console.log("Quac, Quac!");
    }
}