import {React, useEffect, useState} from "react";
import { Page } from "./styles";
import { useNavigate } from "react-router-dom";




const HomePage = () => {
    const navigate = useNavigate()
    const [logado, setLogado] = useState(false)


    useEffect(() => {
        checkLogin()}, Boolean)


    const login = () => {
        setLogado(!logado)
    }

    const goToListPage = () => {
        navigate("/trips/list")
    }

    const goToAdminHomePage = () => {
        if (logado) {
            navigate("/admin/trips/list")
        } else {
            navigate("/login")
        }
    }

    const checkLogin = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/tiago-hennig-turmaguimaraes/login"
        const token = window.localStorage.getItem('token')
        if (token === null) {
            setLogado(logado)
        } else {
            setLogado(!logado)
        }
    }

    return (
        <Page>
            <div>
                <div>
                    <h1>LabeX</h1>
                    <h3>Suas viagens espaciais</h3>
                </div>
                <div>
                    <button onClick={goToListPage}>viagens</button>
                    <button onClick={goToAdminHomePage}>área restrita</button>
                </div>
            </div>
        </Page>
    )
}

export default HomePage