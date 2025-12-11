// Exibir os 15 primeiros números da sequência de Fibonacci, incluindo os iniciais



let PF1 = 0;     // Primeiro termo da sequência de Fibonacci (primeiro fibonacci 1)
let SF2 = 1;     // Segundo termo da sequência (segundo fibonacci 2)

let fAtual = 1;
let fAnterior = 1;      // fAtual e fAnterior representam os dois últimos termos necessários para calcular o próximo número da sequência.
let proximoF;       // próximo termo da sequência

// Imprime os dois primeiros termos da sequência de Fibonacci:
console.log(PF1);        // 0  → 1º termo
console.log(SF2);        // 1  → 2º termo

/* Agora precisamos imprimir apenas MAIS 13 termos,
porque já imprimimos 2 antes do loop.

total necessário: 15 termos
já impressos:     2 termos (0 e 1)
faltam:           15 - 2 = 13 termos

Por isso o loop precisa ter exatamente 13 iterações.

Como o contador começa em 0, escrevemos < 13.
Isso gera as iterações:
contador = 0, 1, 2, 3, ..., 12  → total de 13 voltas.

Essa é a razão exata do uso de < 13. */

for (let contador = 0; contador < 13; contador++) {
    console.log(fAtual);        // Imprime o termo atual da sequência
    proximoF = fAtual + fAnterior;       // Calcula o próximo termo da sequência
    fAnterior = fAtual;     // Atualiza os valores: o atual vira o anterior
    fAtual = proximoF;      // o próximo vira o atual
}



// -------------------------------------------------------------------------------------------------------------



// Forma mais enxuta (pensei demais):

let F1 = 0;     // primeiro fibonacci, 0  (inicial)
let F2 = 1;     // segundo fibonacci, 1 (inicial)
let PF;     // próximo fibonacci (sequência)

// printa os iniciais
console.log(F1);
console.log(F2);

// inicia o cálculo da sequência em cima dos iniciais
for (contador = 0; contador < 13; contador++) {     // iniciei o contador em 0, então contador < 13 (pois 0 à 13 = 12)
    PF = F1 + F2;       // calcula o próximo termo da sequência em cima dos iniciais
    console.log(PF);        // printa o próximo termo da sequência
    F1 = F2;        // atualiza os valores: o atual vira o anterior
    F2 = PF;        // o próximo vira o atual
}

