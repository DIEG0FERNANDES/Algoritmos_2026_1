const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um numero: "));

let dobro = numero * 2;
let triplo = numero * 3;

console.log("O dobro é ", dobro, "e o triplo é ", triplo);
