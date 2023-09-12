const prompt = require('prompt-sync')({sigint: true});

let notaUm;
let notaDois;
let notaTres;

console.log('CALCULADORA DE MÉDIA');
console.log('Digite apenas notas entre 0 e 10.');
while(true) {
    notaUm = Number(prompt('Digite a primeira nota: '));
    notaDois = Number(prompt('Digite a segunda nota: '));
    notaTres = Number(prompt('Digite a terceira nota: '));
    
    if(isNaN(notaUm) || isNaN(notaDois) || isNaN(notaTres)) {
        console.log('Só é possível receber números para o calculo da média');
    } else {
        if ((notaUm <= 10 && notaUm >= 0) && (notaDois <= 10 && notaDois >= 0) && (notaTres <= 10 && notaTres >= 0)) {
            break;
        } else {
            console.log('Digite apenas notas entre 0 e 10!');
        }
    }
}
 
let media = (notaUm + notaDois + notaTres) / 3;   
console.log('A média foi:', media);