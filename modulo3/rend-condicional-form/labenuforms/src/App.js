import react from 'react';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';
import Final from './components/Final';


const Pagina = styled.div`
  font-family: sans-serif;
  text-align: center;
  background-image: url("https://wallpaperbat.com/down/198561-light-blue-and-pink-wallpaper");
  height: 100vh;
  padding-top: 3vh;
`



class App extends react.Component {
  state = {
    etapa : 1
  }


  renderizaPaginas() {
    switch (this.state.etapa) {
      case 1:
        return <Etapa1 />
      case 2:
        return <Etapa2 />
      case 3:
        return <Etapa3 />
      case 4:
        return <Final />
    }
  }

  proximaEtapa = () => {
    this.setState({etapa: this.state.etapa + 1})
    console.log("x")
  }

  
  
  render() {
  return (
    <Pagina>
      {this.renderizaPaginas()}
      <br />
      {this.state.etapa !== 4 && (
          <button onClick={this.proximaEtapa}>Próxima etapa</button>
        )}
  
    </Pagina>
  );

}
}

export default App;
