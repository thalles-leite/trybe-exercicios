let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


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