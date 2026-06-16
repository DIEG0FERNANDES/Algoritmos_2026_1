const prompt = require('prompt-sync')();

let valorConta = 200;
let gorjeta = 0.10;
let pessoas  = 4;

let valorGorjeta = valorConta * gorjeta;
let totalGorjeta = valorConta + valorGorjeta;
console.log(`Total com gorjeta: ${totalGorjeta}`);
let valorPorPessoa = (valorConta + valorGorjeta) / pessoas;
console.log(`Valor por pessoa: R$ ${valorPorPessoa}`);