// Importa a função prompt para permitir entrada de dados pelo terminal
const prompt = require('prompt-sync')();

// Declara a matriz (4x4) como um array vazio
// Cada posição será uma linha da matriz
let mid = [];

// Variável acumuladora para a soma da diagonal principal
let somaD = 0;

// Variável acumuladora para o produto da 2ª linha
// Começa em 1 porque produto não pode iniciar em 0
let prod2L = 1;

// Variável para armazenar o maior valor da 3ª coluna
let mv3C = 0;

// Laço externo: percorre as LINHAS da matriz
for (i = 0; i < 4; i++) {

    // Inicializa a linha i como um novo array
    mid[i] = [];

    // Laço interno: percorre as COLUNAS da linha atual
    for (j = 0; j < 4; j++) {

        // Lê o valor digitado pelo usuário e armazena
        // na posição [i][j] da matriz
        mid[i][j] = parseInt(prompt(`Digite o valor da posição [${i + 1} , ${j + 1}]: `));

        // Verifica se o elemento está na diagonal principal
        // (linha e coluna com o mesmo índice)
        if (i === j) {

            // Soma o valor da diagonal principal
            somaD = somaD + mid[i][j];
        }
    }
}

// Percorre as COLUNAS da 2ª linha da matriz
// Linha 2 (Visualg) corresponde ao índice 1 no JavaScript
for (j = 0; j < 4; j++) {

    // Multiplica todos os valores da 2ª linha
    prod2L = prod2L * mid[1][j];
}

// Percorre as LINHAS da 3ª coluna da matriz
// Coluna 3 (Visualg) corresponde ao índice 2 no JavaScript
for (i = 0; i < 4; i++) {

    // Verifica se o valor atual é maior que o maior valor armazenado
    if (mid[i][2] > mv3C) {

        // Atualiza o maior valor da 3ª coluna
        mv3C = mid[i][2];
    }
}

// Exibe a matriz completa no formato de tabela
console.table(mid);

// Exibe a soma da diagonal principal
console.log(`A soma da diagonal principal da matriz é: ${somaD}`);

// Exibe o produto dos valores da 2ª linha
console.log(`O produto entre os valores da 2ª linha é: ${prod2L}`);

// Exibe o maior valor encontrado na 3ª coluna
console.log(`O maior valor da 3ª coluna é: ${mv3C}`);