class Conta {
    constructor(usuario, senha, saldo) {
        if (typeof Conta.numeroConta === 'undefined') {
            Conta.numeroConta = 1;
        } else {
            Conta.numeroConta++;
        }

        this.banco = 'Softex Bank';
        this.conta = Conta.numeroConta;
        this.usuario = usuario;
        this.senha = senha;
        this.login = false;
        this.saldo = saldo;
    }

    acessar(usuario, senha) {
        if (usuario === this.usuario && senha === this.senha) {
            this.login = true;
            console.log(`Bem-vindo a sua conta ${this.usuario}.`);
            return;
        }
        console.log('Usuário ou senha incorreto!');
    }

    sair() {
        if (this.login === true) {
            this.login = false;
            console.log('Volte sempre!');
            return;
        }
    }

    depositar(valor) {
        if (this.login === true) {
            this.saldo += valor;
            console.log(`Deposito de R$ ${valor} concluido.`);
            return;
        }
        console.log('Não é possível depositar, é necessário acessar a conta!');
    }

    sacar(valor) {
        if (this.login === true) {
            if(this.saldo > 0) {
                this.saldo -= valor;
                if(Math.sign(this.saldo) === -1) {
                    this.saldo += valor;
                    console.log('Saldo indisponível!');
                    return;
                }
            }
        }
    }

    verSaldo() {
        if (this.login === true) {
            console.log(`Seu saldo é: R$ ${this.saldo}`);
            return;
        }
        console.log('É necessário acessar uma Conta.')
    }

    mostrarDados() {
        if (this.login === true) {
            console.log(`\n+-----Conta de ${this.usuario}----+`);
            for (const prop in this) {
                console.log(`  ${prop}: ${this[prop]}`);
            }
            console.log(`+-------------------------+`);
        }
    }
}

let contaUm = new Conta('Marcelo', 'marcelo', 200.20);
contaUm.verSaldo();
contaUm.acessar('Marcelo', 'marcel');
contaUm.acessar('Marcelo', 'marcelo');
contaUm.verSaldo();
contaUm.mostrarDados();

console.log('************************************************')

let contaDois = new Conta('Priscilla', 'pri', 100);
contaDois.acessar('Priscilla', 'pri');
contaDois.mostrarDados();
contaDois.sacar(150);
contaDois.verSaldo();
contaDois.sair();
contaDois.mostrarDados();
contaDois.depositar();
