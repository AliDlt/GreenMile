import React, {Component} from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import {Body, HtmlTag} from "./LayoutElement";

class Layout extends Component {
  state = {};
  render() {
    console.log(this.props.hasLogin);
    return (
      <HtmlTag>
        <Header  />

        <Body>{this.props.children}</Body>

      <Footer />
      </HtmlTag>
    );
  }
}

export default Layout;
