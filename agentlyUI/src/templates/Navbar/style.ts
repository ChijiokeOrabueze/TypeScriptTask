import styled from "styled-components";


export const Container = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    // border: 1px solid red;


`

export const Navlinks = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    gap: 32px;

    p{
        cursor: pointer;
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        padding: 8px 0;
    }

`

export const RoundBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    border: 1px solid black;

    span{
        margin-top: -5px;
    }

`

export const FilterBtn = styled.div`
    display: flex;
    align-items: center;
    padding: 16px;
    gap: 8px;
    cursor: pointer;
    width: 90px;
    height: 48px;
    background: #FFFFFF;
    border: 1px solid #E5E5E5;
    border-radius: 8px;

    p{
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: #222222;
    }

`