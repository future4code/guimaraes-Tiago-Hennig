
import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { DivPage, Div, Header, Main, Coluna, 
  CriarPlaylist, ListaDePlaylists, AdicionarMusicas, 
DetalheDaPlaylist, DivPlaylistBotao, BotaoApagar, BotaoDetalhes } from './components/style';



class App extends React.Component {
  state = {
    playlists: [],
    inputCP: '',
    inputPlaylist: '',
    inputTrack: '',
    inputArtist: '',
    inputURL: '',
    faixasDaPlaylist: []
  }

  componentDidMount() {
    this.getAllPlaylists()
  }

  componentDidUpdate() {

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

  getPlaylistTracks = (idDaPlaylist) => {
    axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idDaPlaylist}/tracks`,
    {
      headers: {
        Authorization: 'tiago-hennig-turmaGuimaraes'
      }
    }).then((response) => {
      this.setState({faixasDaPlaylist: response.data.result.tracks})
      console.log(response.data)
    }).catch((error) => console.log(error))
  }


  createPlaylist = () => {
    const url = 'https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists'
    const body = {
      name: this.state.inputCP
    }

    axios.post(url, body,
    {
      headers: {
        Authorization: 'tiago-hennig-turmaGuimaraes'
      }
    }).then((response) => {
      console.log(response.data)
      this.getAllPlaylists()
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

  addTrackToPlaylist = () => {
      const idDaPlaylist = this.state.playlists.find(playlist => playlist.name === this.state.inputPlaylist).id
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${idDaPlaylist}/tracks`
      const body = {
        name: this.state.inputTrack,
        artist: this.state.inputArtist,
        url: this.state.inputURL
      }
      axios.post(url, body,
      {
        headers: {
          Authorization: 'tiago-hennig-turmaGuimaraes'
        }}).then((response) => {
          console.log(response)
        }).catch((error) => {
        console.log(error.response.data.message)
      })
  }

  handleInputCP = (event) => {
    this.setState({ inputCP: event.target.value})
    console.log(this.state.inputCP)
  }

  handleInputPlaylist = (event) => {
    this.setState({inputPlaylist: event.target.value})
    console.log(this.state.inputPlaylist)
  }

  handleInputTrack = (event) => {
    this.setState({inputTrack: event.target.value})
    console.log(this.state.inputTrack)
  }

  handleInputArtist = (event) => {
    this.setState({inputArtist: event.target.value})
    console.log(this.state.inputArtist)
  }

  handleInputURL = (event) => {
    this.setState({inputURL: event.target.value})
    console.log(this.state.inputURL)
  }

    render() {

    
    const renderizaPlaylists = this.state.playlists.map((playlist) => {
      return (
        <DivPlaylistBotao key={playlist.id}>
          <p>{playlist.name}</p>
          <BotaoApagar onClick={() => this.deletePlaylist(playlist.id)}>x</BotaoApagar>
          <BotaoDetalhes onClick={() => this.getPlaylistTracks(playlist.id)}>Detalhes</BotaoDetalhes>
        </DivPlaylistBotao>
      )
    })

    const renderizaDetalhes = this.state.faixasDaPlaylist.map((playlist) => {
      return (
        <div key={playlist.id}>
          <p>{playlist.name}</p>
        </div>
      )
    })

      return(
        <Div>
    <DivPage>
      <Header>
        <p>Labefy</p>
      </Header>

      <Main>
        <Coluna>

          <CriarPlaylist>
            <p>Criar Playlist</p>

            <div>
              <input placeholder='Nome da nova Playlist' value={this.state.inputCP} 
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

          <div>
            <input placeholder='Qual playlist?' value={this.state.inputPlaylist}
            onChange={this.handleInputPlaylist}></input>
            <input placeholder='Nome da música' value={this.state.inputTrack} 
            onChange={this.handleInputTrack}></input>
            <input placeholder='Artista' value={this.state.inputArtist} 
            onChange={this.handleInputArtist}></input>
            <input placeholder='URL da música' value={this.state.inputURL} 
            onChange={this.handleInputURL}></input>
            <button onClick={this.addTrackToPlaylist}>Adicionar Música</button>

          </div>
        </AdicionarMusicas>

        <DetalheDaPlaylist>
          <p>Detalhe da Playlist</p>

          <div>
            {renderizaDetalhes}
          </div>
        </DetalheDaPlaylist>
      </Main>

    </DivPage>
    </Div>
  );
}
}
export default App;

