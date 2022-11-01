import React from "react";
import styled from 'styled-components'

const Assunto = styled.div`
    display: flex;
`

const Usuario = styled.p`
    display: flex;
    font-weight: bold;
`

const Conteudo = styled.p`
    display: flex;
    margin-left: 4px;
`

export default function Mensagem(props) {
    return(
        <Assunto>
            <Usuario> {props.usuario} : </Usuario>
            <Conteudo> {props.mensagem} </Conteudo>
        </Assunto>
    )
}
