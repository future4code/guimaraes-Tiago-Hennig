import React from "react";
import { GlobalStateContext } from "./GlobalStateContext";
import axios from "axios"

export const GlobalState = (props) => {

    const data = {}

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )



}