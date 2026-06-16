const prompt = require("prompt-sync")();

let vetor = [];
console.log("Digite 10 números:");
for (let i = 0; i < 10; i++) {
  vetor[i] = parseInt(prompt(`Número ${i + 1}: `));
}

let compactado = vetor.filter(num => num > 0);
console.log("Vetor compactado (positivos):", compactado);
