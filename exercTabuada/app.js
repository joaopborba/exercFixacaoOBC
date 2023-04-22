let num = prompt("Digite o número para calcular sua tabuada: ");
let tabuada = "";

for (let i = 1; i <= 20; i++) {
  tabuada += num + " x " + i + " = " + num * i + "\n";
}

alert(tabuada);
