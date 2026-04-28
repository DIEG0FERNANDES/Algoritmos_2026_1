const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero: "));

for (let vezes = 0; vezes < 30; vezes++) {
  console.log(numero + 2 * vezes);
}
