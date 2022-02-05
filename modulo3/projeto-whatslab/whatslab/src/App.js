import './App.css';
import styled from 'styled-components'

const Principal = styled.body`
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  margin: 50px;
`

const Mensagem = styled.button`
  display: flex;
  height: 60px;
  width: 100px;
  align-items: center;
`

function App() {
  return (
    <div>
      <Principal>

        <Mensagem> AMENDOIM </Mensagem>
        <Mensagem> CASTANHA</Mensagem>

      </Principal>
    </div>
  );
}

export default App;
