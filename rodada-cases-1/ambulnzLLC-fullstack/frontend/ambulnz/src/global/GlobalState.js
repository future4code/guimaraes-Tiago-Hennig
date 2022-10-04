import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL";


export const GlobalState = (props) => {

    const [pizzas, setPizzas] = useState([])
    const [cart, setCart] = useState([])
    const [openModalPizza, setOpenModalPizza] = useState(false)
    const [pizzaOfTheModal, setPizzaOfTheModal] = useState()
    const [quantityFromModal, setQuantityFromModal] = useState(0)
    const [openModalCart, setOpenModalCart] = useState(false)

    useEffect(()=>{
        getPizzas()
    },[])



    const getPizzas = async () => {
        try {
            const res = await axios.get(`${BASE_URL}pizza/all`)
            setPizzas(res.data)
        } catch (error) {
        }
        
    }




    const addCart=(product,quantity)=>{
        product.quantity = quantity
        setCart([...cart,product])
    }

    console.log(cart)



    const data = { pizzas, openModalPizza, setOpenModalPizza, pizzaOfTheModal, setPizzaOfTheModal,
                quantityFromModal, setQuantityFromModal, addCart, openModalCart, setOpenModalCart }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )



}