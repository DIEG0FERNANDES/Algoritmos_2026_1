const prompt = require("prompt-sync")();

let salario = Number(prompt("Diga seu salário atual: "));

let aumento = salario * 0.15;

let SalarioNovo = aumento + salario;

console.log("O novo salário com 15% de aumento é: ", SalarioNovo);
