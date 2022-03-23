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
////  ---- HEADER----

const HeaderApp = styled.div`
  height: 80px;

`

const Main = styled.div`
  height: 520px;
`
const Astro = styled.div`
    align-items: center;
    align-self: center;
    text-align: center;
    color: #1F2FEB;
`

const Match = styled.div`
    text-align: center;
    color: #6672EE;
`

const MainHeader = styled.div`
    display: flex;

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    div > button {
        justify-self: right;
        height: 30px;
        display: flex;
}
`
const AstroMatch = styled.div`
    display: flex;
    text-align: center;
    justify-self: center;
    padding-left: 135px;
    padding-right: 70px;
`


function App() {

  const [tela, mudaTela] = useState(false)

  const onClickBotao = () => {
      mudaTela(!tela)
      console.log(tela)
  }



  return (
    <Div>

      <Tela>

        <HeaderApp>
          <MainHeader>
              <AstroMatch>
                <Astro>
                  <h2>Astro</h2>
                </Astro>

                <Match>
                  <h2>Match</h2>
                </Match>
              </AstroMatch>

              <div>
                  <button onClick={onClickBotao}>Matchs</button>
              </div>
          </MainHeader>
        </HeaderApp>

        <Main>
          {tela ? <TelaPrincipal /> : <TelaMatch />}
        </Main>

      </Tela>

    </Div>
  );
}



export default App;
