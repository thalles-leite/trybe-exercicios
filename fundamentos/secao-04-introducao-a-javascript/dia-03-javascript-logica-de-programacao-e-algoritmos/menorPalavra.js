console.log("Faça um algoritmo que imprima no console a menor palavra do array.")

let array = ['java', 'javascript', 'python', 'html', 'css'];

let menorPalavra = array[0];
for (let values of array) {
    values.length < menorPalavra.length ? menorPalavra = values : ""
}

console.log(menorPalavra)