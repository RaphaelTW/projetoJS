console.log(`Trabalhando com listas`);
// const salavdor = `Salvador`;
// const saoPaulo = `São Paulo`;
// const rioDeJaneiro = `Rio de Janeiro`;

const listaDeDestinos = new Array(
    `São paulo`,
    `Rio de Janeiro`,
    `Salvador`,
    `Curitiba`,
    `Florianopoles`,
    `Porto Alegre`,
    `Belo Horizonte`,
    `Recife`,
    `Fortaleza`,
)

listaDeDestinos.push(`Bahia`) // adicionando um item na minha lista

console.log ("Destinos Possiveis:");
console.log (listaDeDestinos);

listaDeDestinos.splice(4,1);
console.log(listaDeDestinos[1]);