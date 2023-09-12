function calculadora(numberOne, numberTwo, operation) {

    if (operation === '+') {
        return numberOne + numberTwo;
    }

    if (operation === '-') {
        return numberOne - numberTwo;
    }

    if (operation === '*') {
        return numberOne * numberTwo;
    }

    if (operation === '/') {
        if (numberTwo !== 0) {
            if (numberOne % numberTwo !== 0) {
                let rest = numberOne % numberTwo;
                return [rest, numberOne / numberTwo];
            } else {
                return numberOne / numberTwo;
            }
        } else {
            throw new Error('Não é possível o divisor ser 0');
        }
    }
}

const prompt = require('prompt-sync')({sigint: true});

console.log("+------------------------Calculadora------------------------+");
console.log(`Digite qual operação matemática que você deseja executar: \n[+] Adicção\n[-] Subtração\n[*] Multiplicação\n[/] Divisão:\n`);
try {
    let operation = prompt(`Operação: `);
    let numberOne = Number(prompt(`Digite o primeiro número: `));
    let numberTwo = Number(prompt(`Digite o segundo número: `));


    let result = calculadora(numberOne, numberTwo, operation);

    if (Array.isArray(result)) {
        console.log(`O resto da divisão é: ${result[0]}\n O resultado da divisão é: ${result[1]}`);
    } else {
        console.log(`O resultado da operação ${numberOne} ${operation} ${numberTwo} é: ${result}`);
    }
} catch (error) {
    console.log(error);
}