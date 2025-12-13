const fParOuImpar = require('./fParOuImpar');

const prompt = require('prompt-sync')();

let v = parseInt(prompt('Digite um valor: '));

let r = fParOuImpar(v);

if (r === true) {
    console.log(`O valor ${v} é PAR!`);
} else {
    console.log(`O valor ${v} é ÍMPAR!`);
}