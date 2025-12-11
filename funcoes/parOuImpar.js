const prompt = require('prompt-sync')();
const parOuImpar = require('./fParOuImpar');


let valor = parseInt(prompt('Digite um valor: '));
parOuImpar(valor);
