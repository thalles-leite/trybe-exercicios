// - [ ] Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

// ```
// Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

// Valor esperado no retorno da função: Fernanda.
// ```

let arrayTeste = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']

function maiorNome(array) {
    let maiorNome = array[0];
    for (let value of array) {
        value.length > maiorNome.length ? maiorNome = value : ""
    }
    return maiorNome;
}

console.log(maiorNome(arrayTeste))
