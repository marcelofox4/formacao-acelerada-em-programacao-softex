function imprimeConteudo() {
    console.log('Conteúdo da variável varBoolean:', varBoolean);
    console.log('Conteúdo da variável varBigInt:', varBigInt);
    console.log('Conteúdo da variável varString:', varString);
    console.log('Conteúdo da variável varSymbol:', varSymbol);
    console.log('---------------------------------------------')
}

let varBoolean;
let varBigInt;
let varString;
let varSymbol;

imprimeConteudo();

varBoolean = null;
varBigInt = null;
varString = null;
varSymbol = null;

imprimeConteudo();

varBoolean = true;
varBigInt = 9007199254740991n;
varString = 'Isso é uma String, ou seja, uma cadeia de caracteres.';
varSymbol = Symbol('valorUnico');

imprimeConteudo();

console.log(typeof varBoolean);
console.log(typeof varBigInt);
console.log(typeof varString);
console.log(typeof varSymbol);