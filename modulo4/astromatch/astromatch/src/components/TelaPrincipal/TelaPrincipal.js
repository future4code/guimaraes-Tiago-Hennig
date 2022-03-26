import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios'

const Botoes = styled.div`

`

const Imagem = styled.div`


    img {
        width: 360px;
    }

`


function TelaPrincipal() {
    const [foto, changeProfile] = useState("")
    const [idDoMatch, setIdDoMatch] = useState("")
    const [matches, setMatches] = useState([])
    const [accept, setAccept] = useState(Boolean)
    const [match, setIsMatch] = useState(Boolean)


    useEffect(() => {
        getProfileToChoose()}, [])

    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago-hennig/person')
        .then((response) => {
            changeProfile(response.data.profile.photo)
            setIdDoMatch(response.data.profile.id)
            // console.log(response)
        })
        .catch(error => console.log(error))
    }


    const choosePerson = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago-hennig/choose-person'
        const body = {
            id: idDoMatch,
            choice: accept
        }
        axios.post(url,body,
        ).then((response) => {
        // console.log(response.data)
        setIsMatch(response.data.isMatch)
        console.log(match)
    }).catch((error) => {
        console.log(error)
    })
    }
    
    const like = () => {
        setAccept(true)
        choosePerson()
        getProfileToChoose()
        addMatches()
    }

    const dislike = () => {
        setAccept(false)
        choosePerson()
        getProfileToChoose()
    }

    const addMatches = () => {
        if (match) {
            setMatches([...matches, idDoMatch])
            console.log(matches)
        }}

    

    return(

        <div>
            <main>

                <Imagem>
                    <img src={foto}></img>


                </Imagem>

                <button onClick={getProfileToChoose}>JULIANO</button>
                <button onClick={dislike}>NÃO</button>
                <button onClick={like}>SIM</button>
                <div>

                </div>

            </main>

            <Botoes>


            </Botoes>
        </div>
    )


}

export default TelaPrincipal