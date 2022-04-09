import {React, useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useProtectedPage } from "../../App";



const AdminHomePage = () => {
    useProtectedPage()
    const navigate = useNavigate()

    const goBack = () => {
        navigate('/')
    }

    const goToCreateTrip = () => {
        navigate("/admin/trips/createtrip")
    }

    const logout = () => {
        window.localStorage.removeItem('token')
        navigate('/login')
    }





    return (
        <div>
            <p>ÁREA DO ADMINISTRADOR</p>
            <button onClick={goBack}>voltar</button>
            <button onClick={goToCreateTrip}>criar viagem</button>
            <button onClick={logout}>logout</button>
            <div>
                {/* {list} */}
            </div>
        </div>
    )
}

export default AdminHomePage