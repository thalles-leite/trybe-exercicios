let numero = 5;
cont = 0;
for (let i = 1; i <= numero; i += 1) {
    if (numero % i == 0) cont += 1;
}
console.log(cont)
cont == 2 ? console.log(`O número ${numero} é primo.`) : console.log(`O número ${numero} não é primo.`)