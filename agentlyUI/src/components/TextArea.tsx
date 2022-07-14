import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    height: 150px;

    textarea{
        height: 150px;
        width: 600px;
        border-radius: 5px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`

interface TextAreaProps {
    title?: string;
    name: string;
    value: string;
    placeholder?: string;
    handleChange: () => void;
    cols?: number;
    rows?: number;
}
const TextArea = (props: TextAreaProps) =>{
    const {title, name, value, cols, rows, placeholder, handleChange} = props;
    return(
        <Container className='form-group'>
            <label htmlFor={name}>{title}</label>
            <textarea
                className='form-textarea'
                name={name}
                rows={rows}
                cols={cols}
                value={value}
                onChange={handleChange}
                placeholder={placeholder}>
            </textarea>
        </Container>
    )
}

export default TextArea;