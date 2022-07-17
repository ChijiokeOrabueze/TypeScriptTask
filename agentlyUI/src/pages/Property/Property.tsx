import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import { HouseProps } from '../../templates/Houses/House';
import { formatCurrency } from '../../utils/formatCurrency';
import { Arrow, Btn, Container, CtaBox, DescContainer, Header, HeaderP, Heading, ImageContainer, InfoContainer, LeftContainer, PriceBtn, PrropertyNav, Radios, RightContainer, RightHeader, ShowMore } from './Property.style'



const Property = () => {
    const location = useLocation();
    const locationState = location.state as HouseProps;
    const data = locationState.data;
    const [view, setView] = useState<1 | 2>(1);  
  return (
    <Container>
        <LeftContainer>
            <Heading>
                <Header>
                    {`${data.bedroom} Bedroom Apartment at ${data.location.town}`}
                </Header>
                <HeaderP>{`${data.location.state}, ${data.location.country}`}</HeaderP>
            </Heading>
            <ImageContainer>
                <img src= {data.images[0]} alt="" />
                <Arrow>
                    <img src="/assets/icons/caret-right.svg" alt="caret-right"/>
                </Arrow>
                <Radios>
                    {
                        [1,2,3,4,5].map((num, i) => (
                            <span key = {i}
                                style = {{
                                    opacity: num === 1 ? 1 : 0.7
                                }}>
                            </span>
                        ))
                    }
                </Radios>
            </ImageContainer>
        </LeftContainer>
        <RightContainer>
            <PrropertyNav>
                <p onClick={() => {view !== 1 && setView(1)}}
                    style= {{
                        borderBottom: view === 1 ? "1px solid black": "unset",
                        color: view === 1 ? "black" : "#717171"
                    }}>Description</p>
                <p onClick={() => {view !== 2 && setView(2)}}
                    style= {{
                        borderBottom: view === 2 ? "1px solid black": "unset",
                        color: view === 2 ? "black" : "#717171"
                    }}>Map view</p>
            </PrropertyNav>
            <div>
                {
                    view === 1?
                    (
                      <>
                        <RightHeader>Owned by:<span>{data.owner}</span></RightHeader>
                        <InfoContainer>
                            <div>
                                <img src= {`/assets/icons/bedroom.svg`} alt="bedroom" />
                                <p>Bedroom <span>{`(${data.bedroom})`}</span></p>
                            </div>
                            <div>
                                <img src= {`/assets/icons/bathroom.svg`} alt="bathroom" />
                                <p>Bathroom <span>{`(${data.bathroom})`}</span></p>
                            </div>
                            <div>
                                <img src= {`/assets/icons/sitting-room.svg`} alt="sitting-room" />
                                <p>Sitting room <span>{`(${data.sittingRoom})`}</span></p>
                            </div>
                            <div>
                                <img src= {`/assets/icons/kitchen.svg`} alt="kitchen" />
                                <p>Kitchen <span>{`(${data.kitchen})`}</span></p>
                            </div>
                            <div>
                                <img src= {`/assets/icons/toilet.svg`} alt="toilet" />
                                <p>Toilet <span>{`(${data.toilet})`}</span></p>
                            </div>
                        </InfoContainer>
                        <DescContainer>{data.description}</DescContainer>
                        <ShowMore>
                            <p>...</p>
                            <div>
                                <p className="show-more">Show more</p>
                                <span>{`>`}</span>
                            </div>
                        </ShowMore>
                        <CtaBox>
                            <PriceBtn>Buy now: &#8358;{`${formatCurrency(data.price)}`}</PriceBtn>
                            <Btn>
                                <img src= {`/assets/icons/logo-icon.svg`} alt="" />
                            </Btn>
                            <Btn>
                                <img src= {`/assets/icons/blutooth.svg`} alt="" />
                            </Btn>
                        </CtaBox>
                      </>  
                    ):

                    (
                      <p>Map</p>  
                    )
                }
            </div>
        </RightContainer>
    </Container>
  )
}

export default Property
