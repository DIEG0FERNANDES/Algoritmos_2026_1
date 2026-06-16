const prompt = require("prompt-sync")();

let vetor = [];
console.log("Digite 10 números:");
for (let i = 0; i < 10; i++) {
  vetor[i] = parseInt(prompt(`Número ${i + 1}: `));
}

let x = parseInt(prompt("Digite o número a ser buscado (X): "));
let posicao = vetor.indexOf(x);

console.log(posicao !== -1 ? `Número ${x} encontrado na posição: ${posicao}` : -1);
