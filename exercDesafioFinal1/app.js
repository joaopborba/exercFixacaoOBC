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
      indice +
      "\nNome da vaga: " +
      vaga.nome +
      "\nDescrição da vaga: " +
      vaga.descricao +
      "\nData Limite: " +
      vaga.dataLimite +
      "\nQuantidade de candidatos: " +
      vaga.candidatos.length +
      "\nNome dos candidatos: " +
      candidatosEmTexto
  );
}

function inscrever() {
  const candidato = prompt("Digite o nome do candidato: ");
  const indice = prompt("Digite o índice da vaga escolhida: ");
  const vaga = vagas[indice];

  const confirmacao = confirm("Deseja inscrever o candidato " + candidato + " na vaga " + indice + "?\n" +
  "Nome da vaga: " +
  vaga.nome +
  "\nDescrição da vaga: " +
  vaga.descricao +
  "\nData limite: " +
  vaga.dataLimite);

  if(confirmacao){
    vaga.candidatos.push(candidato);
    alert("Inscrição realizada");
  }
}

function excluirVaga() {
  const indice = prompt("Digite o índice da vaga a ser excluída: ");
  const vaga = vagas[indice];

  const confirmacao = confirm(
    "Deseja realmente excluir a vaga do índice " + indice + "?\n" +
      "Índice da vaga: " +
      indice +
      "\nNome da vaga: " +
      vaga.nome +
      "\nDescrição da vaga: " +
      vaga.descricao +
      "\nData limite: " +
      vaga.dataLimite
  );

  if (confirmacao) {
    vagas.splice(indice, 1);
    alert("Vaga excluída");
  }
}

function exibirMenu(){
  const opcao = prompt(
    "MENU:\n\n1- Vagas disponíveis\n2- Criar uma nova vaga\n3- Visualizar uma vaga\n4- Inscrever um candidato em uma vaga\n5- Excluir uma vaga\n6- Sair\n"
  );
  return opcao;
}

function executar(){
  let opcao = "";

  do{
    opcao = exibirMenu();

    switch (opcao) {
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
        inscrever();
        break;
      case "5":
        excluirVaga();
        break;
      case "6":
        alert("Saindo do programa");
        break;
      default:
        alert("Opção inválida");
        break;
    }

  } while (opcao != "6")
}

executar();