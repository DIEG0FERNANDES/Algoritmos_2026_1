const prompt = require('prompt-sync')();

let salarioFixo = 1000;
let comissao =  50;
let vendidos = 2;
let totalVendas = 20000;

console.log(`Salário Fixo: ${salarioFixo}`);
console.log(`Comissão por carro: ${comissao}`);
console.log(`Carros vendidos: ${vendidos}`);
console.log(`Total de vendas: ${totalVendas}`);

let salarioTotal = salarioFixo + (comissao * vendidos) + (0.05 * totalVendas);
console.log(`Salário Final: R$ ${salarioTotal}`);