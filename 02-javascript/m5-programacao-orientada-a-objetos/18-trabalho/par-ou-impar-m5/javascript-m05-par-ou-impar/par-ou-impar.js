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

console.log(adivinhaParOuImpar('a'));
console.log(adivinhaParOuImpar(5));
console.log(adivinhaParOuImpar(2));
