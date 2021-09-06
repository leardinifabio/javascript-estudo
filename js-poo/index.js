import {
    Cliente
} from "./Cliente.js";

import {
    Conta
} from "./Contas/Conta.js";

import {
    ContaCorrente
} from "./Contas/ContaCorrente.js";

import {
    ContaPoupanca
} from "./Contas/ContaPoupanca.js";


const cliente1 = new Cliente("Ricardo", 13000177700); //instanciando objeto.
const conta01 = new ContaCorrente(1370, cliente1);

const cliente2 = new Cliente("Alice", 13000066699);
const conta02 = new ContaPoupanca(1370, cliente2);

//const contaTeste = new Conta(1370, cliente1); (teste de erro ao quando dev tenta instanciar um objeto Conta);

conta01.depositar(5000);
conta02.depositar(5000);

conta01.sacar(4000);
conta02.sacar(4000);

console.log(conta01);
console.log(conta02);

console.log('O ByteBank possui' + ' ' + ContaCorrente.numeroDeContas + ' ' + 'Conta(s) Corrente(s)');
console.log('O ByteBank possui' + ' ' + ContaPoupanca.numeroDeContas + ' ' + 'Conta(s) Corrente(s)');