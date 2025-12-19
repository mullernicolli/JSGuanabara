// Vetor com os nomes dos times
let times = ['Flamengo', 'Fluminense', 'Vasco'];

/*
    FOR EXTERNO (i)

    Estrutura do for:
    for (inicialização; condição; incremento)

    inicialização:
    let i = 0
    → o índice i começa no primeiro elemento do vetor

    condição:
    i < times.length
    → o laço continua enquanto i for menor que o tamanho do vetor
    → garante que i percorra todos os times (0 até último índice)

    incremento:
    i++
    → a cada volta, i avança para o próximo time

    Função lógica:
    - i representa o "time principal"
    - cada volta do for externo fixa um time diferente */

for (let i = 0; i < times.length; i++) {

/*
        FOR INTERNO (j)

        inicialização:
        let j = i + 1
        → j começa sempre UMA posição à frente de i
        → evita:
            - time contra ele mesmo (j nunca será igual a i)
            - confrontos duplicados (ex: B vs A depois de A vs B)

        condição:
        j < times.length
        → j só percorre até o último índice válido do vetor

        incremento:
        j++
        → j avança de um em um dentro do vetor

        Função lógica:
        - j representa o "adversário" do time i
        - compara o time atual apenas com os que vêm depois dele
    */
   
    for (let j = i + 1; j < times.length; j++) {

        // Exibe um confronto único e válido entre dois times diferentes
        console.log(`${times[i]} vs ${times[j]}`);
    }
}