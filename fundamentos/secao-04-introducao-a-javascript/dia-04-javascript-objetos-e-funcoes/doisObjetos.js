

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim',
};

let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain, Dell\'s Four Color Comics #178',
    nota: 'O Último MacPatinhas',
    recorrente: 'Sim',
};


for (let key in info) {
    key === "recorrente" && info[key] === "Sim" && info2[key] === "Sim" ? console.log("Ambos recorrentes") : console.log(`${info[key]} e ${info2[key]}`)
}

