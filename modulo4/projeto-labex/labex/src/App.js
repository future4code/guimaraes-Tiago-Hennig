import axios from 'axios'
import styled from 'styled-components'
import Routes from './Routes'
import styleApp from './styleApp'
import { Page } from './styleApp'

import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'


export const useProtectedPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const token = window.localStorage.getItem('token')

    if (token === null) {
      navigate('/login')
    }

  }, [])

  return(
    <div>
      <p>PÁGINA RESTRITA - FAÇA SEU LOGIN</p>
      <button></button>
    </div>
  )

}


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
