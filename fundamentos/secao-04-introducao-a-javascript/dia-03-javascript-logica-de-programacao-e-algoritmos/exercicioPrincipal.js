console.log("Crie um algoritmo que imprima na tela o fatorial de 10.")

let i = 10;
let fatorial = 1;
while (i > 1) {
    fatorial *= i;
    i -= 1;
}

console.log(`O fatórial é: ${fatorial}`)