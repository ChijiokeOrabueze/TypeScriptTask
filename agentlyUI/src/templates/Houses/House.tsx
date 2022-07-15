import React from 'react'
import { formatCurrency } from '../../utils/formatCurrency';
import { HouseDescription, HouseImage, ImgContainer, PropertyInfo, PropertyLocation, PropertyP } from './Houses.style';


interface HouseProps {
    data: {
        id: number;
        images : string[];
        location: {
            town: string;
            state: string;
            country: string;
        },
        bedroom: number;
        sittingRoom: number;
        bathroom: number;
        toilet: number;
        kitchen: number;
        status: string;
        description: string;
        price: number;
        distance: string;
    }
}

const House = ({data}: HouseProps) => {
  return (
    <div className='house-group'>
        <ImgContainer>
            <HouseImage src= {data.images[0]} alt = {`property-${data.id}`}/>
            <img src="/assets/icons/logo-light.svg" alt="" className='logo-light'/>
        </ImgContainer>
        <HouseDescription>
            <PropertyLocation>
                <div className="location">
                    <PropertyP>{`${data.location.state}, ${data.location.country}`}</PropertyP>
                    <p className="status"
                        style={{backgroundColor: data.status === "New" ? "#09AA36" : "#0949AA"}}>
                        {data.status}
                    </p>
                </div>
                <PropertyP style = {{color: "#717171"}}>{data.distance}</PropertyP>
            </PropertyLocation>
            <div className="info">
                <PropertyInfo>
                    <img src="/assets/icons/bedroom.svg" alt="bedroom"/>
                    <span>{data.bedroom}</span>
                </PropertyInfo>
                <PropertyInfo>
                    <img src="/assets/icons/bathroom.svg" alt="bathroom"/>
                    <span>{data.bathroom}</span>
                </PropertyInfo>
                <PropertyInfo>
                    <img src="/assets/icons/toilet.svg" alt="toilet"/>
                    <span>{data.toilet}</span>
                </PropertyInfo>
            </div>
            <PropertyP className="PropertyPrice">
                {formatCurrency(data.price)}
            </PropertyP>
        </HouseDescription>

    </div>
  )
}

export default House
