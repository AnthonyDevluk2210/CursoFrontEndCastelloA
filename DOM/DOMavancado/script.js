// Manipulando Html e CSS pelo Javascript -> DOM Avançado

// vamos criar um Header -> DOM
let header = document.createElement("header");
header.style.backgroundColor = "black";
header.style.color = "aliceblue";
header.style.textAlign = "center";
header.style.height = "8vh";
header.style.width = "100%";
document.body.appendechild(header);//adicionando o header dentro do -> body
document.body.style.margin = 0;

//adicionar uma Navbar no Header
let navBar = document.createElement("div");
navBar.style.display = "flex";
navBar.style.justifyContent = "space-around";
navBar.style.alignItems = "center";
navBar.style.height = "100%";
navBar.style.width = "100%";
navBar.style.fontFamily = "Comic Sans MS";
navBar.style.fontSize = "4vh";
header.appendChild(navBar); //adicionar navbar -> header

//adicionar elemnetos a navBar
let menuItens = ["Home", "Sobre", "Produtos", "Contatos"];

menuItens.forEach(item => {
    let a = document.createElement("a");
    a.innerText = item;
    navBar.appendChild(a);
});

// Footer do site
let footer = document.createElement("footer");
footer.style.bottom = "0";
footer.style.color = "aliceblue";
footer.style.position = "fixed";
footer.style.textAlign = "center";
footer.style.height = "5vh";
footer.style.width = "100%";
footer.style.backgroundColor = "black";
document.body.appendChild(footer);

let navBarFooter = document.createElement("div");
navBarFooter.style.display = "flex";
navBarFooter.style.justifyContent = "space-between";
navBarFooter.style.fontFamily = "Comic Sans MS";
navBarFooter.style.fontSize = "2vh";
navBarFooter.style.width = "100%";
navBarFooter.style.height = "100%";
footer.appendChild(navBarFooter);

let footerItens = ["Contato", "CopyRight \u00A9 2025", "Suporte", "Desenvolvedores"];

footerItens.forEach(item => {
    let a = document.createElement("a");
    a.innerText = item;
    navBarFooter.appendChild(a);
});

//clonagem de Elemntos no DOM
let btnClonar = document.createElement("button");
btnClonar.innerText = "Clonar";
document.body.appendChild(btnClonar);
/// criar card para clonagem
let card = document.createElement("div");
card.style.width = "150px";
card.style.height = "150px";
card.style.backgroundColor = "black";
card.style.color = "aliceblue";
card.style.margin = "10px";

let containerCards = document.createElement("div");
containerCards.style.display = "flex";
containerCards.style.justifyContent = "center";
containerCards.style.flexWrap = "wrap";
containerCards.style.width = "90%";
containerCards.style.margin = "auto";

document.body.appendChild(containerCards);

// criar a função de clonagem (cloneNode)
btnClonar.addEventListener("click", () =>{
    let cardClone = card.cloneNode(true);
    containerCards.appendChild(cardClone);
});

//modificação de classe com classList
let checkDarkMode =document.createElement("input");
checkDarkMode.type = "checkbox";
checkDarkMode.id = "darkMode";
let divDarkmode = document.createElement("div");
divDarkmode.style.display = "flex";
divDarkmode.style.justifyContent = "center";
divDarkmode.style.top = "10px";
divDarkmode.style.right = "10px";
divDarkmode.style.position = "absolute";
let p =document.createElement("p");
p.innerText = "Dark Mode";
p.style.color = "aliceblue";
divDarkmode.appendChild(p);
divDarkmode.appendChild(checkDarkMode);
document.body.appendChild(divDarkmode);
// funcionalidade do dakrmode
checkDarkMode.addEventListener("change", ()=>{
    document.body.classList.toggle("darkMode");
});

//eventos avançados
//eventos de teclado
document.addEventListener("keydown", (event)=>{
    console.log("Tecla Pressionada: " + event.key);
});

//eventos com teclado, input com sugestão de pesquisa
let input = document.createElement("input");
input.type = "text";
input.placeholder = "Digite sua pesquisa";
input.id = "inputPesquisa";
document.body.appendChild(input);
let lista = document.createElement("ul");
lista.style.listStyle = "none";
lista.style.padding = "0";
lista.style.margin = "0";
lista.id = "listaPesquisa";
document.body.appendChild(lista);

let listaItens = ["JavaScript", "HTML", "CSS", "React", "Angular", "Vue", "Node", "NPM"];

// método de sugestão de pesquisa
input.addEventListener("keyup", ()=>{
    lista.innerHTML = "";
    listaItens.forEach(item =>{
        let termo = input.value.toLowerCase();
        if(item.toLowerCase().includes(termo)){
            let li = document.createElement("li");
            li.innerText= item;
            lista.appendChild(li);
            //adicionar a função de clicar na palavra
            li.style.cursor = "pointer";
            li.addEventListener("click", ()=>{
                input.value = item;
                lista.innerHTML = "";
            });
        }
    })
});

//fazendo cerificação de formulários
let form = document.createElement("form");
form.id = "formCadastro";
let inputNome = document.createElement("input");
inputNome.type = "text";
inputNome.placeholder = "Informe o Nome";
form.appendChild(inputNome);
let inputEmail = document.createElement("input");
inputEmail.type = "email";
inputEmail.placeholder = "Informe o Email";
form.appendChild(inputEmail);
let inputSenha = document.createElement("input");
inputSenha.type = "password";
inputSenha.placeholder = "Informe a Senha";
form.appendChild(inputSenha);
let btnEnviar = document.createElement("button");
btnEnviar.innerText = "Enviar";
btnEnviar.type = "submit";
form.appendChild(btnEnviar);
document.body.appendChild(form);

//validação do formulário
let mensagem = document.createElement("p");
document.body.appendChild(mensagem);
form.addEventListener("submit", (event) =>{
    event.preventDefault();//não deixa o submit recarregar a tela
    let nome = inputNome.value;
    let email = inputEmail.value;
    let senha = inputSenha.value;
    if(nome ==="" || email === "" || senha === ""){
        mensagem.innerText = "Todos os Campos Devem se Preenchidos";
        mensagem.style.color = "red";

    } else{
        mensagem.innerText = "Cadastro Realizado com Sucesso";
        mensagem.style.color = "green";
        nome = "";
        email = "";
        senha = "";
        form.reset();
    }
});

