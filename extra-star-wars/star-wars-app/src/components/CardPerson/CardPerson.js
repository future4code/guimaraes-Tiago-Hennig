import React, { useState } from "react";
import { CardMain } from "./style";
import axios from "axios";


const CardPerson = (props) => {

    return(
        <CardMain onClick={() => props.getDetails(props.p.homeworld)}>
            <p>{props.p.name}</p>
            <img src={props.src}  width='140px' height='180px'/>


        </CardMain>
    )
}

export default CardPerson