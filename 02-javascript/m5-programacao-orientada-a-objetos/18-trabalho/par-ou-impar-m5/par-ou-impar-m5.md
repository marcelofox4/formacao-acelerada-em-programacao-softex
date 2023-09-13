# Resolução do problema

O código da resolução da atividade:

```jsx
function adivinhaParOuImpar(opcao) {
    if(!isNaN(opcao)) {
        if(opcao % 2 == 0) {
            return 'Par';
        } else {
            return 'Ímpar';
        }
    } else {
        return 'Não é um número!';
    }
}

console.log(adivinhaParOuImpar('a')); // Saída: Não é um número!
console.log(adivinhaParOuImpar(5)); // Saída: Ímpar
console.log(adivinhaParOuImpar(2)); // Saída: Par
```

<br>

O link do projeto completo está logo abaixo:

[javascript-m05-par-ou-impar]()
