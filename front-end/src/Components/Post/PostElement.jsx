import { Link } from "react-router-dom"
import styled from "styled-components"
export const ParentDivPost = styled.div`
    width: 30%;

    border: 1px solid gray;
    padding: 10px;
    border-radius: 3px;
    margin-top: 30px;
    @media screen and (max-width:500px) {
  width: 50%;
  
        
    }
`
export const DivPostImg = styled.div`
    width: 100%;
`

export const PostImg = styled.img`
width:100%;
height: 100%;
`
export const PostInfo = styled.div`
width:100%;
height: 48%;


`
export const PostTitle = styled.p`
padding-right: 10px;
font-weight: 500;

`
export const PostInfoMore = styled.div`
    
    width: 100%;
    margin: auto;
     

`
export const DivItemInfo = styled.div`
    width: 100%;
    display: flex;
    
    justify-content: space-around;
    align-items: center;

`

export const ItemQ = styled.p`
    
    font-size:14px;
    font-weight: lighter;
    color: gray;

`
export const ItemR = styled.p`
    
    font-size:14px;
    font-weight: bold;
    

`
export const LinkPostDiv = styled.div`
display: flex;
width: 80px;
margin: 5px 10px;

`
export const LinkPost = styled(Link)`
    color: #fff;
background-color:#02AB8A ;
border-radius: 3px;

    padding: 2px 8px;
    text-align: center;
    width: 100%;
    text-decoration: none;  
    border:1px solid #02AB8A ;
    transition: all 0.3s ease;
    &:hover{
    background-color:#fff  ;
    color: #02AB8A;
        
    }
`
