import React from "react";
import { useNavigate } from "react-router-dom";
import { goToLoginPage, goToSignUpPage } from "../../routes/coordinator";
import { LoginButton, PageContainer, PageDiv, SignUpButton } from "./style";

export const SplashScreen = () => {

    const navigate = useNavigate()

    return(

        <PageContainer>

            <PageDiv>

            <h1>Pizza Planet</h1>


            <LoginButton>

                <button onClick={()=> goToLoginPage(navigate)}> Login </button>

            </LoginButton>

            <SignUpButton onClick={()=> goToSignUpPage(navigate)}> Sign up </SignUpButton>


            </PageDiv>

            

        </PageContainer>
    )



}