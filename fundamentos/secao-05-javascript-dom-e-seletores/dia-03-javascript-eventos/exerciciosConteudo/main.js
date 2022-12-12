const firstLi = document.getElementById('first-li');
const secondLi = document.getElementById('second-li');
const thirdLi = document.getElementById('third-li');
const input = document.getElementById('input');
const myWebpage = document.getElementById('my-spotrybefy');
const liElements = document.querySelectorAll('.container li');

// console.log(liElements)

// - Copie esse arquivo e edite apenas ele;
//  - Note que uma das caixas está um pouco acima das outras. Por que isso ocorre?
        // por causa da tag 'tech' que define translate-y: -20px
// - Crie uma função que adicione a classe 'tech' ao elemento `li` quando for clicado.
//  - Deve existir apenas um elemento com a classe 'tech'. Como você faz isso?

const changeClass = (event) => {
    const elementoTech = document.querySelector('.tech');
    if(elementoTech){
        elementoTech.classList.remove('tech');
    }

    input.value = ''
    input.focus();
    event.target.className = 'tech';
}

for(let lis of liElements){
    lis.addEventListener('click',changeClass);
}

input.addEventListener('keyup',(element) => {
    const elementoTech = document.querySelector('.tech');
    elementoTech.innerText = element.target.value;
} )

// - Crie uma função que, ao digitar na caixa de texto, altere o texto do elemento
// com a classe 'tech';



// - Crie uma função que, ao clicar duas vezes em 'Meu top 3 do Spotrybefy', ele
// redirecione para alguma página;
//  - Que tal redirecionar para seu portfólio?

myWebpage.addEventListener('dblclick',() => {
    window.location.assign('https://thalles-leite.github.io/')
})

// - Crie uma função que, ao passar o mouse sobre 'Meu top 3 do Spotrybefy', altere
// a cor do mesmo;

myWebpage.addEventListener('mouseenter',(event) => {    
    myWebpage.style.color = 'red';
})
myWebpage.addEventListener('mouseout',(event) => {    
    myWebpage.style.color = 'white';
})

// Segue abaixo um exemplo do uso de event.target:


const resetText = (event) => {
  // O Event é passado como um parâmetro para a função.
  event.target.innerText = 'Opção reiniciada';
  // O event possui várias propriedades, porém a mais usada é o event.target,
  // que retorna o objeto que disparou o evento.
}



firstLi.addEventListener('dblclick', resetText);

// Não precisa passar o parâmetro dentro da callback resetText. O próprio
// navegador fará esse trabalho por você, não é legal? Desse jeito, o
// event.target na nossa função retornará o objeto 'firstLi'.