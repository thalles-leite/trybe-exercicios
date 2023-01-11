let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log("1. Percorra o array imprimindo todos os valores nele contidos com a função console.log();")

console.log("\nUtilizando apenas o laço de repetição for")
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i])
}

console.log("\nUtilizando o For/of")
for (let values of numbers) {
  console.log(values)
}

console.log("\nUtilizando while")

let indice = 0;
while (indice < numbers.length) {
  console.log(numbers[indice])
  indice += 1;
}

console.log("\n2. Some todos os valores contidos no array e imprima o resultado:\n")

let soma = 0;
for (let i = 0; i < numbers.length; i += 1) {
  soma += numbers[i]
}
console.log(soma)

console.log("\n3. Calcule e imprimaa média aritmética dos valores contidos no array.\n")

let soma2 = 0;

for (let values of numbers) {
  soma2 += values;
}

console.log(`A média dos valores é: ${soma2 / numbers.length}\n`)

console.log("\nCom base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”\n")

let media = soma2 / numbers.length;

if (media > 20) {
  console.log("\nValor maior que 20.\n")
}
else {
  console.log("\nValor menor que 20.\n")
}

//media > 20 ? console.log("\nValor maior que 20.\n") : console.log("\nValor menor que 20.\n");

console.log("\nUtilizando for, descubra qual o maior valor contido no array e imprima-o;\n")

let maior = 0;

for (let values of numbers) {
  if (values > maior) {
    maior = values;
  }
  //values > maior ? maior = values : ""
}

console.log(`\nO maior valor do array é: ${maior}\n`)

console.log(`\nDescubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;\n`)

let contador = 0;

for (let values of numbers) {
  if (values % 2 !== 0) {
    contador += 1;
  }
  //values % 2 !== 0 ? contador += 1 : ""
}
if (contador > 0) {
  console.log(`Há ${contador} número ímpares no array`)
}
else {
  console.log(`Não há numeros ímpares no array`)
}
// contador > 0 ? console.log(`Há ${contador} número ímpares no array`) : console.log(`Não há numeros ímpares no array`)|

console.log("\nUtilizando for, descubra qual o menor valor contido no array e imprima-o;\n")

let menor = numbers[0];

for (let values of numbers) {
  if (values < menor) {
    menor = values;
  }
  //values < menor ? menor = values : ""
}
console.log(`\nO menor valor do array é: ${menor}\n`)

console.log(`Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado;`)

let array25 = []
for (let i = 1; i <= 25; i += 1) {
  array25.push(i)
}
console.log(array25)

console.log(`\nUtilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2.\n`)

for (let values of array25) {
  console.log(values / 2)
}