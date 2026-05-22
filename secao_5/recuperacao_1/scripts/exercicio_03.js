// Exercício 3: Separação em Dois Vetores (Nível: Médio)
// Um sistema de logística precisa separar os códigos de rastreio de pacotes. Códigos
// positivos indicam mercadorias recebidas, enquanto códigos negativos indicam
// mercadorias devolvidas.
// Escreva um algoritmo que leia 10 números inteiros (podendo ser positivos ou negativos)
// e os armazene em um array principal. O programa deve então criar dois novos arrays:
// um chamado Recebidos e outro chamado Devolvidos. O algoritmo precisará percorrer o
// array principal copiando os números positivos (maiores que zero) para o array de
// Recebidos, e os números negativos (menores que zero) para o array de Devolvidos,
// desconsiderando o número zero se ele for digitado. Por fim, o programa deve imprimir os
// dois arrays resultantes na tela.
// Exemplo de Execução: Considere a entrada do array principal com os valores 4, -7, 2, -
// 9, 1, 8, -5, 6, 3 e -10. O algoritmo avaliará cada posição e a destinará para o vetor correto.
// A saída deverá exibir o array de Recebidos com os valores [4, 2, 1, 8, 6, 3] e o array de
// Devolvidos com os valores [-7, -9, -5, -10].

let Arr = [4, -7, 2, -9, 1, 8, -5, 6, 3, -10];
let devolvidos = [];
let recebidos = [];
let aPos = 0;
let aNeg = 0;
let n = 0;
while (n < 10) {
  if (Arr[n] < 0) {
    devolvidos[aNeg] = Arr[n];
    aNeg++;
  }
  if (Arr[n] > 0) {
    recebidos[aPos] = Arr[n];
    aPos++;
  }
  n++;
}
console.log(
  `Array de Recebidos com os valores ${recebidos} e array de Devolvidos com os valores ${devolvidos}`,
);
