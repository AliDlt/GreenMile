import React, {Component} from "react";
import {
  DivInfo,
  DivInfoChilds,
  FooterElement,
  HeaderItemFooter,
  ItemFooterInfo,
} from "./FooterElement";

class Footer extends Component {
  render() {
    return (
      <FooterElement>
        <DivInfo>
          <DivInfoChilds>
            <HeaderItemFooter>تماس با ما :</HeaderItemFooter>

            <ItemFooterInfo>راه ارتباطی</ItemFooterInfo>
            <ItemFooterInfo>0000</ItemFooterInfo>
          </DivInfoChilds>
          <DivInfoChilds>
            <HeaderItemFooter>توضیحات:</HeaderItemFooter>
            <ItemFooterInfo>
                                    این اپ به منظور به نمایش گذاشتن ایران زیبای ماست . شما هم میتوانید عکس و مکان های مورد نظر خود را با ما به اشتراک بگذارید.
            </ItemFooterInfo>
          </DivInfoChilds>
        </DivInfo>
      </FooterElement>
    );
  }
}

export default Footer;
