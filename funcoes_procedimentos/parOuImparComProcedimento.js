const prompt = require('prompt-sync')();
const pParOuImpar = require('./pParOuImpar');


let valor = parseInt(prompt('Digite um valor: '));
pParOuImpar(valor);