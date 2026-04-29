const prompt = require("prompt-sync")();

let n = prompt("Éntre com o número: ");

let resultado = 1;

while (n > 0) {
  resultado = resultado * n;
  n = n - 1;
}

console.log(resultado);
