const _ = require('lodash');

let arrayUm = [23, 9, 4, 45, 30, 40];
let arrayDois = [7, 12];

arrayDividido = _.chunk(arrayUm, 2);
arrayDivParteUm = arrayDividido[0];
arrayDivParteDois = arrayDividido[1];

console.log('-------------------------------------------------------------');
console.log('arrayUm que será dividido:', arrayUm);
console.log('Primeira parte:', arrayDivParteUm);
console.log('Segunda parte:', arrayDivParteDois);
console.log('-------------------------------------------------------------');

arrayConcatParteUm = _.concat(arrayDois, arrayDivParteUm);
arrayConcatParteDois = _.concat(arrayDois, arrayDivParteDois);

console.log('-------------------------------------------------------------');
console.log('As partes do arrayUm divido serão concatenados ao arrayDois:', arrayDois);
console.log('Primeira parte concatenada com arrayDois:', arrayConcatParteUm);
console.log('Segunda parte concatenada com arrayDois:', arrayConcatParteDois);
console.log('-------------------------------------------------------------');