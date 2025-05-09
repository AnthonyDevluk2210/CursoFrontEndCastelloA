// Situação de aprendizagem 01 - Array e Matrix
// Calculadora de Média
const prompt = require("prompt-sync")();

var notas = []; // declaração de um vetor

//  função para aadicionar nota -> media
function adicionarNota(){
    let nota = Number(prompt("Imforme a Nota: "));
    notas.push(nota);
    console.log("Nota Adiconada com Sucesso");
}
//função para calcular a média
function calcularMedia(){
    if(notas.length === 0) return;
    let soma = notas.reduce((x,y) => x+y);
    let mediaFinal = soma/notas.length;
    console.log("A média é"+mediaFinal);
}

// Menu de Opções
function menuOpcoes(){
    let continuar = true;
    while(continuar){
    console.log("===Calculadora Média===");
    console.log("|1. Adicionar Nota    |");
    console.log("|2. Calcular Média    |");
    console.log("|3. Sair              |");
    console.log("=======================");
    let operacao = prompt("Informe a Opção Desejada")
    switch(operacao){
        case "1": adicionarNota();
        break;
        case "2": calcularMedia();
        break;
        case "3": continuar = false;
        break;
        default: console.log("Opção Inválida");
        break;
        }// fim do switch
    }//fim do while
    console.log("Saindo...");
}//fim da function

menuOpcoes();