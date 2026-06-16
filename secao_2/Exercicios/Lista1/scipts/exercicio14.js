const prompt = require('prompt-sync')();

let c = Number(prompt("Qual é a temperatura em Celsius: "));

let f =  (c * 9/5) + 32;

console.log(`Equivale a ${f} Fahrenheit`);