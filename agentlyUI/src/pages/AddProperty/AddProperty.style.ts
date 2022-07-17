import styled from "styled-components";
import { SubmitBtn } from "../../templates/FilterForm/FilterForm.style";


export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100ww;
    overflow-y: hidden;

`

export const ImageContainer = styled.div`
    position: relative;

    img {
        height: 100vh;
    }

    span{
        height: 24px;
        width: 24px;
        position: absolute;
        left: 34px;
        top: 26px;
    }

`

export const RightContainer = styled.div`
    // border: 1px solid red;
    width: 100%;
    display: flex;
    flex-direction: column;

`

export const Box = styled.div`
    padding: 40px 55px 0 55px;
    width: 100%;
    flex: 6;

    .close {
        width: 100%;
        display: flex;
        justify-content: end;

        span {
            cursor: pointer;
        }
    }

    


`

export const Foot = styled.div`
    flex:1;
    width: 100%;
    

    .line {
        width: 100%;
        display: flex;
    }
`

export const FootDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 40px 0 40px;

    span {
        font-weight: 500;
        font-size: 14px;
        line-height: 20px;
        cursor: pointer;
        color: #222222;
    }

`

export const Btn = styled(SubmitBtn)`
    width: 68px;
    height: 52px;

`

export const InnerBox = styled.div`
    width: 100%;
`