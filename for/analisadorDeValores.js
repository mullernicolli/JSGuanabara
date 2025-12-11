/* usuário digita 5 valores,
ao final exibo a soma e a média de todos os valores digitados, quantos são divisíveis por 5, quantos são nulos 
e a soma de todos os números pares. */


// Importa o módulo prompt-sync para permitir entrada de dados no Node.js
const prompt = require('prompt-sync')();

let somaV = 0;      // vai acumular a soma de todos os valores digitados
let div5 = 0;       // contador para quantos valores são divisíveis por 5
let nulo = 0;       // contador para quantos valores são iguais a zero
let somaPar = 0;        // soma apenas dos números pares

// Loop que será executado 5 vezes
for (contador = 1; contador <= 5; contador++) {      // Comecei o contador em 1 apenas para ficar de acordo com a descrição do 'valor' para o usuário, onde uso o numero do contador no texto!
    let valor = parseInt(prompt(`Digite o ${contador}º valor: `));      // Solicita ao usuário o valor e converte para inteiro
    somaV = somaV + valor;      // Soma dos valores

    if (valor % 5 === 0) {      // Verifica se é divisível por 5
        div5++;        // se sim, soma 1 na variável
    }
    
    if (valor === 0) {      // Verifica se o valor é nulo (igual a zero)
        nulo++;        // se sim, soma 1 na variável
    }
    
    if (valor % 2 === 0) {      // Verifica se é par (módulo 2 igual a zero)
        somaPar = somaPar + valor;      // se sim, vai atribuindo a variável e vai somando
    }
}

let mediaV = somaV / 5;     // Cálculo da média fora do loop (A média só faz sentido depois que todos os valores foram somados, dentro do loop ainda não tem todos os números)

// Exibição dos resultados finais
console.log(`A soma entre os valores é: ${somaV}`);
console.log(`A média entre os valores é: ${mediaV}`);
console.log(`Valores divisíveis por 5: ${div5}`);
console.log(`Valores nulos: ${nulo}`);
console.log(`A soma dos núemros pares é: ${somaPar}`);