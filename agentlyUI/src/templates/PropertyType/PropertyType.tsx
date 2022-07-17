import React from 'react'
import { Container, ContentP, ListDiv, MovingP, PropertyTypeDiv, TypeDiv } from './PropertyType.stlye';
import propertyTypeData from "../../data/propertyType.json";
import propertyListingData from "../../data/propertyListing.json";
import { Heading } from '../FilterForm/FilterForm.style';




const PropertyType = () => {
  return (
    <Container>
      <Heading>What type of property?</Heading>
      <PropertyTypeDiv>
        {
          propertyTypeData.map((p) => (
            <TypeDiv key={p.id} style = {{border: p.id === 0 ? "1px solid #222222" :"1px solid #E5E5E5"}}>
              <MovingP>{p.name}</MovingP>
              <img src= {`/assets/icons/${p.image}.svg`} alt={p.image} />
            </TypeDiv>
          ))
        }
      </PropertyTypeDiv>
      <Heading>List property as?</Heading>
      <PropertyTypeDiv style = {{border: "unset"}}>
        {
          propertyListingData.map((l)=> (
            <ListDiv key={l.id} style = {{border: l.id === 0 ? "1px solid #222222" :"1px solid #E5E5E5"}}>
              <MovingP>{l.title}</MovingP>
              <ContentP>{l.content}</ContentP>
            </ListDiv>

          ))
        }
      </PropertyTypeDiv>
    </Container>
  )
}

export default PropertyType
