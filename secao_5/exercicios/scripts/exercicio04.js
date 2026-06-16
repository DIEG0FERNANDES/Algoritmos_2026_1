const prompt = require("prompt-sync")();

let notas = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
  notas[i] = parseFloat(prompt(`Digite a ${i + 1}ª nota: `));
  soma += notas[i];
}

let media = soma / 5;
console.log(`A média é: ${media}`);
