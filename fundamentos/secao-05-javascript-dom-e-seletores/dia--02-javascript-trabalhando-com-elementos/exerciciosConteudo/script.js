const ondeEstou = document.getElementById('elementoOndeVoceEsta');

const paiOndeEstou = document.getElementById('elementoOndeVoceEsta').parentNode;
paiOndeEstou.style.backgroundColor = 'yellow';

const filhoOndeEstou = document.getElementById('elementoOndeVoceEsta').children[0];
filhoOndeEstou.innerHTML = 'Texto exemplo.'

console.log(paiOndeEstou)
console.log(ondeEstou)