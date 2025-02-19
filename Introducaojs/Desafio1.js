









switch (operacao) {
    case "1":
        resultado = soma(numero1,numero2);
        break;
    case 2:
        resultado = sub(numero1,numero2);
        break;
    case 3:
        resultado = multi(numero1,numero2);
        break;
        case 4:
            if(numero2==0){
                console.log("Não Dividiras por Zero!!!");
                resultado = null;
            }else{
                resultado = div(numero1,numero2);
            }
    default:
        console.log("Operação Inválida")
        break;
}
console.log("Resultado "+resultado);