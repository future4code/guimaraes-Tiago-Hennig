import styled from "styled-components";

export const CardContainer = styled.div`

display: flex;
flex-direction: column;
border: 1px solid  #CF0808;
border-radius: 8px;
height: 80vw;
max-height: 266px;
width: 48%;
margin-bottom: 8%;
justify-content: space-between;
padding: 0;



img {
    width: 92%;
    max-height: auto;
    align-self: center;
    margin-bottom: 0;
}

p:first-of-type {
    margin-top: 0;
    text-align: center;
    color: #CF0808;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 0;
}

p:nth-of-type(2) {
    margin-top: 0;
    text-align: center;
    color: black;
    font-size: 1.0rem;
    margin-bottom: 0;
    padding-left: 3px;
    padding-right: 3px;
}

`

export const AddButtonAndPrice = styled.div`

display: flex;
flex-direction: row;
justify-content: space-between;
border-radius: 8px;
padding: 0;
height: 29px;

p {
    margin-top: 0;
    text-align: center;
    color: black;
    font-size: 1.5rem;
    margin-bottom: 0;
    align-self: center;
    margin-left: 8px;
}

button {
    border: none;
    background-color: #CF0808;
    color: #ffffff;
    font-size: 22px;
    border-radius: 8px 0px 8px 0px;
    margin: 0;
    padding: 0;
    width: 37px;
    height: 100%;

}

`