import React, { useState, useNavigate, useEffect } from "react";
import axios from 'axios'
import { GlobalStateContext } from "./GlobalStateContext";
import { BASE_URL } from "../urls/BASE_URL";

const GlobalState = (props) => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [token, setToken] = useState("")


    const useProtectedPage = () => {
            const tokenValue = window.localStorage.getItem('token')
            setToken(tokenValue)
}



    const login = async () => {
        const body = {
            email: email,
            password: password
        }
        const response = await axios.post(`${BASE_URL}login`, body)
            window.localStorage.setItem("token", response.data.token)
        }


    const emailValue = (event) => {
        setEmail(event.target.value)
    }

    const passwordValue = (event) => {
        setPassword(event.target.value)
    }

    const data = {token, useProtectedPage , email, password, login, emailValue, passwordValue}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalState