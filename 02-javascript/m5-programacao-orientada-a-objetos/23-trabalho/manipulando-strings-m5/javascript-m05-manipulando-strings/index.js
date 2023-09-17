const bd = require('./meus_modulos/bancoDeDados');
const mpStr = require('./meus_modulos/mpStr');
const prompt = require('prompt-sync')();

console.log('+-----------------------+');
console.log('|  Cadastro de Usuário  |');
console.log('+-----------------------+');

let opcao = 0;
while(opcao == 0) {
    let nome = prompt('Digite seu Nome: ');
    let email = prompt('Digite seu E-mail: ');
    let senha = prompt('Digite sua Senha: ');

    console.log('')
    bd.inserirUsuario(nome, senha, email);
    let nomeCapitalizer = mpStr.capitalizer(nome);
    console.log(mpStr.mensagemConfirmacao(nomeCapitalizer));

    opcao = Number(prompt('Se Deseja continuar digite 0: '));
    console.log("")
}

bd.exibir();