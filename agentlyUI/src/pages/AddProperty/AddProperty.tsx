import React, { useLayoutEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Heading } from '../../templates/FilterForm/FilterForm.style';
import PropertyDetails from '../../templates/PropertyDetails';
import PropertyImage from '../../templates/PropertyImage';
import PropertyOwner from '../../templates/PropertyOwner';
import PropertyType from '../../templates/PropertyType';
import { Box, Btn, Container, Foot, FootDiv, ImageContainer, InnerBox, RightContainer, UploadContainer } from './AddProperty.style';

interface FindPropertyProps {
    setShowHeaderAndFooter: React.Dispatch<React.SetStateAction<boolean>>;
}

type subPageType = 0 | 1 | 2 | 3 | 4 ;

const subPageRatios = [[1,5],[1,2],[2,1],[4,1],[1,0]];

const AddProperty = ({setShowHeaderAndFooter}: FindPropertyProps) => {
    const [subPage, setSubPage] = useState<subPageType>(0);
    const navigate = useNavigate();


    // Utils
    const goBackSubPage = () => {
        subPage > 0 && setSubPage(subPage - 1 as subPageType);
    }

    const goNextSubPage = () => {
        subPage <= 2 && setSubPage(subPage + 1 as subPageType);
    }

    // End Utils



    useLayoutEffect(() => {
        setShowHeaderAndFooter(false);

        return (() => {
            setShowHeaderAndFooter(true);
        })
    })
    
  return (
    <Container>
        <ImageContainer>
            <img src="/assets/images/family.png" alt="family"/>
            <span onClick={() => navigate("/")}></span>
        </ImageContainer>
        <RightContainer>
            <Box>
                <div className="close"><span onClick={() => navigate("/")}>x</span></div>
                <InnerBox>
                    {
                        subPage === 0 ?
                        <PropertyType />:
                        subPage === 1 ?
                        <PropertyDetails />:
                        subPage === 2 ? 
                        <PropertyOwner />:
                        subPage === 3 ?
                        <UploadContainer onClick = {() => setSubPage(4)}>
                            <img src="/assets/icons/image.svg" alt=""/>
                            <Heading>Add at least 5 photos</Heading>
                            <span>Upload from your device</span>
                        </UploadContainer>:
                        <PropertyImage />

                    }
                </InnerBox>

                
            </Box>
            <Foot>
                <p className='line'><span style={{
                    flex: subPageRatios[subPage][0],
                    border: "1px solid black"
                }}></span><span style={{
                    flex: subPageRatios[subPage][1],
                    border: "1px solid #E5E5E5"
                }}></span></p>
                <FootDiv>
                    <span style={{
                        textDecoration: subPage === 4 ? "underline" : "unset"
                    }}
                    onClick = {goBackSubPage}>back</span>
                    <Btn style = {{
                        backgroundColor: subPage === 3 ? "#B0B0B0" : "#222222"
                    }}
                    onClick = {goNextSubPage}>
                        {subPage === 4 ? "Finish" : "Next"}
                    </Btn>
                </FootDiv>

            </Foot>
        </RightContainer>
    </Container>
  )
}

export default AddProperty
