/*contador com inicio, fim e passo
pulando passos positivos ou negativos

contador será cont e começa em inicio (variavel)

deve somar se o passo for positivo
deve subtrair se o passo for negativo

se o passo for 0 devo tratar, pois não tem como andar com passo 0

while para crescente será while inicio cont <= final (variavel)
while para regressivo será while cont >= final (variavel)*/

// CHATGPT ajudou, achei avançado, pulei muita coisa 😞


const prompt = require('prompt-sync')();

// Lê os valores digitados pelo usuário e converte para inteiros
let N1 = parseInt(prompt('Começa em quanto? '));
let N2 = parseInt(prompt('Termina em quanto? '));
let P = parseInt(prompt('Pula de quanto em quanto? '));

// Verifica se algum valor não é um número
if (Number.isNaN(N1) || Number.isNaN(N2) || Number.isNaN(P)) {
    console.log('Entrada inválida. Digite números inteiros.');
    process.exit(1);        // Encerra o programa
}

// Não existe contagem com o passo 0, pois cont nunca mudaria
if (P === 0) {
    console.log('Não é possível realizar a operação pulando 0.');
    process.exit(1);
}

// Caso especial: início e fim iguais -> mostra uma vez e encerra
if (N1 === N2) {
    console.log(N1);
    process.exit(0);
}

// Aqui o contador começa no início fonecido pelo usuário
let cont = N1;

// Contagem crescente (quando N1 < N2)
if (N1 < N2) {
// Se o início é menor que o fim, a contagem vai pra frente, então o passo PRECISA ser positivo
    if (P <= 0) {
        console.log('Passo inválido: para contar do menor para o maior o passo deve ser positivo.');
    } else {
        while (cont <= N2) {
            console.log(cont);
            cont += P;      // Soma e avança pelo passo positivo  // Forma mais curta de escrever: cont = cont + P  // Vai somar pq P é positivo
        }
    }
// Caso regressivo (N1 > N2)    
} else {
// Se o início é maior que o fim, a contagem vai pra trás, então o passo PRECISA ser negativo, se o passo for positivo nunca chegaria no final -> loop infinito
    if (P >= 0) {
        console.log('Passo inválido: para contar do maior para o menor o passo deve ser negativo');
    } else {
        while (cont >= N2) {
            console.log(cont);
            cont += P;      // P é negativo, então somar P diminui cont corretamente  // Forma mais curta de escrever: cont = cont + P  // Vai subtrair pq P é negativo
        }
    }
}