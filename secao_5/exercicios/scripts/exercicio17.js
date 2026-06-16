const prompt = require("prompt-sync")();

let notas = [];
let soma = 0;

console.log("Digite as 15 notas:");
for (let i = 0; i < 15; i++) {
  notas[i] = parseFloat(prompt(`Nota ${i + 1}: `));
  soma += notas[i];
}

let media = soma / 15;
let maior = Math.max(...notas);
let menor = Math.min(...notas);

console.log("Média geral da turma:", media);
console.log("Maior nota:", maior);
console.log("Menor nota:", menor);
