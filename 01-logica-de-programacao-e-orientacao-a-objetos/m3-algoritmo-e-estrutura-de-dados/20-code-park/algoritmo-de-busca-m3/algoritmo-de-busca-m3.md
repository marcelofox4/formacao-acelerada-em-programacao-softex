# Resolução do problema

Será utilizado por mim o **Algoritmo de Busca Sequêncial**, pois o `array [15, 8, 10, 25, 12, 30, 5, 20, 18, 7]` tem as características necessárias, como: itens desordenados e uma estrutura pequena  para utilizar esse tipo de busca.

Aqui está a implementação do algoritmo:

```jsx
function ordenacaoLinear(array, elementoBuscado) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === elementoBuscado) {
            return i;
        }
    }
    return -1;
}

const array = [15, 8, 10, 25, 12, 30, 5, 20, 18, 7];
let elemento = 20;
let indiceElemento = ordenacaoLinear(array, elemento);

if(indiceElemento !== -1) {
    console.log(`O elemento buscado está no indice (${indiceElemento }).`)
} else {
    console.log(`O elemento (${elemento}) não foi encontrado no Array!`)
}

//Saída: O elemento buscado está no indice: 7.
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
