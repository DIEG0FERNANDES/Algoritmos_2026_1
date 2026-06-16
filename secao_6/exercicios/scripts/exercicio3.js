const prompt = require("prompt-sync")();

let matriz = [];
let pares = 0;

for (let i = 0; i < 4; i++) {
  matriz[i] = [];
  for (let j = 0; j < 4; j++) {
    matriz[i][j] = parseInt(prompt(`Digite o valor para a posição [${i}][${j}]: `));
    if (matriz[i][j] % 2 === 0) pares++;
  }
}

console.log(`A matriz possui ${pares} valores pares.`);
