const prompt = require('prompt-sync')();

const topo = require('./fTopo');
let MAI = 0;
let Pesado = '';


for (contador = 0; contador < 5; contador++) {
    topo(MAI, Pesado);
    let nome = prompt('Digite o nome: ');
    let peso = parseFloat(prompt(`Digite o peso de ${nome}: `));

    if (peso > MAI) {
        MAI = peso;
        Pesado = nome;
        topo(MAI, Pesado);
    }
}