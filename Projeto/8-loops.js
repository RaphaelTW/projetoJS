console.log(`\n Trabalhando com condicionais`);

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
    `João Pessoa`,
    `Goiana`,
);

const idadeComprador = 18; 
const estaAcompanhada = true;
let temPasssagemComprada = true;
const destino = "Salvador";

console.log ("\n Destinos Possiveis:");
console.log (listaDeDestinos);


const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
let destinoExiste = false;
while(contador<10){

    if(listaDeDestinos[contador] == destino){
        console.log("Destino Existe");
        destinoExiste = true;
        break;
    }
    contador +=1;
}

console.log("Destino Existe", destinoExiste);

if(podeComprar && destinoExiste){
    console.log("Boa viagem!");
}else{
    console.log("Desculpe tivemos um erro!");
}

for(let i = 0; i <10; i++){
    if(listaDeDestinos[i] == destino){
        console.log("Destino Existe");
        destinoExiste = true;
        break;
    }
}