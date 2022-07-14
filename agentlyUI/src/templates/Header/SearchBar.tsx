import React from 'react'
import Input from '../../components/Input'
import Select from '../../components/Select'
import { SearchBarContainer } from './style'

const SearchBar = () => {
  return (
    <SearchBarContainer>
        <Select 
            name='searchOptions'
            value='hello'
            options={["Rent", "Buy", "hire"]}
            handleChange = {()=> {}}/>
      
        <div style = {{display: "flex", alignItems: "center"}}>
            <Input 
                name='search'
                type='text'
                value=""
                placeholder='Where do you want to live?'
                handleChange={() => {}}/>

            <div className='search-icon-box'>
                <img src="/assets/icons/search.svg" alt="search" />
            </div>

        </div>
        
        
    </SearchBarContainer>
  )
}

export default SearchBar
