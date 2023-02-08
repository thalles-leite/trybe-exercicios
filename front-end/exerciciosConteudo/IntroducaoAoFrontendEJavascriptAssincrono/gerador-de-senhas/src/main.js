import {nanoid} from 'nanoid'

const botao = document.querySelector('button');
const h2 = document.querySelector('h2');
botao.addEventListener('click',() => {
  h2.innerText = nanoid();
})