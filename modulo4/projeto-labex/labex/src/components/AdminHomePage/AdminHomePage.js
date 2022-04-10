import {React, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { useProtectedPage } from "../../App";
import { Box, Boxes, Buttons, Page} from "./style";



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

    const deleteTrip = (tripId) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-hennig-turmaguimaraes/trips/${tripId}`
        const token = window.localStorage.getItem('token')
        const headers = {
            auth: token,
        }
        axios.delete(url, headers)
        .then((response) => {
            console.log(response)
            console.log(token)
        }).catch((error) => {
            console.log(error)
            console.log(token)
        })
    }

    const eachTrip = listTrips.map((trip) => {
        return(
            <Box key={trip.id}>
                <p>{trip.name}</p>
                <button onClick={() => deleteTrip(trip.id)}>Apagar</button>
            </Box>
            )
        }
    )

    return (
        <Page>
            <p>ÁREA DO ADMINISTRADOR</p>
            <Buttons>
                <button onClick={goBack}>voltar</button>
                <button onClick={goToCreateTrip}>criar viagem</button>
                <button onClick={logout}>logout</button>
            </Buttons>

            <Boxes>
                {eachTrip}
            </Boxes>
        </Page>
    )
}

export default AdminHomePage