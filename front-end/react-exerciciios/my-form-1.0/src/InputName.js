import React, { Component } from 'react';

class InputName extends Component {
  
  render() { 
    const {value,handleChange}=this.props
    return ( 
      <label>
          Input de texto:
          <input
            name="nome"
            type="text"
            value={value}
            placeholder="Digite seu texto"
            onChange={handleChange}
          ></input>
        </label>
     );
  }
}
 
export default InputName;