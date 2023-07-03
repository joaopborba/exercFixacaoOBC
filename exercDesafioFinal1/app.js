let menu = "";
let vagas = [];

function listarVagas(){
    for(let i=0; i<vagas.length; i++){
        alert("Índice da vaga: " + (i+1) +
        "\nNome da vaga: " + vagas[i].nome + 
        "\nQuantidade total de inscritos: ");
    }
}

function criarVaga(){
    const vaga = {};
    vaga.nome = prompt("Digite o nome da vaga: ");
    vaga.descricao = prompt("Descreva a vaga ofertada: ");
    vaga.dataLimite = prompt("Data limite: ");

    const confirmacao = confirm("Deseja salvar essa vaga?" +
     "Nome da vaga: " + vaga.nome + 
     "\nDescrição da vaga: " + vaga.descricao +
     "\nData limite: " + vaga.dataLimite);

    if(confirmacao){
        vagas.push(vaga);
        alert("Vaga salva com sucesso!");
    }
    else{
        alert("Voltando ao menu");
    }


}

while (menu != "6") {
    menu = prompt("MENU:\n\n1- Vagas disponíveis\n2- Criar uma nova vaga\n3- Visualizar uma vaga\n4- Inscrever um candidato em uma vaga\n5- Excluir uma vaga\n6- Sair\n");

    switch(menu){
        case "1":
            listarVagas();
            break;
        case "2":
            criarVaga();
            break;
        case "3":
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
