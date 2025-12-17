// ARRAY DE OBJETOS
// 'usuarios' é uma lista (array)
// Cada posição do array contém um OBJETO representando um usuário
// Cada usuário possui duas propriedades: nome e idade
let usuarios = [
  { nome: 'Luana', idade: 30 },
  { nome: 'Julia', idade: 17 },
  { nome: 'Luan',  idade: 18 }
];

// FUNÇÃO (REGRA / DECISÃO)
// Recebe uma idade (number) por VALOR
// Retorna true se a idade for maior ou igual a 18
// Retorna false caso contrário
// Não usa Cypress
// Não altera nenhuma variável externa
function eMaior (idade) {
  return idade >= 18;
}

// PROCEDIMENTO (AÇÃO COM CYPRESS)
// Recebe UM usuário (objeto) por REFERÊNCIA
// Não toma decisão nenhuma
// Apenas executa ações na interface usando Cypress
// Não retorna valor
function preencherDados (usuario) {
  cy.get('#nome').type(usuario.nome);
  cy.get('#idade').type(usuario.idade);
}

// TESTE CYPRESS
// O 'it' funciona como o PROGRAMA PRINCIPAL
// Ele coordena:
// - o laço
// - a decisão
// - a execução do Cypress
it('preenche o formulário se usuário for maior de idade', () => {

  // LAÇO DE REPETIÇÃO
  // Percorre o array 'usuarios' do índice 0 até o último
  for (let i = 0; i < usuarios.length; i++) {

    // Acessa o usuário atual usando o índice
    let usuarioAtual = usuarios[i];

    // CHAMA A FUNÇÃO DE REGRA
    // Passa a idade do usuário por VALOR
    // Recebe true ou false
    if (eMaior(usuarioAtual.idade)) {

      // Se a regra permitir, chama o PROCEDIMENTO
      // Passa o usuário por REFERÊNCIA
      // O procedimento apenas executa as ações no formulário
      preencherDados(usuarioAtual);
    }
  }
});