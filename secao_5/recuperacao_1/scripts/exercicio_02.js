// Exercício 2: Temperaturas Extremas da Semana
// Uma estação meteorológica precisa monitorar as temperaturas diárias em Aquidauana ao
// longo de uma semana para um relatório climático. O objetivo é identificar qual foi o dia
// mais quente e o dia mais fresco do período.
// Crie um algoritmo que receba as temperaturas médias de 7 dias e as guarde em um array
// de números decimais (float/real). Em seguida, o programa deve analisar os dados
// armazenados no vetor para descobrir e exibir qual foi a maior e a menor temperatura
// registrada na semana.
// Exemplo de Execução: Considere as entradas 32.5, 34.0, 31.2, 35.5, 29.0, 30.1 e 33.3. O
// algoritmo comparará cada valor para atualizar as variáveis de controle. A saída exibida
// deverá ser: "A maior temperatura foi 35.5°C e a menor foi 29.0°C."
const prompt = require("prompt-sync")();

let Arr = [];
let n = 0;
while (n < 7) {
  Arr[n] = prompt("Digite o C°: ");
  n++;
}
// 32.5, 34.0, 31.2, 35.5, 29.0, 30.1 e 33.3
n = 0;
let menor = Arr[0];
let maior = Arr[0];
while (n < 7) {
  if (Arr[n] < menor) {
    menor = Arr[n];
  }
  if (Arr[n] > maior) {
    maior = Arr[n];
  }
  n++;
}
console.log(`A maior temperatura foi ${maior}°C e a menor foi ${menor}°C.`);
