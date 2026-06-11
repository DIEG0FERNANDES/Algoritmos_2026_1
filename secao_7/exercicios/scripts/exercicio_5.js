function verificarMaioridade(idade) {
  if (idade >= 18) {
    return "Maior de Idade";
  } else if (idade < 18) {
    return "Menor de Idade";
  }
}

let status1 = verificarMaioridade(25);
console.log(status1);

let status2 = verificarMaioridade(15);
console.log(status2);
