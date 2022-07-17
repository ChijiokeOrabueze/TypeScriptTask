import React from 'react'
import Input from '../../components/Input'
import Rooms from '../../components/Rooms'
import { Heading } from '../FilterForm/FilterForm.style'
import { Container, PropertyDetailDiv } from './PropertyDetails.style'

const PropertyDetails = () => {
  return (
    <Container>
        <Heading>Property address</Heading>
        <PropertyDetailDiv>
            <Input 
                name='propertyAddress'
                type='text'
                value=''
                placeholder='Enter an address here'
                handleChange={() => {}}/>
        </PropertyDetailDiv>
        <Heading>Rooms</Heading>
        <PropertyDetailDiv style = {{border: "unset"}}>
            <Rooms />
        </PropertyDetailDiv>
      
    </Container>
  )
}

export default PropertyDetails
