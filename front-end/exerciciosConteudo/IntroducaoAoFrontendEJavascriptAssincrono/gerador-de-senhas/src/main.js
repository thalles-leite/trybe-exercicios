import { nanoid } from 'nanoid';

import './style.css';

const botao = document.querySelector('button');
const h2 = document.querySelector('h2');

const copyToClipboard = async (texto) => {
  try {
    await navigator.clipboard.writeText(texto);
    console.log('Pass copiado para o clipboard');
  } catch (error) {
    console.error('Erro ao copiar.', error);
  }
};

botao.addEventListener('click', () => {
  const randomPass = nanoid();
  h2.innerText = randomPass;
  copyToClipboard(randomPass);
});
