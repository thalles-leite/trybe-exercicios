import validator from 'validator';
import './style.css';

const selectedIndex = document.getElementById('option');
let campoValue = document.querySelector('#value');
const botaoValidar = document.querySelector('#button');
const answer = document.querySelector('#answer');
const opUUID = 4;

selectedIndex.addEventListener('change', () => {
  // selectedIndex = document.getElementById('option');
  console.log(selectedIndex.value);
});

botaoValidar.addEventListener('click', (event) => {
  event.preventDefault();
  campoValue = document.querySelector('#value');

  const teste = {
    cpf: validator.isTaxID(campoValue.value, 'pt-BR'),
    hexColor: validator.isHexColor(campoValue.value),
    email: validator.isEmail(campoValue.value),
    uuid: validator.isUUID(campoValue.value, opUUID),
    url: validator.isURL(campoValue.value),
  };

  console.log(teste.email);
  const validacao = teste[selectedIndex.value];
  answer.innerText = `A validação retornou ${validacao}`;
});
