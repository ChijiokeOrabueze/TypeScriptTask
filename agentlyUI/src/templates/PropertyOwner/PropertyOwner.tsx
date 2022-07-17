import React, { useState } from 'react'
import Input from '../../components/Input'
import TextArea from '../../components/TextArea'
import { Heading } from '../FilterForm/FilterForm.style'
import { Container, InputWrapper, PropertyOwnerDiv } from './PropertyOwner.style'

const PropertyOwner = () => {
    const [owner, setOwner] = useState<string>("");
    const [description, setDescription] = useState<string>("");
    const [from, setFrom] = useState<string>("6/12/2022");
    const [to, setTo] = useState<string>("23/1/2023");
  return (
    <Container>
        <Heading>Property owner</Heading>
        <PropertyOwnerDiv style = {{marginBottom: "20px", paddingTop: "15px", paddingBottom: "25px"}}>
            <Input 
                name='propertyOwner'
                type='text'
                value={owner}
                placeholder='IJT Realtor'
                handleChange={(e) => setOwner(e.target.value)}/>
        </PropertyOwnerDiv>
        <Heading>Description</Heading>
        <PropertyOwnerDiv style = {{marginBottom: "20px", paddingBottom: "25px"}}>
            <TextArea 
                name='description'
                value={description}
                placeholder='What do you have in mind?'
                handleChange={(e) => setDescription(e.target.value)}/>
        </PropertyOwnerDiv>
        <Heading>Validation period</Heading>
        <PropertyOwnerDiv style = {{border: "unset", marginBottom: "unset", paddingBottom: "20px"}}>
            <InputWrapper>
                <Input 
                    name='from'
                    type='text'
                    value={from}
                    title='from'
                    handleChange={(e) => setFrom(e.target.value)}
                    inner = {true}/>
                <Input 
                    name='to'
                    type='text'
                    value={to}
                    title='to'
                    handleChange={(e) => setTo(e.target.value)}
                    inner = {true}/>
            </InputWrapper>
        </PropertyOwnerDiv>
    </Container>
  )
}

export default PropertyOwner;
