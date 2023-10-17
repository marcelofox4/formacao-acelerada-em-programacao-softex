import { AdptadorPato } from "./models/AdaptadorPato";
import { Galinha } from "./models/Galinha";
import { Pato } from "./models/Pato";

let galinha: Galinha = new Galinha();

let pato: Pato = new AdptadorPato(galinha);

console.log("Pato pensando que é galinha:");
pato.emitirSom();