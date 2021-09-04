// Todo arquivo que representa uma classe, deve começar com letra maiúscula;

export class Cliente { //criando molde com propriedades do cliente.
    nome;
    _cpf;

    get cpf() {
        return this._cpf;
    }

    constructor(nome, cpf) {
        this.nome = nome;
        this._cpf = cpf;
    }

}