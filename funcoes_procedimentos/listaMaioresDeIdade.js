// FUNÇÃO
// Recebe uma idade (number) por VALOR
// Retorna true se a idade for maior ou igual a 18
// Não altera nenhuma variável externa
function eMaior (x) {
    return x >= 18;
}


// PROCEDIMENTO
// Recebe uma idade (x) por VALOR
// Recebe o resultado da função (true / false)
// Altera o array 'maiores' por REFERÊNCIA (mutação com push)
// Não retorna nada
function listaMaiores (x, resultado) {
    if (resultado === true) {
        maiores.push(x);
    }
}

let idades = [14, 18, 24, 17, 30];      // Array original com todas as idades  // É um OBJETO, portanto passado por REFERÊNCIA quando usado
let maiores = [];       // Array vazio que irá armazenar apenas as idades >= 18  // Será alterado por REFERÊNCIA dentro do procedimento

// LAÇO PRINCIPAL
// Controla o fluxo do programa
// 'i' representa o ÍNDICE do array 'idades'
for (let i = 0; i < idades.length; i++) {
    let resultado = eMaior(idades[i]);      // Chama a função passando o VALOR da idade atual (idades[i])  // O retorno (true ou false) é armazenado na variável 'resultado'
    
    // Chama o procedimento passando:
    // - a idade atual (valor)
    // - o resultado da função
    // O procedimento decide apenas se adiciona ou não a idade no array 'maiores'
    listaMaiores(idades[i], resultado);
}

// Ao final da execução, o array 'maiores' conterá:
// [18, 24, 30]