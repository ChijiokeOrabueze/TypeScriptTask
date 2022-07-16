import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    position: relative;

    select{
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

interface SelectProps {
    title?: string;
    name: string;
    value: string;
    placeholder?: string;
    handleChange: (e: React.ChangeEvent<HTMLSelectElement>, s?: string) => void;
    options: string[];
    inner?: boolean;

}

const Select = (props: SelectProps) =>{
    const {name, title, value, handleChange, placeholder, options, inner} = props;
    return(
        <Container className='form-group'>
            <label htmlFor={name}>{inner? "" : title}</label>
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
            {
                inner &&
                <p className={value !== "" ? 'star test': 'test'}>{title}</p>
            } 
        </Container>
    )
}

export default Select;