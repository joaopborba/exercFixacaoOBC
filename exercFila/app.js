let lista = [];
let menu = "";

while (menu != "3") {
  let pacientes = "";
  for (let i = 0; i < lista.length; i++) {
    pacientes += "\n" + (i + 1) + "º - " + lista[i];
  }

  menu = prompt(
    "Lista de pacientes: " +
      pacientes +
      "\n\nEscolha a opção desejada: \n1-Novo paciente\n2-Consultar paciente\n3- Sair"
  );

  switch (menu) {
    case "1":
      let novopaciente = prompt("Digite o nome do paciente a ser adicionado: ");
      lista.push(novopaciente);
      break;
    case "2":
      if (lista.length <= 0) {
        alert("Não tem paciente na fila!");
      } else {
        alert("Primeiro paciente da fila: \n" + lista.shift());
      }
      break;
    case "3":
      alert("Finalizando...");
      break;
    default:
      alert("Opção inválida!");
      break;
  }
}
