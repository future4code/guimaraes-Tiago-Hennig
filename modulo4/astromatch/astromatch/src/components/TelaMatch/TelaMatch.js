import styled from 'styled-components';
import React, { useState } from 'react';
import axios from 'axios';

const Botoes = styled.div`

`

const Imagem = styled.div`


`


function TelaMatch() {

    const clear = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago-hennig/clear'
        axios.put(url)
    }

    return(

        <div>
            <p>MATCH</p>
            <button onClick={clear}>Limpar matches</button>

        </div>
    )


}

export default TelaMatch