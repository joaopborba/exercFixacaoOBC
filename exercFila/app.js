let lista = [];
let menu = "";

while (menu != "4") {
  menu = prompt(
    "Escolha a opção desejada: \n1- Lista de pacientes\n2-Novo paciente\n3-Consultar paciente\n4- Sair"
  );

  switch (menu) {
    case "1":
      alert("Lista de pacientes: \n" + lista + "\n");
      break;
    case "2":
      let novopaciente = prompt("Digite o nome do paciente a ser adicionado: ");
      lista.push(novopaciente);
      break;
    case "3":
      alert("Primeiro paciente da fila: \n" + lista.shift());
      break;
  }
}
