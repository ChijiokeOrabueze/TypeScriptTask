import styled from "styled-components";


export const Container = styled.div`
    height: 574px;
    width: 100vw;
    padding: 0 30px;
    position: relative;
    // overflow-x: hidden;
`

export const TabBox = styled.div`
    width: 100%;
    height: 88px;
    position: sticky;
    left: 0;
    bottom:0;
    background-color: white;
    display: flex;
    align-items: baseline;
    justify-content: center;

    div {
        display: flex;
        margin-top: 5px;
        align-items: center;
        gap: 30px;

    }
`

export const NavigationP = styled.img`

    font-size: 20px;
    cursor: pointer;
`

export const NavigationOptions = styled.div`
    display: flex;


`

export const NavigationBtn = styled.p`
    cursor: pointer;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 18px;
    color: #222222;
    text-align: center;
    padding: 5px 0 0 0;



`