const prompt = require("prompt-sync")();

let vetor = [];
console.log("Digite 10 números:");
for (let i = 0; i < 10; i++) {
  vetor[i] = parseInt(prompt(`Número ${i + 1}: `));
}

let pares = vetor.filter(num => num % 2 === 0);
let impares = vetor.filter(num => num % 2 !== 0);

console.log("Vetor Original:", vetor);
console.log("Vetor Pares:", pares);
console.log("Vetor Ímpares:", impares);
