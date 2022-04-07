import {React, useState} from "react";
import { Page } from "./styles";
import { useNavigate } from "react-router-dom";



const HomePage = () => {
    const navigate = useNavigate()
    const [logado, setLogado] = useState(false)

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