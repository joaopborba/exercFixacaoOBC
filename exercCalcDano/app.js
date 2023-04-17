const name1 = prompt("Digite o nome do personagem: ");
const atk1 = prompt("Digite o poder de ataque desse personagem: ");
const name2 = prompt("Digite o nome do segundo personagem: ");
const life2 = prompt(
  "Digite a quantidade de pontos de vida do(a) " + `${name2}:`
);
const def2 = prompt("Digite o poder de defesa do(a)" + `${name2}:`);
const shield2 = prompt("O " + `${name2} tem escudo?`);

if (atk1 > def2 && shield2 === "não") {
  let dano = atk1 - def2;
  alert("O dano causado foi: " + dano);
  let result = life2 - dano;
  alert(
    "Pontos de vida atual: " +
      result +
      `\nNome do atacante: ${name1}\n` +
      `Poder de ataque: ${atk1}\n` +
      `Nome do defensor: ${name2}\n` +
      `Poder de defesa: ${def2}\n` +
      `Pontos de vida: ${life2}`
  );
} else if (atk1 > def2 && shield2 === "sim") {
  let dano = (atk1 - def2) / 2;
  alert("O dano causado foi: " + dano);
  let result = life2 - dano;
  alert(
    "Pontos de vida atual: " +
      result +
      `\nNome do atacante: ${name1}\n` +
      `Poder de ataque: ${atk1}\n` +
      `Nome do defensor: ${name2}\n` +
      `Poder de defesa: ${def2}\n` +
      `Pontos de vida: ${life2}`
  );
} else if (def2 >= atk1) {
  alert("O dano foi 0");
  alert(
    "Pontos de vida atual: " +
      life2 +
      `\nNome do atacante: ${name1}\n` +
      `Poder de ataque: ${atk1}\n` +
      `Nome do defensor: ${name2}\n` +
      `Poder de defesa: ${def2}\n`
  );
}
