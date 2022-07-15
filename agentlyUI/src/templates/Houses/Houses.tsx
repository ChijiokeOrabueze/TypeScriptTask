import React from 'react';
import properties from "../../data/properties.json";
import House from './House';
import { Container } from './Houses.style';

const Houses = () => {
  return (
    <Container>
        {
            properties.map((p,i) => (
                <House key={p.id}
                        data = {p}/>
            ))
        }
      
    </Container>
  )
}

export default Houses
