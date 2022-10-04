import { red } from "@mui/material/colors"
import { height } from "@mui/system"
import styled from "styled-components"

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

export const BoxStylePizza = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 220,
    height: 150,
    bgcolor: '#ffffff',
    boxShadow: 15,
    p: 5,
    paddingTop: 0,
    h2: {
        marginBottom: 1
    }

}


export const Select = styled.select`

height: 30px;
width: 40px;
display: flex;
text-align: center;

option {
    text-align: center;
    justify-content: center;
    align-items: center;
}

`

export const ContainerHowManyAndAddButton = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;

button {
    border: none;
    background-color: #CE0808;
    color: #ffffff;
    border-radius: 8px;
    font-size: 1.4rem;
}

`

export const HowManyPizzas = styled.div`

display: flex;
border: 1px solid gray;
width: 90px;
border-radius: 8px;
justify-content: space-between;

p {
    font-size: 1.6rem;
    margin: 0;
    align-self: center;
    justify-self: center;
}

button {
    border: none;
    background-color: #ffffff;
    width: 20px;
    color: #CE0808;
    font-size: 2.3rem;
    margin-left: 6px;
    margin-right: 10px;
    align-self: center;
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

p {
    margin: 0;
    font-size: 18px;
    padding: 0;
}

`

export const Pizzas = styled.div`
padding: 0;
display: flex;
height: auto;
width: 100%;
justify-content: space-between;
flex-wrap: wrap;
margin-bottom: 70px;

`

export const CartFooter = styled.div`

display: flex;
height: 70px;
width: 100vw;
background-color: #ffffff;
position: fixed;
bottom: 0;
justify-content: center;
align-items: center;
box-shadow: 0px 0px 10px 4px gray;



button {
    font-size: 1.8rem;

    p:first-child {
    display: flex;
    color: #ffffff;
    width: 10%;
    flex-wrap: nowrap;
    }



    display: flex;
    background-color: #CE0808;
    color: #ffffff;

    border-radius: 8px;
    border: none;
    height: 60%;
    width: 90vw;
    align-items: center;
    justify-content: space-between;

    img {
        height: 70%;
        max-width: 10%;
        filter: invert(100%);
    }

    p:nth-child(2) {
        place-self: center;

    }

}


`
