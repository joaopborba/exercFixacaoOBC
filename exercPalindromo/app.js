const palavra = prompt("Digite a palavra a ser verificada: ");
let inverse = "";

for (let i = palavra.length - 1; i >= 0; i--) {
  inverse += palavra[i];
}

if (palavra === inverse) {
  alert(palavra + " é um palíndromo");
} else {
  alert(
    palavra +
      " não é um palíndromo" +
      "\nPalavra original: " +
      palavra +
      "\nPalavra Invertida: " +
      inverse
  );
}
