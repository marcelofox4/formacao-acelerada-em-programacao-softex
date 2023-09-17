const bancoDeDados = [];

module.exports = {
	inserirUsuario(nome, senha, email) {
        let usuario = {
            nome: nome,
            senha: senha,
            email: email
        };
    
        bancoDeDados.push(usuario);
    },

    exibir() {
        console.table(bancoDeDados);
    }
}