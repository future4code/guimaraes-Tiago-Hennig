import styled from 'styled-components'

export const Div = styled.div`
display: flex;
flex-direction: row;
`

export const DivLeft = styled.div`
display: flex;
flex-direction: column;
width: 50vw;

`

export const Block = styled.div`
justify-self: center;
padding-top: 17vh;
margin-bottom: 17vh;
padding-left: 12vw;
height: 66vh;
margin: 0;

h1 {
font-size: 6.5vh;
margin: 0;
}

h2 {
    margin: 0;
    margin-bottom: 2.5vh;
    font-size: 4vh;
}
`

export const Inputs = styled.div`
display: flex;
flex-direction: column;
/* padding-bottom: 13vh;
padding-left: 12vw;
padding-right: 8vw; */
width: 25vw;

p {
    margin-bottom: 1vh;
    font-size: 3.3vh;

}

p:nth-child(1) {
    margin-top: 0.5vh;
}

input {
    height: 6.5vh;
}

button {
    border-radius: 3px;
    border-style: none;
    height: 6.5vh;
    font-size: 3.2vh;
}

button:nth-child(5) {
    background-color: #0C9AF2;
    margin-bottom: 2vh;
    margin-top: 4vh;
    color: #ffffff;
}

button:nth-child(6) {
    color: #000000;
    background-color:#D9D9D9 ;
}

button:nth-child(5):active {
    background-color: #074FF5;
}

button:nth-child(6):active {
    background-color: #B3B3B3;
}

`


export const DivRight = styled.div`
display: flex;
width: 50vw;
justify-content: center;
background-color: #F2F2F2;
height: 100vh;

img {
height: 66vh;
align-self: center;
padding-top: 17vh;
padding-bottom: 17vh;

}
`

