import React, { useEffect, useState } from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios"
import { BASE_URL } from "../constants/BASE_URL";


export const GlobalState = (props) => {

    const [pizzas, setPizzas] = useState([])

    useEffect(()=>{
        getPizzas()
    },[])



    const getPizzas = async () => {
        try {
            const res = await axios.get(`${BASE_URL}pizza/all`)
            setPizzas(res.data)
            console.log(res.data)
        } catch (error) {
            console.log(error.request.message)
        }
        
    }





    const data = {pizzas}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )



}