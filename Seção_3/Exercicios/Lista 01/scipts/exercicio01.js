const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

console.log("- - -");

if (numero % 2 == 0) {
  console.log("O Número ", numero, " é par.");
} else {
  console.log("O Número ", numero, " é ímpar.");
}
