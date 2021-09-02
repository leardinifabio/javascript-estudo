class Cliente { //criando molde com propriedades do cliente.
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    _saldo;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
        }
    }
}

const cliente1 = new Cliente(); //instanciando objeto.
cliente1.nome = "Ricardo";
cliente1.cpf = 13000177700;

const contaCorrenteRicardo = new ContaCorrente();
contaCorrenteRicardo.agencia = 1370;
contaCorrenteRicardo._saldo = 0;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 13000066699;

const contaCorrenteAlice = new ContaCorrente();
contaCorrenteAlice.agencia = 1370;
contaCorrenteAlice._saldo = 3000;