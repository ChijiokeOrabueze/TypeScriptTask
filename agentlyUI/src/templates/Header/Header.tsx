import React from 'react'
import SearchBar from './SearchBar';
import { Container, Logo, RightBox } from './style';
// import Logo from '/../assets/icon/logo.svg';

const Header = () => {
  return (
    <Container>
        <Logo src =  '/assets/icons/logo.svg' alt ="hello" />
        <SearchBar />

        <RightBox>
            <span>
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
