import React, {useEffect, useState} from "react";
import { DivCenter, Page, Buttons } from "./styles";
import { useNavigate } from "react-router-dom";
import LabeX from "../../img/LabeX_11zon.png"





const HomePage = () => {
    const navigate = useNavigate()
    const [logado, setLogado] = useState(false)

    const token = window.localStorage.getItem("token")
    console.log(token)
    useEffect(() => {
        checkLogin()}, [])

    const goToListPage = () => {
        navigate("/trips/list")
    }

    const goToAdminHomePage = () => {
        if (token === null) {
            navigate('/login')
        } else {
            navigate("/admin/trips/list")
        }
    }

    const checkLogin = () => {
        if (token === null) {
            setLogado(logado)
        } else {
            setLogado(!logado)
        }
    }

    return (
        <Page>
            <DivCenter>
                    <img src={LabeX}></img>
                    <Buttons>
                        <button onClick={goToListPage}>Viagens</button>
                        <button onClick={goToAdminHomePage}>Área Restrita</button>
                    </Buttons>
            </DivCenter>
        </Page>
    )
}

export default HomePage