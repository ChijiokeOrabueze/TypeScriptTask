import styled from "styled-components";
import { PropertyTypeDiv } from "../PropertyType/PropertyType.stlye";


export const Container = styled.div`
    width: 100%;
    // height: 50px;
    // border: 1px solid red;

`

export const PropertyOwnerDiv = styled(PropertyTypeDiv)`
    width: 100%;
    .form-group, .form-input, .form-textarea {
        width: 100%;
    }

    .form-input {
        padding: 16px 8px;
        height: 55px;
        border: 1px solid #E5E5E5;
        border-radius: 8px;
    }

    .form-textarea {
        height: 124px;
    }

`

export const InputWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    gap: 8px;

`