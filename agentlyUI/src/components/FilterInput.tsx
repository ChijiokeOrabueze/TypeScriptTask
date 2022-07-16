import React, {useState} from 'react';
import styled from 'styled-components';
import { InputProps } from './Input';

const InputHolder = styled.div`
    height: 51px;
    width: 100%;
    position: relative;
    margin-top:15px;
    


    .test{
        position: absolute;
        bottom: 16px;
        left: 10px;
        pointer-events: none;
        color: grey;
        // transform: translateY(0);
        transition: .5s;
    }

    .star{
        transform: translateY(-20px);
        font-size: 11px;
    }

    img{
        
    }
`

const InputElement = styled.input`
    height: 100%;
    width: 100%;
    padding: 10px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-radius: 8px;
    font-size: 16px;
    transition: .5s;
    outline: none;


    &:focus ~ label{
        transform: translateY(-20px);
        font-size: 11px;
    }
`


const TogglePassword = styled.div`
    position: absolute;
    bottom: 10px;
    right: 10px;
    transition: .5s;
    cursor: pointer;
    // border: 1px solid red;

    span{
        position: absolute;
        top:0;
        left:0;
        height: 30px;
        width: 2px;
        background-color: grey;
        transform-origin: top;
        transform: rotate(-45deg);
        pointer-events: none;
    }
`

function Input(props: InputProps) {
    const {title, type, name, value, handleChange} = props;

  return (
    <InputHolder>
        <InputElement type={type}
            name= {name}
            value = {value}
            id = {name}
            onChange = {handleChange}
            
            />
        <label htmlFor={name} className = {value !== "" ? 'star test': 'test'}>{title}</label>     
    </InputHolder>
  );
}

export default Input;
