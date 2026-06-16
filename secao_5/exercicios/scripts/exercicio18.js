const prompt = require("prompt-sync")();

let A = [], B = [], C = [];

console.log("Digite os 5 valores de A:");
for (let i = 0; i < 5; i++) A[i] = parseInt(prompt(`A[${i}]: `));

console.log("Digite os 5 valores de B:");
for (let i = 0; i < 5; i++) B[i] = parseInt(prompt(`B[${i}]: `));

for (let i = 0; i < 5; i++) {
  C.push(A[i], B[i]);
}

console.log("Vetor C (intercalado):", C);
