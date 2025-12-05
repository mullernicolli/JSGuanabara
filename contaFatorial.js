// conta o fatorial do número que o usuário indicar


// Importa a função prompt para receber dados do usuário
const prompt = require('prompt-sync')();

let N = parseInt(prompt('Você quer contar o fatorial de qual número? '));       // N recebe o número digitado pelo usuário como inteiro
let C = N;      // C começa com o mesmo valor de N (contador que vai descendo até 1)
let F = 1;      // F começa com 1 porque é o valor neutro da multiplicação (acumulador)

do {
    console.log(C, 'x');        // Apenas mostra o valor que está sendo multiplicado
    F = F * C;       // Multiplica o acumulador pelo valor atual de C
    C = C - 1;      // Reduz C de 1 em 1 até chegar a 1
} while (C >= 1);        // Repete enquanto C for maior ou igual a 1

console.log(`O fatorial de ${N} é ${F}`);       // Exibe o valor final depois que o laço termina