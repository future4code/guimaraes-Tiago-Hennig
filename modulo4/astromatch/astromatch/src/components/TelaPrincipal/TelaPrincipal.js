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





    // const getProfileToChoose = async () => {
    // try {
    //     const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person',
    //     {
    //         headers: {
    //             Authorization: 'tiago-hennig-turmaGuimaraes'
    //         }})
    //         changeProfile(response.data)
    //     }catch(error) {
    //     console.log(error)}

    // }
    useEffect(() => {
        getProfileToChoose()}, [])

    const getProfileToChoose = () => {
        axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/tiago/person')
        .then((response) => {
            changeProfile(response.data.profile.photo)
            console.log(response)
        })
        .catch(error => console.log(error))
    }

    const [foto, changeProfile] = useState("")



    
    return(

        <div>
            <main>

                <Imagem>
                    <img src={foto}></img>


                </Imagem>

                <button onClick={getProfileToChoose}>JULIANO</button>

                <div>

                </div>

            </main>

            <Botoes>


            </Botoes>
        </div>
    )


}

export default TelaPrincipal