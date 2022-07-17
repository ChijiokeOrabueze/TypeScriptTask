import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    gap: 90px;
    padding: 0 30px;
    height: 500px;
    width: 100%;
    margin-top: 10px
    // background-color: red;

`

export const LeftContainer = styled.div`
`

export const RightContainer = styled.div`
    width: 100%;
`

export const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-bottom:13px;

`

export const Header = styled.h1`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 26px;
    line-height: 30px;
    color: #222222;

`
export const HeaderP = styled.p`
    // border-bottom: 1px solid black;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    text-decoration-line: underline;

    color: #222222;


`

export const ImageContainer = styled.div`
    height: 400px;
    width: 400px;
    border-radius: 8px;
    position: relative;

    img {
        border-radius: 8px;
        height: 400px;
        width: 400px;
    }

`

export const Arrow = styled.div`
    position: absolute;
    right: 24px;
    top: 50%;
    background-color: white;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        height: 10px;
        width: 10px;
    }
`

export const Radios = styled.div`
    
    position: absolute;
    bottom: 24px;
    left: 45%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;

    span {
        background-color: white;
        height: 6px;
        width: 6px;
        border-radius: 50%;
    }
`

export const PrropertyNav = styled.div `
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 32px;
    align-items: center;
    margin-bottom: 40px;

    p{
        padding-bottom: 4px;
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        cursor: pointer;
    }

`

export const RightHeader = styled(Header) `
    font-size: 22px;

    span{
        text-decoration: underline;
        margin-left: 29px;
    }
`

export const InfoContainer = styled.div`
    border-top: 1px solid #E5E5E5;
    border-bottom: 1px solid #E5E5E5;
    height: 140px;
    display: flex;
    align-items: center;
    gap: 40px;
    flex-wrap: wrap;
    padding: 25px 0;
    padding-right: 20px;
    margin: 15px 0;

    p{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 20px;
        color: #222222;
        display: flex;
        gap: 3px;
    }

    div{
        display: flex;
        gap: 8px;
    }


`

export const DescContainer = styled.div`
    width: 100%;
    height: 96px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #212121;

`

export const ShowMore = styled.div`

    div {
        display: flex;
        align-items: center;
        cursor: pointer;


        span{
            font-size: 20px;
        }
    }

    .show-more{
        font-family: 'Inter';
        font-style: normal;
        font-weight: 500;
        font-size: 16px;
        line-height: 13px;
        text-decoration-line: underline;
        color: #000000;
    }

`

export const CtaBox = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    margin-top: 10px;

`

export const PriceBtn = styled.button`

    padding: 14px;
    width: 320px;
    height: 48px;
    background: #222222;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.25);
    border-radius: 8px;
    color: white;



`

export const Btn = styled.div`
    width: 48px;
    height: 48px;

    background: #FFFFFF;
    border: 1px solid #222222;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;


`