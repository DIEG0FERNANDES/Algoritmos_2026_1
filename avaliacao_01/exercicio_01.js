const prompt = require("prompt-sync")();

let n = prompt("Entre com o número: ");

if (n % 2 == 0 && n % 3 == 0) {
  console.log("Ambos");
}
if (n % 2 != 0 && n % 3 != 0) {
  console.log("Nenhum");
}
if (n % 2 == 0 && n % 3 != 0) {
  console.log("2");
}
if (n % 2 != 0 && n % 3 == 0) {
  console.log("3");
}
