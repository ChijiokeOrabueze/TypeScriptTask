import React, { useState } from 'react'
import Navbar from '../../templates/Navbar';
import { Container } from './Home.style';

export enum Screens {
    Home

}


const Home = () => {
    const [curScreen, setCurScreen] = useState<Screens>(0);
  return (
    <Container>
        <Navbar curScreen = {curScreen} setCurScreen = {setCurScreen}/>
      
    </Container>
  )
}

export default Home
