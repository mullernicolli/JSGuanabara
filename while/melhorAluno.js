/* detectar quantos alunos a sala tem

pedir os dados nome e nota x vezes (qtd de alunos)

exibir qual foi o melhor aluno de acordo com a maior nota entre os 4 */



// Importa a função prompt-sync para ler entrada do usuário no terminal
const prompt = require('prompt-sync')();

let qa = parseInt(prompt('Quanto alunos tem na sala? '));       // Lê, como string, a resposta do usuário e converte para inteiro  // 'qa' = quantidade de alunos
let c = 1;      // Contador que controla quantas vezes já lemos (começa em 1 para facilitar a comparação <= qa)
let mn = -Infinity;     // 'mn' = melhor nota encontrada até agora.  // Inicializado com 0; se quiser aceitar notas negativas, usar -Infinity ou ler o primeiro aluno antes do loop.
let ma;     // Não inicializamos com string vazia necessariamente; será atribuído quando encontrarmos a primeira nota maior que mn  // 'ma' = nome do melhor aluno encontrado até agora.

// Enquanto o contador for menor ou igual à quantidade de alunos, repetimos
while (c <= qa) {
    let nomeA = prompt('Aluno: ');      // lê o nome do aluno atual
    let notaA = parseFloat(prompt('Nota: '));       // lê a nota do aluno atual e converte para número (aceita casas decimais)
    
    // Aqui fazemos a verificação: se a nota lida for maior que a melhor nota atual,
    // Atualizamos tanto a melhor nota quanto o nome do melhor aluno
    if (notaA > mn) {
        mn = notaA;
        ma = nomeA;
    }
    c += 1      // Incrementa o contador para avançar para o próximo aluno no próximo loop
}

// Quando o while termina, já processamos todos os alunos
// Imprimimos o resultado final: nome do melhor aluno e a nota correspondente
console.log(`O melhor aluno foi ${ma} com ${mn} de nota!`);