import React from "react";
import styled from 'styled-components'

export const Page = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    flex-direction: column;

    div {
        display: flex;
        align-self: center;
        flex-direction: column;

        div:nth-child(1) {
            display: flex;
            flex-direction: column;
            margin-bottom: 50px;

            h3 {
                align-self: center;
            }
            h1 {
                align-self: center;
            }
        }

        div:nth-child(2) {
            display: flex;
            flex-direction: row;
        }
    }
`