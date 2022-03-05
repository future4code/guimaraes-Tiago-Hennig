
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
padding-bottom: 20px;

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


const ListaDePlaylists = styled.div`
display: flex;
flex-direction: column;
margin: 10px;
background-color: aliceblue;
text-align: center;
min-height: 250px;
border-radius: 10px;

  div {
    display: flex;
    flex-direction: column;
}
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
  state ={
    playlists: [],
    inputCP: ''
  }

  componentDidMount() {
    this.getAllPlaylists()
  }


  getAllPlaylists = () => {
    axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
    {
      headers: {
        Authorization: 'tiago-hennig-turmaGuimaraes'
      }
    }).then((response) => {
      this.setState({playlists: response.data.result.list})
      console.log(response.data.result.list)
    }).catch((error) => console.log(error))
  }


  handleInputCP = (event) => {
    this.setState({ inputCP: event.target.value})
    console.log(this.state.inputCP)
  }

  createPlaylist = () => {
    const body = {
      name: this.state.inputCP
    }

    axios.post('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists',
    body,
    {
      headers: {
        Authorization: 'tiago-hennig-turmaGuimaraes'
      }
    }).then((response) => {
      console.log(response.data)
    }).catch((error) => {
      console.log(error.response.data)
    })

  }

  deletePlaylist = (idDaPlaylist) => {
    axios.delete(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idDaPlaylist}`,
    {
      headers: {
        Authorization: 'tiago-hennig-turmaGuimaraes'
      }}).then((response) => {
        this.getAllPlaylists()
        console.log(response)
      }).catch((error) => console.log(error.response))
  }


    render() {
    
    const renderizaPlaylists = this.state.playlists.map((playlist) => {
      return (
        <div>
          <p key={playlist.id}>{playlist.name}</p>
          <button onClick={() => this.deletePlaylist(playlist.id)}>Apagar</button>
        </div>
      )
    })

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
              <input placeholder='Digite o nome da Playlist' value={this.state.inputCP} 
              onChange={this.handleInputCP}></input>
              <button onClick={this.createPlaylist}>Criar Playlist</button>
            </div>
          </CriarPlaylist>

          <ListaDePlaylists>
            <p>Lista de Playlists</p>

            <div>
              {renderizaPlaylists}
            </div>
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
