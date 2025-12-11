function parOuImpar (V) {
    if (V % 2 === 0) {
        console.log(`O valor ${V} é par!`);
    } else {
        console.log(`O valor ${V} é ímpar!`);
    }
}

module.exports = parOuImpar;