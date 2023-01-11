// - [ ]Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
// ```
// Array de teste: [2, 3, 2, 5, 8, 2, 3];.

// Valor esperado no retorno da função: 2.
// ```

arrayTeste = [2, 3, 2, 5, 8, 2, 3];

function maisRepete(array) {
    let inteiroMaisRepete = array[0]
    let aux = 0;
    let cont = 1;
    for (let valor of array) {
        for (let valorComp of array) {
            valor === valorComp ? cont += 1 : "";
        }
        cont > aux ? (inteiroMaisRepete = valor, aux = cont) : ""
        cont = 1;
    }

    return inteiroMaisRepete;
}

console.log(maisRepete(arrayTeste))

