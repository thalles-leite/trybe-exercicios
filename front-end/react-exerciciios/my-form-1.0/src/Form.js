import React, { Component } from "react";
import InputName from "./InputName";
import InputTextArea from './InputTextArea';

class Form extends Component {
  state = {
    nome: "",
    texto: "",
    selectOp: "",
    termos: false,
  };

  handleChange = ({ target }) => {
    const { name, type, checked } = target;
    const value = type === "checkbox" ? checked : target.value;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { nome, texto, selectOp, termos } = this.state;
    return (
      <fieldset>
        <legend>Formulario teste</legend>
        <InputName value={nome} handleChange={this.handleChange} />
        <br />
        <br />
        <InputTextArea value={texto} handleChange={this.handleChange}/>
        <br />
        <br />
        <label>
          Input de select:
          <select name="selectOp" onChange={this.handleChange} value={selectOp}>
            <option value="opção01">Opção 01</option>
            <option value="opção02">Opção 02</option>
            <option value="opção03">Opção 03</option>
            <option value="opção04">Opção 04</option>
          </select>
        </label>
        <br />
        <br />
        <label>
          Li e concordo com os termos de uso.
          <input
            type="checkbox"
            name="termos"
            onChange={this.handleChange}
            value={termos}
          ></input>
        </label>
        <br />
        <br />
        <label>
          Radio option:
          <div onChange={this.handleChange}>
            <input type="radio" value="radio1" name="radios" /> Radio 01
            <input type="radio" value="radio2" name="radios" /> Radio 02
            <input type="radio" value="radio3" name="radios" /> Radio 03
            <input type="radio" value="radio4" name="radios" /> Radio 04
          </div>
        </label>
        <br />
        <br />
        <label>
          <input type="file" />
          <br />
          <br />
        </label>
      </fieldset>
    );
  }
}

export default Form;
