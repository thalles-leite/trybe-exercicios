console.log("Faça um algoritmo que imprima no console a maior palavra do array.")

let array = ['java', 'javascript', 'python', 'html', 'css'];

let maiorPalavra = array[0];
for (let values of array) {
    values.length > maiorPalavra.length ? maiorPalavra = values : ""
}

console.log(maiorPalavra)