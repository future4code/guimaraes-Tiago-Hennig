import styled from 'styled-components'

export const Box = styled.div`
width: 40vw;
height: 10vh;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 10px;
margin-top: 10px;
align-items: center;


`

export const NameOfTrip = styled.div`
display: flex;
height: 100%;

p {
    padding-left: 1vw;
    font-size: 3.2vh;
    color: #ffffff;
    background-color: #0C9AF2;
    height: 100%;
    align-items: center;
    display: flex;
    margin: 0;
    width: 32.5vw;
}
`

export const RedBox = styled.div`
width: 6vw;
height: 100%;

button {
    margin-right: 1vw;
    height: 100%;
    width: 100%;
    background-color: red;
    border-style: none;
    color: #ffffff;
    font-size: 1.5rem;
}
`

export const Boxes = styled.div`
display: flex;
flex-direction: column;
`

export const Buttons = styled.div`
margin-top: 2vh;
display: flex;
flex-direction: column;
margin-bottom: 20px;
justify-content: center;
width: 22.6vw;

button {
    width: auto;
    padding: 1.8vh;
    background-color: #0C9AF2;
    border-radius: 4px;
    border-style: none;
    margin: 1vh;
    color: #ffffff;
    font-size: 3.6vh;
    justify-items: center;
}

button:nth-child(3) {
    background-color: #FF0101;
}
`

export const Page = styled.div`
display: flex;
flex-direction: row;
align-items: center;
`

export const DivLeft = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50vw;
height: 100vh;
justify-content: center;

img {
    width: 15vw;
    margin-bottom: 1vh;
}

p {
    font-weight: 650;
    font-size: 3vh;
    padding: 0;
    margin: 1vh;
    letter-spacing: -0.05vw;
    margin-bottom: 2vh;
    background-color: #FF7C8A;
    width: 21.55vw;
    text-align: center;
    height: 6vh;
    justify-self: center;
    padding-top: 1.1vh;
}

`

export const DivRight = styled.div`
display: flex;
background-color: #F2F2F2;
flex-direction: column;
align-items: center;
justify-content: center;
width: 50vw;
height: 100vh;
`
export const Title = styled.p`
    text-align: center;
    font-size: 6vh;
    margin: 3vh;
    font-weight: 700;
`

