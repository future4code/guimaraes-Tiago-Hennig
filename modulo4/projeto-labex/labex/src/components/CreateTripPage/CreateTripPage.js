import {React, useEffect, useState} from "react";
import { Form } from "./styles";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../App";
import axios from 'axios'


const CreateTripPage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const goBack = () => {
        navigate("/admin/trips/list")
    }

    return (
        <div>
            
            <button onClick={goBack}>voltar</button>
            <button>criar</button>
        </div>
    )
}

export default CreateTripPage