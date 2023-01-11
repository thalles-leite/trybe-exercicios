
let moradores = {
    blocoUm: [
        {
            nome: 'Luiza',
            sobrenome: 'Guimarães',
            andar: 10,
            apartamento: 1005,
        },
        {
            nome: 'William',
            sobrenome: 'Albuquerque',
            andar: 5,
            apartamento: 502,
        },
    ],
    blocoDois: [
        {
            nome: 'Murilo',
            sobrenome: 'Ferraz',
            andar: 8,
            apartamento: 804,
        },
        {
            nome: 'Zoey',
            sobrenome: 'Brooks',
            andar: 1,
            apartamento: 101,
        },
    ],
};

console.log(`O morador do bloco 2 de nome ${moradores.blocoDois[1].nome} mora no ${moradores.blocoDois[1].andar}º andar, apartamento ${moradores.blocoDois[1].apartamento}. \n`)

console.log(`\nMoradores do bloco 1:`)
for (let i of moradores.blocoUm) {
    console.log(`${i.nome} ${i.sobrenome}`)
}

console.log(`\nMoradores do bloco 2:`)
for (let i of moradores.blocoDois) {
    console.log(`${i.nome} ${i.sobrenome}`)
}