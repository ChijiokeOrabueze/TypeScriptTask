import React, { useState } from 'react'
import Input from '../../components/Input'
import Rooms from '../../components/Rooms'
import { Heading } from '../FilterForm/FilterForm.style'
import { Container, PropertyDetailDiv } from './PropertyDetails.style'

const PropertyDetails = () => {
  const [address, setAddress] = useState<string>("");
  return (
    <Container>
        <Heading>Property address</Heading>
        <PropertyDetailDiv style = {{position: "relative"}}>
            <Input 
                name='propertyAddress'
                type='text'
                value={address}
                placeholder='Enter an address here'
                handleChange={(e) => setAddress(e.target.value)}/>
            <img className='location' src="/assets/icons/location.svg" alt="location" />
        </PropertyDetailDiv>
        <Heading>Rooms</Heading>
        <PropertyDetailDiv style = {{border: "unset"}}>
            <Rooms />
        </PropertyDetailDiv>
      
    </Container>
  )
}

export default PropertyDetails
