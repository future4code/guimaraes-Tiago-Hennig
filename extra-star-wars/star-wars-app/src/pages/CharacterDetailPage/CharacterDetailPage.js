import React from "react";
import { useNavigate } from "react-router-dom";
import { goToHome } from "../../Routes/coordinator";


const CharacterDetailPage = () => {
    const navigate = useNavigate()

    return(
        <div>
            Character Detail Page
            <button onClick={() => goToHome(navigate)}>Ir para Home</button>
        </div>
    )
}

export default CharacterDetailPage