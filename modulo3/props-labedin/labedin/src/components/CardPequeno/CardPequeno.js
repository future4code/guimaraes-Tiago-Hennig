import React from 'react';
import "./CardPequeno.css"


function CardPequeno(props) {
    return (
        <div className="small-card-container">
            <img src={ props.imagem } />
            <p id="titulo"> { props.titulo} </p>
            <p> { props.email } </p>
            <p> { props.endereco } </p>
        </div>
    )
}

export default CardPequeno;