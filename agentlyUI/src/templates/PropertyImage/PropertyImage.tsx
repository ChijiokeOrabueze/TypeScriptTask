import React from 'react'
import { Heading } from '../FilterForm/FilterForm.style'
import { Body, Container, Dummy, Header } from './PropertyImage.style'

const PropertyImage = () => {
  return (
    <Container>
        <Header>
            <Heading>Add at least 5 photos</Heading>
            <div>
                <p>Upload</p>
                <img src="/assets/icons/upload.svg" alt=""/>
            </div>
        </Header>

        <Body>
            <img src="/assets/images/frame.png" alt=""  className='frame'/>
            {
                [1,2,3,4].map((n,i) => (
                    <Dummy key={i}>
                        <img src="/assets/icons/image.svg" alt=""/>
                    </Dummy>
                ))
            }

        </Body>
    </Container>
  )
}

export default PropertyImage
