const prompt = require('prompt-sync')();


function matrizPreenchida() {
    let tabuleiro = [];
    let contador = 1;

    for (let l = 0; l < 3; l++) {
        tabuleiro[l] = [];
        for (let c = 0; c < 3; c++) {
            tabuleiro[l][c] = contador;
            contador += 1;
        }
    }
    return tabuleiro;
}

function mostraMatriz(matriz) {
    for (let l = 0; l < 3; l++){
        console.log("----------------");
        console.log(' | ' + matriz[l][0] + ' | ' + matriz[l][1] + ' | ' + matriz[l][2] + ' | ');
    }
    console.log("----------------");
}

function podeJogar(matriz, jogador, posicao) {
    let jogou = false;

    for (let l = 0; l < 3; l++) {
        for (let c = 0; c < 3; c++) {
            if (matriz[l][c] === posicao && typeof matriz[l][c] === 'number') {
            matriz[l][c] = jogador;
            jogou = true;
            return jogou;
            } else if (matriz[l][c] === posicao && typeof matriz[l][c] !== 'number') {
                jogou = false;
                console.log('Posição Ocupada!')
            }
        } 
    }
}

function definePosicao () {
    let posicao = parseInt(prompt('Qual casa quer jogar? [1 a 9]: '));
    return posicao;
}

// ...........

let tabuleiro = matrizPreenchida();
mostraMatriz(tabuleiro);