import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Box } from "./styles";



const ListTripPage = () => {
    const [listTrips, setListTrip] = useState([])
    useEffect(() => {
        getTripList()}, [] )
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1)
    }

    const goToApplicationFormPage = () => {
        navigate("/trips/application")
    }

    const getTripList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-hennig-turmaguimaraes/trips"
        const token = localStorage.getItem('token')
        axios.get(url)
        .then((response) => {
            setListTrip(response.data.trips)
            console.log(response.data.trips)
        })
    }

    const eachTrip = listTrips.map((trip) => {
        return(

                <Box>
                    <p>{trip.name}</p>
                    <p></p>
                </Box>

        )
    })

    return (
        <div>
            <button onClick={goBack}>Voltar</button>
            <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            <p>VIAGENS</p>
            <div>
                {eachTrip}
            </div>
        </div>
    )
}

export default ListTripPage