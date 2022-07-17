import React, { useState } from 'react'
import Input from '../../components/Input'
import Rooms from '../../components/Rooms';
import { Container, Footer, Form, Header, Heading, PriceContainer, SubmitBtn} from './FilterForm.style';



type FilterFormProps = {
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

type filterDataType = {
    minPrice: string,
    maxPrice: string,
}

type p = "minPrice" | "maxPrice";



const FilterForm = ({setShowModal}:FilterFormProps) => {
    const [filterData, setFilterData] = useState<filterDataType>({
        minPrice: "0",
        maxPrice: "0"
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> , s:p) => {
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
            <div className='rooms-container'>
                <Heading>Rooms</Heading>
                <Rooms />
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
