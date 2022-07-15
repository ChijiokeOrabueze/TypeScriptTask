import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    select{
        height: 40px;
        width: 300px;
        border-radius: 5px;
        padding: 10px;
    }    

`

interface SelectProps {
    title?: string;
    name: string;
    value: string;
    placeholder?: string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: string[];

}

const Select = (props: SelectProps) =>{
    const {name, title, value, handleChange, placeholder, options} = props;
    return(
        <Container className='form-group'>
            <label htmlFor={name}>{title}</label>
            <select
                id={name}
                value={value}
                name = {name}
                onChange={handleChange}
                className= "form-select">


                    {placeholder && <option value="" disabled>{placeholder}</option>}
                    {options.map((value)=>{
                        return(
                            <option key={value} value={value} label={value}>{value}</option>
                        )
                    })}

            </select>
        </Container>
    )
}

export default Select;