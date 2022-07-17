import React, { useState } from 'react'
import styled from 'styled-components';
import Select from './Select'

// const Wrapper = styled.div`
//     display: flex;
//     flex-wrap: wrap;
//     width: 677px;
//     gap: 10px;
//     padding 20px 0;
//     // border-bottom:1px solid #E5E5E5;
//     .form-group{
//         width: 257px;
//     }


// `

type filterDataType = {
    bathroom: string,
    bedroom: string,
    seatingRoom: string,
    toilet: string,
    kitchen: string,
}

type p = "bathroom" | "bedroom" | "seatingRoom" | "toilet" |"kitchen";

const Rooms = () => {
    const [filterData, setFilterData] = useState<filterDataType>({
        bathroom: "0",
        bedroom: "0",
        seatingRoom: "0",
        toilet: "0",
        kitchen: "0",
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>, s:p) => {
        const d = {...filterData};
        d[s] = e.target.value;
        setFilterData(d);
    }
  return (
    <div className='rooms'>
      {
            ["Bathroom","Bedroom", "Seating room", "Kitchen", "Toilet"].map((s,i)=>{
                if (s === "Seating room") {
                    return (
                        <Select 
                            key={i}
                            name='seatingRoom'
                            title={s}
                            value={filterData['seatingRoom']}
                            handleChange = {(e) => handleChange(e,"seatingRoom") }
                            options ={["0","1", "2", "3"]}
                            inner = {true}/>
                    )
                }else{
                    return (
                        <Select 
                            key={i}
                            name={s}
                            title={s}
                            value={filterData[s.toLowerCase() as p]}
                            handleChange = {(e) => handleChange(e,s.toLowerCase() as p) }
                            options ={["0","1", "2", "3"]}
                            inner = {true}/>
                    )
                }
            })
        }
    </div>
  )
}

export default Rooms
