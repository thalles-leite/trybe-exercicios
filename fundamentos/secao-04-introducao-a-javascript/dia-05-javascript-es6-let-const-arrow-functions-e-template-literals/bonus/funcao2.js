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

const minhasSkils = (func) => {
    const skills = ["HTML", "CSS", "Javascript"]
    let frase = `
    ${func}

    Minhas três principais habilidades são:
    `

    for (let value of skills) {
        frase += `
    • ${value}`
    }
    return frase
}


console.log(minhasSkils(substituaX(nome)))