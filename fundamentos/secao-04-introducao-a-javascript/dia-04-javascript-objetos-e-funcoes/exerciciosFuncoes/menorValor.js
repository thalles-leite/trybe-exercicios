// < !-- - [] Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// ```
// Array de teste: [2, 4, 6, 7, 10, 0, -3];.

// Valor esperado no retorno da função: 6.
// ``` -- >

let arrayTest = [2, 3, 6, 7, 10, 1]

function menorValor(array) {
    let menor = 0;
    for (let value in array) {
        array[value] < array[menor] ? menor = value : ""
    }
    return menor;
}

console.log(menorValor(arrayTest))