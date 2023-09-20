const prompt = require('prompt-sync')();
const Calculadora = require('./Calculadora');

let opcao = 'S';
while (opcao === 'S') {
    console.log("+------------------------Calculadora------------------------+");
    console.log(`Digite qual operação matemática você deseja executar: \n[+] Adicção\n[-] Subtração\n[*] Multiplicação\n[/] Divisão:\n`);
    try {
        let operacao = prompt('Operação: ');
        let numeroUm = Number(prompt('Digite o primeiro número: '));
        let numeroDois = Number(prompt('Digite o segundo número: '));
        let resultado;

        if (operacao === '+') {
            resultado = Calculadora.soma(numeroUm, numeroDois);
            console.log(`A soma entre ${numeroUm} e ${numeroDois} é: ${resultado}`);
        } else if (operacao === '-'){
            resultado = Calculadora.subtracao(numeroUm, numeroDois);
            console.log(`A subtração entre ${numeroUm} e ${numeroDois} é: ${resultado}`);
        } else if (operacao === '*') {
            resultado = Calculadora.multiplicacao(numeroUm, numeroDois);
            console.log(`A multiplicação entre ${numeroUm} e ${numeroDois} é: ${resultado}`);
        } else if (operacao === '/') {
            resultado = Calculadora.divisao(numeroUm, numeroDois);
            console.log(`A divisão entre ${numeroUm} e ${numeroDois} é: ${resultado}`);
        }
    } catch (error) {
        console.log(error);
    } finally {
        console.log('Caso deseje continuar fazendo operações na Calculadora digite: S');
        console.log('Caso contrário basta digitar qualquer caractere!')
        opcao = prompt('---> ').toUpperCase();
    }
}