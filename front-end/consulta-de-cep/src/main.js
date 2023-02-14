const buttonEl = document.querySelector('button');
const inputEl = document.querySelector('input');
const preEl = document.querySelector('pre');
import Swal from 'sweetalert2';

import '@sweetalert2/theme-dark/dark.min.css';

buttonEl.addEventListener('click',async () => {
  const inputCep = inputEl.value;
  try {
    const response = await fetch(`https://viacep.com.br/ws/${inputCep}/json/`)
    const data = await response.json();

    if (data.erro){
      throw new Error("CEP não encontrado no banco de dados.")
    }
    const {cep,logradouro,bairro,localidade,uf} = data
    preEl.innerHTML = 
`<p class='cep'>CEP: ${cep}</p>
<p class='log'>${logradouro}</p>
Bairro: 
<p class='bairro'>${bairro}</p>
<p class='cidade'>${localidade} ${uf}</p> `
    
  } catch (error) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: error.message,
      confirmButtonText: 'Ok'
    })
  }
});
