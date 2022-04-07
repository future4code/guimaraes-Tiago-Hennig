import React from "react";
import { useNavigate } from "react-router-dom";



const AdminHomePage = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goToCreateTrip = () => {
        navigate("/admin/trips/createtrip")
    }


    return (
        <div>
            <p>ÁREA DO ADMINISTRADOR</p>
            <button onClick={goBack}>voltar</button>
            <button onClick={goToCreateTrip}>criar viagem</button>
            <button>logout</button>
            <div>
                {/* {list} */}
            </div>
        </div>
    )
}

export default AdminHomePage