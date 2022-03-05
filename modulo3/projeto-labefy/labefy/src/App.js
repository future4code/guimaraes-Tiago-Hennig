
import './App.css';
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';



const Header = styled.header`
  display: flex;
  justify-content: center;
  height: 90px;
  background-color: skyblue;
  font-size: x-large;
  font-weight: bold;
  margin: 10px;
  border-radius: 10px;
`

const Main = styled.div`
display: flex;
background-color: white;
`

const Coluna = styled.div`
display: flex;
flex-direction: column;
width: 300px;
background-color: white;
`

const CriarPlaylist = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
background-color: aliceblue;
text-align: center;
min-height: 100px;
border-radius: 10px;
`

const ListaDePlaylists = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
background-color: aliceblue;
text-align: center;
min-height: 250px;
border-radius: 10px;
`

const AdicionarMusicas = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
background-color: aliceblue;
text-align: center;
height: 150px;
border-radius: 10px;
width: 300px;
`

const DetalheDaPlaylist = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
background-color: aliceblue;
text-align: center;
height: 150px;
border-radius: 10px;
width: 300px;
`

class App extends React.Component {

    render() {
      return(
    <div>
      <Header>
        <p>Labefy</p>
      </Header>

      <Main>
        <Coluna>

          <CriarPlaylist>
            <p>Criar Playlist</p>

            <div>

              
            </div>
          </CriarPlaylist>

          <ListaDePlaylists>
            <p>Lista de Playlists</p>
          </ListaDePlaylists>
        </Coluna>

        <AdicionarMusicas>
          <p>Adicionar Músicas</p>
        </AdicionarMusicas>

        <DetalheDaPlaylist>
          <p>Detalhe da Playlist</p>
        </DetalheDaPlaylist>
      </Main>

    </div>
  );
}
}
export default App;
