import {
    Conta
} from "./Conta.js";

export class ContaSalario extends Conta {

    static numeroDeContas = 0;

    constructor(agencia, cliente) {
        ContaSalario.numeroDeContas++;
        super(agencia, cliente);
    }

    sacar(valor) {
        const taxa = 1.0;
        return this._sacar(valor, taxa);
    }

}