import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Box, Botoes } from "./styles";



const ListTripPage = () => {

    useEffect(() => {
        getTripList()}, [] )
    

    //* NAVEGAÇÃO *//
    const navigate = useNavigate()

    const goBack = () => {
        navigate("/")
    }

    const goToApplicationFormPage = () => {
        navigate("/trips/application")
    }
    //***// 


    //* Função que pega a lista de viagens com a API *//
    const [listTrips, setListTrip] = useState([])

    const getTripList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-hennig-turmaguimaraes/trips"
        axios.get(url)
        .then((response) => {
            setListTrip(response.data.trips)
            console.log(response.data.trips)
        })
    }
    //***// 


    //* Função que mapeia a lista de viagens *//
    const eachTrip = listTrips.map((trip) => {
        return(
            <Box key={trip.id}>
                <h2>{trip.name}</h2>
                <h4>{trip.date}</h4>
                <h3>{trip.planet}</h3>
                <p>{trip.description}</p>
                <p>Duração: {trip.durationInDays} dias</p>
            </Box>
            )
        }
    )
    //***// 


    return (
        <div>
            <Botoes>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            </Botoes>
            <div>
                <p>VIAGENS</p>
                <div>
                    {eachTrip}
                </div>
            </div>
        </div>
    )
}

export default ListTripPage