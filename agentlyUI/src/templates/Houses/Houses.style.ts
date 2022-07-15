import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    margin-top: 8px;
    gap: 20px;
    flex-wrap: wrap;
    justify-content: start;
    // border: 1px solid red;

    .house-group {
        display: flex;
        flex-direction: column;
        gap: 16px;
        // border: 1px solid red;
    }

`

export const ImgContainer = styled.div`
    position: relative;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.37) 100%);
    height: 230px;
    width: 220px;
    border-radius: 8px;
    // overflow: hidden;

    .logo-light{
        position: absolute;
        top: 16px;
        right: 16px;
        // z-index: 5;
    }
`

export const HouseImage = styled.img`
    height: 230px;
    width: 220px;
    object-fit: cover;
    border-radius: 8px;

`

export const HouseDescription = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px;
    width: 100%;

    .info{
        display: flex;
        gap: 8px;
    }

`

export const PropertyLocation = styled.div`
    width: 100%;

    .location {
        width: 100%;
        display: flex;
        justify-content: space-between;
    }

    .status {
        padding: 4px;
        border-radius: 4px;
        font-weight: 500;
        font-size: 10px;
        line-height: 10px;
        text-align: center;
        text-transform: uppercase;
        color: #FFFFFF;
    }

`

export const PropertyP = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 800;
    font-size: 15px;
    line-height: 19px;
    color: #222222;

`

export const PropertyInfo = styled.div`
    display: flex;
    padding: 4px;
    gap: 11px;
    background: #F5F5F5;
    border-radius: 4px;

    span {
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 10px;
        line-height: 14px;
        color: #222222;
    }
`