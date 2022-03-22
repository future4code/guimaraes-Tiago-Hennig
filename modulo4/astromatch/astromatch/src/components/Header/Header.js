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
    justify-content: center;
`

function Header() {

    return(

        <Main>


            <Astro>
                <h2>Astro</h2>
            </Astro>

            <Match>
                <h2>Match</h2>
            </Match>



                

        </Main>


    )


}

export default Header