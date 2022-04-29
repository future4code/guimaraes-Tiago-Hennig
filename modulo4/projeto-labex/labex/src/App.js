import axios from 'axios'
import styled from 'styled-components'
import Routes from './Routes'
import styleApp from './styleApp'
import { Page , Div} from './styleApp'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GlobalState from './global/GlobalState'


function App() {
  return (
    <Page>
      <Div>
        <GlobalState>
          <Routes />
        </GlobalState>
      </Div>
    </Page>
  );
}

export default App;
