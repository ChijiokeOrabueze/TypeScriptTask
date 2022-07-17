import styled from "styled-components";
import { PropertyTypeDiv } from "../PropertyType/PropertyType.stlye";


export const Container = styled.div`
    img.location {
        position: absolute;
        right: 10px;
        top: 32%;
    }

`

export const PropertyDetailDiv = styled(PropertyTypeDiv)`
    width: 100%;
    .form-input {
        padding: 16px 8px;
        width: 685px;
        height: 55px;
        border: 1px solid #E5E5E5;
        border-radius: 8px;
    }

    .rooms {
        display: flex;
        flex-wrap: wrap;
        width: 677px;
        gap: 10px;


        .form-group{
            width: 333px;
        }

        .form-select {
            padding: 16px 8px;
            width: 100%;
            height: 55px;
            border: 1px solid #E5E5E5;
            border-radius: 8px;
        }


`