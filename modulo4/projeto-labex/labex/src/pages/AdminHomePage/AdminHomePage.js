import {React, useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import { Box, Boxes, Buttons, DivLeft, DivRight, NameOfTrip, Page, RedBox, Title} from "./style";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import LabeX from "../../img/LabeX_11zon.png"
import { BASE_URL } from "../../constants/BASE_URL";


const AdminHomePage = () => {
    useProtectedPage()

    useEffect(() =>
    getTripList()
    , [])

    const navigate = useNavigate()
    const [listTrips, setListTrip] = useState([])

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


    const getTripList = () => {
        const url = `${BASE_URL}/trips`
        axios.get(url)
        .then((response) => {
            setListTrip(response.data.trips)
        })
    }

    const deleteTrip = (tripId) => {
        const url = `${BASE_URL}/${tripId}`
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
                <NameOfTrip>
                    <p>{trip.name}</p>
                </NameOfTrip>
                <RedBox>
                    <button onClick={() => deleteTrip(trip.id)}>X</button>
                </RedBox>
            </Box>
            )
        }
    )

    return (
        <Page>
            <DivLeft>
                <img src={LabeX}></img>
                <p>ÁREA DO ADMINISTRADOR</p>
                <Buttons>
                    <button onClick={goToCreateTrip}>CRIAR VIAGEM</button>
                    <button onClick={goBack}>VOLTAR</button>
                    <button onClick={logout}>SAIR</button>
                </Buttons>
            </DivLeft>
            <DivRight>
                <Boxes>
                    <Title>VIAGENS</Title>
                    {eachTrip}
                </Boxes>
            </DivRight>
        </Page>
    )
}

export default AdminHomePage