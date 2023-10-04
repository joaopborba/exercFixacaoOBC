function addPlayer(){

  const playerName = document.getElementById('playerName').value;
  const playerPosition = document.getElementById('playerPosition').value;
  const playerNumber = document.getElementById('playerNumber').value;

  const confirmation = confirm("Escalar " + playerName + "(" + playerNumber + ") " + "na posição " + playerPosition + "?")

  if(confirmation){
    const teamList = document.getElementById('team-list');
    const playerLi = document.createElement('li')
    playerLi.innerText = playerName + "(" + playerNumber + ")";
    playerLi.id = 'player-' + playerNumber;
  
    teamList.appendChild(playerLi);

    document.getElementById('playerName').value = '';
    document.getElementById('playerPosition').value = '';
    document.getElementById('playerNumber').value = '';
  }
}

function removePlayer(){
  const playerNumber = document.getElementById('numberToRemove').value;
  const playerToRemove = document.getElementById('player-' + playerNumber);
  const confirmation = confirm("Remover " + playerToRemove.innerText + "?")

  if(confirmation){
    document.getElementById('team-list').removeChild(playerToRemove);
    document.getElementById('numberToRemove').value = '';
  }
}