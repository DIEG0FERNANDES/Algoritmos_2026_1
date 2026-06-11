const prompt = require("prompt-sync")();

let m = [[], [], []];
let maior = 0,
  linhaMaior,
  colunaMaior;

for (let l = 0; l < 3; l++) {
  for (let c = 0; c < 3; c++) {
    m[l][c] = Number(prompt("M[" + l + "][" + c + "] = "));
  }
}

maior = m[0][0];
