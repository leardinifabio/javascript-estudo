// Todo arquivo que representa uma classe, deve começar com letra maiúscula;

export class Cliente { //criando molde com propriedades do cliente.

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf, senha) {
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }
}