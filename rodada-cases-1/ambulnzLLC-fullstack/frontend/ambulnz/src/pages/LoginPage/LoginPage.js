import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToHome, goToSignUpPage, goToSplashScreen } from "../../routes/coordinator";
import { DivPage, PageContainer, ReturnButton, SignUpButton, WelcomeDiv } from "./style";


export const LoginPage = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => setEmail(e.target.value) 
    const handlePassword = (e) => setPassword(e.target.value) 

    const login = async () => {

        try {
            const body = {
                email,
                password
            }
            const res = await axios.post(`${BASE_URL}user/login`, body)
            localStorage.setItem('token', res.data.token)
            goToHome(navigate)

        } catch (error) {
            alert(error.response.data)
        }
    }

    return(

        <PageContainer>
            
            <DivPage>

                <h1> Pizza Planet </h1>

                <WelcomeDiv>

                    <h2> Hello! </h2>
                    <h3> Log in to order your pizza! </h3>

                </WelcomeDiv>

                <label> Email: </label>
                <input value={email} onChange={handleEmail} ></input>

                <label> Password: </label>
                <input value={password} onChange={handlePassword} type="password"></input>

                <button onClick={login}> Login </button>


            </DivPage>

            <SignUpButton onClick={()=> goToSignUpPage(navigate)}> Sign Up </SignUpButton>

            <ReturnButton onClick={()=> goToSplashScreen(navigate)}> Back </ReturnButton>

        </PageContainer>


    )
}