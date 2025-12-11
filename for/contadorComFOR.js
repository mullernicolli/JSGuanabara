const prompt = require('prompt-sync')();

let v = parseInt(prompt('Digite um valor: '));

if (v % 2 === 1) {      // se o número for ímpar
        v = v - 1;      // transforme ele em par
    }

for (let contador = v; contador >= 0; contador-=2) {      // contagem regressiva
    console.log(contador);      // exibe apenas os números pares, por conta do if
}

