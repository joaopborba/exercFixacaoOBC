let menu = "";

function calcTri() {
  const base = prompt("Informe a base do triângulo: ");
  const altura = prompt("Informe a altura do triângulo: ");
  return (base * altura) / 2;
}

function calcRet() {
  const base = prompt("Informe a base do retângulo: ");
  const altura = prompt("Informe a altura do retângulo: ");
  return base * altura;
}

function calcQuad() {
  const lado = prompt("Informe o lado do quadrado: ");
  return lado * lado;
}

function calcTrap() {
  const bmenor = parseFloat(prompt("Informe a base menor do trapézio: "));
  const bmaior = parseFloat(prompt("Informe a base maior do trapézio: "));
  const altura = prompt("Informe a altura do trapézio: ");
  return ((bmaior + bmenor) * altura) / 2;
}

function calcCirc() {
  const raio = prompt("Informe o raio do círculo: ");
  return 3.14 * raio * raio;
}

while (menu != 6) {
  menu = prompt(
    "Escolha uma das opções: " +
      "\n\n1-Área do triângulo" +
      "\n2-Área do retângulo" +
      "\n3-Área do quadrado" +
      "\n4-Área do trapézio" +
      "\n5-Área do circulo" +
      "\n6-Sair"
  );

  switch (menu) {
    case "1":
      alert("Área do triângulo: " + calcTri());
      break;
    case "2":
      alert("Área do retângulo: " + calcRet());
      break;
    case "3":
      alert("Área do quadrado: " + calcQuad());
      break;
    case "4":
      alert("Área do trapézio: " + calcTrap());
      break;
    case "5":
      alert("Área do círculo: " + calcCirc());
      break;
    case "6":
      alert("Saindo do programa.");
      break;
    default:
      alert("Escolha uma opção válida!");
      break;
  }
}
