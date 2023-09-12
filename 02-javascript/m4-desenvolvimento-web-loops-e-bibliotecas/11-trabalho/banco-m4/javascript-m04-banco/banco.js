class Banco {

    constructor(agencia, conta, saldo, tipoDeConta) {
        this.agencia = agencia;
        this.conta = conta;
        this.saldo = saldo;
        this.tipoDeConta = tipoDeConta;
    }

	buscarSaldo() {
        return this.saldo;
    };

	deposito(valor) {
        this.saldo += valor;
    }

	saque(valor){
		if(this.saldo > 0) {
			this.saldo -= valor;
            if(Math.sign(this.saldo) === -1) {
                this.saldo += valor;
                throw new Error('Saldo indisponível!');
            }
	    }
    }

	numeroDaConta() {
        return this.conta;
    }

    toString() {
        console.log(`+----------------------------+\n   Agência: ${this.agencia}\n   Conta: ${this.conta}\n   Saldo: ${this.saldo}\n   Tipo: ${this.tipoDeConta}\n+----------------------------+`);
    }
}

let usuarioContaUm = new Banco('01', '0001', 350, 'Conta-Corrente');
let usuarioContaDois = new Banco('02', '0002', 0, 'Conta-Corrente');

try {
    console.log("+----------------------------+");
    console.log("|         Usuário 01         |");
    console.log("+----------------------------+");
    usuarioContaUm.toString();

    console.log('\nSaldo:', usuarioContaUm.buscarSaldo());

    usuarioContaUm.deposito(200);
    console.log('\nDeposito Realizado!');
    console.log('\nSaldo:', usuarioContaUm.buscarSaldo());

    usuarioContaUm.saque(350);
    console.log('\nSaque Realizado!');
    console.log('\nSaldo:', usuarioContaUm.buscarSaldo());

    console.log('\nNúmero da Conta:', usuarioContaUm.numeroDaConta());

    usuarioContaUm.saque(202);
    console.log(usuarioContaUm.buscarSaldo());
} catch (error) {
    console.log(error);
}

usuarioContaUm.toString();

console.log('\n\n\n')

try {
    console.log("+----------------------------+");
    console.log("|         Usuário 02         |");
    console.log("+----------------------------+");
    usuarioContaDois.toString();

    console.log('\nSaldo:', usuarioContaDois.buscarSaldo());

    usuarioContaDois.deposito(1000);
    console.log('\nDeposito Realizado!');
    console.log('\nSaldo:', usuarioContaDois.buscarSaldo());

    usuarioContaDois.saque(350);
    console.log('\nSaque Realizado!');
    console.log('\nSaldo:', usuarioContaDois.buscarSaldo());

    console.log('\nNúmero da Conta:', usuarioContaDois.numeroDaConta());

    usuarioContaDois.saque(200);
    console.log(usuarioContaDois.buscarSaldo());
} catch (error) {
    console.log(error);
}

usuarioContaUm.toString();