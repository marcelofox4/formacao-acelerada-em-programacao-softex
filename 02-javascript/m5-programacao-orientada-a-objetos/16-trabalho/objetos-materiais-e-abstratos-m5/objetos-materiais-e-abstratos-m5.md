# Resolução do problema

Na POO o intuito é aproximar o mundo em que vivemos para a lógica computacional, então tudo é considerado um objeto, então para resolução do problema, vamos aos tipos desses objetos:

## Objetos Materiais

### Carro

**Atributos**:

- Modelo;
- Cor;
- Ano;
- Ligado;.
- Andando;

**Métodos**:

- Ligar o motor;
- Desligar o motor;
- Acelerar;
- Frear.
- Mostrar atributos - Servirá pra “printar’ na tela os atributos do objeto.

<br>

Código da classe `Carro`:

```jsx
class Carro {
    constructor(modelo, cor, ano) {
        this.modelo = modelo;
        this.cor = cor;
        this.ano = ano;
        this.ligado = false;
        this.andando = false;
    }

    ligarMotor() {
        if (this.ligado === false) {
            console.log('Ligando o motor...');
            return this.ligado = true;
        }
        console.log('O motor já está ligado!')
    }

    desligarMotor() {
        if (this.ligado === true) {
            console.log('Desligando o motor...');
            return this.ligado = false;
        }
        console.log('O motor já está desligado!')
    }

    acelerar() {
        if (this.ligado === true) {
            console.log('Acelerando...');
            return this.andando = true;
        }
        console.log('O carro está desligado!');
    }

    frear() {
        if (this.andando === true) {
            console.log('Desacelerando...');
            return this.andando = false;
        }
        console.log('O carro já está parado!');
    }

    mostrarAtributos(carro) {
        console.log(`\\n+-----ATRIBUTOS----+`);
        for (const prop in carro) {
            console.log(`  ${prop}: ${carro[prop]}`);
        }
        console.log(`+------------------+`);
    }
}

let carroUm = new Carro('SUV', 'preto', 2023);

carroUm.mostraAtributos(carroUm);

carroUm.ligarMotor();
carroUm.acelerar();
carroUm.frear();

console.log(`+------------------+`);

let carroDois = new Carro('Esportivo', 'Vermelho', 2020);

carroDois.mostraAtributos(carroDois);

carroDois.desligarMotor()
carroDois.acelerar();

/*
Saída no console:

+-----ATRIBUTOS----+
  modelo: SUV
  cor: preto
  ano: 2023
  ligado: false
  andando: false
+------------------+
Ligando o motor...
Acelerando...
Desacelerando...
+------------------+

+-----ATRIBUTOS----+
  modelo: SUV
  cor: preto
  ano: 2023
  ligado: true
  andando: false
+------------------+
O motor já está desligado!
O carro está desligado!
*/
```

<br>

### Pessoa

**Atributos**:

- Nome;
- CPF;
- Idade;

**Métodos**:

- Apresentação;
- Fazer Aniversário;
- Mostrar atributos - Servirá pra “printar’ na tela os atributos do objeto.

<br>

Código da classe `Pessoa`:

```jsx
class Pessoa {
    constructor(nome, cpf, idade) {
        this.nome = nome,
        this.cpf = cpf,
        this.idade = idade
    }

    apresentacao() {
        console.log(`Olá, eu sou ${this.nome} e tenho ${this.idade} anos de idade!`);
    }

    fazerAniversario() {
        this.idade += 1
    }

    mostrarAtributos() {
        console.log(`\\n+-----ATRIBUTOS----+`);
        for (const prop in this) {
            console.log(`  ${prop}: ${this[prop]}`);
        }
        console.log(`+------------------+`);
    }
}

let pessoa = new Pessoa('Marcelo', '11122233344', 32);

pessoa.mostrarAtributos();
pessoa.apresentacao();
pessoa.fazerAniversario();
pessoa.mostrarAtributos();

/*
Saída no console:

+-----ATRIBUTOS----+
  nome: Marcelo
  cpf: 11122233344
  idade: 32
+------------------+
Olá, eu sou Marcelo e tenho 32 anos de idade!

+-----ATRIBUTOS----+
  nome: Marcelo
  cpf: 11122233344
  idade: 33
+------------------+
*/
```

<br>

## Objetos Abstratos

### Funcionário

**Atributos:**

- Nome;
- CPF;
- Departamento;
- Férias;

**Métodos:**

- Tirar Férias;
- Mudar Departamento;
- Mostrar atributos - Servirá pra “printar’ na tela os atributos do objeto.

<br>

Código da classe `Funcionario`:

```jsx
class Funcionario {
    constructor(nome, cpf, departamento) {
        this.nome = nome,
        this.cpf = cpf,
        this.departamento = departamento;
        this.ferias = false
    }

    tirarFerias() {
        if (this.ferias === false) {
            this.ferias = true;
            console.log('Tirar férias!');
            return;
        }
        console.log('Já está de férias!');
    }

    mudarDepartamento(novoDepartamento) {
        this.departamento = novoDepartamento;
    }

    mostrarAtributos(funcionario) {
        console.log(`\\n+-----ATRIBUTOS----+`);
        for (const prop in funcionario) {
            console.log(`  ${prop}: ${funcionario[prop]}`);
        }
        console.log(`+------------------+`);
    }
}

let funcionarioUm = new Funcionario('Marcelo', '11122233344', 'Desenvolvimento');

funcionarioUm.mostrarAtributos(funcionarioUm);

funcionarioUm.mudarDepartamento('Administrativo');
funcionarioUm.tirarFerias();

funcionarioUm.mostrarAtributos(funcionarioUm);

/*
Saída no console:

+-----ATRIBUTOS----+
  nome: Marcelo
  cpf: 11122233344
  departamento: Desenvolvimento
  ferias: false
+------------------+
Tirar férias!

+-----ATRIBUTOS----+
  nome: Marcelo
  cpf: 11122233344
  departamento: Administrativo
  ferias: true
+------------------+
*/
```

<br>

### Conta Bancária

**Atributos:**

- Banco;
- Número da Conta;
- Usuário;
- Senha;
- Saldo;
- Login.

**Métodos:**

- Acessar;
- Sair;
- Depositar;
- Sacar;
- Ver o Saldo.

<br>

Código da classe `Conta`:

```jsx
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
            console.log(`\\n+-----Conta de ${this.usuario}----+`);
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

/*
Saída no console:

É necessário acessar uma Conta.
Usuário ou senha incorreto!
Bem-vindo a sua conta Marcelo.
Seu saldo é: R$ 200.2

+-----Conta de Marcelo----+
  banco: Softex Bank
  conta: 1
  usuario: Marcelo
  senha: marcelo
  login: true
  saldo: 200.2
+-------------------------+
************************************************
Bem-vindo a sua conta Priscilla.

+-----Conta de Priscilla----+
  banco: Softex Bank
  conta: 2
  usuario: Priscilla
  senha: pri
  login: true
  saldo: 100
+-------------------------+
Saldo indisponível!
Seu saldo é: R$ 100
Volte sempre!
Não é possível depositar, é necessário acessar a conta!
*/
```

<br>

Link do projeto completo no link abaixo:

[javascript-m05-objetos-materiais-abstratos]()
