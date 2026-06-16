const prompt = require('prompt-sync')();

let fabrica =  40000;
let porcentagem = 0.28;
let impostos = 0.45;

let custoFinal = fabrica + (fabrica * porcentagem) + (fabrica * impostos);

console.log(`Custo Final: R$ ${custoFinal}`);