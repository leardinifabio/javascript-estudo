class Cliente { //criando molde com propriedades do cliente.
    nome;
    cpf;
    agencia;
    saldo;
}

const cliente1 = new Cliente(); //instanciando objeto.
const cliente2 = new Cliente();

cliente1.nome = "Ricardo";
cliente1.cpf = 13000177700;
cliente1.agencia = 1370;
cliente1.saldo = 0;

cliente2.nome = "Alice";
cliente2.cpf = 13000066699;
cliente2.agencia = 1370;
cliente2.saldo = 3000;

console.log(cliente1);
console.log(cliente2);