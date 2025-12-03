const prompt = require('prompt-sync')();

let c = 1
let qtdConv = parseFloat(prompt('Quantas vezes você precisa converter? '));  // o usuário define quantas vezes será convertido

while (c <= qtdConv) {  // contador com base em quantas vezes o usuário definiu que quer converter
    let reais = parseFloat(prompt('Quantos REAIS você tem?: R$'));  // prompt() sempre retorna string, então precisa de parseFloat
    let dolares = reais / 5.33;  // não pecisa de parseFloat pq o JavaScript já converte para número automaticamente, pq divisão só funciona com números.
    console.log(`Você terá $${dolares.toFixed(2)}`);  // toFixed(2) com dolares  pra deixar formatado com 2 casas decimais
    c = c + 1;  // roda o contador novamente
}