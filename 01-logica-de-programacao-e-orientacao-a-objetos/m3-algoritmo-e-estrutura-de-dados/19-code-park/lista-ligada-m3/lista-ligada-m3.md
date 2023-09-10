# Resolução do problema

No meu projeto implementei a classe `NoPessoa` para representar a pessoa e a classe `ListaLigada`, para manipulação da estrutura. Segue abaixo o código:

```jsx
class NoPessoa {
    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        this.proximoNo = null;
    }
}

class ListaLigada {
    constructor() {
        this.cabeca = null;
    }
    
    addInicio(nome, idade) {
        const novoNoPessoa = new NoPessoa(nome, idade);
        novoNoPessoa.proximoNo = this.cabeca;
        this.cabeca = novoNoPessoa;
    }
    
    addFinal(nome, idade) {
        const novoNoPessoa = new NoPessoa(nome, idade);
        if(!this.cabeca) {
            this.cabeca = novoNoPessoa;
        } else {
            let noAtual = this.cabeca;
            while(noAtual.proximoNo) {
                noAtual = noAtual.proximoNo;
            }
            noAtual.proximoNo = novoNoPessoa;
        }
    }
    
    removeInicio() {
        if(!this.cabeca) {
            return null;
        }
        const noRemovido = this.cabeca;
        this.cabeca = this.cabeca.proximoNo;
        noRemovido.proximo = null;
        return noRemovido;
    }
    
    removeFinal() {
        if(!this.cabeca) {
            return null;
        }
        
        if(!this.cabeca.proximoNo) {
            const noRemovido = this.cabeca;
            this.cabeca = null;
            return noRemovido;
        }
        
        let noAtual = this.cabeca;
        let noAnterior = null;
        while(noAtual.proximoNo) {
            noAnterior = noAtual;
            noAtual = noAtual.proximoNo;
        }
        noAnterior.proximoNo = null;
        return noAtual;
    }
    
    procurar(nome) {
        let noAtual = this.cabeca;
        while(noAtual) {
            if(noAtual.nome === nome) {
                return noAtual;
            }
            noAtual = noAtual.proximoNo;
        }
        return null;
    }
    
    tamanho() {
        let contador = 0;
        let noAtual = this.cabeca;
        while(noAtual) {
            contador++;
            noAtual = noAtual.proximoNo;
        }
        return contador;
    }
    
    imprime() {
        let noAtual = this.cabeca;
        while(noAtual) {
            console.log(`Pessoa[Nome: ${noAtual.nome} - Idade: ${noAtual.idade}]`)
            noAtual = noAtual.proximoNo;
        }
    }
}

listaPessoas = new ListaLigada();

listaPessoas.addFinal('Marcelo', 32);
listaPessoas.addFinal('Priscilla', 30);
listaPessoas.addFinal('Marcely', 10);
listaPessoas.addFinal('Lucas', 1);
console.log('LISTA DAS PESSOAS ADICIONADAS')
listaPessoas.imprime();
console.log('-----------------------------------------');

console.log('\nADICIONANDO UMA PESSOA NO INÍCIO')
listaPessoas.addInicio('Matheus', 31);
listaPessoas.imprime();
console.log('-----------------------------------------');

console.log('\nREMOVENDO UMA PESSOA NO INÍCIO')
listaPessoas.removeInicio();
listaPessoas.imprime();
console.log('-----------------------------------------');

console.log('\nREMOVENDO UMA PESSOA NO FINAL')
listaPessoas.removeFinal();
listaPessoas.imprime();
console.log('-----------------------------------------');

console.log('\nPROCURANDO UMA PESSOA NA LISTA')
console.log('Nome:', listaPessoas.procurar('Priscilla').nome, '- Idade: ', listaPessoas.procurar('Priscilla').idade);
console.log('-----------------------------------------');

console.log('\nO TAMANHO DA LISTA DE PESSOAS É:',listaPessoas.tamanho())
listaPessoas.imprime();
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
