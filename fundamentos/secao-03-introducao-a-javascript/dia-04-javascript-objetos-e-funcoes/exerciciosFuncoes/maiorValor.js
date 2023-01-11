/* - [ ] Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
 ```
 Array de teste: [2, 3, 6, 7, 10, 1];.

 Valor esperado no retorno da função: 4.
 ```*/

let arrayTest = [2, 3, 6, 7, 10, 1]

function maiorValor(array) {
    let maior = 0;
    for (let value in array) {
        array[value] > array[maior] ? maior = value : ""
    }
    return maior;
}

console.log(maiorValor(arrayTest))