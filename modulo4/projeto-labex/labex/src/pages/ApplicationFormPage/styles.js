import React from "react";
import styled from "styled-components"

export const Select = styled.select`
height: 40px;
display: flex;
margin-top: 10px;
margin-bottom: 10px;
`

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 350px;


input {
    margin-top: 10px;
    margin-bottom: 10px;
    height: 40px;
}

input:nth-child(3) {
    height: 100px;
    justify-content: start;
}

div {
    display: flex;
    flex-direction: row;

    button {
    margin-top: 10px;
    margin-bottom: 10px;
    margin-right: 10px;
    margin-left: 10px;
    height: 30px;
    width: 165px;
    background-color: lightblue;
    }

}
`