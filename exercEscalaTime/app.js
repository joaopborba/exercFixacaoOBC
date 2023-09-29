function addPlayer() {
  const position = document.getElementById("position").value;
  const name = document.getElementById("name").value;
  const number = document.getElementById("number").value;

  const confirmation = confirm(
    "Escalar " + name + " na posição " + position + "?"
  );

  if (confirmation) {
    const teamList = document.getElementById("playerList");
    const playerItem = document.createElement("li");
    playerItem.id = number;
    playerItem.innerText = position + ": " + name + " (" + number + ")";
    teamList.appendChild(playerItem);

    document.getElementById("position").value = "";
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
  }
}

function removePlayer() {
  const number = document.getElementById("numberToRemove").value;
  const playerToRemove = document.getElementById(number);

  const confirmation = confirm("Remover o " + playerToRemove.innerText + "?");

  if (confirmation) {
    playerToRemove.remove();
    document.getElementById("numberToRemove").value = "";
  }
}