const fParOuImpar = require('./fParOuImpar');       // Importa a função que verifica se o número é par ou ímpar (linha criada automática qnd chamo a função no código)
const pParOuImpar = require('./pParOuImpar');       // Importa o procedimento que mostra o resultado na tela (linha criada automática qnd chamo o procedimento no código)

const prompt = require('prompt-sync')();        // Importa a biblioteca prompt-sync para ler dados do usuário

let v = parseInt(prompt('Digite um valor: '));      // Solicita ao usuário que digite um valor  // parseInt converte o texto digitado para número inteiro

// Chama a FUNÇÃO fParOuImpar passando o número digitado
// O retorno será true (par) ou false (ímpar)
let resultado = fParOuImpar(v);

// Chama o PROCEDIMENTO pParOuImpar
// Passa o número digitado e o resultado da função
// O procedimento apenas mostra o resultado na tela
pParOuImpar(v, resultado);