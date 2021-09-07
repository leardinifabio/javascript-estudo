import {
    Cliente
} from "./Cliente.js";

import {
    ContaCorrente
} from "./Contas/ContaCorrente.js";

import {
    ContaPoupanca
} from "./Contas/ContaPoupanca.js";

import {
    ContaSalario
} from "./Contas/ContaSalario.js";

import {
    Diretor
} from "./Funcionarios/Diretor.js";
import {
    Gerente
} from "./Funcionarios/Gerente.js";

import {
    SistemaAutenticacao
} from "./SistemaAutenticacao.js";


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
console.log('O ByteBank possui' + ' ' + ContaSalario.numeroDeContas + ' ' + 'Conta(s) Corrente(s)');

const diretor = new Diretor("Rafael", 10000, 12345678900);
diretor.cadastrarSenha(123456);

const gerente = new Gerente("Viviane", 8000, 12345678901);
gerente.cadastrarSenha(654321);

const diretorEstaLogado = SistemaAutenticacao.login(diretor, 123456);
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, 654321);
console.log(diretorEstaLogado, gerenteEstaLogado);