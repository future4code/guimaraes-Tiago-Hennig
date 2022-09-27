import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CardPizza } from "../../components/CardPizza/CardPizza";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { Buttons, DivPage, PageContainer, Pizzas, Subtitle } from "./style";

export const HomeScreen = () => {

    useProtectedPage()
    const navigate = useNavigate()

    const {pizzas} = useContext(GlobalStateContext)

    return (

        <PageContainer>

            <DivPage>

                <h1> Pizza Planet </h1>

                <Buttons>

                    <button> My Orders </button>

                    <button> Logoff </button>

                </Buttons>

                <Subtitle>

                    <h2> Pizzas </h2>
                    <p> choose your delicious pizzas </p>
                </Subtitle>

                <Pizzas>

                    {pizzas.map((pizza) => {
                        console.log(pizza.img_url)
                        return(
                            
                            <CardPizza pizza={pizza} key={pizza.name} />
                        )
                    })}


                </Pizzas>

            </DivPage>

        </PageContainer>

    )





}