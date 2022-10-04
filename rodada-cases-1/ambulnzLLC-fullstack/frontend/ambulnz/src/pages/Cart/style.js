import styled from 'styled-components'



export const PageContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 100vh;
width: 100vw;
margin-top: 0;
`

export const DivPage = styled.div`

display: flex;
flex-direction: column;
width: 90vw;
align-items: center;
margin-top: 0;

h1 {
    margin-top: 5px;
    width: 80vw;
    align-self: center;
    text-align: center;
    color: #CE0808;
    font-size: 270%;
    flex-wrap: nowrap;
    height: 60px;
    margin-bottom: 0;
}


`


export const Buttons = styled.div`
display: flex;
flex-direction: row;
width: 100%;
justify-content: space-between;
margin-bottom: 5px;

button {
    background-color: #ffffff;
    border: 2px solid  #CE0808;
    border-radius: 8px;
    height: 45px;
    width: 135px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.04em;
}

`

export const Subtitle = styled.div`

display: flex;
flex-direction: column;
height: 60px;
width: 100%;
margin-bottom: 25px;

h2 {
font-size: 30px;
margin: 0;
font-weight: 400;
padding: 0;
height: 40px;
}


`

export const CartCard = styled.div`
display: flex;
flex-direction: row;
border: 1px solid black;
border-radius: 8px;
font-size: 1.7rem;
margin-bottom: 5px;
align-items: center;
width: 90vw;
height: 50px;

p:nth-child(1) {
    padding-left: 10px;
}

p:nth-child(2) {
    padding-left: 10px;
}


`