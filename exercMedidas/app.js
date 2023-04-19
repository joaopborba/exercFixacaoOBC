const value = prompt("Digite o valor em metros para ser convertido");
const measure = prompt("Digite a opção para qual deseja converter:\n\n1) milímetro(mm)\n2) centímetro(cm)\n3) decímetro(dm)\n4) decâmetro(dam)\n5) hectômetro\n6) quilômetro(km)");
let result = 0;

switch(measure){
    case "1":
        result = value * 1000;
        alert("Resultado: " + value + "m = " + result + "mm");
        break;
    case "2":
        result = value * 100;
        alert("Resultado: " + value + "m = " + result + "cm");
        break;
    case "3":
        result = value * 10;
        alert("Resultado: " + value + "m = " + result + "dm");
        break;
    case "4":
        result = value / 10;
        alert("Resultado: " + value + "m = " + result + "dam");
        break;
    case "5":
        result = value / 100;
        alert("Resultado: " + value + "m = " + result + "hm");
        break;
    case "6":
        result =  value / 1000;
        alert("Resultado: " + value + "m = " + result + "km");
        break;
    default:
        alert("Opção Inválida!");
}


