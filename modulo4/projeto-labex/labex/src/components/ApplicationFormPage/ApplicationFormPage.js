import {React, useEffect, useState} from "react";
import { Form, Select } from "./styles";
import { useNavigate } from "react-router-dom";
import axios from 'axios'


const ApplicationFormPage = () => {
    const navigate = useNavigate()

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [applicationText, setApplicationText] = useState("")
    const [profession, setProfession] = useState("")
    const [country, setCountry] = useState("")
    const [trips, setTrips] = useState([])
    const [id, changeID] = useState("")

    useEffect(() => {
        getTripList()}, [])


    const tripApplication = (code) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-hennig-guimaraes/trips/${code}/apply`
        const body = {
            name: name,
            age: age,
            applicationText: applicationText,
            profession: profession,
            country: country
        }
        axios.post(url, body)
        .then((response) => {
        alert("OK!")
        }).catch((error) => {
        alert("NÃO ROLOU")
        console.log(id)
        }
        )}

    const getTripList = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-hennig-turmaguimaraes/trips"
        axios.get(url)
        .then((response) => {
            setTrips(response.data.trips)
            console.log(response.data.trips)
            console.log(trips)
        })
    }

    const onSubmitForm = (event) => {
        event.preventDefault()
    }

    const handleNameInput = (event) => {
        setName(event.target.value)
        console.log(name)
    }

    const handleAgeInput = (event) => {
        setAge(event.target.value)
        console.log(age)
    }

    const handleApplicationTextInput = (event) => {
        setApplicationText(event.target.value)
        console.log(applicationText)
    }

    const handleProfessionsInput = (event) => {
        setProfession(event.target.value)
        console.log(profession)
    }

    const handleCountryInput = (event) => {
        setCountry(event.target.value)
        console.log(country)
    }

    const lista = () => {
        return(
            <p>{trips}</p>
        )
    }

    const goBack = () => {
        navigate("/trips/list")
    }

    const setID = (event) => {
        changeID(event.target.value)
    }

    const dropdownMap = trips.map((trip) => {
        console.log(id)
        return(
            <option key={trip.id} onSelect={setID} value={trip.id}>{trip.name}</option>
        )
    })


    return (
        <div>
            <p>INSCREVER-SE</p>
            <Select>
                <option>ESCOLHA SUA VIAGEM</option>
                {dropdownMap}
            </Select>
            <Form onSubmit={onSubmitForm}>
                <input placeholder="Digite aqui o seu nome" name={'name'} value={name} onChange={handleNameInput}></input>
                <input placeholder="Digite sua idade" name={'age'} value={age} onChange={handleAgeInput}></input>
                <input placeholder="Por que você deve participar desta viagem?" name={'applicationText'} value={applicationText} onChange={handleApplicationTextInput}></input>
                <input placeholder="Digite sua profissão" name={'profession'} value={profession} onChange={handleProfessionsInput}></input>
                <input placeholder="Digite seu país de origem" name={'country'} value={country} onChange={handleCountryInput}></input>
                <div>
                    <button onClick={tripApplication}>Enviar</button>
                    <button onClick={goBack}>Voltar</button>
                </div>
            </Form>

        </div>
    )
}

export default ApplicationFormPage