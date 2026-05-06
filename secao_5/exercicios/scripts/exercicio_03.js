const prompt = require("prompt-sync")();

let Arr = [];
// Versão em while
// let i = 0;
// while (i < 10) {
//   Arr[i] = parseInt(prompt(`Digite o n°${i} número: `));
//   i++;
// }

// console.log(Arr);

// let contadorPares = 0;
// let n = 0;
// while (n < 10) {
//   if (Arr[n] % 2 == 0) {
//     contadorPares++;
//   }
//   n++;
// }
// console.log(`O Vetor possui ${contadorPares} vetores pares`);
// Versão em for
let i = 0;
for (i; i < 10; i++) {
  Arr[i] = prompt(`Digite o n°${i} Número: `);
}
console.log(Arr);

let contadorPares = 0;
for (i = 0; i < 10; i++) {
  if (Arr[i] % 2 == 0) {
    contadorPares++;
  }
}

console.log(`O Vetor possui ${contadorPares} vetores pares .`);
