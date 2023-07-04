const vagas = [];

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function(textoFinal, vaga, indice){
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)"
        return textoFinal;
    }, "");

    alert(vagasEmTexto);
}

function criarVaga() {
  const nome = prompt("Digite o nome da vaga: ");
  const descricao = prompt("Descreva a vaga ofertada: ");
  const dataLimite = prompt("Data limite (DD/MM/AA): ");

  const confirmacao = confirm(
    "Deseja salvar essa vaga?" +
      "Nome da vaga: " +
      nome +
      "\nDescrição da vaga: " +
      descricao +
      "\nData limite: " +
      dataLimite
  );

  if (confirmacao) {
    const criarVaga = {nome, descricao, dataLimite, candidatos: []}
    vagas.push(criarVaga);
    alert("Vaga salva com sucesso!");
  } else {
    alert("Voltando ao menu");
  }
}

function visualizarVaga() {
  const indice = prompt("Digite o indice da vaga que deseja visualizar: ");
  const vaga = vagas[indice];

  const candidatosEmTexto = vaga.candidatos.reduce(function(textoFinal, candidato){
    return textoFinal + "\n - " + candidato;
  }, "");

  alert(
    "Índice da vaga: " +
      (i + 1) +
      "\nNome da vaga: " +
      vagas[i].nome +
      "\nDescrição da vaga: " +
      vagas[i].descricao +
      "\nData Limite: " +
      vagas[i].dataLimite +
      "\nQuantidade de candidatos: " +
      "\nNome dos candidatos: "
  );
}

function inscrever() {
  const candidato = {};
  candidato.nome = prompt("Digite o nome do candidato: ");
  candidato.vaga = prompt("Digite o índice da vaga escolhida: ");
}

function excluirVaga() {
  let i = prompt("Digite o índice da vaga a ser excluída: ");

  const confirmacao = confirm(
    "Deseja realmente excluir a vaga:\n\n " +
      "Índice da vaga: " +
      (i + 1) +
      "\nNome da vaga: " +
      vagas[i].nome +
      "\nDescrição da vaga: " +
      vagas[i].descricao +
      "\nData limite: " +
      vagas[i].dataLimite
  );

  if (confirmacao) {
    vagas[i].pop(i);
  }
}

while (menu != "6") {
  menu = prompt(
    "MENU:\n\n1- Vagas disponíveis\n2- Criar uma nova vaga\n3- Visualizar uma vaga\n4- Inscrever um candidato em uma vaga\n5- Excluir uma vaga\n6- Sair\n"
  );

  switch (menu) {
    case "1":
      listarVagas();
      break;
    case "2":
      criarVaga();
      break;
    case "3":
      visualizarVaga();
      break;
    case "4":
      break;
    case "5":
      break;
    case "6":
      alert("Saindo do programa");
      break;
  }
}
