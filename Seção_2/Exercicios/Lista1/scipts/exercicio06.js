const prompt = require("prompt-sync")();
// O usuário deve informar a cotação do dólar no
// dia e um valor em reais (R$) que ele deseja converter. Calcule quantos dólares ele
// pode comprar com esse valor. (Fórmula: Reais / Cotação)
console.log("Conversão de moeda");
let cotacao = Number(prompt("Digite a cotação em dolar: "));
let reais = Number(prompt("Digite uma quantia em reais: "));

let dolares = reais / cotacao;

console.log(
  "Este é o valor em dólares ",
  dolares,
  " que você pode comprar com este dinheiro em reais.",
);
