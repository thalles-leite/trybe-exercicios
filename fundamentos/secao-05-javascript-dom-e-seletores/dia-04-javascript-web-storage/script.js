// propriedades
const fundoDaTela = document.querySelector('.main');
const texto = document.querySelector('.texto');

// botões cor de fundo

const botoesCorFundo = document.querySelectorAll('.mudarCorFundo button');
const botoesCorFonte = document.querySelectorAll('.mudarCorFonte button');

console.log(botoesCorFonte)

//funções

const mudarCorDoFundo = () => {
    for (let botoes of botoesCorFundo) {
        botoes.addEventListener('click', (event) => {
            fundoDaTela.style.backgroundColor = event.target.value;
        })
    }
}

const mudarCorDaFonte = () => {
    for (let botoes of botoesCorFonte) {
        botoes.addEventListener('click', (event) => {

            texto.style.color = event.target.value;
        })
    }
}







// Chamada das funções
mudarCorDoFundo();
mudarCorDaFonte();