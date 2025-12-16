function contador (x) {
    return x += 1;
}

let cont = 0;

cont = contador(cont);
cont = contador(cont);
cont = contador(cont);

console.log(cont);