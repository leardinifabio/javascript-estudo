import {
    Conta
} from "./Conta.js";



export class ContaPoupanca extends Conta {

    static numeroDeContas = 0

    constructor(agencia, cliente) {
        ContaPoupanca.numeroDeContas++;
        super(agencia, cliente);
    }

    sacar(valor) {
        return this._sacar(valor);
    }

}