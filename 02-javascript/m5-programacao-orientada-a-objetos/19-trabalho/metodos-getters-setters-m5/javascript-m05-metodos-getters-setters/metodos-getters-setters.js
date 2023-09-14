class Carro {
    constructor(modelo, ano, cor) {
        this._modelo = modelo;
        this._ano = ano;
        this._cor = cor;
    }

    // Métodos Getters
    get modelo() {
        return this._modelo;
    }

    get ano() {
        return this._ano;
    }

    get cor() {
        return this._cor;
    }

    // Métodos Setters
    set modelo(novoModelo) {
        this._modelo = novoModelo;
    }

    set ano(novoAno) {
        this._ano = novoAno;
    }

    set cor(novaCor) {
        this._cor = novaCor;
    }
}

const hilux = new Carro('Caminhonete', 2023, 'Preto');

console.log('-------------------');
console.log('Modelo:', hilux.modelo);
console.log('Ano:', hilux.ano);
console.log('Cor:', hilux.cor);
console.log('-------------------');

console.log('Modificando a Cor do carro:')
hilux.cor = 'Vermelho';
console.log('Nova cor:', hilux.cor);