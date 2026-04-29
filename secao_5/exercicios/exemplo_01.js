const promtp = require("prompt-sync")();

let Ns = [];
let mult

Ns[0] = prompt('Entre com o número 0')
Ns[1] = prompt('Entre com o número 0')
Ns[2] = prompt('Entre com o número 0')
Ns[3] = prompt('Entre com o número 0')
Ns[4] = Ns[3] * Ns[0]
mult = Ns[3] * Ns[0]

for(let i = 0; i < 5; i++){
    Ns[i] = prompt('Entre com o número: ')
}