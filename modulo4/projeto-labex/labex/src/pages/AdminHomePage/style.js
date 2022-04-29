import styled from 'styled-components'

export const Box = styled.div`
border: solid black 1px;
width: 350px;
display: flex;
flex-direction: row;
justify-content: space-between;
margin-bottom: 10px;
margin-top: 10px;
border-radius: 4px;
p {
    margin-left: 10px;
    font-size: large;
}

button {
    margin-right: 10px;
    height: 25px;
    width: 70px;
    margin-top: 15px;
}
`

export const Boxes = styled.div`
display: flex;
flex-direction: column;
`

export const Buttons = styled.div`
display: flex;
margin-bottom: 20px;
justify-content: space-between;
width: 350px;

button {
    width: auto;
    padding: 10px;
    background-color: lightblue;
    border-radius: 4px;
}
`

export const Page = styled.div`
display: flex;
flex-direction: column;
align-items: center;
/* width: 350px; */
`