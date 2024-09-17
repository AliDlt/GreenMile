import { Link } from "react-router-dom";
import styled from "styled-components";
export const DivPar = styled.div`
  max-width: 900;
  margin: 15px auto;
  

`





export const DivStates = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  min-height: 350px;
`;

export const StatesPr = styled.div`
  padding: 4px 6px;

  max-width: 33.33333%;
  width: 125px;
  margin: 35px;
height: 35px;
`
export const StatesLink = styled(Link)`
  border: 1px solid #02ab8a;
  background-color: #02ab8a;
   
  color: #fff;
  text-decoration: none;
  border-radius: 3px;
  font-size: 13px;
  box-sizing: border-box;
  font-weight: 600;

  display: flex;
  justify-content: center;
  align-items: center;
  width:100%;
  height: 100%;
transition: all 0.2s ease;
&:hover {
  color: #02ab8a;
  background-color: #fff;
}
`
