const prompt = require("prompt-sync")();

let matriz = [];
console.log("Digite 16 números para a matriz 4x4:");

let l = 0;
while (l < 4) {
  matriz[l] = [];
  let c = 0;
  while (c < 4) {
    matriz[l][c] = Number(prompt(`Número na posição [${l}${c}]: `));
    c++;
  }
  l++;
}
console.log(matriz);

let soma = 0;
l = 0;
while (l < 4) {
  let c = 0;
  while (c < 4) {
    if (l + c == 3) {
      soma += matriz[l][c];
    }
    c++;
  }
  l++;
}

console.log("Soma da diagonal secundaria: " + soma);
