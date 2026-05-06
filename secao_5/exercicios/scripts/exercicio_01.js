const prompt = require("prompt-sync")();

// declaração de variaveis
let A = [];
let soma;

let i = 0;
// while (i < 6) {
//   A[i] = parseInt(prompt("Entre com o número: "));
//   soma = A[0] + A[1] + A[5];
//   i++;
// }
for (i; i < 6; i++) {
  A[i] = parseInt(prompt("Entre com o número: "));
  soma = A[0] + A[1] + A[5];
}

console.log("Este é o seu array: ", A);
console.log("A soma é: ", soma);
let subst = parseInt(
  prompt("Entre com o número para substituir o array na possição 4: "),
);
A[4] = subst;
console.log("Este é o seu array modificado: ", A);
