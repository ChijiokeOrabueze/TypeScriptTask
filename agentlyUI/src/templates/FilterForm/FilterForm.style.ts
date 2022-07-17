import styled from "styled-components";
import { PriceBtn } from "../../pages/Property/Property.style";


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    // padding: 16px 0px 0px;
    // gap: 24px;

    position: relative;
    width: 557px;
    height: 600px;

    background: #FFFFFF;
    border-radius: 8px;

    .form-group{
        width: 100%;
    }
    .form-input, .form-select{
        width: 100%;
        height: 55px;
        outline: none;
        border: 1px solid #E5E5E5;
        border-radius: 8px;
        font-size: 15px;
        padding-top: 25px;
    }

`

export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50%;
    align-self: start;
    height: 50px;
    padding-left: 20px;
    // border: 1px solid red;

    .filters {
        justify-self: right;
        // align-self: start;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        color: #222222;
    }

`

export const Form = styled.form`
    border-top: 1px solid #E5E5E5;
    width: 100%;
    padding: 24px 16px 40px 16px;
    display: flex;
    flex-direction: column;
    gap: 14px;


    .rooms-container{
        .rooms{
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            padding 20px 0;
            border-bottom:1px solid #E5E5E5;
            .form-group{
                width: 257px;
            }
        }
    }

`

export const Heading = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 26px;
    color: #222222;

`

export const PriceContainer = styled.div`
    display: flex;
    padding: 20px 0;
    border-bottom:1px solid #E5E5E5;
    gap: 16px;

`

export const Footer = styled.div`
    width: 100%;
    height: 80px;
    border-top:1px solid #E5E5E5;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 16px;
    // margin-top: 

    span {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        text-decoration: underline;
    }


`

export const SubmitBtn = styled(PriceBtn)`
    width: 122px;
    height: 52px;

`