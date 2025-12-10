const prompt = require('prompt-sync')()     // importar e ativar a função prompt(), permitindo ler valores digitados pelo usuário no Node.js

let cont = 1;
let S = 0;
let maior = 0;

while (cont <= 5) {                                      
    let N = prompt(`Digite o ${cont}º valor: `); // pede pra digitar o Nº da contagem que o contador está no loop  // tudo aqui dentro roda 5 vezes
    N = parseFloat(N);                                  // tudo aqui dentro roda 5 vezes
    if (N > maior) {  // compara o valor que o usuário digitou com a atribuição atual de maior (N anterior)        // tudo aqui dentro roda 5 vezes
        maior = N;  // atribui N ao maior, depois faz o if acima ^                                                 // tudo aqui dentro roda 5 vezes
    }                                                                                                              // tudo aqui dentro roda 5 vezes
    S = S + N;  // atribui a soma de S(0) + N(valor digitado pelo usuário) ao S                                    // tudo aqui dentro roda 5 vezes
    cont = cont + 1;  // roda o contador novamente, se esquecer, fica em loop infinito                             // tudo aqui dentro roda 5 vezes
}

console.log('A soma de todos os valores foi', S);       // só roda 1 vez, no final
console.log('O maior número digitado foi: ', maior);    // só roda 1 vez, no final