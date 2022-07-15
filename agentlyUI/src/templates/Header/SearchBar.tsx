import React, { useState } from 'react'
import Input from '../../components/Input'
import Select from '../../components/Select'
import { SearchBarContainer } from './style'



const SearchBar = () => {
    const [searchOption, setSearchOption] = useState<string>("Rent");
    const [userLocation, setUserLocation] = useState<string>("");
  return (
    <SearchBarContainer>
        <Select 
            name='searchOptions'
            value={searchOption}
            options={["Rent", "Buy", "hire"]}
            handleChange = {(e) => setSearchOption(e.target.value)}/>
      
        <div style = {{display: "flex", alignItems: "center"}}>
            <Input 
                name='search'
                type='text'
                value={userLocation}
                placeholder='Where do you want to live?'
                handleChange={(e) => setUserLocation(e.target.value)}/>

            <div className='search-icon-box'>
                <img src="/assets/icons/search.svg" alt="search" />
            </div>

        </div>
    </SearchBarContainer>
  )
}

export default SearchBar
