// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

function somatorio(numero) {
    let soma = 0;
    for (let i = 1; i <= numero; i++) {
        soma += i;
    }
    return soma
}
console.log(somatorio(5))