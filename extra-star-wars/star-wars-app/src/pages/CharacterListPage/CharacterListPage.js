import React from "react";
import { useNavigate } from "react-router-dom";
import { goToCharacterDetails } from "../../Routes/coordinator";



const CharacterListPage = () => {
    const navigate = useNavigate()



    return (
        <div>
            Character List Page
            <button onClick={() => goToCharacterDetails(navigate)}>Ir para detalhes</button>
        </div>
    )
}

export default CharacterListPage