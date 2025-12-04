const prompt = require('prompt-sync')();                // Importa o prompt-sync para permitir entrada de dados pelo terminal

let N1 = parseInt(prompt('Começa em quanto? '));        // Lê o número inicial digitado pelo usuário e converte para inteiro
let N2 = parseInt(prompt('Termina em quanto? '));       // Lê o número final digitado pelo usuário e converte para inteiro
let cont = 0;                                           // Variável que vai servir de contador durante a repetição

if (N1 < N2) {                                          // Verifica se é uma contagem crescente (N1 < N2)
    cont = N1                                           // Começa a contagem no número inicial
    while (cont <= N2) {                                // Enquanto o contador não passar do número final, continua imprimindo
//console.log primeiro, pq quero mostrar em que número está e depois atualizar, e quando fizer o loop, vai mostrar o atualizado e assim repete      
        console.log(cont);                              // Mostra o valor atual do contador
        cont = cont + 1                                 // Avança o contador para o próximo número (incremento)
    }
} else {                                                // Se não for crescente, então é regressiva (N1 > N2)
    cont = N1                                           // Começa a contagem no número inicial
    while (cont >= N2) {                                // Continua enquanto o contador for maior ou igual ao número final
//console.log primeiro, pq quero mostrar em que número está e depois atualizar, e quando fizer o loop, vai mostrar o atualizado e assim repete     
        console.log(cont);                              // Mostra o valor atual do contador
        cont = cont - 1                                 // Diminui o contador (decremento)
    }
}
