const prompt = require("prompt-sync")();

let dias = Number(prompt("Quantos dias você quer converter: "));
console.log("Quantidade de dias: ", dias);

console.log("- - -");

let conversao = dias * 24;
console.log("Isso corresponde a ", conversao);
