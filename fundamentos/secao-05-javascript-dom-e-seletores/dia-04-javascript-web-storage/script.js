// propriedades
const fundoDaTela = document.querySelector('.main');


// botões cor de fundo

const botoesCorFundo = document.querySelectorAll('.mudarCorFundo button')

//funcções

const mudarCorDeFundo = () => {
    for (let botoes of botoesCorFundo) {
        botoes.addEventListener('click', (event) => {
            fundoDaTela.style.backgroundColor = event.target.value;
        })
    }
}
mudarCorDeFundo();