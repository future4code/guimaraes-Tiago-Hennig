import styled from 'styled-components'; 
import stripes from './img/stripes.jpg'

export const Div = styled.div`
    display: flex;
    align-content: center;
    justify-content: center;
    margin: 0px;
    background:url(${stripes});
    background-size: cover;
    height: 100vh;
    border: blur(9px);
`

export const Tela = styled.div`
    height: 660px;
    background-color: white;
    border: solid black 1px ;
    width: 400px;
    justify-content: center;
    align-self: center ;
    border-radius: 10px;
    margin: 50px;
`
////  ---- HEADER----

export const Main = styled.div`
    height: 460px;
`
export const Astro = styled.div`
    align-items: center;
    align-self: center;
    text-align: center;
    color: #1F2FEB;
    font-size: 30px;
    font-weight: 700;
`

export const Match = styled.div`
    text-align: center;
    color: #6672EE;
    font-size: 30px;
    font-weight: 700;
`

export const MainHeader = styled.div`
    display: flex;
    width: 360px;
    justify-content: center;
    padding-left: 30px;
    height: 80px;

    div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    div > a {
        justify-self: right;
        width: 30px;
        display: flex;
}

    div > a > img {
        width: 50px;
        padding-left: 50px;
}
`

export const AstroMatch = styled.div`
    display: flex;
    text-align: center;
`
