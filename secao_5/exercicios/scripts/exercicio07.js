const prompt = require("prompt-sync")();

let vetor = [];
console.log("Digite 10 números:");
for (let i = 0; i < 10; i++) {
  vetor[i] = parseInt(prompt(`Número ${i + 1}: `));
}

let x = parseInt(prompt("Digite o número a ser substituído (X): "));
for (let i = 0; i < vetor.length; i++) {
  if (vetor[i] === x) vetor[i] = 0;
}

console.log("Vetor modificado:", vetor);
