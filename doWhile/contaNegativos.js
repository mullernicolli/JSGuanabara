/* solicita 5x um numero pro usuário
e conta quantos números negativo foram digitados*/



// Permite usar prompt() no Node
const prompt = require('prompt-sync')();

let C = 1;      // Contador começa em 1
totN = 0;       // Quantidade de números negativos começa em 0

// Equivalente ao "REPITA ... ATÉ" do visualg
do {
    let N = parseInt(prompt('Digite um número: '));     // Pede um número ao usuário
    if (N < 0) {        // Se o número for negativo, soma +1 no total
        totN ++;        // Incrementa totN (totN = totN + 1)
    }
    C++;        // Incrementa o contador (C = C + 1)
} while (C <= 5);       // Repete enquanto C for menor ou igual a 5

console.log(`Foram digitados ${totN} números negativos!`);      // Mostra o total de números negativos digitados
