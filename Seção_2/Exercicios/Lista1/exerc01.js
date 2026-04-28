const prompt = require("prompt-sync")();

let numero = Number(prompt("Entre com um numero: "));

if (numero % 2 == 0) {
  console.log("O numero ", numero, " e PAR");
  if (numero % 3 == 0) {
    console.log("O numero ", numero, " também é multiplo de 3");
  }
} else {
  console.log("O numero ", numero, " e IMPAR");
}

console.log("FIM");
