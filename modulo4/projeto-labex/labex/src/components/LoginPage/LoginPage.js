import React from "react";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {

    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <p>ÁREA RESTRITA</p>
            <input placeholder="EMAIL" />
            <input placeholder="SENHA" />
            <button>Login</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default LoginPage