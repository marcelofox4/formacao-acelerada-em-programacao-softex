# Resolução do problema

Essa atividade fiz um pouco diferente, não fiz o meu algoritmo no Blockly, “codei” diretamente em JavaScript, utilizei um site apresentado pelo professor em sala de aula, o site é:

[Online JavaScript Compiler (Editor)](https://www.programiz.com/javascript/online-compiler/)

<br>

```jsx
let qtd_rodas, peso_bruto, qtd_pessoas

console.log("É necessário sabermos algumas caracteristicas do veículo que você deseja dirigir, para assim podermos indicar a melhor categoria para sua HABILITAÇÃO!\n")

qtd_rodas = prompt("Digite a QUANTIDADE DE RODAS do veículo: ")
peso_bruto = prompt("\nDigite o PESO BRUTO em quilogramas(Kg) do veículo: ")
qtd_pessoas = prompt("\nDigite a QUANTIDADE DE PESSOAS que o veículo suporta: ")

if(qtd_rodas >= 2 && qtd_rodas <=3) {
    console.log("A Categoria mais indicada para você é: A")
}else if(qtd_rodas == 4 && qtd_pessoas <= 8 && peso_bruto <= 3500) {
    console.log("A Categoria mais indicada para você é: B")
}else if(qtd_rodas >= 4 && (peso_bruto > 3500 && peso_bruto <= 6000)) {
    console.log("A Categoria mais indicada para você é: C")
}else if(qtd_rodas >= 4 && qtd_pessoas > 8) {
    console.log("A Categoria mais indicada para você é: D")
}else if(qtd_rodas >= 4 && peso_bruto > 6000) {
     console.log("A Categoria mais indicada para você é: E")
}else {
    console.log("Não existe categoria de Habilitação para o veículo com essas descrições!")
}
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
