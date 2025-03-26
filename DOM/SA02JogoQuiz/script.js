// DOM -> Jogo Quiz Interartivo

let perguntas = [];
let proximaPergunta = 0;

// DOM -> Elementos 

let perguntasElement = document.getElementById("pergunta");
let opcoesElement = document.getElementById("opcoes");
let proximaElement = document.getElementById("proxima");
let respostaElement = document.getElementById("resposta");

//fetch -> pegar as pergunats
fetch("perguntas.json")
    .then(response => response.json())
    .then(data => {
        perguntas = data;
        carregarPerguntas();//função para carregar no html
    }) //tratamento de erros

//DOM -> funções
function carregarPerguntas(){}