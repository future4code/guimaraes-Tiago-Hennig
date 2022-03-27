import logo from './logo.svg';
import styled from 'styled-components';
import TelaPrincipal from './components/TelaPrincipal/TelaPrincipal'
import TelaMatch from './components/TelaMatch/TelaMatch'
import Header from './components/Header/Header';
import React, { useState } from 'react';
import stripes from './img/stripes.jpg'
import matches from './img/matches.png'
import meet from './img/meet.png'

const Div = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0px;
  background:url(${stripes});
  background-size: cover;
  height: 100vh;
  border: blur(9px);
`

const Tela = styled.div`
  height: 600px;
  background-color: white;
  border: solid black 1px ;
  width: 400px;
  justify-content: center;
  align-self: center ;
  border-radius: 10px;
  margin: 50px;
  
`
////  ---- HEADER----

const HeaderApp = styled.div`
  height: 80px;
  width: 360px;

`

const Main = styled.div`
  height: 460px;
`
const Astro = styled.div`
    align-items: center;
    align-self: center;
    text-align: center;
    color: #1F2FEB;
    font-size: 30px;
    font-weight: 700;
`

const Match = styled.div`
    text-align: center;
    color: #6672EE;
    font-size: 30px;
    font-weight: 700;
`

const MainHeader = styled.div`
    display: flex;
    width: 360px;
    justify-content: center;
    padding-left: 30px;
    height: 70px;

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    div > a {
        justify-self: right;
        width: 30px;
        display: flex;
}

    div > a > img {
      width: 50px;
      padding-left: 50px;
    }
`
const AstroMatch = styled.div`
    display: flex;
    text-align: center;
`


function App() {

  const [tela, mudaTela] = useState(true)

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
                  <p>Astro</p>
                </Astro>

                <Match>
                  <p>Match</p>
                </Match>
              </AstroMatch>

              <div>
                {tela ? <a onClick={onClickBotao}><img src={matches}></img></a> : <a onClick={onClickBotao}><img src={meet}></img></a> }
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
