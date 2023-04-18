const name1 = prompt("Digite o nome do personagem: ");
const atk1 = prompt("Digite o poder de ataque desse personagem: ");
const name2 = prompt("Digite o nome do segundo personagem: ");
let life2 = prompt("Digite a quantidade de pontos de vida do(a) " + name2);
const def2 = prompt("Digite o poder de defesa do(a) " + name2);
const shield = prompt("O " + name2 + " tem escudo? (sim/não)");
let dano = 0;

if (atk1 > def2 && shield === "não") {
  dano = atk1 - def2;
} 
else if (atk1 > def2 && shield === "sim") {
  dano = (atk1 - def2) / 2;
}

life2 -= dano;

alert(name1 + " causou " + dano + " pontos de dano em " + name2);
alert(name1 + "\nPoder de ataque: " + atk1 + "\n\n" +
name2 + " \nPontos de vida: " + life2 + "\nPoder de defesa: " + def2 + "\nPossui escudo? " + shield);
