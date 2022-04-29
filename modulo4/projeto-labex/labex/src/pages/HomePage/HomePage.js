import React, {useContext, useEffect, useState} from "react";
import { Page } from "./styles";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../global/GlobalStateContext";




const HomePage = () => {
    const navigate = useNavigate()
    const [logado, setLogado] = useState(false)
    const {token} = useContext(GlobalStateContext)


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