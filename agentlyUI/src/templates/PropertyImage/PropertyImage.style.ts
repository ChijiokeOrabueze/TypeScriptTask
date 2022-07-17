import styled from "styled-components";

export const Container = styled.div`
    width: 476px;
    height: 485px;
    background: #FFFFFF;
    margin: 10px auto 0 auto;
    display: flex;
    flex-direction: column;
    gap: 10px;
    

`

export const Header = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    div {
        display: flex;
        gap: 3px;

        p {
            font-weight: 500;
            font-size: 16px;
            line-height: 13px;
            text-decoration-line: underline;
        }

        img {
            height: 14px;
        }
    }


`

export const Body = styled.div`

    display: flex;
    flex-wrap: wrap;
    gap: 14px;
    overflow-y: scroll;
    overflow-x: hidden;
    

`

export const Dummy = styled.div`
    height: 200px;
    width: 220px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px dashed #B0B0B0;
    // flex: 0.5;

    img{
        height: 32px;
        
    }

`