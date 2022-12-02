let statusMotor = "desligado";

const ligarDesligar = () => {
    return statusMotor === "ligado" ? statusMotor = "desligado" : statusMotor = "ligado"
}

console.log(`O motor está: ${ligarDesligar()}`)
console.log(`O motor está: ${ligarDesligar()}`)
console.log(`O motor está: ${ligarDesligar()}`)