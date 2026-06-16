const prompt = require("prompt-sync")();

let vetor = [];
let soma = 0;

console.log("Digite 10 números:");
for (let i = 0; i < 10; i++) {
  vetor[i] = parseInt(prompt(`Número ${i + 1}: `));
  soma += vetor[i];
}

console.log(`A soma de todos os elementos é: ${soma}`);
