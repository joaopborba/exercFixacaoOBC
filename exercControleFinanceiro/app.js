let valor = parseFloat(prompt("Quantidade de dinheiro inicial: "));
let menu = "";

do {
  menu = prompt(
    "Saldo disponível: " +
      valor +
      "\n\n1- Adicionar dinheiro\n2- Remover dinheiro\n3- Sair"
  );

  switch (menu) {
    case "1":
      valor += parseFloat(prompt("Qual valor deseja adicionar?"));
      break;
    case "2":
      valor -= prompt("Qual valor deseja remover?");
      break;
    case "3":
      alert("Sistema está sendo encerrado");
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (menu != 3);
