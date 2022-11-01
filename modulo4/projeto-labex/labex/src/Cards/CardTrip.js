import React from "react";
import { Box } from "./style";

export const CardTrip = (props) => {

    return(
        <Box key={props.trip.id}>
            <h2>{props.trip.name}</h2>
            <h4>{props.trip.date}</h4>
            <h3>{props.trip.planet}</h3>
            <p>{props.trip.description}</p>
            <p>Duração: {props.trip.durationInDays} dias</p>
        </Box>
    )
}