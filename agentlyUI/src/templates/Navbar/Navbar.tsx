import React from 'react';
import { Screens } from '../../pages/Home/Home';
import { Container, FilterBtn, Navlinks, RoundBtn } from './style';



interface NavbarProps {
  curScreen: Screens | null;
  setCurScreen: React.Dispatch<React.SetStateAction<Screens>>;
}


const Navbar = ({curScreen, setCurScreen}:NavbarProps) => {
  const navigation = ["House", "Office Space", "Flats and Apartments", "Lands", "Semi Detached Bungalow", "Semi Detached Duplex", "Warehouse", "Mini Flat", "Shop In a Mall"]
  return (
    <Container>
      <Navlinks>
        {
          navigation.map((item, i) => (
            <p style={{
                borderBottom: curScreen === i ? "2px solid #222222": "unset",
                color: curScreen === i ? "#222222": "#717171"}}
              onClick = {() => setCurScreen(i)}
              key= {i}>
              {item}
            </p>
          ))
        }
      </Navlinks>
      <RoundBtn>
        <span>{">"}</span>
      </RoundBtn>
      <FilterBtn>
        <img src="/assets/icons/funnel.svg" alt="funnel"  />
        <p>Filter</p>
      </FilterBtn>

      
    </Container>
  )
}

export default Navbar
