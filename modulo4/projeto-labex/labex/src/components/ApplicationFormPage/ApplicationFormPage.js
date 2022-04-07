import React from "react";
import { Form } from "./styles";
import { useNavigate } from "react-router-dom";


const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <p>INSCREVER-SE</p>
            <Form>
                <input></input>
                <input></input>
                <input></input>
                <input></input>
            </Form>
            <button>Enviar</button>
            <button onClick={goBack}>Voltar</button>
        </div>
    )
}

export default ApplicationFormPage