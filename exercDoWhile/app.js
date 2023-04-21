let opcao = 0;

do {
  opcao = prompt(
    "Digite a opção desejada: \n1- Início\n2- Contatos\n3- Apps\n4- Mensagens\n5- Encerrar"
  );

  switch (opcao) {
    case "1":
      alert("Opção escolhida: Início");
      break;
    case "2":
      alert("Opção escolhida: Contatos");
      break;
    case "3":
      alert("Opção escolhida: Apps");
      break;
    case "4":
      alert("Opção escolhida: Mensagens");
      break;
    case "5":
      alert("Sistema está sendo encerrado");
      break;
    default:
      alert("Opção inválida");
      break;
  }
} while (opcao != 5);
