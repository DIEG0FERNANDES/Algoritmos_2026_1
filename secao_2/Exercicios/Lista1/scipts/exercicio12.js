const prompt = require('prompt-sync')();

let base =  Number(prompt("Qual é o valor da base do triangulo: "));
let altura =  Number(prompt("Qual é a altura do triangulo: "));

let area =  (base * altura) / 2;

console.log(`A área do triangulo é: ${area}`);