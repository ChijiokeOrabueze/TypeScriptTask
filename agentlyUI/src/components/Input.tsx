import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    input{
        height: 40px;
        width: 300px;
        border-radius: 5px;
        padding: 10px;
        
    }
`

interface InputProps {
    title?: string;
    name: string;
    type: string;
    value: string;
    placeholder?: string;
    handleChange: () => void;
    max?: number;
}

const Input = (props: InputProps) =>{
    const {title, name, type, value, placeholder, handleChange,max} = props;
    return(
        <Container className='form-group'>
            <label htmlFor={name}>{title}</label>
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
                
        </Container>
    )
}

export default Input;