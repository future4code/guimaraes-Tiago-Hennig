import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import {BoxTrips, Buttons, Div, ListTrip} from "./styles";
import { CardTrip } from "../../Cards/CardTrip";



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

    //***// 


    return (
        <Div>
            <p>VIAGENS</p>
            <Buttons>
                <button onClick={goBack}>Voltar</button>
                <button onClick={goToApplicationFormPage}>Inscrever-se</button>
            </Buttons>
            <div>
                
                <BoxTrips>
                {listTrips.map((trip) => {
                    return(
                        <ListTrip>
                            <CardTrip trip={trip}></CardTrip>
                        </ListTrip>
            )})}
                </BoxTrips>
            </div>
        </Div>
    )
}

export default ListTripPage