const value = parseFloat(prompt("Digite o valor em metros a ser convertido: "));

const measure = parseFloat(
  prompt(
    "Escolha a opção para conversão: \n1)mm\n2)cm\n3)dm\n4)dam\n5)hm\n6)km\n"
  )
);

switch (measure) {
  case 1:
    alert(value + "m equivale a " + value * 1000 + "mm");
    break;
  case 2:
    alert(value + "m equivale a " + value * 100 + "cm");
    break;
  case 3:
    alert(value + "m equivale a " + value * 10 + "dm");
    break;
  case 4:
    alert(value + "m equivale a " + value / 10 + "dam");
    break;
  case 5:
    alert(value + "m equivale a " + value / 100 + "hm");
    break;
  case 6:
    alert(value + "m equivale a " + value / 1000 + "km");
    break;
  default:
    alert("Opção inválida");
}
