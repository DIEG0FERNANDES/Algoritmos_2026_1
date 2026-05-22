// Exercício 1: Contagem de Números Pares
// Em uma gincana escolar, os alunos recebem crachás com números de inscrição. A
// organização precisa saber rapidamente quantos alunos possuem números pares, pois eles
// farão parte da Equipe Verde.
// Escreva um algoritmo que leia 8 números inteiros inseridos pelo usuário e os armazene
// em um array. Após a leitura de todos os números, o programa deve percorrer o array
// verificando cada elemento para contar quantos desses números são pares. Ao final da
// verificação, exiba a quantidade total de números pares encontrados.
// Exemplo de Execução: Considere as entradas 15, 22, 8, 7, 31, 44, 10 e 3. Durante o
// processamento, o algoritmo identificará que os números pares são 22, 8, 44 e 10. A saída
// exibida na tela deverá ser: "Foram encontrados 4 números pares."

const prompt = require("prompt-sync")();

let Arr = [];
let n = 1;
while (n < 9) {
  Arr[n] = prompt(`Digite o  n°${n}: `);
  n++;
}
let pares = 0;
n = 1;
while (n < 9) {
  if (n % 2 == 0) {
    pares++;
  }
  n++;
}
console.log(Arr[n]);
console.log(`Foram encontrados ${pares} pares`);
