import React, { Component } from "react";
import { DivStates, StatesLink, StatesPr } from "./HomePageElements";

class Home extends Component {
  
  render() {
  console.log(this.props.states);

    return (
    <>
    <h2 style={{textAlign:'center'}}> استان مورد نظر را انتخاب کنید </h2>
      <DivStates>
      
      {this.props.states? this.props.states.map(states=>{
return(
        <StatesPr>
        <StatesLink value = {states.title} to ={`/posts/${states.title}`} >
        {states.title}
        </StatesLink>
      </StatesPr>
      )
      }):null}
      
     
      </DivStates>
      </>)
    }
  }
export default Home;
