const listaPessoas = [
    pessoaUm = {
        nome: 'Marcelo Sodré',
        idade: 32,
        profissao: 'Programador',
        cidade: 'Ipojuca'
    },

    pessoaDois = {
        nome: 'Priscilla Aquila',
        idade: 30,
        profissao: 'Administradora',
        cidade: 'Recife'
    },

    pessoaTres = {
        nome: 'Matheus Correia',
        idade: 31,
        profissao: 'Camioneiro',
        cidade: 'Olinda'
    },

    pessoaQuatro = {
        nome: 'Camila Raposo',
        idade: 29,
        profissao: 'Advogada',
        cidade: 'Paulista'
    }
];

function imprimePessoas(lista) {
    for (const pessoa of lista) {
        for (const propriedade in pessoa) {
            console.log(`${propriedade}: ${pessoa[propriedade]}`);
        }
        console.log('---------------------------');
    }
}

imprimePessoas(listaPessoas);