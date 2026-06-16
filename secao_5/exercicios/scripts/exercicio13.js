const prompt = require("prompt-sync")();

let vetor = [];
console.log("Digite 10 números:");
for (let i = 0; i < 10; i++) {
  vetor[i] = parseInt(prompt(`Número ${i + 1}: `));
}

let x = parseInt(prompt("Digite o número a ser contado (X): "));
let ocorrencias = vetor.filter(num => num === x).length;

console.log(`O número ${x} aparece ${ocorrencias} vezes no vetor.`);
