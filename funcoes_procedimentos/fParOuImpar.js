// Responsável apenas por responder se o número é par ou não.


// Declara uma função chamada fParOuImpar
// Ela recebe um número (x)
function fParOuImpar (x) {
    return x % 2 === 0      // A expressão (x % 2 === 0) retorna: true  → se o número for par / false → se o número for ímpar 
                            // A função simplesmente DEVOLVE esse resultado
}

module.exports = fParOuImpar;       // Exporta a função para que outros arquivos possam usá-la