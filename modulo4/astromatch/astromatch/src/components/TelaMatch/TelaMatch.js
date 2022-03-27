import styled from 'styled-components';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Botoes = styled.div`

`

const Imagem = styled.div`


`


function TelaMatch() {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        getMatches()}, [])

    const getMatches = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago-hennig/matches'

        axios.get(url)
        .then((response) => {
            setMatches(response.data.matches)

        })



    }



    const clear = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago-hennig/clear'
        axios.put(url)
    }

    return(

        <div>
            <p>MATCH</p>
            <li>
                <ul>{matches}</ul>
            </li>
            <button onClick={clear}>Limpar matches</button>

        </div>
    )


}

export default TelaMatch