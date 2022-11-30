console.log("Piramide com n asteriscos de base:")

let linha = "";
let n = 100;
let aux = 0;
let meio = Math.ceil(n / 2); //dividir por dois e arredondar para cima. 


for (let i = 0; i < meio; i += 1) {

    for (let j = 1; j <= n; j += 1) {

        if (j < meio - aux || j > meio + aux) {
            linha += " ";

        }
        else {
            linha += "*"
        }

    }
    aux += 1;
    console.log(linha);
    linha = "";
}