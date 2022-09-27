import styled from "styled-components";

export const CardContainer = styled.div`

display: flex;
flex-direction: column;
border: 1px solid  #CF0808;
border-radius: 8px;
height: 255px;
width: 46%;
margin-bottom: 8%;
justify-content: space-between;


img {
    width: 92%;
    height: auto;
    align-self: center;
    margin-bottom: 5px;
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
    color: #CF0808;
    font-size: 1.0rem;
    margin-bottom: 0;
    padding-left: 3px;
    padding-right: 3px;
}

p:nth-of-type(3) {
    margin-top: 0;
    text-align: center;
    color: #CF0808;
    font-size: 1.5rem;
    margin-bottom: 0;
}



`