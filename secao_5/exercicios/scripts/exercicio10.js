const prompt = require("prompt-sync")();

let vetor = [];
console.log("Digite 10 números:");
for (let i = 0; i < 10; i++) {
  vetor[i] = parseInt(prompt(`Número ${i + 1}: `));
}

let maior = Math.max(...vetor);
let posicao = vetor.indexOf(maior);

console.log("Vetor:", vetor);
console.log("Maior elemento:", maior);
console.log("Posição do maior elemento:", posicao);
