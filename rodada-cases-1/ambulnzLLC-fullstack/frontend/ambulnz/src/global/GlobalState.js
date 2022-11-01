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
    const [cartTotal, setCartTotal] = useState()

    useEffect(()=>{
        getPizzas()
    },[])

    useEffect(()=>{
        cartTotalHandler()
    },[cart])


    const getPizzas = async () => {
        try {
            const res = await axios.get(`${BASE_URL}pizza/all`)
            setPizzas(res.data)
        } catch (error) {
            alert(error.message)
        }
    }


    // const addCart=(product,quantity)=>{
    //     if (quantityFromModal > 0) {
    //         product.quantity = quantity
    //         setCart([...cart,product])
    //         setQuantityFromModal(0)
    //     }
    // }

    const addCart = (newItem, quantity) => {
        const index = cart.findIndex((i) => i.name === newItem.name)

        const newCart = [...cart]

        if (index === -1) {
            const cartItem = { ...newItem, amount: quantity }
            newCart.push(cartItem)
        } else {
            newCart[index].amount += quantity
        }
        
        setCart(newCart)

    }

    const cartTotalHandler = () => {

        let total = 0

        for (let item of cart) {
            total =+ total + item.price * item.amount

        }

        setCartTotal(total)

    }

    

//     const newCart = [...cart]

//         if (index === -1) {
//       // produto não está no carrinho
//       const cartItem = { ...newItem, amount: 1 } // para fazer lógica da quantidade de cada produto no carrinho
//       newCart.push(cartItem)
//     } else {
//       // já está no carrinho e retorna a posição
//       newCart[index].amount += 1
//     }

//     setCart(newCart)
//   }

    console.log(cartTotal)

    const data = { pizzas, openModalPizza, setOpenModalPizza, pizzaOfTheModal, setPizzaOfTheModal,
                quantityFromModal, setQuantityFromModal, addCart, openModalCart, setOpenModalCart, cart, setCart, cartTotal }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )



}