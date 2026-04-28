const prompt = require("prompt-sync")();

let litro = Number(prompt("Quanto custa o litro da gasolina? "));

let tanque = Number(prompt("Quantos litros cabem no tanque? "));

console.log("Preço do litro (R$): ", litro);
console.log("Capacidade do tanque: ", tanque);

let total = litro * tanque;
console.log("Valor total para encher o tanque: ", total);
