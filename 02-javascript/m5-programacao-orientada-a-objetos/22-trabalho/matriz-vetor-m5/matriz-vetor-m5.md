# Resolução do problema

Para representar a estrutura segue o código:

```jsx
const cadastro = [];

const nomes = ['José', 'David', 'Maria', 'Igor'];
const idades = [19, 22, 25, 18];
const salarios = [1900, 2500, 3400, 2100];
const temEnsinoMedio = [true, false, true, false];

cadastro.push(nomes, idades, salarios, temEnsinoMedio);
console.log(cadastro);

imprimeCadastro(cadastro);

function imprimeCadastro(cadastro) {
    for (let i = 0; i < cadastro.length; i++) {
        console.log('-------------');
        for (let j = 0; j < cadastro.length; j++) {
            console.log(cadastro[j][i]);
        }
        console.log('-------------');
    }
}

/*
[
  [ 'José', 'David', 'Maria', 'Igor' ],
  [ 19, 22, 25, 18 ],
  [ 1900, 2500, 3400, 2100 ],
  [ true, false, true, false ]
]
-------------
José
19
1900
true
-------------
-------------
David
22
2500
false
-------------
-------------
Maria
25
3400
true
-------------
-------------
Igor
18
2100
false
-------------
*/
```
