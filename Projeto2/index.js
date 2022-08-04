import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"

const cliente1 = new Cliente("Raphael", 11122233309);
const cliente2 = new Cliente("Alice", 88822233309);

const contaCorrenteRaphael = new ContaCorrente(1001, cliente1);
contaCorrenteRaphael.depositar(500);
contaCorrenteRaphael.sacar(100);

const conta2 = new ContaCorrente(102, cliente2);

let valor = 200;
contaCorrenteRaphael.tranferir(valor, conta2);

console.log(contaCorrenteRaphael);