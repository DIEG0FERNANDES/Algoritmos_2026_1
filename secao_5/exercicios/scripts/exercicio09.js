const prompt = require("prompt-sync")();

let vetor = [];
console.log("Digite 10 números:");
for (let i = 0; i < 10; i++) {
  vetor[i] = parseFloat(prompt(`Número ${i + 1}: `));
}

let maior = Math.max(...vetor);
let menor = Math.min(...vetor);

console.log("Maior elemento:", maior);
console.log("Menor elemento:", menor);
