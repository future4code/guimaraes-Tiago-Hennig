import styled from "styled-components"

export const PageContainer = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
height: 100vh;

`

export const DivPage = styled.div`

display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 80vw;
flex-wrap: nowrap;


h1 {
    position: absolute;
    width: 80vw;
    top:10vh;
    text-align: center;
    color: #CE0808;
    font-size: 320%;
    flex-wrap: nowrap;
}



label {
    font-size: 120%;
}

input {
    height: 4.2vh;
}

button {
    justify-self: center;
    align-self: center;
    margin-top: 3vh;
    border: none;
    background-color: #CF0808;
    border-radius: 8px;
    width: 60vw;
    height: 9vh;
    color: #ffffff;
    font-size: 250%;
}

`

export const WelcomeDiv = styled.div`

display: flex;
flex-direction: column;
margin-top: 15vh;
margin-bottom: 5vh;

h2 {
    font-size: 230%;
    margin-bottom: 0;
}

h3 {
    font-size: 160%;
    margin-top: 0;
    margin-bottom: 0;
}

`

export const ReturnButton = styled.button`
    border: none;
    background-color: #ffffff;
    position: absolute;
    bottom: 5vh;
    font-size: 1.5rem;
    text-decoration: underline;
`

export const SignUpButton = styled.button`
    border: none;
    background-color: #ffffff;
    position: absolute;
    bottom: 11vh;
    font-size: 1.5rem;
    text-decoration: underline;

`

