function ehPrimo(numero) {
  if (numero <= 1) {
    return false;
  }

  let i = 2;
  while (i < numero) {
    if (numero % i === 0) {
      return false;
    }
    i++;
  }
  return true;
}

console.log(ehPrimo(7));
console.log(ehPrimo(10));
