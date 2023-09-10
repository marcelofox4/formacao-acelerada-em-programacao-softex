# Resolução do problema

O código em JavaScript ficou da seguinte maneira:

```jsx
function imprimeListas() {
    console.log("Lista dos itens:");
    for(let i = 0; i < nomes.length; i++) {
    console.log("* Nome: ", nomes[i], " - Idade: ", idades[i], " - Cor Favorita: ", coresFavoritas[i], ";");
    }
    console.log("\\n")
}

let nomes = ['Marcelo', 'Camila', 'Priscilla', 'Vania', 'Matheus', 'Mércia', 'Lucas', 'Marcely', 'Amaro', 'Paulo'];

let idades = [32, 29, 30, 52, 31, 83, 1, 10, 85, 56];

let coresFavoritas = ['preto', 'amarelo', 'azul', 'roxo', 'verde', 'vermelho', 'azul-marinho', 'laranja', 'violeta'];

imprimeListas();

//Alteração da Cor favorita de Marcelo de 'preto' para 'black'.
coresFavoritas.splice(0, 1, 'black');

//Alteração da Idade de 'Matheus' de 31 para 40.
idades.splice(4, 1 , 40);

imprimeListas();
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
