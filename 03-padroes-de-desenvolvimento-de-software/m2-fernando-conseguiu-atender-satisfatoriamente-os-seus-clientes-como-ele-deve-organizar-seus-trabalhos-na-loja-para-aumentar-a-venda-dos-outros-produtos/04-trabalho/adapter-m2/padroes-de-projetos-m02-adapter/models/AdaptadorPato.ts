import { Galinha } from "./Galinha";
import { IPatoCaracteristica } from "./IPatoCaracteristica";

export class AdptadorPato implements IPatoCaracteristica{

    private galinha: Galinha;
    
    constructor(galinha: Galinha){
        this.galinha = galinha;
    }

    emitirSom(): void {
        console.log(this.galinha.emitirSom());
    }
}