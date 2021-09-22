import styled from 'styled-components';
export function Form({ children }) {
    
    const Form = styled.form`
        border: 1px solid gray;
        border-radius: 5%;
        display:flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        padding: 1%;
        width: 50vw;
        height: 50vh;
    `;
    

    return <Form>
        {children}
    </Form>

}