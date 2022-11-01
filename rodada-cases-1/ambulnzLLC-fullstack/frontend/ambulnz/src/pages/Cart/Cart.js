import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToHome, goToLoginPage } from "../../routes/coordinator";
import { Buttons, CartCard, DivPage, PageContainer, Subtitle } from "./style";


export const Cart = () => {

    useProtectedPage()
    const navigate = useNavigate()

    const { cart, setCart } = useContext(GlobalStateContext)


    const logout = () => {
        localStorage.removeItem('token')
        setCart([])
        goToLoginPage(navigate)
    }

    return(
        <PageContainer>

            <DivPage>
                <h1> Pizza Planet </h1>

                <Buttons>

                    <button onClick={()=> goToHome(navigate)}> Pizzas </button>

                    <button onClick={()=> logout(navigate)}> Logout </button>

                </Buttons>

                <Subtitle>

                    <h2> Cart </h2>

                </Subtitle>

                <div>

                    {cart?.map((pizza) => {
                        return(
                            <CartCard key={pizza.name}>
                                <p>{pizza.amount}x </p>
                                <p> {pizza.name}</p>
                            </CartCard>
                        )
                    })}

                            {/* <CartCard >
                                <p>3x</p>
                                <p> Marguerita</p>
                            </CartCard>
                            <CartCard >
                                <p>3x</p>
                                <p> Marguerita</p>
                            </CartCard> */}
                </div>

            </DivPage>

        </PageContainer>
    )

}