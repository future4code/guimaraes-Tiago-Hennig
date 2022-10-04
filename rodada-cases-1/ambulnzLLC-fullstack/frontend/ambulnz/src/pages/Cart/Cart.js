import React from "react";
import { useNavigate } from "react-router-dom";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToLoginPage } from "../../routes/coordinator";
import { Buttons, DivPage, PageContainer, Subtitle } from "./style";


export const Cart = () => {

    useProtectedPage()
    const navigate = useNavigate()

    const logout = () => {
        localStorage.removeItem('token')
        goToLoginPage(navigate)
    }

    return(
        <PageContainer>

            <DivPage>
                <h1> Pizza Planet </h1>

                <Buttons>

                    <button> My Orders </button>

                    <button onClick={()=> logout(navigate)}> Logout </button>

                </Buttons>

                <Subtitle>

                    <h2> Cart </h2>

                </Subtitle>

            </DivPage>

        </PageContainer>
    )

}