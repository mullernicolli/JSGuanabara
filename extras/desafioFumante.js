/* perguntar pro usuário:
- qtd de cigarros fumados por dia 
- há quantos anos fuma

- fumante perde 10min de vida a cada cigarro
- 1 dia 1440 minutos
- 144 cigarros 1 dia de vida

calcular:
- quantos DIAS de vida ele perderá
- exibir o total em DIAS

calculo:
8 cigarros por dia -> 8x10 min = 80 min perdidos por dia
3 anos -> 1 ano = 365 dias -> qtd anos x 365 = ano em dias;
ano em dias x min perdidos por dia = tempo min perdido de todos os dias -> converter min em dias (dividir o valor em minutos obtido por 1440) = dias perdidos de vida */


const prompt = require('prompt-sync')();


function pedirNumeroValido (mensagem) {
    let valor;
    
    do {
        valor = Number(prompt(mensagem));

        if (isNaN(valor)) {
           console.log('Resposta deve ser número!');
        } else if (valor < 0) {
              console.log('Resposta inválida!')
        } 
    } while (isNaN(valor) || valor < 0);

    return valor;
}

let CFD = pedirNumeroValido('Quantos cigarros você fuma por dia?: ');
let AF = pedirNumeroValido('E há quantos anos você fuma?: ');

let minutosPerdidosDia;
let anosEmDias;
let diasVidaPerdidos;


minutosPerdidosDia = CFD * 10;
anosEmDias = AF * 365;
diasVidaPerdidos = (minutosPerdidosDia * anosEmDias) / 1440;

console.log(`Você perdeu ${Math.round(diasVidaPerdidos)} dias de vida nesses ${AF} anos fumando cigarros!`);
