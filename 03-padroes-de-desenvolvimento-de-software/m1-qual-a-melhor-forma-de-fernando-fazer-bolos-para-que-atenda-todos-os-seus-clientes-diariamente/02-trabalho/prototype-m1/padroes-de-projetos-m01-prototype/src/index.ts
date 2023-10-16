import { Aplicacao } from "./model/Aplicacao";

const veiculos = Aplicacao.criarVeiculos();
const veiculosClonados = Aplicacao.clonarVeiculos(veiculos);

console.log("Lista - Veículos");
Aplicacao.printVeiculos(veiculos);

console.log('');

console.log("Lista - Veículos Clonados");
Aplicacao.printVeiculos(veiculosClonados);