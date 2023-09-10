# Resolução do problema

Meu código em JavaScript ficou assim:

```jsx
const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

function calculaIdade(anoNascimento) {
    if(!isNaN(anoNascimento)) {
        if(anoNascimento >= 1922 && anoNascimento <= 2021) {
            return anoAtual - anoNascimento
        } else {
            throw new Error('Digite apenas um ano de nascimento entre 1922 e 2021');
        }
    } else {
        throw new Error('Opção Inválida, Digite apenas numeros na opção de Ano de Nascimento!');
    }
}

let nome = prompt("Digite o seu nome completo: ");
while(true) {
    try {
		//Tirei o nome do loop por ter analisado, e por recomendação, que, 
		//realmente, é desnecessário, e deixa a interação com o usuário bem chata,
		//pois toda vez que ocorre um erro o programa pede, como entrada, o nome.
        //let nome = prompt("Digite o seu nome completo: ");
        let anoNascimento = Number(prompt("Digite o ano do seu nascimento: "));
        
        console.log(`${nome} faz em ${anoAtual}, ${calculaIdade(anoNascimento)} anos.`)
        break;
    }catch(error) {
        console.log("Digite as informações corretas: " + error)
    }
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

<br>

## Observações sobre o meu algoritmo

Na descrição do problema, usa-se o ano atual como 2022, mas tentei pegar o ano atual corrente no sistema, assim o programa sempre irá “rodar” tendo como base o ano atual. Para isso, utilizei `new Date()` para instanciar um objeto da classe `Date`, agora basta apenas pegar o ano com método `getFullYear()`, que retorna o ano no formato `(YYYY)`. Essas informações consegui em pesquisa no Google, a fonte é:

[Como resgatar o ano atual com JavaScript | Hora de Codar](https://horadecodar.com.br/como-resgatar-o-ano-atual-com-javascript/)

<br>

Outra pesquisa que realizei, foi em relação a como conseguir saber se o input digitado pelo usuário é um número, então achei o método `isNaN()` que retorna `true` se um valor for NaN (Not -a-Number), então apenas neguei o método para que só fosse possível receber números na minha função `calculaIdade()`, casso contrário, lanço um erro para que seja capturado no meu programa. As informações vieram de uma pesquisa, cuja fonte é:

[JavaScript isNaN() Method](https://www.w3schools.com/jsref/jsref_isnan.asp)
