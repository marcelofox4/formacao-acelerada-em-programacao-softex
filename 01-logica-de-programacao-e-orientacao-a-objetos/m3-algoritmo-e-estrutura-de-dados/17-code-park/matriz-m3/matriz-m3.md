# Resolução do problema

A minha matriz ficará da seguinte forma:

| Espécie  | Nome   | idade |
| -------- | ------ | ----- |
| Elefante | Dumbo  | 8     |
| Leão     | Simba  | 10    |
| Arara    | Azul   | 12    |
| Cachorro | Scooby | 14    |

<br>

Implementação da matriz em JavaScript

```jsx
// Criação da Matriz 4x3
let animais = [
	['Elefante', 'Dumbo', 8],
	['Leão', 'Simba', 10],
	['Arara', 'Azul', 12],
	['Cachorro', 'Scooby', 14]
];

// Função para imprimir a Matriz, animais, no console
function impressaoAnimais(matrizAnimais) {
    console.log('_________________________________')
    console.log('******** Lista de Animais *******');
    console.log('_________________________________');
    for(let animal = 0; animal < matrizAnimais.length; animal++) {
        console.log('Caracteristica do(a) -', matrizAnimais[animal][0])
	    for(let caracteristicas = 1; caracteristicas < matrizAnimais[animal].length; caracteristicas++) {
	        if(caracteristicas == 1) {
	        console.log('Nome: ', matrizAnimais[animal][caracteristicas]);
	        } else {
	        console.log('Idade: ', matrizAnimais[animal][caracteristicas]);
	        }
	    }
	    console.log('---------------------------------');
    }
}

// Impressão da matriz
impressaoAnimais(animais);

// Inserção de mais um animal na lista
animais.push(['Gato', 'Tom', 6]);

// Impressão com o animal adicionado
impressaoAnimais(animais);
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
