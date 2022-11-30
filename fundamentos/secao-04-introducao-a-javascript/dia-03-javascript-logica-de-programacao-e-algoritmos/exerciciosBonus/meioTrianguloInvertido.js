console.log("Agora inverta o lado do triângulo. Por exemplo:")

let linha = "";
let n = 5;

for (let i = 0; i <= n; i += 1) {
    for (let j = n - i; j > 0; j -= 1) {
        linha += " "
    }
    for (let k = 0; k < i; k += 1) {
        linha += "*"
    }
    console.log(linha)
    linha = ""
}