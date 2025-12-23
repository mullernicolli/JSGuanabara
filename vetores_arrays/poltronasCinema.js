const prompt = require('prompt-sync')();

// Array que representa o ESTADO das poltronas
// 'L' = Livre
// 'X' = Ocupada
let poltronas = ['L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L', 'L'];

// PROCEDIMENTO responsável apenas por MOSTRAR as poltronas livres
// Ele NÃO altera dados, só exibe informação
function mostrarPoltronasLivres (poltronas) {
    let poltronasLivres = [];       // Array auxiliar para guardar apenas as poltronas livres

    // Percorre todas as poltronas
    for (let i = 0; i < poltronas.length; i++) {
       if (poltronas[i] === 'L') {      // Se a poltrona estiver livre
          poltronasLivres.push('B' + (i + 1));      // Adiciona o número da poltrona (índice + 1) à lista de livres
      }
    }
console.log(`Poltronas Livres: ${poltronasLivres.join(', ')}`);     // Exibe todas as poltronas livres em uma única linha
}


let rUser;      // Variável de controle do laço  // Variável usada no while precisa existir antes do (do)

// Laço principal do programa
// Executa pelo menos uma vez e repete enquanto o usuário quiser
do {
    mostrarPoltronasLivres(poltronas);      // Mostra as poltronas livres no início de cada rodada

    let pReservada = parseInt(prompt('Qual poltrona deseja reservar?: B'));     // Pergunta ao usuário qual poltrona deseja reservar  // parseInt converte a resposta (string) em número

    let i = pReservada - 1;     // Converte o número da poltrona para índice do array  // Ex: B1 → índice 0 | B2 → índice 1

    if (poltronas[i] === 'L') {     // Verifica se a poltrona está livre
    poltronas[i] = 'X';     // Marca a poltrona como ocupada
    console.log('Poltrona Reservada com sucesso!');     // Feedback para o usuário
    } else {
        console.log('Poltrona Ocupada!');       // Caso a poltrona já esteja ocupada
    }

    rUser = prompt('Deseja reservar outra poltrona? [S/N]: ');      // Pergunta se o usuário quer reservar outra poltrona
    rUser = rUser.toUpperCase();        // Converte a resposta para maiúscula
} while (rUser === 'S');        // O laço continua enquanto o usuário digitar 'S'
