const createDaysOfTheWeek = () => {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

const decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const criandoDiasDoMes = () => {
  const ulDays = document.getElementById('days');
  for (let dias of decemberDaysList) {
    const elementoLi = document.createElement('li');
    elementoLi.innerText = dias;
    elementoLi.classList.add('day');
    if (dias === 24 || dias === 25 || dias === 31) {
      elementoLi.classList.add('holiday');
    }
    if (dias === 4 || dias === 11 || dias === 18 || dias === 25) {
      elementoLi.classList.add('friday');
    }

    ulDays.appendChild(elementoLi)
  }
}
criandoDiasDoMes();

// PARTE 2

const criandoBotao = (feriados) => {
  const divButtons = document.querySelector('.buttons-container')
  const botaoFeriados = document.createElement('button');
  botaoFeriados.id = 'btn-holiday';
  botaoFeriados.innerText = feriados;
  console.log(botaoFeriados);
  divButtons.appendChild(botaoFeriados);
}

criandoBotao('Feriados')

// PARTE 3

const diasFeriado = () => {
  const diasDeFeriados = document.querySelectorAll('.holiday');

  for (let dia of diasDeFeriados) {
    console.log(dia.classList.contains('feriado'))
    if (dia.classList.contains('feriado')) {
      dia.classList.remove('feriado');
    }
    else {
      dia.classList.add('feriado');
    }

  }
}

const btnFeriados = document.getElementById('btn-holiday');
btnFeriados.addEventListener('click', diasFeriado)