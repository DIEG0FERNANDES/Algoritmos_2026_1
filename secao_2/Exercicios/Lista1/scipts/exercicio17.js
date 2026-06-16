const prompt = require('prompt-sync')();

let peso = 70;
let altura = 1.75;

let imc = peso / (altura * altura);

console.log(`Seu IMC é: ${imc}`);