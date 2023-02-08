import { nanoid } from 'nanoid';

import './style.css';

const botao = document.querySelector('button');
const h2 = document.querySelector('h2');
botao.addEventListener('click', () => {
  const randomPass = nanoid();
  h2.innerText = randomPass;
});
