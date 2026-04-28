const prompt = require("prompt-sync")();

console.log("Calculo da area do quadrado");

let Lado = Number(prompt("Digite o lado do quadrado: "));
let area = Lado * Lado;

console.log("Este é o tamanho da area do quadrado", area);
