const prompt = require("prompt-sync")();  // importar e ativar a função prompt(), permitindo ler valores digitados pelo usuário no Node.js

let M = prompt('Qual sua massa (KG)?: ');
M = M.replace(',', '.');  // ensinando o JS a trocar a , por . 
M = parseFloat(M);  // convertendo a string para número (parseFloat pq quebra menos que Number, segura melhor as entradas dos usuários, se vier string junto etc)

let A = prompt('Qual sua altura (m)?: ');
A = A.replace(',', '.');  // ensinando o JS a trocar a , por . 
A = parseFloat(A);  // convertendo a string para número (parseFloat pq quebra menos que Number, segura melhor as entradas dos usuários, se vier string junto etc)

IMC = M / (A**2);

console.log(`IMC: ${IMC}`);

if (IMC < 17) {
    console.log("Muito abaixo do peso");
} else if (IMC >= 17 && IMC < 18.5) {
    console.log("Abaixo do peso");
} else if (IMC >= 18.5 && IMC < 25) {
    console.log("Peso ideal");
} else if (IMC >= 25 && IMC < 30) {
    console.log("Sobrepeso");
} else if (IMC >= 30 && IMC < 35) {
    console.log("Obesidade");
} else if (IMC >= 35 && IMC < 40) {
    console.log("Obesidade severa");
} else {
    console.log("Obesidade mórbida");
}


