function escalarJogador() {
  const sectionList = document.getElementById("section-list");

  const ul = document.createElement("ul");

  const playerPos = document.createElement("li");
  playerPos.innerText = "Posição do jogador: ";
  const playerInput = document.createElement("input");
  playerInput.type = "text";
  playerPos.appendChild(playerInput);
  ul.appendChild(playerPos);

  const playerName = document.createElement("li");
  playerName.innerText = "Nome do jogador: ";
  const playerInput2 = document.createElement("input");
  playerInput.type = "text";
  playerName.appendChild(playerInput2);
  ul.appendChild(playerName);

  const numberPlayer = document.createElement("li");
  numberPlayer.innerText = "Número do jogador: ";
  const numberInput = document.createElement("input");
  numberInput.type = "number";
  numberPlayer.appendChild(numberInput);
  ul.appendChild(numberPlayer);

  const submit = document.createElement("button");
  submit.innerText = "Escalar";
  ul.appendChild(submit);

  sectionList.append(ul);
}
