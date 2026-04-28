const prompt = require("prompt-sync")();

let n;
let numeroInicio = Number(prompt("Digite o numero de inicio: "));
let numeroFinal = Number(prompt("Digite o numero de final: "));

for (n = numeroInicio; n <= numeroFinal; n = n + 1) {
  console.log(n);
}
