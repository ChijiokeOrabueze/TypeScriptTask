import React, { useState } from 'react'
import DarkModal from '../../components/DarkModal';
import useModal from '../../hooks/useModal';
import FilterForm from '../../templates/FilterForm';
import Houses from '../../templates/Houses';
import Navbar from '../../templates/Navbar';
import { pagination } from '../../utils/pagination';
import { Container, NavigationBtn, NavigationOptions, NavigationP, TabBox } from './Home.style';
import UnderConstruction from './UnderConstruction';

export enum Screens {
    Home

}

export const navigation = ["House", "Office Space", "Flats and Apartments", "Lands", "Semi Detached Bungalow", "Semi Detached Duplex", "Warehouse", "Mini Flat", "Shop In a Mall"]


const Home = () => {
    const [curScreen, setCurScreen] = useState<Screens>(0);
    const [showModal, setShowModal] = useModal();
    const paginatedPages = pagination(curScreen).map((s,i) => {
      if(typeof s === "string"){
        return (
          <p key={i}>{s}</p>
        )
      }else{
        return(
          <NavigationBtn key={i}
            onClick = {() => setCurScreen(s - 1)}
            style= {{border: curScreen === s -1 ? "1px solid black": "unset"}}>
            {s}
          </NavigationBtn>
        )
      }
    })
  return (
    <Container>
        <Navbar curScreen = {curScreen} setCurScreen = {setCurScreen} setShowModal = {setShowModal}/>
        <div>
          {
            curScreen === 0 ?
            <Houses />
            : 
            <UnderConstruction page={navigation[curScreen]}/>
          }
        </div>
        <TabBox id = "hello"> 
          <div>
            <NavigationP src = "/assets/icons/caret-left.svg" alt = "caret-left" onClick = {()=> curScreen > 0 && setCurScreen(curScreen - 1)}/>
            <NavigationOptions>
              {
               paginatedPages
              }
            </NavigationOptions>
            <NavigationP src = "/assets/icons/caret-right.svg" alt = "caret-right" onClick = {()=> curScreen < 9 && setCurScreen(curScreen + 1)}/>
          </div>
        </TabBox>
        <DarkModal display= {showModal ? "flex": "none"}>
          <FilterForm setShowModal={setShowModal}/>
        </DarkModal>
         
    </Container>
  )
}

export default Home
