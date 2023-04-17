const car1 = prompt("Digite o nome 1: ");
const vel1 = prompt("Digite a velocidade do carro 1: ");
const car2 = prompt("Digite o nome 2: ");
const vel2 = prompt("Digite a velocidade do carro 2: ");

if (vel1 > vel2) {
  alert(
    "A velocidade do " + `${car1}` + " é superior a velocidade do " + `${car2}`
  );
} else {
  alert(
    "A velocidade do " + `${car2}` + " é superior a velocidade do " + `${car1}`
  );
}
