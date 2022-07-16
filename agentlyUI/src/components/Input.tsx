import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    position: relative;

    input{
        height: 40px;
        width: 300px;
        border-radius: 5px;
        padding: 10px;
        
    }

    .test{
        position: absolute;
        bottom: 16px;
        left: 10px;
        pointer-events: none;
        color: grey;
        transition: .5s;
    }

    .star{
        transform: translateY(-20px);
        font-size: 12px;
    }
`

export interface InputProps {
    title?: string;
    name: string;
    type: string;
    value: string;
    placeholder?: string;
    handleChange: (e: React.ChangeEvent<HTMLInputElement>, s?:string) => void;
    max?: number;
    inner?: boolean;
}

const Input = (props: InputProps) =>{
    const {title, name, type, value, placeholder, handleChange,max, inner}= props;
    return(
        <Container className='form-group'>
            <label htmlFor={name}>{inner? "" : title}</label>
            <input
                className='form-input'
                type={type}
                id={name}
                value={value}
                placeholder={placeholder}
                name={name}
                onChange={handleChange}
                min = {type === "number"? 0 : undefined}
                max = {max}
                accept = {type === "file"? "image/png, image/jpeg, image/jpg": undefined}
                     />
            {
                inner &&
                <p className={value !== "" ? 'star test': 'test'}>{title}</p>
            }   
        </Container>
    )
}

export default Input;