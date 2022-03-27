import React, { useEffect, useState } from 'react';
import axios from 'axios'
import not from '../../img/not.png'
import heart from '../../img/heart.png'
import { Div, Botoes, Perfil, Description } from './style'

function TelaPrincipal() {
    const [foto, changeProfile] = useState("")
    const [idDoMatch, setIdDoMatch] = useState("")
    const [matches, setMatches] = useState([])
    const [accept, setAccept] = useState(Boolean)
    const [match, setIsMatch] = useState(Boolean)
    const [bio,changeBio] = useState("")
    const [age, setAge] = useState("")

    useEffect(() => {
        getProfileToChoose()}, [])

    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago-hennig/person')
        .then((response) => {
            changeProfile(response.data.profile.photo)
            changeBio(response.data.profile.bio)
            setIdDoMatch(response.data.profile.id)
            setAge(response.data.profile.age)
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
        setIsMatch(response.data.isMatch)
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
        }}

    return(
        <Div>
            <main>
                <Perfil>
                    <img src={foto}></img>
                        <Description>
                            <p>{age},</p>
                            <p>{bio}</p>
                        </Description>
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
