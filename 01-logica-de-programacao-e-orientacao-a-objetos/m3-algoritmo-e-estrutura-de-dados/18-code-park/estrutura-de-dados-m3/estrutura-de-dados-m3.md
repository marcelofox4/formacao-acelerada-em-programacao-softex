# Resolução do problema

## Lista

Em uma Lista, a remoção é realizada de modo específico, ou seja, quem está manipulando essa estrutura de dados escolherá o item que irá ser removido. Dessa forma, a sequência de esvaziamento da lista se dará da forma que o desenvolvedor prefeirir. Veja no código abaixo:

```jsx
// Criação da estrutura Lista.
const lista = [];

// Função para a inserção dos elementos.
function inserir(elemento, posicao = lista.length) {
	if(posicao >= 0 && posicao <= lista.length) {
		lista.splice(posicao, 0, elemento);
		return true;
	} else {
		return false;
	}
}

// Função para a remoção dos Itens
function remocao(elemento) {
	let indice = lista.indexOf(elemento);
	if (indice !== -1) {
		lista.splice(indice, 1);
		return true;
	} else {
		return false;
	}
}

// Inserção dos elementos
inserir(3);
inserir(7);
inserir(9);
inserir(1);
inserir(0);
console.log(lista); // Saída: [ 3, 7, 9, 1, 0 ]

// Remoção dos elementos
remocao(7);
console.log(lista); // Saída: [ 3, 9, 1, 0 ]
remocao(3);
console.log(lista); // Saída: [ 9, 1, 0 ]
remocao(0);
console.log(lista); // Saída: [ 9, 1 ]
remocao(1);
console.log(lista); // Saída: [ 9 ]
remocao(9);

console.log(lista); // Saída: []
```

No exemplo, o esvaziamento do `array [3, 7, 9, 1, 0]` , se deu na seguinte sequência: `7 - 3 - 0 - 1 - 9`.

<br>

## Fila

A fila segue o princípio FIFO (First In, First Out), então o primeiro elemento a ser removido será o elemento que entrou primeiro na fila. Veja no código abaixo:

```jsx
// Criação da Estrutura Fila
const fila = [];

// Função para a inserção dos elementos.
function enfileirar(elemento) {
	fila.push(elemento);
}

// Função para a remoção dos Itens
function desenfileirar() {
	if(fila.length === 0) {
		return null;
	} else {
		return fila.shift();
	}
}

// Inserção dos elementos
enfileirar(3);
enfileirar(7);
enfileirar(9);
enfileirar(1);
enfileirar(0);
console.log(fila); // Saída: [ 3, 7, 9, 1, 0 ]

// Remoção dos elementos
desenfileirar()
console.log(fila); // Saída: [ 7, 9, 1, 0 ]
desenfileirar()
console.log(fila); // Saída: [ 9, 1, 0 ]
desenfileirar()
console.log(fila); // Saída: [ 1, 0 ]
desenfileirar()
console.log(fila); // Saída: [ 0 ]
desenfileirar()
console.log(fila); // Saída: []
```

É possível notar, no exemplo acima, que o esvaziamento da fila segue um padrão que já foi mencionado acima. Assim,  o esvaziamento do `array [3, 7, 9, 1, 0]`, se dará na seguinte ordem: `3 - 7 - 9 - 1 - 0`.

<br>

## Pilha

A pilha segue o princípio LIFO (Last In, First Out), o último item a ser adicionado será o primeiro a ser removido. Vejamos no código abaixo:

```jsx
// Criação da estrutura Pilha
const pilha = [];

// Função para a inserção dos elementos.
function empilhar(elemento) {
	pilha.push(elemento);
}

// Função para a remoção dos Itens
function desempilhar() {
	if(pilha.length === 0) {
		return null;
	} else {
		return pilha.pop();
	}
}

// Inserção dos elementos
empilhar(3);
empilhar(7);
empilhar(9);
empilhar(1);
empilhar(0);
console.log(pilha); // Saída: [ 3, 7, 9, 1, 0 ]

// Remoção dos elementos
desempilhar()
console.log(pilha); // Saída: [ 3, 7, 9, 1 ]
desempilhar()
console.log(pilha); // Saída: [ 3, 7, 9 ]
desempilhar()
console.log(pilha); // Saída: [ 3, 7 ]
desempilhar()
console.log(pilha); // Saída: [ 3 ]
desempilhar()
console.log(pilha); // Saída: []
```

No esvaziamento do  `array [3, 7, 9, 1, 0]`, utilizando a função desempilhar da pilha, conseguimos a seguinte sequência: `0 - 1 - 9 - 7 - 3`.
