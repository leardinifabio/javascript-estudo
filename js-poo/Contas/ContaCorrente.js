import {
    Conta
} from "./Conta.js";

export class ContaCorrente extends Conta {

    static numeroDeContas = 0

    constructor(agecia, cliente) {
        ContaCorrente.numeroDeContas++;
        super(agecia, cliente);
    }

    sacar(valor) {
        let taxa = 1.05;
        return this._sacar(valor, taxa);
    }

}