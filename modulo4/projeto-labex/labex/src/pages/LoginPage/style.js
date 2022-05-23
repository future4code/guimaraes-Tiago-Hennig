import styled from 'styled-components'

export const Div = styled.div`
display: flex;
flex-direction: row;
`
export const DivLeft = styled.div`
display: flex;
flex-direction: column;
width: 50vw;

h1 {
padding-top: 13vh;
padding-left: 12vw;
margin-bottom: 0;
font-size: 6.5vh;
}

h2 {
    margin-top: 0;
    padding-left: 12vw;
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
margin-bottom: 0vh;

}
`

export const Inputs = styled.div`
display: flex;
flex-direction: column;

padding-bottom: 10vh;
padding-left: 12vw;
padding-right: 8vw;
width: 25vw;

p {
    margin-bottom: 1vh;
}

input {
    height: 6vh;
}

button {
    border-radius: 3px;
    border-style: none;
    height: 7vh;
    font-size: 3.5vh;
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
`