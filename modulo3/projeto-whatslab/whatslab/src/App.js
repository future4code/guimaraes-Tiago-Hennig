import './App.css';
import styled from 'styled-components'
import React from 'react';
import Mensagem from './components/Mensagem';


class App extends React.Component {
  state = {
    usuario: "",
    mensagem: "",
    mensagens: []
  }


handleInputUsuarioChange= (event)=>{
  this.setState({usuario: event.target.value})
}

handleInputMensagemChange = (event) => {
  this.setState({mensagem: event.target.value})
}

onClickEnviar = () => {
  this.setState({mensagens: [...this.state.mensagens,{usuario: this.state.usuario, mensagem: this.state.mensagem}] })
}


  render() {
  return (
    <div>
        <div>
          {this.state.mensagens.map(item => <Mensagem usuario={item.usuario} mensagem ={item.mensagem}/>)}
        </div>

        <div>
          <input placeholder='Usuário' type="text" value={this.state.usuario} onChange={this.handleInputUsuarioChange}/>
          <input placeholder='Mensagem' type="text" value={this.state.mensagem} onChange={this.handleInputMensagemChange} />
          <button onClick={this.onClickEnviar}> Enviar </button>
        </div>

    </div>
  );
}
}

export default App;
