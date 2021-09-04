import {
    Cliente
} from "./Cliente.js";

import {
    ContaCorrente
} from "./ContaCorrente.js";

const cliente1 = new Cliente("Ricardo", 13000177700); //instanciando objeto.
const contaCorrente1 = new ContaCorrente(1370, cliente1);

const cliente2 = new Cliente("Alice", 13000066699);
const contaCorrente2 = new ContaCorrente(1370, cliente2);

console.log(cliente1);
console.log(cliente2);