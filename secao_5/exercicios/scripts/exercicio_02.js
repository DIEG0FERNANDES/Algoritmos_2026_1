const prompt = require("prompt-sync")();

let Arr = [];

let i = 0;
while (i < 8) {
  Arr[i] = parseInt(prompt(`Digite o n°${i} número: `));
  i++;
}
console.log("Valores digitados normalmente: ", Arr);
i = 7;
while (i >= 0) {
  console.log("Valores digitados Inversamente: ", Arr[i]);
  i--;
}

// for (i; i < 8; i++) {
//   Arr[i] = parseInt(prompt(`Digite o n°${i} número: `));
// }
// console.log("Valores digitados normalmente: ", Arr);

// for (i = 7; i >= 0; i--) {
//   console.log("Valores digitados inversamente: ", Arr[i]);
// }
