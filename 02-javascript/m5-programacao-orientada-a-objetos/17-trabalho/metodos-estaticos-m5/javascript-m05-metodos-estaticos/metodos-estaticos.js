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

console.log(Calculadora.soma(4, 2));
console.log(Calculadora.subtracao(3, 2));
console.log(Calculadora.multiplicacao(10, 1003));
console.log(Calculadora.divisao(10, 2));