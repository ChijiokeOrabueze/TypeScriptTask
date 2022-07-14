import styled from "styled-components";


export const Container = styled.div`
    height: 88px;
    width: 100vw;
    border-bottom: 1px solid #E5E5E5;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 40px;


`

export const Logo = styled.img`
    cursor: pointer;


`

export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: start;
    padding: 8px 20px;
    gap: 16px;

    width: 334px;
    height: 48px;

    border: 1px solid #E5E5E5;
    border-radius: 38px;

    .form-input, .form-select {
        width: unset;
        // height: unset;
        padding: 0;
        border: none;
        outline: none;
    }

    .form-input {
        border-left: 2px solid #717171;
        background-color: white;
        border-radius: 0;
        height: 30px;
        padding-left: 16px;
        font-weight: 400;
        font-size: 14px;
        line-height: 18px;
        color: #717171;
    }

    .search-icon-box {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background: #222222;
        justify-self: end;
        display: flex;
        align-items: center;
        justify-content: center;
    }

`

export const RightBox = styled.div`
    display: flex;
    align-items: center;
    gap: 16px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18px;
    color: #222222;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 5px; 
    }
`