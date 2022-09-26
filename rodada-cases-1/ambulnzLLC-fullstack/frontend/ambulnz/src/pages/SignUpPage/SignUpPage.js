import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constants/BASE_URL";
import { goToHome, goToSplashScreen } from "../../routes/coordinator";
import { DivPage, PageContainer, ReturnButton, WelcomeDiv } from "./style";


export const SignUpPage = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleEmail = (e) => setEmail(e.target.value) 
    const handlePassword = (e) => setPassword(e.target.value)
    const handleName = (e) => setName(e.target.value) 

    const signup = async () => {
        try {
            const body = {
                name,
                email,
                password
            }
            const res = await axios.post(`${BASE_URL}user/create`, body)
            console.log(res.data.token)
            localStorage.setItem('token', res.data.token)
            goToHome(navigate)
            
        } catch (error) {
            console.log(error.response.data)
            alert(error.response.data)
        }
    }

    return(

        <PageContainer>
            
            <DivPage>

                <h1> Pizza Planet </h1>

                <WelcomeDiv>

                    <h2> Hello! </h2>
                    <h3> Welcome to Pizza Planet! </h3>
                    <h3> Register here 👇</h3>

                </WelcomeDiv>

                <label> Name: </label>
                <input value={name} onChange={handleName} placeholder="My name"></input>

                <label> Email: </label>
                <input value={email} onChange={handleEmail} placeholder="My email"></input>

                <label> Password: </label>
                <input value={password} onChange={handlePassword} placeholder="Create a password" type="password" ></input>

                <button onClick={signup}> Register </button>

            </DivPage>

            <ReturnButton onClick={()=> goToSplashScreen(navigate)}> Back </ReturnButton>
            
        </PageContainer>


    )
}