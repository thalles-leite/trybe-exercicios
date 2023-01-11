let longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu' // retorna 'aconteceu'

const maiorPalavra = (palavra) => {
    let arrayString = palavra.split(" ");
    let maiorPalavra = arrayString[0];

    for (let value of arrayString) {
        value.length > maiorPalavra.length && (maiorPalavra = value);
    }
    return maiorPalavra;
}

console.log(maiorPalavra(longestWord))