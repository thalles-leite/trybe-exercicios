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

console.log(`A média dos valores é: ${soma2 / numbers.length}`)