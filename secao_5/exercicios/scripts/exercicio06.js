const prompt = require("prompt-sync")();

let numeros = [];

// Versão no for
// let n = 0;
// console.log("Digite 10 Números");
// while (n < 10) {
//   numeros[n] = prompt("");
//   n++;
// }
// let negativos = 0;
// n = 0;
// while (n < 10) {
//   if (numeros[n] < 0) {
//     negativos++;
//   }
//   n++;
// }
// console.log(`Foram digitados ${negativos} numeros negativos.`);

// versão feito
console.log("Digite 10 números: ");
let n;
for (n = 0; n < 10; n++) {
  numeros[n] = prompt("");
}
let negativos = 0;
for (n = 0; n < 10; n++) {
  if (numeros[n] < 0) {
    negativos++;
  }
}
console.log(`Foram digitados ${negativos} numeros negativos.`);
