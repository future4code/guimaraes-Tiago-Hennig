import {React, useEffect, useState} from "react";
import { Form } from "./styles";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../App";
import axios from 'axios'


const CreateTripPage = () => {
    const [tripName, setTripName] = useState("")
    const [planet, setPlanet] = useState("")
    const [date, setDate] = useState("")
    const [description, setDescription] = useState("")
    const [durationInDays, setDurationInDays] = useState(Number)

    useProtectedPage()
    const navigate = useNavigate()

    const goBack = () => {
        navigate("/admin/trips/list")
    }

    const handleTripNameInput = (event) => {
        setTripName(event.target.value)
    }

    const handlePlanetInput = (event) => {
        setPlanet(event.target.value)
    }

    const handleDateInput = (event) => {
        setDate(event.target.value)
    }

    const handleDescriptionInput = (event) => {
        setDescription(event.target.value)
    }

    const handleDurationInDaysInput = (event) => {
        setDurationInDays(event.target.value)
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    const createTrip = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-hennig-turmaguimaraes/trips/"
        const token = window.localStorage.getItem('token')
        const headers = {
            auth: token,
        }
        const body = {
            name: tripName,
            planet: planet,
            date: date,
            description: description,
            durationInDays: durationInDays
        }
        axios.post(url, headers, body)
        .then((response) => {
            console.log(response)
            
            alert("SUCESSOOOOO :D")
        }).catch((error) => {
            alert("NÃO ROLOU :(")
            console.log(body)
        })
    }

    return (
        <div>
            
            <button onClick={goBack}>Voltar</button>
            <button onClick={createTrip}>Criar</button>

            <Form onSubmit={onSubmitForm}>
                <input placeholder="Nome" name={'name'} value={tripName} onChange={handleTripNameInput}></input>
                <input placeholder="Planeta" value={planet} onChange={handlePlanetInput}></input>
                {/* <select>
                    <option>Escolha um Planeta</option>
                    <option value={"Vênus"} onSelect={handlePlanetInput}>Vênus</option>
                    <option value={planet} onSelect={handlePlanetInput}>Mercúrio</option>
                    <option value={planet} onSelect={handlePlanetInput}>Terra</option>
                    <option value="Marte" onSelectCapture={handlePlanetInput}>Marte</option>
                    <option value={planet} onSelect={handlePlanetInput}>Júpiter</option>
                    <option value={planet} onSelect={handlePlanetInput}>Saturno</option>
                    <option value={planet} onSelect={handlePlanetInput}>Urano</option>
                    <option value={planet} onSelect={handlePlanetInput}>Netuno</option>
                    <option value={planet} onSelect={handlePlanetInput}>Plutão</option>
                </select> */}
                <input placeholder="dd/mm/aaaa" name={'date'} value={date} onChange={handleDateInput}></input>
                <input placeholder="Descrição" name={'description'} value={description} onChange={handleDescriptionInput}></input>
                <input placeholder="Duração em dias" name={'duration'} value={durationInDays} onChange={handleDurationInDaysInput}></input>
            </Form>
        </div>
    )
}

export default CreateTripPage