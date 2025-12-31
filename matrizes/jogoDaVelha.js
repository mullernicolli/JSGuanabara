// Importa a biblioteca prompt-sync.
// Isso permite que o programa peça dados ao usuário pelo terminal.
// Sem isso, não conseguiríamos usar prompt() no Node.js.
const prompt = require('prompt-sync')();


// ==============================
// FUNÇÃO: tabuleiroPreenchido
// ==============================
// Esta função tem UMA responsabilidade:
// criar e devolver a matriz inicial do jogo da velha.
function tabuleiroPreenchido() {

    // Cria a variável tabuleiro como um array vazio.
    // Este array será transformado em uma matriz 3x3.
    let tabuleiro = [];

    // Cria um contador numérico que começa em 1.
    // Ele será usado para numerar as posições jogáveis.
    let contador = 1;

    // Loop externo: controla as LINHAS da matriz.
    // l começa em 0 e vai até 2 (3 linhas).
    for (let l = 0; l < 3; l++) {

        // Para cada linha, criamos um novo array.
        // Isso representa as COLUNAS daquela linha.
        tabuleiro[l] = [];

        // Loop interno: controla as COLUNAS da matriz.
        // c começa em 0 e vai até 2 (3 colunas).
        for (let c = 0; c < 3; c++) {

            // Atribui o valor do contador à posição [l][c].
            // Exemplo: tabuleiro[0][0] = 1
            tabuleiro[l][c] = contador;

            // Incrementa o contador para a próxima posição.
            // Sem isso, todas as casas teriam o mesmo número.
            contador += 1;
        }
    }

    // Retorna o tabuleiro completamente preenchido.
    // Quem chamar essa função receberá a matriz pronta.
    return tabuleiro;
}


// ==============================
// FUNÇÃO: mostraTabuleiro
// ==============================
// Responsável APENAS por mostrar o tabuleiro no console.
// Ela NÃO altera o jogo, apenas exibe.
function mostraTabuleiro(tabuleiro) {

    // Loop que percorre cada linha da matriz.
    for (let l = 0; l < 3; l++){

        // Imprime uma linha horizontal para separar visualmente.
        console.log("----------------");

        // Imprime uma linha do tabuleiro.
        // Cada posição pode conter:
        // - um número (posição livre)
        // - 'X'
        // - 'O'
        console.log(' | ' + tabuleiro[l][0] + ' | ' + tabuleiro[l][1] + ' | ' + tabuleiro[l][2] + ' | ');
    }

    // Imprime a linha final inferior do tabuleiro.
    console.log("----------------");
}


// ==============================
// FUNÇÃO: definePosicao
// ==============================
// Responsável por perguntar ao usuário qual posição deseja jogar.
function definePosicao () {

    // prompt() pede um valor ao usuário.
    // parseInt converte o texto digitado para número.
    let posicao = parseInt(prompt('Qual casa quer jogar? [1 a 9]: '));

    // Retorna o número escolhido.
    return posicao;
}


// ==============================
// FUNÇÃO: podeJogar
// ==============================
// Esta função decide:
// - se a jogada é válida
// - se a jogada será aplicada
// - se deve retornar true ou false
function podeJogar(tabuleiro, jogador, posicao) {

    // Variável lógica que indica se a jogada aconteceu.
    // Começa como false porque ainda não jogamos.
    let jogou = false;

    // Percorre todas as LINHAS da matriz.
    for (let l = 0; l < 3; l++) {

        // Percorre todas as COLUNAS da matriz.
        for (let c = 0; c < 3; c++) {

            // PRIMEIRA CONDIÇÃO:
            // - a posição do tabuleiro é IGUAL à posição escolhida
            // - e o conteúdo ainda é um número (não foi jogado)
            if (tabuleiro[l][c] === posicao && typeof tabuleiro[l][c] === 'number') {

                // Substitui o número pelo símbolo do jogador ('X' ou 'O').
                tabuleiro[l][c] = jogador;

                // Marca que a jogada foi feita com sucesso.
                jogou = true;

                // Retorna true imediatamente.
                // Não faz sentido continuar procurando.
                return jogou;
            }
        } 
    }
}


// ==============================
// FUNÇÃO: velha
// ==============================
// Verifica se o jogo terminou por empate (velha).
function velha(tabuleiro) {

    // Começa assumindo que deu velha.
    let velha = true;

    // Percorre todo o tabuleiro.
    for (let l = 0; l < 3; l++) {
        for (let c = 0; c < 3; c++) {

            // Se existir QUALQUER número,
            // ainda existe jogada possível.
            if (typeof tabuleiro[l][c] === 'number') {
                velha = false;
            }
        }
    }

    // Retorna true (deu velha) ou false (não deu).
    return velha;
}


// ==============================
// FUNÇÃO: vitoria
// ==============================
// Verifica TODAS as possibilidades de vitória.
function vitoria(tabuleiro) {

    // Flag de controle da vitória.
    let vitoria = false;

    // Verificação de LINHAS.
    for (let l = 0; l < 3; l++) {
        if (tabuleiro[l][0] === tabuleiro[l][1] && tabuleiro[l][1] === tabuleiro[l][2] && typeof tabuleiro[l][0] !== 'number') {
            vitoria = true;
        }
    }

    // Verificação de COLUNAS.
    for (let c = 0; c < 3; c++) {
        if (tabuleiro[0][c] === tabuleiro[1][c] && tabuleiro[1][c] === tabuleiro[2][c] && typeof tabuleiro[0][c] !== 'number') {
            vitoria = true;
        }
    }

    // Verificação da DIAGONAL PRINCIPAL.
    if (tabuleiro[0][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[2][2] && typeof tabuleiro[0][0] !== 'number') {
        vitoria = true;
    }

    // Verificação da DIAGONAL SECUNDÁRIA.
    if (tabuleiro[2][0] === tabuleiro[1][1] && tabuleiro[1][1] === tabuleiro[0][2] && typeof tabuleiro[2][0] !== 'number') {
        vitoria = true;
    }

    // Retorna se houve vitória.
    return vitoria;
}


// ==============================
// PROGRAMA PRINCIPAL
// ==============================

// Cria o tabuleiro inicial chamando a função.
let tabuleiro = tabuleiroPreenchido();

// Define o jogador inicial como 'X'.
let jogador = 'X';

// Flags de controle do estado do jogo.
let deuVitoria = false;
let deuVelha = false;

// Variáveis auxiliares.
let posicao;
let jogou = false;

// Mostra o tabuleiro inicial antes da primeira jogada.
mostraTabuleiro(tabuleiro);


// ==============================
// LOOP PRINCIPAL DO JOGO
// ==============================
do {

    // Solicita a posição ao jogador atual.
    posicao = definePosicao();

    // Tenta realizar a jogada.
    jogou = podeJogar(tabuleiro, jogador, posicao);

    // Se a jogada foi válida:
    if (jogou === true) {

        // Verifica se deu empate.
        deuVelha = velha(tabuleiro);

        // Verifica se alguém venceu.
        deuVitoria = vitoria(tabuleiro);

        // Mostra o tabuleiro atualizado.
        mostraTabuleiro(tabuleiro);
    } 

    // Se o jogo ainda não acabou,
    // alterna o jogador.
    if (deuVelha === false && deuVitoria === false) {

        // Se era X, vira O.
        // Se era O, vira X.
        if (jogador === 'X') {
            jogador = 'O';
        } else {
            jogador = 'X';
        }
    }

// O jogo continua enquanto:
// - NÃO deu velha
// - NÃO deu vitória
} while (deuVelha === false && deuVitoria === false);