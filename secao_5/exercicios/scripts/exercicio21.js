const prompt = require("prompt-sync")();

let A = [], B = [];

console.log("Digite os 5 valores de A:");
for (let i = 0; i < 5; i++) A[i] = parseInt(prompt(`A[${i}]: `));

console.log("Digite os 5 valores de B:");
for (let i = 0; i < 5; i++) B[i] = parseInt(prompt(`B[${i}]: `));

let C = [...new Set([...A, ...B])];

console.log("Vetor C (União):", C);
