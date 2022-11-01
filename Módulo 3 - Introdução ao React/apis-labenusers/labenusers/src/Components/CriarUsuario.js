import axios from 'axios';
import React from 'react';
import styled from 'styled-components';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Botao = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 10px;
`

const Campos = styled.div`
  display: flex;
  justify-content: center;
`

axios.get()


export default class CriarUsuario extends React.Component {
  render() {
  return (
    <Page>

      <Botao>
        <button>Trocar de tela</button>
      </Botao>

      <Campos>
        <input placeholder='Nome'/>
        <input placeholder='E-mail' />
        <button>Criar Usuário</button>
      </Campos>
    </Page>
  );
}
}