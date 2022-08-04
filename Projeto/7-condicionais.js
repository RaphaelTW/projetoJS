console.log(`Trabalhando com condicionais`);

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

const idadeComprador = 18; 
const estaAcompanhada = true;
const temPasssagemComprada = true;

console.log ("Destinos Possiveis:");
console.log (listaDeDestinos);

//if(idadeComprador >= 18){
    //console.log("Comprador Maior de Idade");   
//listaDeDestinos.splice(4,1); //removendo item
//}else{
    //a pessoa é meor de idade
    //if(estaAcompanhada){
        //console.log("Comprador está acompanho");
        //listaDeDestinos.splice(4,1); //removendo item
    //}else{
    //}
    //console.log("Comprador Não é Maior de Idade!");
//}

if(idadeComprador >= 18 || estaAcompanhada == true){
    console.log("Boa Viagem!");
    listaDeDestinos.splice(4,1); //removendo item
}else{
    console.log("Comprador Não é Maior de Idade!");
}

console.log("Embarque: \n\n");
if(idadeComprador && temPasssagemComprada){
    console.log("Boa Viagem");
}else{
    console.log("Você não pode embarcar");
}


console.log(listaDeDestinos[1]);