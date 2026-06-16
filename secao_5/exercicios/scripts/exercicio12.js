13const prompt = require("prompt-sync")();

let vetor = [];
console.log("Digite 8 números:");
for (let i = 0; i < 8; i++) {
  vetor[i] = parseInt(prompt(`Número ${i + 1}: `));
}

let x = parseInt(prompt("Digite a primeira posição (X) de 0 a 7: "));
let y = parseInt(prompt("Digite a segunda posição (Y) de 0 a 7: "));

console.log(`A soma dos valores nas posições ${x} e ${y} é: ${vetor[x] + vetor[y]}`);
