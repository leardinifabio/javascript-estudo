// Todo arquivo que representa uma classe, deve começar com letra maiúscula;
// Classe Conta = Classe abstrata;

import {
    Cliente
} from "../Cliente.js"

export class Conta {

    constructor(agencia, cliente) {
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instanciar um objeto do tipo Conta diretamente, pois ela é uma classe abstrata.");
        }
        this.agencia = agencia;
        this._cliente = cliente;
        this._saldo = 0;
    }

    static numeroDeContas = 0

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor;
        }
    }

    get saldo() {
        return this._saldo;
    }

    _sacar(valor, taxa) {
        const valorSacado = taxa * valor;
        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado;
            return valorSacado;
        }
    }

    //Médoto abstrato, necessário ser sobrescrito.
    sacar(valor) {
        throw new Error("Esse método é abstrato, necessário ser sobrescrito.")
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