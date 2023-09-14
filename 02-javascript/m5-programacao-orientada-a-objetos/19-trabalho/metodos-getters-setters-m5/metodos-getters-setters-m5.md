# Resolução do problema

Primeiramente irei criar uma Classe `Carro` para utilizar os métodos especiais:

```jsx
class Carro {
	// Método Construtor para estanciar objetos já atribuindo valores aos atributos.
    constructor(modelo, ano, cor) {
		// Utilizei (_) na frente dos nomes dos atributos para sinalizar que eles têm como
		// modificador de acesso private.
        this._modelo = modelo;
        this._ano = ano;
        this._cor = cor;
    }
}
```

<br>

Implementarei os métodos acessores (Getters):

```jsx
class Carro {
	// ... código ...

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
}
```

<br>

Agora é a vez de implementar os métodos modificadores (Setters):

```jsx
class Carro {
	// ... código ...

	// ... Métodos Getters ...
		
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
```

<br>

Vamos utilizar a classe `Carro` e seus métodos especiais:

```jsx
const hilux = new Carro('Caminhonete', 2023, 'Preto');

//Utilizando os métodos Getters
console.log('-------------------');
console.log('Modelo:', hilux.modelo);
console.log('Ano:', hilux.ano);
console.log('Cor:', hilux.cor);
console.log('-------------------');

// Utilizando o método Setter
console.log('Modificando a Cor do carro:')
hilux.cor = 'Vermelho';
console.log('Nova cor:', hilux.cor);

/*
Saída:
-------------------
Modelo: Caminhonete
Ano: 2023
Cor: Preto
-------------------
Modificando a Cor do carro:
Nova cor: Vermelho
*/
```

<br>

O link do projeto completo está logo abaixo:

[javascript-m05-metodos-getters-setters]()
