import {React, useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios"
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Block, Div, DivLeft, DivRight, Inputs} from "./style";
import LabeX from "../../img/LabeX_11zon.png"
import { BASE_URL } from "../../constants/BASE_URL";


const LoginPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const goBack = () => {
        navigate('/')
    }

    const login = () => {
        if ((email === undefined) || (password === undefined)) {
            alert("Digite seu email e sua senha.")
        } else {
            goLogin()
        }
    }

    const goLogin = async () => {
        try {const body = {
            email: email,
            password: password
        }
        const res = await axios.post(`${BASE_URL}/login`, body)
            window.localStorage.setItem("token", res.data.token)
            navigate('/admin/trips/list')}
        catch(error){
            alert("Login e/ou senha inválidos.")
        }
    }

        const emailValue = (event) => {
            setEmail(event.target.value)
        }
    
        const passwordValue = (event) => {
            setPassword(event.target.value)
        }
    


    return (
        <Div>
            <DivLeft>
                <Block>
                    <h1>ÁREA RESTRITA</h1>
                    <h2>Identifique-se</h2>
                    <Inputs>
                        <p>Email</p>
                        <input placeholder="Digite o email" value={email} onChange={emailValue}/>
                        <p>Senha</p>
                        <input placeholder="Digite a senha" value={password} onChange={passwordValue} />
                        <button onClick={login}>Login</button>
                        <button onClick={goBack}>Voltar</button>
                    </Inputs>
                </Block>
            </DivLeft>

            <DivRight>
                <img src={LabeX}></img>
            </DivRight>
        </Div>
    )
}

export default LoginPage