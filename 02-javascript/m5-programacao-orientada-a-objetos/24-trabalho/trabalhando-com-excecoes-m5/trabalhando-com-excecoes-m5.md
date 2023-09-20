# Resolução do problema

Para o exercício utilizei como problema matemático as quatro operações básicas em uma calculadora, então desenvolvi a classe `Calculadora`.

```jsx
class Calculadora {

    static soma(n1, n2) {
        return n1 + n2;
    }

    static subtracao(n1, n2) {
        return n1 - n2;
    }

    static multiplicacao(n1, n2) {
        return n1 * n2;
    }

    static divisao(n1, n2) {
        if (n2 !== 0) {
            return n1 / n2;
        } 
        throw new Error('Não é possível o divisor ser 0');
    }
}

module.exports = Calculadora;
```

<br>

Para “rodar” o programa, implementei o seguinte código no arquivo `index.js`:

```,jsx
const prompt = require('prompt-sync')();
const Calculadora = require('./Calculadora');

let opcao = 'S';
while (opcao === 'S') {
    console.log("+------------------------Calculadora------------------------+");
    console.log(`Digite qual operação matemática você deseja executar: \n[+] Adicção\n[-] Subtração\n[*] Multiplicação\n[/] Divisão:\\n`);
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
```

<br>

O projeto completo se encontra logo abaixo:

[javascript-m05-trabalhando-com-excecoes](https://github.com/marcelofox4/formacao-acelerada-em-programacao-softex/tree/main/02-javascript/m5-programacao-orientada-a-objetos/24-trabalho/trabalhando-com-excecoes-m5/javascript-m05-trabralhando-com-excecoes)
