import styled from "styled-components"

export const PageContainer = styled.div`
font-family: 'Poppins', sans-serif;
display: flex;
flex-direction: column;
height: 100vh;
background-color: #ffffff;
align-items: center;
justify-content: center;

`

export const PageDiv = styled.div`
display: flex;
flex-direction: column;
background-color: #ffffff;
align-items: center;
height: 100vh;
justify-content: center;

    h1 {

    color: #CE0808;
    font-size: 400%;
    }

    p {

    }

`

export const LoginButton = styled.div`
margin-top: 30vh;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

    button {
    margin: 1vh;
    color: #ffffff;
    font-size: 250%;
    border: none;
    background-color: #CF0808;
    border-radius: 8px;
    width: 60vw;
    height: 9vh;
    color: #ffffff;
    font-size: 250%;
    }

`

export const SignUpButton = styled.button`
    border: none;
    background-color: #ffffff;
    position: absolute;
    bottom: 8vh;
    font-size: 1.5rem;
    text-decoration: underline;
`

