let longestWord = 'Antônio foi no banheiro e não sabemos o que aconteceu' // retorna 'aconteceu'

let stringArray = longestWord.split(" ");

console.log(stringArray.sort((a, b) => b.length - a.length)[0])