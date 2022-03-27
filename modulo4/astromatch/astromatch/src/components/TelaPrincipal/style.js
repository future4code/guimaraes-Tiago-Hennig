import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    main {
        display: flex;
        flex-direction: column;
        justify-content: center;
        height: 434px;
        margin-bottom: 15px;
        width: 360px;
        border: solid black 1px;
    }
`

export const Botoes = styled.div`
    display: flex;
    width: 50px;
    height: 50px;
    justify-content: center;

    a > img{
        width: 60px;
        height: 60px; 
        margin-left: 15px;
        margin-right: 15px;
}
`

export const Perfil = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: end;
    
    img {
        max-height: 345px;
        max-width: 360px;
        align-self: center;

    p {
        position: absolute;
        padding-top: 100px;
    }
}
`

export const Description = styled.div`
    display: flex;
    align-items: center;
    height: 35px;
    margin-top: 15px;

        p:nth-child(1) {
            font-weight: 700;
            font-size: xx-large;
            margin-right: 10px;
            margin-left: 25px;
            color: #1F2FEB;
    }

    p:nth-child(2) {
        margin-right: 10px;
    }
`