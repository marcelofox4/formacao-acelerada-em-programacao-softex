import { IGalinhaCaracteristica } from "./IGalinhaCaracteristica";

export class Galinha implements IGalinhaCaracteristica {

    emitirSom(): void {
        console.log("Có, Có!");
    }
}