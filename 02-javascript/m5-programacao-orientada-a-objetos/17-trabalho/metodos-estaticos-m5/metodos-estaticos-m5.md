# Resolução do problema

O código para a resolução do problema:

```jsx
class Calculadora {
    static soma(numeroUm, numeroDois) {
        return numeroUm + numeroDois;
    }

    static subtracao(numeroUm, numeroDois) {
        return numeroUm - numeroDois;
    }

    static multiplicacao(numeroUm, numeroDois) {
        return numeroUm * numeroDois;
    }

    static divisao(numeroUm, numeroDois) {
        if (numeroDois !== 0) {
            return numeroUm / numeroDois;
        } else {
            throw new Error('Não é possível o divisor ser 0');
        }
    }
}

console.log(Calculadora.soma(4, 2)); // Saída: 6
console.log(Calculadora.subtracao(3, 2)); // Saída: 1
console.log(Calculadora.multiplicacao(10, 1003)); // Saída: 10030
console.log(Calculadora.divisao(10, 2)); // Saída: 5
```
