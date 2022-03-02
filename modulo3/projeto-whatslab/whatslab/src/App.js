import './App.css';
import styled from 'styled-components'
import React from 'react';
import Mensagem from './components/Mensagem';
import Background from './img/background.png'

const Page = styled.div`
  display: flex;
  flex-direction: column;

`

const Digitacao = styled.div`
  display: flex;
  justify-content: center;
`

const Msgs = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
`

const Box = styled.div`
  display: flex;
  height: 91.5vh;
  border: solid black 1px;
  width: 393px;
  justify-content: center;
  align-self: center;
  margin-top: 20px;
  margin-bottom: 2px;
  background-image: url(${Background});
`


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
  this.setState({mensagens: [{usuario: this.state.usuario, mensagem: this.state.mensagem},...this.state.mensagens] , mensagem: '', usuario: '' })
}

  render() {
  return (
    <Page>

        <Box>
          <Msgs>
            {this.state.mensagens.map(item => <Mensagem usuario={item.usuario} mensagem ={item.mensagem}/>)}
          </Msgs>
        </Box>

        <Digitacao>
          <input placeholder='Usuário' type="text" value={this.state.usuario} onChange={this.handleInputUsuarioChange}/>
          <input placeholder='Mensagem' type="text" value={this.state.mensagem} onChange={this.handleInputMensagemChange} />
          <button type="reset" onClick={this.onClickEnviar}> Enviar </button>
        </Digitacao>

    </Page>
  );
}
}

export default App;
