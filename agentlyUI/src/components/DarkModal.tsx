import React from 'react';
import styled from 'styled-components';



const ModalBox = styled.div`
  position: fixed;
  left:0;
  top: 0;
  height: 100%;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(3px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: center;


`
interface DarkModalProps {
  children?: React.ReactNode
  display: string
}

const DarkModal = (props:DarkModalProps) => {
    const {children, display} = props;
  return (
    <ModalBox id = "dark-modal" style = {{display}}>
        {
            children
        }
    </ModalBox>
  )
}



export default DarkModal
