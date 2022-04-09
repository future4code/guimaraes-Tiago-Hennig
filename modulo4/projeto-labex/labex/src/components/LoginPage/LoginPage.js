import {React, useState} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios"
import { useProtectedPage } from "../../App";

const LoginPage = () => {
    useProtectedPage()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }

    const login = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-hennig-turmaguimaraes/login"
        const body = {
            email: email,
            password: password
        }
        const token = window.localStorage.getItem('token')

        axios.post(url,body).then(response => {
            window.localStorage.setItem("token", response.data.token)
            console.log(response.data)
            navigate("/admin/trips/list")
            console.log(token)
        })
        .catch((err => {
            console.log('Deu ruim: ', err)
            alert("INVÁLIDO")
    }))
    if (token === null) {

        }
}

    const emailValue = (event) => {
        setEmail(event.target.value)
    }

    const passwordValue = (event) => {
        setPassword(event.target.value)
    }

    console.log(email)

    return (
        <div>
            <p>ÁREA RESTRITA</p>
            <input placeholder="EMAIL" value={email} onChange={emailValue}/>
            <input placeholder="SENHA" value={password} onChange={passwordValue} />
            <button onClick={login}>Login</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default LoginPage