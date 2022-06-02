import React from "react";
import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    flex-direction: column;
`

export const DivCenter = styled.div`
flex-direction: column ;
background-color: #F2F2F2;
display: flex;
width: 100vw;
justify-content: center;
height: 80vh;

img {
height: 60vh;
align-self: center;
margin-bottom: 3vh;
}
`

export const Buttons = styled.div`
display: flex;
align-self: center;
margin-bottom: 3vh;

button {
    border-style: none;
    background-color: #0C9AF2;
    border-radius: 3px;
    height: 7vh;
    min-width: 15vw;
    margin: 1vh;
    color: #ffffff;
    font-size: 3.5vh;
}

button:active {
    background-color: #074FF5;
}
`