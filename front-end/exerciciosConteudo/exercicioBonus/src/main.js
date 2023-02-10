import './style.css';

const randomDog = document.getElementById('randomDog');
const randomCat = document.getElementById('randomCat');
const surpriseMe = document.getElementById('surpriseMe');
const petImg = document.getElementById('petImg');

const insertImg = (imagem) => {
  petImg.src = imagem;
};

randomDog.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then(({ message }) => insertImg(message));
});

randomCat.addEventListener('click', () => {
  fetch('https://aws.random.cat/meow')
    .then((response) => response.json())
    .then(({ file }) => insertImg(file));
});

surpriseMe.addEventListener('click', () => {
  Promise.any([
    fetch('https://aws.random.cat/meow'),
    fetch('https://dog.ceo/api/breeds/image/random'),
  ])
    .then((res) => res.json())
    .then((data) => {
      const img = data.file || data.message;
      insertImg(img);
    });
});
