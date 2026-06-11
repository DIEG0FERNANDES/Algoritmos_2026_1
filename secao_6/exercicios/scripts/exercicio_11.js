const prompt = require("prompt-sync")();

let matriz = [];
console.log("Digite 16 números para a matriz 3x3:");

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

l = 0;
let superior = true;
let inferior = true;
while (l < 3) {
  let c = 0;
  while (c < 3) {
    if (l > c && matriz[l][c] != 0) {
      superior = false;
    }
    if (c > l && matriz[l][c] != 0) {
      inferior = false;
    }
    c++;
  }
  l++;
}

if (superior) {
  console.log("Triangulo Superior");
}
if (inferior) {
  console.log("Triangulo Inferior");
} else {
  console.log("Nenhuma das opções");
}
