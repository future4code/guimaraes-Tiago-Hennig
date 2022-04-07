import axios from 'axios'
import styled from 'styled-components'
import Routes from './Routes'
import styleApp from './styleApp'
import { Page } from './styleApp'



function App() {
  return (
    <Page>
      <div>
        <Routes />
      </div>
    </Page>
  );
}

export default App;
