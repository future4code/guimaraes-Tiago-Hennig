import styled from 'styled-components';
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import not from '../../img/not.png'
import heart from '../../img/heart.png'

const Div = styled.div`
display: flex;
flex-direction: column;
align-items: center;

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 434px;
        margin-bottom: 15px;
        max-width: 360px;
        border: solid black 1px;
    }
`

const Botoes = styled.div`
display: flex;
width: 50px;
height: 50px;
justify-content: center;

a > img{
    width: 60px;
    height: 60px; 
    margin-left: 15px;
    margin-right: 15px;
}
`

const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    

    img {
        max-height: 360px;
        max-width: 360px;
        align-self: center;


    p {
        position: absolute;
        padding-top: 100px;
    }

}

`


function TelaPrincipal() {
    const [foto, changeProfile] = useState("")
    const [idDoMatch, setIdDoMatch] = useState("")
    const [matches, setMatches] = useState([])
    const [accept, setAccept] = useState(Boolean)
    const [match, setIsMatch] = useState(Boolean)
    const [bio,changeBio] = useState("")


    useEffect(() => {
        getProfileToChoose()}, [])

    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago-hennig/person')
        .then((response) => {
            changeProfile(response.data.profile.photo)
            changeBio(response.data.profile.bio)
            setIdDoMatch(response.data.profile.id)
            console.log(response)
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

        <Div>
            <main>

                <Perfil>
                    <img src={foto}></img>
                    <p>{bio}</p>
                </Perfil>

            </main>

            <Botoes>
                <a onClick={dislike}><img src={not}></img></a>
                <a onClick={like}><img src={heart}></img></a>
            </Botoes>

        </Div>
    )


}

export default TelaPrincipal