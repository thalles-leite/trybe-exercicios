const ondeEstou = document.getElementById('elementoOndeVoceEsta');

const paiOndeEstou = document.getElementById('elementoOndeVoceEsta').parentNode;
paiOndeEstou.style.backgroundColor = 'yellow';

const filhoOndeEstou = document.getElementById('elementoOndeVoceEsta').children[0];
filhoOndeEstou.innerHTML = 'Texto exemplo.'

const primeiroFilho = document.getElementById('pai').children[0];
const primeiroFilho2 = document.getElementById('elementoOndeVoceEsta').previousElementSibling;
const atencao = document.getElementById('elementoOndeVoceEsta').nextSibling;
const terceiroFilho = document.getElementById('elementoOndeVoceEsta').nextElementSibling;
const terceiroFilho2 = document.getElementById('pai').children[2];

console.log(terceiroFilho2)
console.log(terceiroFilho)
console.log(atencao)
console.log(primeiroFilho2)
console.log(primeiroFilho)
console.log(paiOndeEstou)
console.log(ondeEstou)