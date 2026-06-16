const prompt =  require("prompt-sync")();

let anos =  2 ;
let meses = 3 ;
let dias = 10;

console.log(`Anos: ${anos}`);
console.log(`Meses: ${meses}`);
console.log(`Dias: ${dias}`);

let total = (anos * 365) + (meses * 30) + dias;

console.log(`Total em dias: ${total}`);