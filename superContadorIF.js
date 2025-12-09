// Importa a função prompt(), que permite ler o que o usuário digita no console.
const prompt = require('prompt-sync')();

let contador = 1;       // Contador começa em 1. Ele será usado para contar de 1 a 10 e de 10 a 1.
let menu;       // Variável que vai guardar a escolha do usuário no menu.

// Início do loop do...while, que exibe o menu até o usuário digitar 3.
do {
    // Mostra menu na tela
    console.log('Menu');
    console.log('[1] De 1 a 10');
    console.log('[2] De 10 a 1');
    console.log('[3] Sair');
    menu = parseInt(prompt());      // Lê a escolha do usuário e converte para número.

    if (menu === 1) {       // Se o usuário escolher a opção 1...
        while (contador <= 10) {     // Enquanto contador for menor ou igual a 10.
            console.log(contador);      // Mostra o valor atual
            contador++;     // Aumenta o contador em +1
        }
    contador = 1;       // Ao terminar de contar até 10, reinicia contador para 1, para estar preparado caso o menu seja exibido novamente.
    } else if (menu === 2) {        // Se o usuário escolher a opção 2...
        contador = 10;      // Começa o contador em 10, porque vamos contar para trás.
        while (contador >= 0) {      // Enquanto contador for maior ou igual a 0.
            console.log(contador);      // Mostra o valor atual
            contador--;     // Dimimui o contador em -1
        }
        contador = 1;       // Depois de terminar a contagem, resetamos para 1, para o programa estar pronto caso a opção 1 seja escolhida depois.
    }

    } while (menu != 3);        // O programa repete o menu enquanto o usuário NÃO digitar 3. Se digitar 3, o loop termina e o programa finaliza.

