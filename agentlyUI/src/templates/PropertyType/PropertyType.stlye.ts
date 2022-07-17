import styled from "styled-components";
import { Heading } from "../FilterForm/FilterForm.style";


export const Container = styled.div`
    

`

export const PropertyTypeDiv = styled.div`
    display: flex;
    gap: 16px;
    flex-wrap: wrap;
    padding: 16px 0 34px 0;
    margin-bottom: 34px;
    border-bottom: 1px solid gray;

`

export const TypeDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    width: 215px;
    height: 66px;
    border-radius: 8px;


`

export const MovingP = styled(Heading)`
    font-size: 18px;
    line-height: 24px;
`

export const ListDiv = styled(TypeDiv)`
    width: 215px;
    height: 108px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;

`

export const ContentP = styled(Heading)`
    font-weight: 400;
    font-size: 14px;
    line-height: 20px;
    color: #717171;
`