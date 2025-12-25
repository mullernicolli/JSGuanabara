// Uma matriz identidade de 4ª ordem: matriz identidade é uma matriz onde a diagonal principal possui linhas e colunas com valores iguais, ou seja, a diagonal principal recebe 1, e o restante 0.



// Cria um array vazio.
// Ele será a matriz principal (as linhas).
let mid = [];

// Laço externo: controla as LINHAS da matriz
// i vai de 0 até 3 (4 linhas)
for (let i = 0; i < 4; i++) {

    // Para cada linha, criamos um novo array vazio.
    // Isso "forma" a linha i da matriz.
    mid[i] = [];

    // Laço interno: controla as COLUNAS da linha atual
    // j vai de 0 até 3 (4 colunas)
    for (let j = 0; j < 4; j++) {

        // Se o índice da linha for igual ao índice da coluna,
        // estamos na diagonal principal da matriz.
        if (i === j) {

            // Na diagonal principal, colocamos o valor 1.
            // Ex: [0][0], [1][1], [2][2], [3][3]
            mid[i][j] = 1;

        } else {

            // Em todas as outras posições da matriz,
            // colocamos o valor 0.
            mid[i][j] = 0;
        }
    }
}

// Exibe a matriz no formato de tabela,
// facilitando a visualização de linhas e colunas.
console.table(mid);