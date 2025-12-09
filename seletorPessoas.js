// importa a biblioteca prompt-sync para permitir entrada do usuário no terminal
const prompt = require('prompt-sync')();

// declara variáveis que vão guardar as respostas do usuário
let sexo;       // vai guardar 'F' ou 'M'
let idade;      // vai guardar a idade como número inteiro
let cabelo;     // vai guardar a escolha numérica da cor do cabelo (1..4)
let continuar;      // vai guardar se o usuário quer continuar ('S' ou 'N')
// variáveis de contagem/informação que começam em zero
let h18cc = 0;      // conta homens com >= 18 anos e cabelo castanho (opção 2)
let mentrecl = 0;       // conta mulheres entre 25 e 30 anos com cabelo loiro (opção 3)

// começa o laço que se repete enquanto o usuário responder 'S' para continuar
do {
    sexo = prompt('Qual o sexo? [F/M]: ').toUpperCase();         // pede o sexo e já normaliza para maiúsculas com toUpperCase() // assim o usuário pode digitar 'f', 'F', 'm' ou 'M'
    idade = parseInt(prompt('Qual a idade? '));     // pede a idade e converte a string retornada pelo prompt para inteiro
    // exibe as opções de cor de cabelo para o usuário escolher
    console.log('Qual a cor do cabelo?');
    console.log('[1] Preto');
    console.log('[2] Castanho');
    console.log('[3] Loiro');
    console.log('[4] Ruivo'); 

    cabelo = parseInt(prompt());        // lê a escolha do cabelo e converte para inteiro

    // condição 1:
    // se for homem (sexo === 'M') e tiver 18 anos ou mais (idade >= 18)
    // e a opção de cabelo for 2 (castanho), incrementa h18cc
    if (sexo === 'M' && idade >= 18 && cabelo === 2) {
        h18cc++;
    // condição 2 (senão se):
    // se for mulher (sexo === 'F') e idade entre 25 e 30 inclusive
    // e cabelo igual a 3 (loiro), incrementa mentrecl
    } else if (sexo === 'F' && idade >= 25 && idade <= 30 && cabelo === 3) {
        mentrecl++;
    }

    continuar = prompt('Quer continuar? [S/N] ').toUpperCase();     // pergunta se o usuário quer continuar e normaliza para maiúscula

} while (continuar === 'S');        // o laço se repete enquanto continuar for igual a 'S'

// depois que o usuário escolhe não continuar, mostramos os resultados
console.log(`A quantidade de homens com mais de 18 anos e cabelos castanhos é: ${h18cc}`);
console.log(`A quantidade de mulheres entre 25 e 30 anos e cabelos loiros é: ${mentrecl}`);