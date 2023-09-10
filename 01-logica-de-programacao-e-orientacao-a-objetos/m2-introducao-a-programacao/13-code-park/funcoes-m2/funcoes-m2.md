# Resolução do problema

O código da resolução do problema está logo abaixo:

```jsx
function calculadora(num1, num2, operacao) {
    // 1 - Soma
    if(operacao == 1) {
        return num1 + num2;
    }

    // 2 - Subtração
    if(operacao == 2) {
        return num1 - num2;
    }
    
    // 3 - Multiplicação
    if(operacao == 3) {
        return num1 * num2;
    }
    
    // 4 - Divisão
    if(operacao == 4) {
        if(num2 == 0) {
            return null;
        }
        return num1 / num2
    }

	// Operação inexistente
    if(operacao == 0 || operacao > 4) {
        return 0;
    }
}

let numero1 = Number(prompt("Digite o primeiro número: "))
let numero2 = Number(prompt("Digite o segundo número: "))
let operacao = prompt(`Digite qual operação você deseja executar: 
Soma = 1
Subtração = 2
Multiplicação = 3
Divisão = 4
--> `);

console.log(`Resultado da Operação: ${calculadora(numero1, numero2, operacao)}`);
```

<br>

Para executar o algoritmo, siga o passo a passo:

1 - Basta clicar no link: **[executar algoritmo](https://www.programiz.com/javascript/online-compiler/)**;

2 - Apagar o código:

```jsx
// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

console.log("Welcome to Programiz!");
```

3 - Copiar o meu algoritmo no arquivo criado e executar no botão azul → Run.
