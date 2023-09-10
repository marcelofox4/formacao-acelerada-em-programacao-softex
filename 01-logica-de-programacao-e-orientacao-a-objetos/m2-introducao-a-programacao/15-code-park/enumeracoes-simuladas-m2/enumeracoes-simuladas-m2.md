# Resolução do problema

O meu algoritmo ficou da seguinte forma:

```jsx
const candidatos = {
    candidato_X: 889,
    candidato_Y: 847,
    candidato_Z: 515,
    branco: 0
};

var votos_candidato_X = 0, votos_candidato_Y = 0, votos_candidato_Z = 0, votos_brancos = 0, votos_nulos = 0;

function contabilizacao_votos(candidato) {
    if(candidato == candidatos.candidato_X) {
        votos_candidato_X++;
    } else if(candidato == candidatos.candidato_Y) {
        votos_candidato_Y++;
    } else if(candidato == candidatos.candidato_Z) {
        votos_candidato_Z++;
    } else if(candidato == candidatos.branco) {
        votos_brancos++;
    } else {
        votos_nulos++;
    }
}

let numero_candidato, voto_branco, opcao = 0;

console.log(`Informações IMPORTANTES sobre o VOTO:
- Para voto em BRANCO digite o número 0;
- Caso você erre o número do seu canditado, o voto será computado como NULO;
`)

while(opcao != 2) {
    opcao = 0;
    numero_candidato = Number(prompt(`
Digite o número do seu Candidato: `));  

    if(isNaN(numero_candidato)) {
        console.log(
        `Por favor Digite apenas NÚMEROS!
        `);
        continue;
    }
    
    contabilizacao_votos(numero_candidato);
    
    while(opcao != 1 && opcao != 2) {
        opcao = Number(prompt(
    `Você deseja continuar a votação?
    SIM = Digite 1
    NÃO = Digite 2
    ---> `));
    
        if(opcao != 1 && opcao != 2) {
            console.log(`
        Opção ERRADA, é necessário que seja escolhida uma das duas opções!
        `);
        }
    }
}

console.log(`
VOTAÇÃO FINALIZADA!
`);

if(votos_candidato_X > votos_candidato_Y && votos_candidato_X > votos_candidato_Z) {
    console.log(`
    Candidato X é o VENCEDOR!
    `);
} else if(votos_candidato_Y > votos_candidato_X && votos_candidato_Y > votos_candidato_Z) {
    console.log(`
    Candidato Y é o VENCEDOR!
    `);
} else if(votos_candidato_Z > votos_candidato_X && votos_candidato_Z > votos_candidato_Y) {
    console.log(`
    Candidato Z é o VENCEDOR!
    `);
} else {
    console.log(`
    Não houve Ganhador, favor verificar o Resultado da Votação.
    `);
}

console.log(`
RESULTADO DA VOTAÇÃO
O Canditado X: ${votos_candidato_X} voto(s);
O Canditado Y: ${votos_candidato_Y} voto(s);
O Canditado Z: ${votos_candidato_Z} voto(s);

Nulos: ${votos_nulos} voto(s);
Brancos: ${votos_brancos} voto(s);
`)
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
