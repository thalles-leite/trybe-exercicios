let nome = "Thalles"

const substituaX = (nome) => {
    const frase = 'Tryber x aqui'
    let splitFrase = frase.split(" ");
    let newFrase = [];
    for (let value of splitFrase) {
        value !== "x" ? newFrase.push(value) : newFrase.push(nome)
    }

    return newFrase.join(" ");
}

console.log(substituaX(nome))