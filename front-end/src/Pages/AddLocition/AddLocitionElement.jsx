import styled from 'styled-components'
import { GrFormClose } from 'react-icons/gr'
export const ParentELement = styled.div`
    
max-width: 900px;
width: 100%;
padding: 50px 0;

`

export const DivAddPhoto = styled.div`
display: flex;
width: 80%;
justify-content: center;
flex-direction: column;
align-items: center;
margin: auto;

`
export const DivPhoto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;


`
export const DivShowPhoto = styled.div`
    width: 70%;
    margin: auto;
    height: 150px;
    padding: 30px 0px;
    text-align: center;

`
export const ShowPhoto = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 3px;


`
export const DivInput = styled.div`
    border   : 1px solid gray;

padding: 5px;
font-size: 13px;
border-radius: 3px;

`
export const DivLable = styled.label`
    height: 30px;


`
export const InputFile = styled.input`
    opacity: 0;
    
    position: absolute;

    
`

export const DivForm = styled.div`
    width: 100%;
    padding-top: 30px;
`

export const FormItem = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    margin: 10px 0px;
    width: 50%;

`
export const InputForm = styled.input`
    width: 60% ;
    outline: 0;
    border: 1px solid gray;
    padding: 4px 8px;
    border-radius: 3px;
    
`
export const LableInputForm = styled.label`
    padding: 10px 0;
`

export const SelectBox = styled.select`
    width: 60%;
    padding: 4px 8px;
    font-size: 13px;
    

`
export const OptionSelect = styled.option

    `
    align-items: center;
`
export const DivAddwelfare = styled.div
    `
    width    : 80%;
    margin-top: 10px;
    padding: 20px 10px ;
    border: 1px solid gray;
    display: flex;
    justify-content: space-around;
    align-items: center;



`

export const WelfareItem = styled.div`
    width: 28%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    height: 150px;
    text-align: center;
    padding: 5px;
    box-sizing: border-box;
    

`
export const WelfareItemImgDiv = styled.div`
    height: 100px;
    width: 100%;

`
export const WelfareItemImg = styled.img`
    width: 100%;
    height: 100%;


`



export const AddLocitionc = styled.div`
        width: 30%;
        display: flex;
        justify-content: center;
        font-size: 13px;
        cursor: pointer;
        height: 150px;
        color: #9b9090;
        align-items: center;
        cursor: pointer;
        
        border: 1px dashed gray ;

`
export const PageAddLocition = styled.div`

    position: fixed;
    right    :25% ;
    border-radius: 3px;
    transition: all 1s ease;
    top: ${({ open }) => (open ? '100px' : '-100%')};
    opacity: ${({ open }) => (open ? '1' : '0')};
    z-index: 10;
    height: 350px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;
    background-color: #fff;
    @media screen and (max-width: 500px) {
        
        top: ${({ open }) => (open ? '0' : '-100%')};

        right: 0;
        width: 100%; 
        height: 100%;


    }
`
export const IconClose = styled(GrFormClose)`
    font-size: 20px ; 
    vertical-align: middle;
    display: inline-block;
    margin: 0 10px;
`
export const ShowPhotoDiv = styled.div
    `   
    width    : 100%;
`
export const ShowPhotoWDiv = styled.div`
    width: 200px;
    height: 120px;
    margin:  auto;

`
export const ShowPhotoW = styled.img`
    width: 100%;

    height: 100%;
    margin: auto;

`
export const AddPotoW = styled.div`
    width: 50%;
    text-align: center;
    margin: 0 auto;

`
export const DivInputTitle = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

`

export const InputTitle = styled.input`
    outline: 0;
    border: 0;
    text-align: center;
    font-size: 13px;
    border-bottom:1px solid gray ;

`
export const TitlePage = styled.h3`
    vertical-align: middle;

    
    font-size: 13px;
    display: inline-block;

    padding: 5px;

`
export const SubmitInputDiv = styled.div`

display: flex;
justify-content: center;
align-items: center;


`
export const SubmitInput = styled.button`
    background-color: #02AB8A;
    color : #fff;
    padding: 4px 8px;
    width: 80px;
    border: 1px solid #02AB8A;
    border-radius: 3px;
    transition: all 0.3s ease;
    &:hover {
    background-color:  #fff;
    color: #02AB8A ;

    }
`

export const SubmitFromInput = styled.input
`
background-color: #02AB8A;
color : #fff;
padding: 4px 8px;
width: 80px;
border: 1px solid #02AB8A;
border-radius: 3px;
transition: all 0.3s ease;
&:hover {
background-color:  #fff;
color: #02AB8A ;
}
`

export const AddMap = styled.div
`
    cursor: pointer;
    border: 1px solid gray;
    width: 150px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px 0 ; 
    color: gray;
    padding: 4px 8px ;
    border-radius: 3px;
    transition: 0.3s ease;
    &:hover {
    background-color: gray;
    color: #fff;
    }


`

export const PageAddMap = styled.div`

    position: fixed;
    width: 50%;
    height: 400px;
    padding: 10px ;
    transition: all 0.5s ease;
    top: ${({hasOpen})=>(hasOpen ? '100px': '-100%')};
    top: ${({hasOpen})=>(hasOpen ? '100px': '-100%')};
    opacity: ${({hasOpen})=>(hasOpen ? '1': '0')};
    z-index: 50;
    right: 25%;
    background-color:#fff;

@media screen and (max-width:500px){
    display: ${({hasOpen})=>(hasOpen ? 'block': 'none')};
    
}
`
export const ShowAddres = styled.div`

    padding: 4px 8px;


`