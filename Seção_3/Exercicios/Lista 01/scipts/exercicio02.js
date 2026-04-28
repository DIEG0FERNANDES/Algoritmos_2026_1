const prompt = require("prompt-sync")();

let numero1 = Number(prompt("Digite o primeiro número: "));
let numero2 = Number(prompt("Digite o segundo número: "));

console.log("- - -");

if (numero1 == numero2) {
  console.log("Os números são iguais.");
} else {
  if (numero1 > numero2) {
    console.log(
      "Os Números são diferentes. ",
      "O Maior é ",
      numero1,
      " e o menor é",
      numero2,
      ".",
    );
  } else {
    console.log(
      "Os Números são diferentes. ",
      "O Maior é ",
      numero2,
      " e o menor é",
      numero1,
      ".",
    );
  }
}
