import React from 'react';
import styled from 'styled-components';



export const DivPage = styled.div`
width: 900px;
align-content:center;
align-self: center;
display: flex;
flex-direction: column;
`

export const Div = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

`

export const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 90px;
  background-color: skyblue;
  font-size: xx-large;
  font-weight: bold;
  margin: 10px;
  border-radius: 10px;

  p {
    align-self: center;
  }
`

export const Main = styled.div`
display: flex;
background-color: white;
`

export const Coluna = styled.div`
display: flex;
flex-direction: column;
width: 300px;
background-color: white;
`

export const CriarPlaylist = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
background-color: aliceblue;
text-align: center;
min-height: 100px;
border-radius: 10px;
padding-bottom: 20px;

  p {
    font-weight: bold;
    font-size: larger;
  }

  div {
    display: flex;
  flex-direction: column;
  width: 160px;
  place-self: center;
  }

  div > input {
    margin: 3px;
  }

  div > button {
    margin: 3px;
  }
`

export const ListaDePlaylists = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
background-color: aliceblue;
text-align: center;
min-height: 250px;
border-radius: 10px;

p {
  font-size: larger;
  font-weight: bold;
}
`

export const AdicionarMusicas = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
background-color: aliceblue;
text-align: center;
height: 280px;
border-radius: 10px;
width: 300px;

p {
  font-size: larger;
  font-weight: bold;
}

div {
  display: flex;
  flex-direction: column;
  width: 180px;
  align-items: center;
  align-self: center;
}

div > button {
  width: 80px;
  margin: 10px;
}

div > input {
  margin: 5px;
}
`

export const DetalheDaPlaylist = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
background-color: aliceblue;
text-align: center;
min-height: 250px;
border-radius: 10px;
width: 300px;
padding-bottom: 10px;

p {
  font-weight: bold;
  font-size: larger;
}
`

export const DivPlaylistBotao = styled.div`
display: flex;
flex-direction: row;
justify-content: center;

p {
  padding-right: 3px;
  font-size: medium;
  font-weight: 400;
  color: darkblue;
}
`

export const BotaoApagar = styled.button`
color: red;
align-self: center;
`

export const BotaoDetalhes = styled.button`
align-self: center ;
`

export const Detalhes = styled.div`
display: flex;
flex-direction: column;
min-height: 120px;
margin: 10px;
border: solid black 1px;
padding-bottom: 5px;
padding-top:15px;
p {
  margin:0;
  font-size: 14px;
  font-weight: 400;
}

audio{
  margin:0;
  height: 50px;
  margin-top: 20px;
  width: 260px;
}

`