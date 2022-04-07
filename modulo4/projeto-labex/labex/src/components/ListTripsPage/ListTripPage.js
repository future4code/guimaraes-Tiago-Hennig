import React from "react";
import { useNavigate } from "react-router-dom";



const ListTripPage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goToApplicationFormPage = () => {
        navigate("/application")
    }

    return (
        <div>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            <p>VIAGENS</p>
            <div>
                {/* {tripList} */}
            </div>
        </div>
    )
}

export default ListTripPage