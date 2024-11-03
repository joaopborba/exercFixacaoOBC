const name = prompt("Digite o nome do turista: ");

let cidades = " ";
let contador = 0;

let continuar = prompt("Já visitou alguma cidade ? (sim/nao)");

while (continuar == "sim") {
  let cidvisitada = prompt("Qual foi a cidade que visitou? ");
  cidades += " - " + cidvisitada + "\n";
  contador++;

  continuar = prompt("Visitou mais alguma cidade ? (sim/nao)");
}

alert(
  "Nome do turista: " +
    name +
    "\nCidades visitadas: \n" +
    cidades +
    "\nQuantidade de cidades visitadas: " +
    contador
);
