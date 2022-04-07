import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Div, Name, Photo, Render, List} from './style';


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

    const eachMatch = matches.map((match) => {
        return (
            <List>
            <Render>
                <Photo key={match.id} src={match.photo}></Photo>
                <Name key={match.id}> {match.name} </Name>
            </Render>
            </List>
        )
    })

    return(
        <Div>
            {eachMatch}
            <button onClick={clear}>RESET Matches</button>
        </Div>
    )
}

export default TelaMatch
