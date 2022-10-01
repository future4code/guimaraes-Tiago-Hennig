import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardPizza } from "../../components/CardPizza/CardPizza";
import { GlobalStateContext } from "../../global/GlobalStateContext";
import { useProtectedPage } from "../../hooks/useProtectedPage";
import { goToLoginPage } from "../../routes/coordinator";
import { BoxStyle, Buttons, CartFooter, ContainerHowManyAndAddButton, DivPage, HowManyPizzas, PageContainer, Pizzas, Select, Subtitle } from "./style";
import CartBag from "../../images/cartBag.png"
import Modal from "@mui/material/Modal"
import { Box } from "@mui/material"
import MenuItem from '@mui/material/MenuItem'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 300,
    height: 170,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};



export const HomeScreen = () => {

    useProtectedPage()
    const navigate = useNavigate()

    const { pizzas, openModalPizza, setOpenModalPizza, pizzaOfTheModal, setPizzaOfTheModal,
        quantityFromModal, setQuantityFromModal, addCart } = useContext(GlobalStateContext)

    const logout = () => {
        localStorage.removeItem('token')
        goToLoginPage(navigate)
    }

	const handleOpenModalPizza = () => setOpenModalPizza(true)
	const handleCloseModalPizza = () => {setOpenModalPizza(false);setQuantityFromModal(0)}
    const handleQuantityChange = (event) => {setQuantityFromModal(event.target.value)}
    const handleIncreaseQuantity = () => setQuantityFromModal(quantityFromModal + 1)
    const handleDecreaseQuantity = () => {
        if (quantityFromModal > 0) {
            setQuantityFromModal(quantityFromModal - 1)
        } else {
            setQuantityFromModal(quantityFromModal)
        }
    }
        

    return (

        <PageContainer>

            <Modal open={openModalPizza} onClose={handleCloseModalPizza}>
                
                <Box sx={BoxStyle}>
                    <h1>{pizzaOfTheModal?.name}? Good choice!</h1>
                    <h2>How many?</h2>

                    <ContainerHowManyAndAddButton>

                        <HowManyPizzas>
                            <button onClick={handleDecreaseQuantity}>-</button>
                            <p value={quantityFromModal}> {quantityFromModal} </p>
                            <button onClick={handleIncreaseQuantity}>+</button>
                        </HowManyPizzas>

                        <button onClick={()=> addCart(pizzaOfTheModal, quantityFromModal)}> Add to cart</button>

                    </ContainerHowManyAndAddButton>
                </Box>

            </Modal>

            <DivPage>

                <h1> Pizza Planet </h1>

                <Buttons>

                    <button> My Orders </button>

                    <button onClick={()=> logout(navigate)}> Logoff </button>

                </Buttons>

                <Subtitle>

                    <h2> Pizzas </h2>
                    <p> choose your delicious pizzas </p>
                </Subtitle>

                <Pizzas>

                    {pizzas.map((pizza) => {
                        return(
                            
                            <CardPizza pizza={pizza} key={pizza.name} 
                            handleOpen={handleOpenModalPizza} setPizzaOfTheModal={setPizzaOfTheModal}
                            handleQuantityChange={handleQuantityChange}  />
                        )
                    })}


                </Pizzas>

                <CartFooter>
                    
                    <button> <p> $21.50 </p> Cart <img src={CartBag}></img> </button>

                </CartFooter>

            </DivPage>

        </PageContainer>

    )





}