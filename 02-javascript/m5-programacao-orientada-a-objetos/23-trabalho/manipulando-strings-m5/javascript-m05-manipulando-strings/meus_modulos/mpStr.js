module.exports = {
    capitalizer(string) {
        let newString = string.charAt(0).toUpperCase() + string.substr(1);
        return newString;
    },
    
    mensagemConfirmacao(nomeUsuario) {
        let mensagem = 'Olá, usuario, seu cadastro foi realizado com sucesso!'
        return mensagem.replace('usuario', nomeUsuario);
    }
}