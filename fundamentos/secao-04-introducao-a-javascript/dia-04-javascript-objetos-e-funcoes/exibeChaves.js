console.log("\n  Faça um for/in que mostre todas as chaves do objeto. \n")

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};

info['recorrente'] = "Sim"

for (let key in info) {
    console.log(key)
}

