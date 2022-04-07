import React from "react";
import { Form } from "./styles";
import { useNavigate } from "react-router-dom";


const CreateTripPage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    return (
        <div>
            <p>CRIAR VIAGEM</p>
            <Form>
                <input></input>
                <input></input>
                <input></input>
            </Form>
            <button onClick={goBack}>voltar</button>
            <button>criar</button>
        </div>
    )
}

export default CreateTripPage