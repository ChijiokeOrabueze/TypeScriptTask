import React from 'react'
import { Container, Dot, FooterP } from './Footer.style'

const Footer = () => {
  return (
    <Container>
        <div>
            <FooterP>© 2022 Agently, Inc.</FooterP>
            <Dot />
            <FooterP>Privacy</FooterP>
            <Dot />
            <FooterP>Terms</FooterP>
            <Dot />
            <FooterP>Sitemap</FooterP>
            <Dot />
            <FooterP>Destinations</FooterP>    
        </div>
        <div style={{gap: "10px"}}>
            <img src="/assets/icons/globe.svg" alt=""/>
            <FooterP>English(US)</FooterP>
        </div>
    </Container>
  )
}

export default Footer
