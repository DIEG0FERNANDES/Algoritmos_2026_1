const prompt = require('prompt-sync')();

let preco = Number(prompt("Qual é o preço do produto: "));
let desconto = Number(prompt("Qual é o valor do desconto: "));

let valorDesconto = (preco * desconto) / 100;
let precoFinal = preco - valorDesconto;

console.log(`O valor do desconto é: ${valorDesconto}`);
console.log(`O preço final do produto é: ${precoFinal}`);