import {
    Cliente
} from "./Cliente.js";

import {
    ContaCorrente
} from "./ContaCorrente.js";

const cliente1 = new Cliente(); //instanciando objeto.
cliente1.nome = "Ricardo";
cliente1.cpf = 13000177700;

const contaCorrente1 = new ContaCorrente();
contaCorrente1.cliente = cliente1;
contaCorrente1.agencia = 1370;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 13000066699;

const contaCorrente2 = new ContaCorrente();
contaCorrente2.cliente = cliente2;
contaCorrente2.agencia = 1370;

contaCorrente1.depositar(3000);
contaCorrente1.transferir(3000, contaCorrente2);

console.log(contaCorrente1);
console.log(contaCorrente2);