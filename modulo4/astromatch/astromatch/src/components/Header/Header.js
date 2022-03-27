import styled from 'styled-components';
import React, { useState } from 'react';

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

const Main = styled.div`
    display: flex;

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    div > button {
        justify-self: right;
        height: 30px;
}
`

const AstroMatch = styled.div`
    display: flex;
    text-align: center;
    justify-self: center;
    padding-left: 135px;
    padding-right: 70px;
`








function Header() {

    const [botao, setBotao] = useState(false)


    const onClickBotao = () => {
        setBotao(!botao)
        console.log(botao)
    }



    return(

        <Main>

            <AstroMatch>
                <Astro>
                    <h1>Astro</h1>
                </Astro>

                <Match>
                    <p>Match</p>
                </Match>
            </AstroMatch>

            <div>
                <button onClick={onClickBotao}>Matchs</button>
            </div>


                

        </Main>


    )


}

export default Header