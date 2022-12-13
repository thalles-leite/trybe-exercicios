

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
const indexSexta = [];
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
      indexSexta.push(dias)
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
  divButtons.appendChild(botaoFeriados);
}

criandoBotao('Feriados')

// PARTE 3

const diasFeriado = () => {
  const diasDeFeriados = document.querySelectorAll('.holiday');

  for (let dia of diasDeFeriados) {
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

// Parte 4 

const fbotaoSexta = (arg) => {
  const botoesContainer = document.querySelector('.buttons-container');
  const botaoSexta = document.createElement('button');
  botaoSexta.innerText = arg;
  botaoSexta.id = 'btn-friday';
  botoesContainer.appendChild(botaoSexta);
}
fbotaoSexta('Sexta-feira');

// Parte 5 
const sextas = document.getElementsByClassName('friday');
const textoSexta = 'Sextou';
const modificaSexta = () => {
  for (let dias in sextas) {
    if (sextas[dias].innerText !== textoSexta) {
      sextas[dias].innerText = textoSexta;
    }
    else {
      sextas[dias].innerText = indexSexta[dias]
    }

  }
}

const botaoSexta = document.getElementById('btn-friday');
botaoSexta.addEventListener('click', modificaSexta)

// Parte 6

const zoomDay = () => {
  const textoDias = document.getElementsByClassName('day');

  for (let dia of textoDias) {

    dia.addEventListener('mouseover', (event) => {
      // event.target.style.fontSize = 25 + 'px';
      event.target.style.border = '2px solid red';
      event.target.style.borderRadius = '500px';
      event.target.style.cursor = 'pointer'


    })
    dia.addEventListener('mouseout', (event) => {
      event.target.style.border = '2px solid transparent'
      event.target.style.fontSize = 20 + 'px';
      event.target.style.color = '#777'
    })
  }
}

zoomDay();

// Parte 7

const adicionarTarefa = (tarefa) => {
  const listaTarefas = document.querySelector('.my-tasks');
  const Starefa = document.createElement('span');
  Starefa.innerText = tarefa;
  listaTarefas.appendChild(Starefa);
}

adicionarTarefa('Cozinhar.')

// Parte 8

const adicionarLegenda = (cor) => {
  const divTask = document.querySelector('.my-tasks');
  const divLegenda = document.createElement('div');
  divLegenda.classList.add('task');
  divLegenda.style.backgroundColor = cor;
  divTask.appendChild(divLegenda);

}

adicionarLegenda('red');

// Parte 9

const selecionaLegenda = () => {
  const tarefas = document.getElementsByClassName('task');
  console.log('clicou')
  for (let tarefa of tarefas) {
    tarefa.addEventListener('click', (event) => {
      if (!event.target.classList.contains('selected')) {
        tarefa.classList.add('selected');
      }
      else {
        tarefa.classList.remove('selected');
      }
    })
  }
}

selecionaLegenda();

// Parte 10