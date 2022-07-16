import React from 'react';
import { navigation, Screens } from '../../pages/Home/Home';
import { Container, FilterBtn, Navlinks, RoundBtn } from './style';



interface NavbarProps {
  curScreen: Screens | null;
  setCurScreen: React.Dispatch<React.SetStateAction<Screens>>;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}


const Navbar = ({curScreen, setCurScreen, setShowModal}:NavbarProps) => {
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
      <FilterBtn onClick = {() => setShowModal(true)}>
        <img src="/assets/icons/funnel.svg" alt="funnel"  />
        <p>Filter</p>
      </FilterBtn>

      
    </Container>
  )
}

export default Navbar
