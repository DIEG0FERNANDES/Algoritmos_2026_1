const prompt = require("prompt-sync")();

let nota1 = Number(prompt("Digite sua Nota 1: "));
let nota2 = Number(prompt("Digite sua Nota 2: "));
let nota3 = Number(prompt("Digite sua Nota 3: "));

let soma = nota1 + nota2 + nota3;
let media_final = soma / 3;
console.log(media_final);
