// Arrays e Matrix (vetores e matrizes)
// declarar uma array => []
let array = [];
let numberArray = [1,2,3,4,5,6,7,8,9];
let textArray = ["Sapato", "Bola", "Caixa"];
let mixArray = [1, "Nome", true];

//Como Faço para Acessar os elementos (indice)
console.log(textArray[1]); // Bola
console.log(numberArray[8]); // 9

// Contar Elemntos de um Array
console.log(numberArray.length); //9
console.log(textArray.length); //3

//Adicionar elementos em um Array
// no começo (0) unshift
textArray.unshift("Cachorro");
console.log(textArray);
//no final - push()
textArray.push("Casa");
console.log(textArray);

//Alterar o valor de um elemento Array
textArray[2] = "Carro";
console.log(textArray);

//remover Elementos do Array
// do começo - shift
textArray.shift(); //Cachorro
console.log(textArray);
// do meio - splice(indice, quantidade)
textArray.splice(1,1); //Carro
console.log(textArray);
// do fim
textArray.pop(); // Casa
console.log(textArray);

// Percorrer um Array
for(let i=0; i<numberArray.length;i++){
    console.log("Numero["+i+"]="+numberArray[i]);
}
//forEach
numberArray.forEach(element => {
    console.log(element)
});

//indexOf=>Retorna o Índice do Elemento
console.log(mixArray.indexOf("Nome"));
console.log(numberArray.indexOf(10));
