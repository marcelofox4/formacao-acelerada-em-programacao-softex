# Resolução do problema

O meu algoritmo no Google Blockly ficou assim:

<img src=''>

O link do projeto:

[Blockly Demo:](https://blockly-demo.appspot.com/static/demos/code/index.html?lang=pt-br#py3sx7)

<br>

O código que Google Blockly cria:

```jsx
var num1, num2, operacao;

// Descreva esta função...
function Calculadora(num1, num2, operacao) {
  if (operacao == 1) {
    return num1 + num2;
  }
  if (operacao == 2) {
    return num1 - num2;
  }
  if (operacao == 3) {
    return num1 * num2;
  }
  if (operacao == 4) {
    return num1 / num2;
  }
  return null;
}

while (true) {
  operacao = Number(window.prompt('Qual operação você deseja realizar: [1] - SOMA | [2] - SUBTRAÇÃO | [3] - MULTIPLICAÇÃO | [4] - DIVISÃO | [0] - SAIR'));
  if (operacao == 0) {
    break;
  } else if (operacao > 4) {
    window.alert('Opção INVÁLIDA! Escolha uma das opções de operação a seguir!');
    continue;
  } else {
    num1 = Number(window.prompt('Digite o Primeiro número: '));
    num2 = Number(window.prompt('Digite o segundo número: '));
    window.alert('O seu Resultado é: ' + String(Calculadora(num1, num2, operacao)));
  }
}
```
