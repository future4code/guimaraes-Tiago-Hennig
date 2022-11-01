import styled from 'styled-components'; 


export const Div = styled.div`
    overflow-y: scroll;
    height: 500px;
    overflow-x: hidden;
`

export const Name = styled.p`
    color: blue;
    margin-left: 20px;
`

export const Photo = styled.img`
    border-top-left-radius: 50%;
    border-top-right-radius: 50%;
    border-bottom-right-radius: 50%;
    border-bottom-left-radius: 50%;
    height: 60px;
    overflow-x: hidden;
    width: 60px;
    box-sizing: border-box;
`

export const Render = styled.div`
    display: flex;
    position: relative;
    height: 70px;
    padding: 10px;
    padding-bottom: 0;
    display: flex;
    list-style: none;
    width: 100%;
    background-color: #DDE3FA;
    margin-bottom: 10px;

`

export const List = styled.li`
list-style: none;
`