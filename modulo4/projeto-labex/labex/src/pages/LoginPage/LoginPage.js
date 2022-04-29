import {React, useContext, useEffect, useState} from "react";
import { useNavigate} from "react-router-dom";
import axios from "axios"
import { GlobalStateContext } from "../../global/GlobalStateContext";

const LoginPage = () => {
    
    
    const {email, password, emailValue, passwordValue, login, token, useProtectedPage} = useContext(GlobalStateContext)

    useProtectedPage()
    const navigate = useNavigate()

    const goLog = () => {
        login()
        navigate('/admin/trips/list')
    }

    const goBack = () => {
        navigate('/')
    }

    return (
        <div>
            <p>ÁREA RESTRITA</p>
            <input placeholder="EMAIL" value={email} onChange={emailValue}/>
            <input placeholder="SENHA" value={password} onChange={passwordValue} />
            <button onClick={goLog}>Login</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default LoginPage