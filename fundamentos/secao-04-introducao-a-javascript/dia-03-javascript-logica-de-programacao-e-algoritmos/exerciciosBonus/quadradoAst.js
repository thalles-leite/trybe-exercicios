console.log("Escreva um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:\n")

let n = 5;
let linha = ""

for (let j = 0; j < n; j += 1) {
    linha += "*"
}
for (let i = 0; i < n; i += 1) {
    console.log(linha)
}