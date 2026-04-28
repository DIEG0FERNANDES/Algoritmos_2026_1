const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero da tabuada: "));

for (let i = 0; i <= 10; i++) {
  console.log(numero, " x ", i, " = ", numero * i);
}
