
console.log(`Trabalhando com listas`) //Uso da crase para 

const listaDeDestinos = new Array (
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

listaDeDestinos.push(`Curitiba`) //adicionando um item na listagem;
console.log(listaDeDestinos); //imprimindo a lista de destinos;

listaDeDestinos.splice(1,1); //remove um item da lista de destinos de acordo com sua posição - lembrando que o primeiro item de toda lista vai ser a posição 0.
console.log(listaDeDestinos); //imprimindo a lista de destinos;