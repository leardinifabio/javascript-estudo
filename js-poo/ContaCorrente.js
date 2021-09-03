// Todo arquivo que representa uma classe, deve começar com letra maiúscula;

export class ContaCorrente {
    agencia;
    _saldo;

    _saldo = 0;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            return valor;
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}