let baralho = [];
let menu = "";

while (menu != "3") {
  menu = prompt(
    "Cartas no baralho: " +
      baralho.length +
      "\n\nDigite a opção desejada: \n1-Adicionar uma carta\n2- Puxar uma carta\n3- Sair"
  );

  switch (menu) {
    case "1":
      let carta = prompt("Qual carta deseja adicionar?");
      baralho.push(carta);
      break;
    case "2":
      if (baralho.length <= 0) {
        alert("Não há mais cartas no baralho");
      } else {
        alert("Você puxou um(a) " + baralho.pop());
      }
      break;
    case "3":
      alert("Finalizando...");
      break;
    default:
      alert("Opção inválida!");
  }
}
