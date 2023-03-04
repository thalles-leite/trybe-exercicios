import React from 'react';

class AboutComponent extends React.Component {
render(){
  const name = 'Thalles Rodrigo da Mata Leite'
  const description = 'Estudante de desenvolvimento Web.'
  const Habilidades = ['HTML5', 'CSS3', 'JavaScript']
  return(
    <>
    <h1>{name}</h1>
    <p>{description}</p>
    <h2>Minhas Habilidades:</h2>
    <ul>
      {
      Habilidades.map((habilidade)=><li>{habilidade}</li>)
      }
    </ul>
    </>
  )
}
}

export default AboutComponent