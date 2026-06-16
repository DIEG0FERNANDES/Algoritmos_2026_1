const prompt = require("prompt-sync")();

let matriz = [];
for (let i = 0; i < 3; i++) {
  matriz[i] = [];
  for (let j = 0; j < 3; j++) {
    matriz[i][j] = parseInt(prompt(`Digite o valor para a posição [${i}][${j}]: `));
  }
}

let maior = matriz[0][0];
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (matriz[i][j] > maior) maior = matriz[i][j];
  }
}

console.log("O maior valor na matriz é:", maior);
