const prompt = require("prompt-sync")();

let distancia = Number(prompt("Qual a distância a percorrer: "));
let consumo =  Number(prompt("Qual o consumo do veículo (km/l): "));
let preco = Number(prompt("Qual o preço do combustível (R$/l): "))
console.log("- - -");

let litros = distancia / consumo;
let custo =  litros * preco;

console.log(`Custo total da viagem: R$ ${custo}`);