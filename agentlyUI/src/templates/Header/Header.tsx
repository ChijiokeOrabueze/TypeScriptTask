import React from 'react'
import { useNavigate } from 'react-router-dom';
import SearchBar from './SearchBar';
import { Container, Logo, RightBox } from './style';

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
        <Logo src =  '/assets/icons/logo.svg' alt ="hello" onClick = {() => navigate("/")}/>
        <SearchBar />

        <RightBox>
            <span style={{cursor: "pointer"}} onClick = {() => navigate("/add-property")}>
                Own a property? 
            </span>
            <div>
                <img src="/assets/icons/avatar.svg" alt="avatar"  />
                <img src="/assets/icons/caret-down.svg" alt=""  />
            </div>
            
        </RightBox>

    </Container>
  )
}

export default Header
