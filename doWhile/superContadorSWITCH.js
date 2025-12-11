
// Importa a função prompt para permitir entrada do usuário pelo terminal
const prompt = require('prompt-sync')();

let contador = 1;       // O contador começa em 1
let menu;       // Variável que vai guardar a escolha do menu

// O programa ficará repetindo até a pessoa digitar 3 (Sair)
do {
    // Mostra o menu na tela
    console.log('Menu');
    console.log('[1] De 1 a 10');
    console.log('[2] De 10 a 1');
    console.log('[3] Sair');

    menu = parseInt(prompt());       // Lê a opção do usuário e converte em número

    // O switch vai verificar qual opção foi digitada
    switch (menu) {

        case 1:     // Quando o usuário digita 1
            // Conta de 1 até 10
            contador = 1;          // Garante que sempre começa do 1
            while (contador <= 10) {
                console.log(contador);      // Mostra o número atual
                contador++;     // Aumenta +1
            }
        break;      // Sai do switch

        case 2:     // Quando o usuário digita 2
            // Conta de 10 até 1
            contador = 10;         // Garante que sempre começa do 10
            while (contador >= 1) {
                console.log(contador);      // mostra o número atual
                contador--;     // diminui -1
            }
        break;      // Sai do switch

        case 3:     // Quando digita 3
            console.log('Saindo...');
        break;      // Apenas sai do switch, o loop para sozinho
    } 
// O loop continua enquanto a pessoa NÃO digitar 3
} while (menu != 3);
