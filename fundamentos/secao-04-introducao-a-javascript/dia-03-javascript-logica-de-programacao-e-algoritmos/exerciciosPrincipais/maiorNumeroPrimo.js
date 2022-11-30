console.log("Escreva um algoritmo que imprima no console o maior número primo entre 2 e 50.")

let primos = []
for (var i = 3; i < 500; i += 1) {
    let cont = 0;
    for (var j = i; j > 1; j -= 1) {
        i % j === 0 ? cont += 1 : ""
    }
    cont === 1 ? primos.push(i) : ""
    cont = 0;
}

console.log(primos[primos.length - 1])