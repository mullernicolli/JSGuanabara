// Responsável apenas por executar a ação (mostrar o resultado).


// Declara um procedimento chamado pParOuImpar
// Ele recebe dois parâmetros:
// valor → o número digitado pelo usuário
// ehPar → o resultado da função (true ou false)
function pParOuImpar(valor, ePar) {
    if (ePar) {     // Se ePar for true, significa que o número é par
        console.log(`O valor ${valor} é par!`);     // Imprime a mensagem dizendo que o número é par
    } else {        // Caso contrário (ePar === false),
        console.log(`O valor ${valor} é ímpar!`);       // imprime a mensagem dizendo que o número é ímpar
    }
}

module.exports = pParOuImpar;       // Exporta o procedimento para ser usado no programa principal