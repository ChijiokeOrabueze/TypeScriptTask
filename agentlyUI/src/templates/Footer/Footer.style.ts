import styled from "styled-components";


export const Container = styled.div`
    width: 100%;
    position: fixed;
    height: 40px;
    bottom: 0;
    left: 0;
    // border: 1px solid red;
    padding: 0 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
        display: flex;
        align-items: center;
        gap: 8px;
    }


`

export const FooterP = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #222222;

`

export const Dot = styled.span`
    height: 4px;
    width: 4px;
    background-color: #222222;
    border-radius: 50%;

`