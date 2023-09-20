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