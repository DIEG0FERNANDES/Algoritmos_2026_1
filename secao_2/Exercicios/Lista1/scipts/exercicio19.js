const prompt = require('prompt-sync')();

let A = 10;
let B = 20;

console.log(`Valor de A: ${A}`);
console.log(`Valor de B: ${B}`);

let temp = A;
A = B;
B = temp;

console.log(`Após a troca: A = ${A}, B = ${B}`);