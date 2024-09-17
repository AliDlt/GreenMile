import styled from "styled-components";
import { Link } from "react-router-dom";

import { BiSearch, BiMenuAltLeft } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
// create section Header
export const HeaderElm = styled.header`
  height: 50px;
  border-bottom: 0.2px solid gray;
  max-width: 1024px;
  margin: auto;
`;
// Header
export const Headerdiv = styled.div`
  width: 100%;

  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  box-sizing: border-box;
`;

// user info
export const UserDiv = styled.div`
  display: flex;
  min-width: 12.33333%;
  border: 0.5px solid gray;
  justify-content: space-between;
  border-radius: 3px;
  vertical-align: middle;
  align-items: center;
`;
export const UserLoginDiv = styled(Link)`
  display: flex;
  min-width: 12.33333%;
  text-decoration: none;
  border: 0.5px solid gray;
  justify-content: center;
  padding: 3px;
  border-radius: 3px;
  align-items: center;
  transition: 0.4s;
  color:#505052 ;

  &:hover {
    background-color: #505052;
    color: #fff;
  }
`;
// btn link

export const BtnLinkHeader = styled(Link)`
  text-decoration: none;
  justify-self: flex-start;
  border-radius: 3px;

  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #505052;
  padding: 8px 12px;
  height: 15px;
  font-size: 12px;
  transition: 0.4s ease;
  &:hover {
    background-color: #505052;
    color: #fff;
  }
`;

export const AddCocitionDiv = styled.div`
  display: flex;
  border: 0.5px solid gray;
  border-radius: 3px;
  min-width: 10.33333%;
  @media screen and (max-width: 500px) {
    display: none;
  }

  align-items: center;
`;
// Search Parent
export const SearchBox = styled.div`
  width: 33.33333333%;
  height: 12px;
  padding: 12px 0;
  border-radius: 3px;
  border: 1px solid gray;
  display: flex;
  align-items: center;
  @media screen and (max-width: 500px) {
    display: none;
  }
`;
// input search
export const SearchInput = styled.input`
  width: 100%;
  border: 0;
  outline: 0;
  margin: 0 12px ;
  font-weight: bold;
`;
// icon search
export const DivIcnon = styled.div`
display: flex;

align-items: center;
width: 15%;

height: 100%;
background-color: gray;
padding: 12px 2px;
    justify-content: center;
`
export const IconSearch = styled(BiSearch)`
  
  font-size: 20px;
  color: #fff;
`;
// mubile menu
export const IconMenuMobilePr = styled.div`
  display: none;
  @media screen and (max-width: 500px) {
    display: block;
  }
`;
// icon
export const IconMenuMobile = styled(BiMenuAltLeft)`
  font-size: 25px;
`;
// menu mobile
export const MobileMneu = styled.div`
  position: fixed;
  background-color: #2e2b2b;
  width: 50%;
  height: 100%;
  transition: all 0.3s ease;
  opacity:${({ toggelMenu }) => (toggelMenu ? '1' : '0')} ;
  right: ${({ toggelMenu }) => (toggelMenu ? '50%' : '100%')} 
  ;
`;

// icon toggel menu mobile
export const CloseMenu = styled(IoIosClose)`
  font-size: 30px;
  color: #fff;
`
// search box menu mobile
export const SearchMobile = styled.div`
  background: #fff;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  width: 80%;
  margin: auto;
  padding: 3px 0;
  margin-top: 10px;
  height: 28px;
  align-items: center;
`;
// items parent
export const BoxItemMenus = styled.div`
width: 60%;
border: 1px solid #fff;
border-radius: 3px;
margin:25px auto;
`

// items 
export const ItemMenu = styled(Link)`
  text-decoration: none;
  justify-self: flex-start;
  border-radius: 3px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 8px 12px;
  height: 15px;
  font-size: 12px;
  transition: 0.4s ease;
  &:hover {
    background-color: #fff ;
    color: #505052;
  }
`;

export const  DivIconSearch = styled.div`
     width: 15%;
    justify-content: center;
    display: flex;
    background: gray;
    align-items: center;
    padding: 8px 4px;
`