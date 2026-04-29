const prompt = require("prompt-sync")();

let numInicio = Number(prompt("Digite o numero inicial: "));
let numFinal = Number(prompt("Digite o numero final: "));

while (numInicio <= numFinal) {
  let resultado = numInicio * numInicio;
  console.log(resultado);
  numInicio = numInicio + 1;
}
