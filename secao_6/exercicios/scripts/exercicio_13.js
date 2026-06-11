const prompt = require("prompt-sync")();

let matriz = [];
console.log("Digite 9 números para a matriz 3x3:");

let l = 0;
while (l < 3) {
  matriz[l] = [];
  let c = 0;
  while (c < 3) {
    matriz[l][c] = Number(prompt(`Número na posição [${l}${c}]: `));
    c++;
  }
  l++;
}
console.log(matriz);

let somas = [];
l = 0;
while (l < 3) {
  let c = 0;
  let somaL = 0;
  while (c < 3) {
    somaL += matriz[l][c];
    c++;
  }
  console.log(l + somaL);
  l++;
}
