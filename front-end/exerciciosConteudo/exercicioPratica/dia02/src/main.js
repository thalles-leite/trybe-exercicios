/* eslint-disable no-console */
import './style.css';
import Swal from 'sweetalert2';

const imgHeroContainer = document.querySelector('.superHeroImg');
const sortHero = document.querySelector('.sortHero');
const heroName = document.querySelector('.heroName');

const API_URL = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api';

const MAX_HEROS = 500;

const dateUpdate = (hName, md) => {
  imgHeroContainer.innerHTML = '';
  const heroImage = document.createElement('img');
  heroImage.src = md;
  heroImage.className = 'heroImg';
  imgHeroContainer.appendChild(heroImage);
  console.log(hName);
  heroName.innerHTML = hName;
};

sortHero.addEventListener('click', () => {
  const randomId = Math.round(Math.random() * MAX_HEROS);
  fetch(`${API_URL}/id/${randomId}.json`)
    .then((response) => response.json())
    .then(({ name, images: { md } }) => {
      console.log(name);
      dateUpdate(name, md);
    })
    .catch(() => {
      Swal.fire({
        title: '',
        text: `Heroi com o id ${randomId} não encontrado.`,
        icon: 'error',
        confirmButtonText: 'Cool',
      });
    });
});
