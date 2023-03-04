import React, { Component } from 'react';

class InputTextArea extends Component {
  state = {  }
  render() { 
    const {value,handleChange} = this.props;
    return ( 
    <label>
      Input textarea:
      <textarea
        name="texto"
        onChange={handleChange}
        value={value}
      ></textarea>
    </label> 
    );
  }
}
 
export default InputTextArea;