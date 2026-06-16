const prompt = require("prompt-sync")();

let vetor = [];
console.log("Digite 20 números (0 a 9):");
for (let i = 0; i < 20; i++) {
  vetor[i] = parseInt(prompt(`Número ${i + 1}: `));
}

for (let i = 0; i <= 9; i++) {
  let count = vetor.filter(num => num === i).length;
  console.log(`${i} apareceu ${count} vezes`);
}
