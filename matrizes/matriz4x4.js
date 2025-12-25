// Importa a função prompt para permitir entrada de dados pelo terminal
// (equivalente ao Leia() do Visualg)
const prompt = require('prompt-sync')();

// Cria um array vazio que será a matriz 4x4
// Cada posição desse array será uma linha da matriz
let m4 = [];

// Laço externo: controla as LINHAS da matriz
// i vai de 0 até 3 (total de 4 linhas)
for (let i = 0; i < 4; i++) {

    // Inicializa a linha i como um novo array
    // Sem isso, m4[i][j] não existiria
    m4[i] = [];

    // Laço interno: controla as COLUNAS da linha atual
    // j vai de 0 até 3 (total de 4 colunas)
    for (let j = 0; j < 4; j++) {

        // Solicita ao usuário um valor para a posição [linha, coluna]
        // i + 1 e j + 1 são usados apenas para exibição "humana"
        m4[i][j] = parseInt(prompt(`Digite o valor da posição [${i + 1} , ${j + 1}]: `));
    }
}

// Exibe a matriz no console em formato de tabela,
// facilitando a visualização de linhas e colunas
console.table(m4);

