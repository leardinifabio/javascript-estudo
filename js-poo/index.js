import {
    Cliente
} from "./Cliente.js";

import {
    Conta
} from "./Contas/Contas.js";

const cliente1 = new Cliente("Ricardo", 13000177700); //instanciando objeto.
const conta01 = new Conta(1370, cliente1);

const cliente2 = new Cliente("Alice", 13000066699);
const conta02 = new Conta(1370, cliente2);

conta01.depositar(5000);
conta01.sacar(4950);

console.log(conta01);
console.log(conta02);
console.log('O ByteBank possui' + ' ' + Conta.numeroDeContas + ' ' + 'contas');