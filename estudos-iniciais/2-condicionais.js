console.log(`Trabalhando com condicionais`) //Uso da crase para 

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 15; //declarando uma variável;
const estaAcompanhado = true;

console.log(`Destinos possíveis`); //imprimindo o texto entre ``;
console.log(listaDeDestinos); //imprimindo a lista de destinos;

if (idadeComprador >= 18 || estaAcompanhado == true) { //determina as condicionais para executar a ação dentro do { }; || = ou; && = e;
    console.log(`Boa Viagem!!!`);
    listaDeDestinos.splice(1, 1); //remove um item da lista de destinos de acordo com sua posição - lembrando que o primeiro item de toda lista vai ser a posição 0.
} else {
    console.log(`Comprador não é maior de idade e não está acompanhado. Não posso vender a passagem`);
}
console.log(listaDeDestinos); //imprimindo a lista de destinos;