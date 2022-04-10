import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useProtectedPage } from "../../App";



const AdminHomePage = () => {
    useEffect(() => {
        getTripList()}, [] )

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

    const [listTrips, setListTrip] = useState([])

    const getTripList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-hennig-turmaguimaraes/trips"
        axios.get(url)
        .then((response) => {
            setListTrip(response.data.trips)
            console.log(response.data.trips)
        })
    }

    const eachTrip = listTrips.map((trip) => {
        return(
            <div key={trip.id}>
                <h2>{trip.name}</h2>
            </div>
            )
        }
    )

    return (
        <div>
            <p>ÁREA DO ADMINISTRADOR</p>
            <button onClick={goBack}>voltar</button>
            <button onClick={goToCreateTrip}>criar viagem</button>
            <button onClick={logout}>logout</button>
            <div>
                {eachTrip}
            </div>
        </div>
    )
}

export default AdminHomePage