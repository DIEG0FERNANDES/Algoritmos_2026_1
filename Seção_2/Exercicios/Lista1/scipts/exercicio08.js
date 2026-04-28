const prompt = require("prompt-sync")();

let numero = Number(prompt("Digite um número: "));

let antecessor = numero - 1;
console.log("Antecessor: ", antecessor);

let sucessor = numero + 1;
console.log("Sucessor: ", sucessor);
