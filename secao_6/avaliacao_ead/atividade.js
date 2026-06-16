const prompt = require("prompt-sync")();

let matriz = [];
console.log("Digite os 16 números da matriz 4x4:");

for (let i = 0; i < 4; i++) {
  matriz[i] = [];
  for (let j = 0; j < 4; j++) {
    matriz[i][j] = parseInt(prompt(`Digite o valor para a posição [${i}][${j}]: `));
  }
}

console.log("Matriz Original Lida:");
for (let i = 0; i < 4; i++) {
  console.log("[ " + matriz[i].join(", ") + " ]");
}

// Criando a transposta
let transposta = [];
for (let i = 0; i < 4; i++) {
  transposta[i] = [];
  for (let j = 0; j < 4; j++) {
    transposta[i][j] = matriz[j][i];
  }
}

console.log("Matriz Transposta:");
for (let i = 0; i < 4; i++) {
  console.log("[ " + transposta[i].join(", ") + " ]");
}
