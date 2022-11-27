console.log("Ordene o array numbers em ordem crescente:")

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 0; i < numbers.length - 1; i += 1) {


  for (let j = 0; j < numbers.length - i - 1; j += 1) {

    if (numbers[j] > numbers[j + 1]) {
      aux = numbers[j + 1]
      numbers[j + 1] = numbers[j]
      numbers[j] = aux
    }
  }
}
console.log(numbers)

console.log("\nOrdene o array numbers em ordem decrescente:\n")

for (let i = 0; i < numbers.length - 1; i += 1) {


  for (let j = 0; j < numbers.length - i - 1; j += 1) {

    if (numbers[j] < numbers[j + 1]) {
      aux = numbers[j + 1]
      numbers[j + 1] = numbers[j]
      numbers[j] = aux
    }
  }
}
console.log(numbers)


let numbers2 = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.log("\nAgora, crie um novo array a partir do array numbers, sem perdê-lo. Cada valor do novo array deverá ser igual ao valor correspondente no array numbers multiplicado pelo seguinte. Caso não haja próximo, a multiplicação deve ser feita por 2\n")

let newNumbers = []

for (let i = 0; i < numbers2.length; i += 1) {
  if (numbers2[i + 1] >= 0) {
    newNumbers.push(numbers2[i] * numbers2[i + 1])
  }
  else {
    newNumbers.push(numbers2[i] * 2)
  }
}
console.log(newNumbers)