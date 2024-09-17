import React, {Component} from "react";
import NormalHeader from "./Header-item/NormalHeader";
import {
  AddCocitionDiv,
  BoxItemMenus,
  BtnLinkHeader,
  CloseMenu,
  Headerdiv,
  HeaderElm,
} from "./HeaderElements";
import MobileMenu from "./MobileMenu/MobileMenu";

class Header extends Component {
     
  state = { 
    toggelMenu : false,
    username : 'نام کاربری'
 }
 toggelMenuFun = ()=>{
     this.setState({
        toggelMenu : !this.state.toggelMenu ,
       
     })
 }
  render() {
    return (
      <HeaderElm>
        <MobileMenu  toggelMenuFun= {this.toggelMenuFun} toggel = {this.state.toggelMenu} />
          
        
        <NormalHeader clickMenu ={this.toggelMenuFun} username={this.state.username} />
        </HeaderElm>

    );
  }
}

export default Header;
