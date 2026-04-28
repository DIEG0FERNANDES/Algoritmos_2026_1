const prompt = require("prompt-sync")();

let contador, numero, maior, menor;

numero = Number(prompt("Entre com o numero: "));
maior = numero;
menor = numero;

for (contador = 0; contador < 9; contador++) {
  numero = Number(prompt("Entre com o numero: "));
  if (numero > maior) {
    mario = numero;
  }
  if (numero < menor) {
    menor = numero;
  }
}

console.log("O Maior é " + maior);
console.log("O Menor é " + menor);
