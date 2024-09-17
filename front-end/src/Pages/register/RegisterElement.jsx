import styled from "styled-components";

export const DivParentRegister = styled.div`
    
    max-width: 900px;
    margin: auto;
    width: 100%;
    

`


export const DivFormRegister = styled.div`
    
    width: 80%;
    display: flex;
    flex-direction: column;
    margin: auto;

`
export const FormRegister = styled.form`

    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: flex;
    
`
export const DivFormInput = styled.div`

padding: 20px 0;
width: 60%;
    display: flex;
    align-items: center;
    flex-direction: column;
    transition: all 0.3s ease;
    @media screen and (max-width: 500px) {
width: 100%;
        
    }
`

export const LableForm = styled.label`
    font-weight    : lighter ;
    color: #413e3e;
    padding: 10px 0;

`
export const FormInput = styled.input`
    border: 1px solid gray;
    padding: 3px 5px;
    width: 60%;
    outline: 0;
    border-radius: 3px;
`

export const Submit= styled.input`

    width: auto;
    height: 30px;
    border: 1px solid #02AB8A ;
    outline: 0;
    border-radius: 3px;
    color: #fff;
    background-color: #02AB8A;

`