// Essa linha permite usar "prompt" no Node.js
const prompt = require('prompt-sync')();

let gabpv = ['a', 'b', 'b', 'c', 'd'];      // Aqui está o gabarito da prova  // Cada posição do array é a resposta correta de uma questão
let nomea = [];     // Esse array vai guardar os nomes dos alunos
let notas = [];     // Esse array vai guardar as notas dos alunos
let somaT = 0;      // Essa variável vai guardar a soma das notas de toda a turma

// ESSE FOR PASSA POR CADA ALUNO (3 alunos)
for (let i = 0; i < 3; i++) {
    nomea[i] = prompt('Nome do aluno: ');       // Pergunta e guarda o nome do aluno
    let nota = 0;       // A nota começa em 0 para cada aluno

    // ESSE FOR PASSA PELAS 5 QUESTÕES DA PROVA
    for (let q = 0; q < 5; q++) {
        // Pergunta a resposta da questão atual  // q + 1 é só para mostrar 1ª, 2ª, 3ª...
        let gabal = prompt(`${q + 1}ª resposta do aluno: `);

        // Compara a resposta do aluno com o gabarito da mesma questão
        if (gabal === gabpv[q]) {
            nota = nota + 2;        // Se acertou, soma 2 pontos na nota
        }
    }

    notas[i] = nota;        // Guarda a nota desse aluno no array de notas
    somaT = somaT + nota;       // Soma essa nota na soma total da turma
}

console.log('Notas dos alunos:');       // TÍTULO

for (let i = 0; i < 3; i++) {
    // Mostra o nome e a nota de cada aluno
    console.log(`${nomea[i]} tirou ${notas[i]} pontos`);
}

let mediaT = somaT / 3;     // Calcula a média da turma
console.log(`A média da turma é ${mediaT.toFixed(1)}`);     // Mostra a média da turma com 1 casa decimal