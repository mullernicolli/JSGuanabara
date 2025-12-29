// Importa a biblioteca prompt-sync para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

/*
========================
FUNÇÃO: retornaMatriz
========================
Responsabilidade:
- Criar a matriz 4x4
- Pedir ao usuário todos os valores
- Retornar a matriz pronta

IMPORTANTE:
- Aqui usamos o número 4 FIXO
- Porque estamos CRIANDO a matriz
- Ela ainda não existe, então NÃO podemos usar matriz.length
*/
function retornaMatriz () {

    // Cria um array vazio que será a matriz
    let mat4 = [];

    // Loop das LINHAS (4 linhas)
    for (let i = 0; i < 4; i++) {

         // Cada posição da matriz recebe um novo array (linha)
         mat4[i] = [];

         // Loop das COLUNAS (4 colunas)
         for (let j = 0; j < 4; j++) {

              // Lê o valor digitado pelo usuário
              // i + 1 e j + 1 são apenas para exibição amigável (matriz começa em 0 no JS)
              mat4[i][j] = parseInt(
                prompt(`Digite o valor da posição [${i + 1} , ${j + 1}]: `)
              );
          }
    }

    // Retorna a matriz completamente preenchida
    return mat4;
}

/*
========================
FUNÇÃO: mostrarMatriz
========================
Responsabilidade:
- Apenas exibir a matriz no formato de tabela
- NÃO altera dados
- NÃO cria matriz
*/
function mostrarMatriz (matriz) {

    // console.table mostra a matriz em formato visual organizado
    console.table(matriz);
}

/*
========================
FUNÇÃO: mostraDP
========================
Diagonal Principal

Conceito matemático:
- Diagonal principal → linha === coluna

Por isso:
- Usamos APENAS um loop
- Usamos matriz.length porque a matriz JÁ EXISTE
*/
function mostraDP (matriz) {

    // Percorre todas as linhas da matriz
    for (let i = 0; i < matriz.length; i++) {

        // Acessa diretamente o elemento da diagonal
        // linha i, coluna i
        console.log(matriz[i][i]);
    }
}

/*
========================
FUNÇÃO: mostraTS
========================
Triângulo Superior

Conceito matemático:
- Elementos ACIMA da diagonal
- Regra: coluna > linha

Implementação:
- i percorre as linhas
- j começa em i + 1 (logo após a diagonal)
*/
function mostraTS (matriz) {

    // Percorre todas as linhas
    for (let i = 0; i < matriz.length; i++) {

        // Percorre apenas as colunas após a diagonal
        for (let j = i + 1; j < matriz.length; j++) {

            console.log(matriz[i][j]);
        }
    }
}

/*
========================
FUNÇÃO: mostraTI
========================
Triângulo Inferior

Conceito matemático:
- Elementos ABAIXO da diagonal
- Regra: coluna < linha

Implementação:
- i começa em 1 (linha 0 não tem triângulo inferior)
- j começa em 0 e vai até antes de i
*/
function mostraTI (matriz) {

    // Começa da linha 1, pois a linha 0 não possui elementos abaixo da diagonal
    for (let i = 1; i < matriz.length; i++) {

        // Percorre as colunas antes da diagonal
        for (let j = 0; j < i; j++) {

            console.log(matriz[i][j]);
        }
    }
}

/*
========================
FUNÇÃO: menuOpcoes
========================
Responsabilidade:
- Controlar o fluxo do programa
- Mostrar o menu
- Chamar as funções corretas

IMPORTANTE:
- Essa função NÃO cria a matriz
- Ela recebe a matriz pronta por parâmetro
*/
function menuOpcoes (matriz) {

    let op;

    // Menu se repete enquanto a opção NÃO for 5
    do {

        // Exibe as opções do menu
        console.log('[1] Mostrar a matriz');
        console.log('[2] Diagonal Principal');
        console.log('[3] Triangulo Superior');
        console.log('[4] Triangulo Inferior');
        console.log('[5] Sair');

        // Lê a opção escolhida
        op = parseInt(prompt('OPÇÃO: '));

        // Opção 1 → mostrar matriz completa
        if (op === 1) {
            mostrarMatriz(matriz);

        // Opção 2 → diagonal principal
        } else if (op === 2) {
            mostraDP(matriz);

        // Opção 3 → triângulo superior
        } else if (op === 3) {
            mostraTS(matriz);

        // Opção 4 → triângulo inferior
        } else if (op === 4) {
            mostraTI(matriz);
        }

    // Quando op === 5, a condição falha e o menu termina
    } while (op !== 5);
}

/*
========================
PROGRAMA PRINCIPAL
========================
*/

// Cria a matriz UMA ÚNICA VEZ
let matriz = retornaMatriz();

// Passa a matriz pronta para o menu
menuOpcoes(matriz);