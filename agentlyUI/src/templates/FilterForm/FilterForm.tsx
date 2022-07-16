import React, { useState } from 'react'
import Input from '../../components/Input'
import Select from '../../components/Select';
import { Container, Footer, Form, Header, Heading, PriceContainer, SubmitBtn, Wrapper } from './FilterForm.style';



type FilterFormProps = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type filterDataType = {
    minPrice: string,
    maxPrice: string,
    bathroom: string,
    bedroom: string,
    seatingRoom: string,
    toilet: string,
    kitchen: string,
}

type p = "minPrice" | "maxPrice" | "bathroom" | "bedroom" | "seatingRoom" | "toilet" |"kitchen";



const FilterForm = ({setShowModal}:FilterFormProps) => {
    const [filterData, setFilterData] = useState<filterDataType>({
        minPrice: "0",
        maxPrice: "0",
        bathroom: "0",
        bedroom: "0",
        seatingRoom: "0",
        toilet: "0",
        kitchen: "0",
    });

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement> , s:p) => {
        const d = {...filterData};
        d[s] = e.target.value;
        setFilterData(d);
    } 

  return (
    <Container>
        <Header>
            <span style={{cursor: "pointer"}} onClick = {()=>setShowModal(false)}>x</span>
            <span className='filters'>Filters</span>
        </Header>
        <Form>
            <div>
                <Heading>Price range</Heading>
                <PriceContainer>
                    <Input 
                        title='min price'
                        name='minPrice'
                        value={`${filterData.minPrice}`}
                        type='text'
                        handleChange={(e) => handleChange(e,"minPrice")}
                        inner = {true}/>

                    <Input 
                        title='max price'
                        name='maxPrice'
                        value={`${filterData.maxPrice}`}
                        type='text'
                        handleChange={(e) => handleChange(e,"maxPrice")}
                        inner = {true}/>
                </PriceContainer>
            </div>
            <div>
                <Heading>Rooms</Heading>
                <Wrapper>
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
                </Wrapper>
            </div>
            <div>
                <Heading>Condition</Heading>
            </div>
        </Form>
        <Footer>
            <span>Clear all</span>
           <SubmitBtn>Show result</SubmitBtn> 
        </Footer>
    </Container>
  )
}

export default FilterForm
