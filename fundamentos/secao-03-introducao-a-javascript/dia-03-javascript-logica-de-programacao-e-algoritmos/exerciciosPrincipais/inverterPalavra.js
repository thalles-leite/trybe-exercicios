console.log("Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra.")

let word = 'tryber';
let newWordArr = [];
let newWord;
for (let i = word.length - 1; i >= 0; i -= 1) {
    newWordArr.push(word[i])
}

newWord = newWordArr.join("")

console.log(`A palavra ${word} invertida é: ${newWord}`)