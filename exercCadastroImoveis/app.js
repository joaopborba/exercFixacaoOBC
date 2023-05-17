let menu = "";
let imoveis = [];


while(menu !== "3"){

    menu = prompt("Quantidade de móveis cadastrados: " + imoveis.length + "\n\nEscolha uma das opções do menu: \n" + 
    "\n1 - Cadastrar novo imóvel " + 
    "\n2 - Listar imóveis cadastrados " +
    "\n3 - Sair");

    switch(menu){
        case "1":
            const imovel = {};
            imovel.proprietario = prompt("Digite o nome do proprietário: ");
            imovel.quartos = prompt("Quantidade de quartos: ");
            imovel.banheiros = prompt("Quantidade de banheiros: ");
            imovel.garagem = prompt("Possui garagem? (Sim/Não): ");

            const confirmacao = confirm("Deseja salvar esse imóvel?" + 
            "\nProprietário: " + imovel.proprietario + 
            "\nQuartos: " + imovel.quartos + 
            "\nBanheiros: " + imovel.banheiros + 
            "\nPossui garagem? " + imovel.garagem);

            if(confirmacao){
                imoveis.push(imovel);
                alert("Imóvel salvo com sucesso!");
            }
            else{
                alert("Voltando ao menu");
            }
            break;
        case "2":
            for(let i=0; i<imoveis.length; i++){
                alert("Imóvel: " + (i+1) + 
                "\nProprietário: " + imoveis[i].proprietario + 
                "\nQuartos: " + imoveis[i].quartos + 
                "\nBanheiros: " + imoveis[i].banheiros + 
                "\nPossui garagem? " + imoveis[i].garagem);
            }
            break;
        case "3":
            alert("Saindo do programa.");
            break;
        default:
            alert("Escolha uma opção válida");
            break;
    }
}