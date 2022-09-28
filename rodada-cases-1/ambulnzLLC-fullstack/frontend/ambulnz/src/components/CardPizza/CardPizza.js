import React from "react";
import { AddButtonAndPrice, CardContainer } from "./style";


export const CardPizza = (props) => {
    let price = props.pizza.price.toString()
    console.log(price.length)

    if (price.length == 1) {
        price = price + ".00"
    }

    if (price.length == 3) {
        price = price + "0"
    }
    
    return(

        <CardContainer>

            <img src={`${props.pizza.img_url}`} /> 
            <p> {props.pizza.name}</p>
            <p> {props.pizza.ingredients} </p>

            <AddButtonAndPrice>

                <p> {`$${price}`} </p>
                <button>+</button>

            </AddButtonAndPrice>

            

        </CardContainer>


    )
}