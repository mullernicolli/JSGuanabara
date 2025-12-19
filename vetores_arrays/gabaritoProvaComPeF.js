// Mesmo exercício mas idêntico ao que o Guanabara fez, com procedimentos e funções e estilizado.

const prompt = require('prompt-sync')();

// Vetores globais (como no Visualg)
let gab = [];      // gabarito
let prova = [];    // respostas do aluno
let nome = [];     // nomes dos alunos
let nota = [];     // notas dos alunos

let s = 0;         // soma das notas
let m = 0;         // média

// ========== PROCEDIMENTO ==========
function cadastroGabarito() {
    console.log("PASSO 1 - Cadastro de Gabarito");
    console.log("-------------------------------");

    for (let c = 0; c < 5; c++) {
        gab[c] = prompt(`Questão ${c + 1}: `);
    }
}

// ========== FUNÇÃO ==========
function cadastraProva() {
    let notaFinal = 0;

    console.log("RESPOSTAS DADAS");

    for (let c = 0; c < 5; c++) {
        prova[c] = prompt(`Questão ${c + 1}: `);

        // Compara ignorando maiúsculas/minúsculas
        if (prova[c].toUpperCase() === gab[c].toUpperCase()) {
            notaFinal += 2;
        }
    }

    return notaFinal;
}

// ========== PROGRAMA PRINCIPAL ==========
cadastroGabarito();

for (let a = 0; a < 3; a++) {
    console.clear();
    console.log("------------------------");
    console.log(`ALUNO ${a + 1}`);
    console.log("------------------------");

    nome[a] = prompt("Nome: ");
    nota[a] = cadastraProva();
    s += nota[a];
}

console.clear();
console.log("NOTAS FINAIS");
console.log("-----------------------------");

for (let a = 0; a < 3; a++) {
    console.log(`${nome[a].padEnd(10)} ${nota[a].toFixed(1)}`);
}

m = s / 3;
console.log("-----------------------------");
console.log(`Média da Turma: ${m.toFixed(1)}`);
