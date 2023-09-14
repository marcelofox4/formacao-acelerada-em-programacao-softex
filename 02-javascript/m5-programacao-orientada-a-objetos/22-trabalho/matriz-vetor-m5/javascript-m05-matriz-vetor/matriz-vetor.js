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
        console.log('-------------')
        for (let j = 0; j < cadastro.length; j++) {
            console.log(cadastro[j][i]);
        }
        console.log('-------------')
    }
}