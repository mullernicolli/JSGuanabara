// Identifica se o número inserido pelo usuário é primo ou não


// Importa a função prompt para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();


let N = parseInt(prompt('Digite o número para verificar se ele é primo: '));        // Pede ao usuário um número e converte a resposta (string) para número inteiro
let C = 1;      // Começa o divisor C em 1 — vamos testar todos os números de 1 até N
let P = 0;      // Variável para contar quantos divisores o número tem

// Estrutura DO WHILE: executa primeiro, testa depois
do {
    if (N % C === 0) {      // Se o resto da divisão de N por C for zero, significa que C é divisor de N
        P++;        // Então soma +1 ao total de divisores
    }
    C++;        // Passa para o próximo número divisor
} while (C <= N);       // Repete enquanto C for menor ou igual a N

if (P > 2) {        // Após contar os divisores, se tiver mais de 2 (1 e ele mesmo), não é primo
    console.log(`O número ${N} não é primo!`);
} else {
    console.log(`O número ${N} é primo!`);
}

