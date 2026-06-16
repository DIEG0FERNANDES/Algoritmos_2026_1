const prompt = require("prompt-sync")();

let vetor = [];
let quadrados = [];

console.log("Digite 10 números:");
for (let i = 0; i < 10; i++) {
  vetor[i] = parseFloat(prompt(`Número ${i + 1}: `));
  quadrados[i] = vetor[i] ** 2;
}

console.log("Vetor Original:", vetor);
console.log("Vetor dos Quadrados:", quadrados);
