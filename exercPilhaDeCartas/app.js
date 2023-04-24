let baralho = [];
let menu = "";

while (menu != "3") {
  menu = prompt(
    baralho +
      "\nDigite a opção desejada: \n1-Adicionar uma carta\n2- Puxar uma carta\n3- Sair"
  );

  switch (menu) {
    case "1":
      let carta = prompt("Qual carta deseja adicionar?");
      baralho.push(carta);
      break;
    case "2":
      alert(baralho.shift());
      break;
  }
}
