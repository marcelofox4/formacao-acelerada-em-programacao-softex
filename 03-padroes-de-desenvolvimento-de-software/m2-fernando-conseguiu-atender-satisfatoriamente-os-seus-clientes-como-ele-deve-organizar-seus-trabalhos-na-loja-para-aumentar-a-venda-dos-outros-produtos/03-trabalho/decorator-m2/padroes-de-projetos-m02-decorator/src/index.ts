import { FrangoAssado } from "./model/FrangoAssado";
import { ISanduiche } from "./model/ISanduiche";
import { SanduichePadrao } from "./model/SanduichePadrao";

const ingredientes = new Map<string, number>();

ingredientes.set("Pepperoni", 0.99);
ingredientes.set("Queijo Mussarela Ralado", 2.00);

const sanduichePadrao: ISanduiche = new SanduichePadrao(ingredientes);

const sanduicheFrango: ISanduiche = new FrangoAssado(sanduichePadrao);

console.log(`Sanduiche de Frango:\n-Pepperoni\n-Queijo Mussarela Ralado\n------------------------\nTotal: ${sanduicheFrango.preco()}`);