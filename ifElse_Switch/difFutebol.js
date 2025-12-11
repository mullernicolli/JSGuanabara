const prompt = require('prompt-sync')();  // importar e ativar a função prompt(), permitindo ler valores digitados pelo usuário no Node.js

let C = prompt('Quantos gols o CORINTHIANS fez?: ');
C = parseFloat(C);

let SP = prompt('Quantos gols o SÃO PAULO fez?: ');
SP = parseFloat(SP);

let DIF = (C - SP);
DIF = Math.abs(DIF);  // deixa o número sem sinais, nesse caso sempre positivo

console.log(`DIFERENÇA: ${DIF}`);

if (DIF = 0) {
    console.log('EMPATE')
} else if (DIF > 0 || DIF <= 4) {
    console.log('NORMAL')
} else {
    console.log('GOLEADA!')
}
