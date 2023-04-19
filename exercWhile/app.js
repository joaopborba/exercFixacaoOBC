const touristName = prompt("Digite o nome do turista: ");
let cont = 0;
let cities = "";
let visitCities = prompt("Você já visitou alguma cidade? (sim/não)");

while(visitCities === "sim"){
    let city = prompt("Qual o nome da cidade que você visitou?");
    cities += "\n - " + city;
    cont++
    visitCities = prompt("Você visitou outra cidade? (sim/não)");
}

alert("Nome do turista: " + touristName + "\nCidades visitadas: " + cities + "\nQuantidade de cidades visitadas: " + cont);
