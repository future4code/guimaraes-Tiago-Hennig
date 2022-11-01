import TelaPrincipal from './components/TelaPrincipal/TelaPrincipal'
import TelaMatch from './components/TelaMatch/TelaMatch'
import React, { useState } from 'react';
import matches from './img/matches.png'
import meet from './img/meet.png'
import {Div, Tela, MainHeader, AstroMatch, Astro, Match, Main} from './style'


function App() {

  const [tela, mudaTela] = useState(true)

  const onClickBotao = () => {
      mudaTela(!tela)
      console.log(tela)
  }

  return (
    <Div>
      <Tela>
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

        <Main>
          {tela ? <TelaPrincipal /> : <TelaMatch />}
        </Main>
      </Tela>
    </Div>
  );
}

export default App;
