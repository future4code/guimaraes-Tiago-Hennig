import logo from './logo.svg';
import styled from 'styled-components';
import TelaPrincipal from './components/TelaPrincipal/TelaPrincipal'
import TelaMatch from './components/TelaMatch/TelaMatch'
import Header from './components/Header/Header';
import React, { useState } from 'react';

const Div = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 50px;
`

const Tela = styled.div`
  height: 600px;
  background-color: white;
  border: solid black 1px ;
  width: 400px;
  justify-content: center;
  align-self: center ;
  border-radius: 10px;
`

const HeaderApp = styled.div`
  height: 80px;

`

const Main = styled.div`
  height: 520px;
`



class App extends React.Component {

  // const [tela, mudaTela] = useState("")

  // onClickApp = () => {
  //   switch (tela) {
  //     case 'principal':
  //       mudaTela({TelaPrincipal})
  //       break;
  //     case 'match':
  //       mudaTela({TelaMatch})
      
  //   }

  // }

render() {

  return (
    <Div>
      <Tela>
        <HeaderApp>
          <Header />
        </HeaderApp>

        <Main>
          <TelaPrincipal />
        </Main>
      </Tela>


    </Div>
  );
}
}


export default App;
