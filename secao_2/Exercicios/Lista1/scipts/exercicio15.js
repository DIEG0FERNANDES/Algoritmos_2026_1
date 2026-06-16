const prompt = require('prompt-sync')();

let largura = Number(prompt("Qual a largura do retangulo: "));
let altura = Number(prompt("Qual a altura do rentangulo: "));

let perimetro = 2 * (largura + altura);

console.log(`O perimetro é: ${perimetro}`);