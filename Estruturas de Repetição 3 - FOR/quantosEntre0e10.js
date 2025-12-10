const prompt = require('prompt-sync')();

let Tot010 = 0;     // Variável que vai TOTALIZAR (contar) quantos valores estão entre 0 e 10
let sImpar = 0;     // Variável que vai acumular (somar) todos os valores ímpares digitados

// Loop que executa 6 vezes (contador começa em 1 e vai até 6)
for (let contador = 1; contador <= 6; contador++) {
    let valor = parseInt(prompt('Digite um valor: '));          // Solicita ao usuário um valor e converte a entrada para número inteiro
    if (valor >= 0 && valor <= 10 ) {       // Verifica se o valor está dentro do intervalo [0, 10]
        Tot010+=1;      /// TOTALIZA: adiciona 1 ao contador Tot010, indicando que mais um valor está no intervalo
    } if (valor % 2 === 1) {        // Verifica se o valor é ímpar usando o operador resto (%)
        sImpar = sImpar + valor;        // Soma ACUMULADA: adiciona o valor ímpar à variável sImpar  // A cada número ímpar digitado, ele é somado ao total já existente
    }
}

console.log(`Há ${Tot010} valores que estão entre 0 e 10`);         // Exibe quantos valores estão entre 0 e 10
console.log(`Nesse intervalo a soma de ímpares foi: ${sImpar}`);        // Exibe o total acumulado da soma de todos os números ímpares digitados