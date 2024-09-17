import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import Profile from '../../Profile';
import { 
  AddCocitionDiv, 
  BtnLinkHeader, 
  DivIcnon, 
  Headerdiv, 
  IconMenuMobile, 
  IconMenuMobilePr, 
  IconSearch, 
  SearchBox, 
  SearchInput, 
  UserDiv, 
  UserLoginDiv 
} from '../HeaderElements';

class NormalHeader extends Component {
  state = {
    locition: false,
    valueInput: '',
    isLoggedOut: false,  // Added this state for logout functionality
  };

  reloadPage = () => {
    window.location.replace(`/search/${this.state.valueInput}`);
  };

  setValue = (e) => {
    this.setState({ valueInput: e.target.value });
  };

  handleLogout = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('last_name'); // Clear other user data if stored
    this.setState({ isLoggedOut: true });
  };

  render() {
    // Redirect to login page if logged out
    if (this.state.isLoggedOut) {
      return <Navigate to="/login" />;
    }

    return (
      <Headerdiv>
        {localStorage.getItem("token") ? (
          <UserDiv>
            <Profile />
            <BtnLinkHeader to="/">صفحه اصلی</BtnLinkHeader>
            <BtnLinkHeader to="">{localStorage.getItem("last_name")}</BtnLinkHeader>
            <button onClick={this.handleLogout}>خروج</button>
          </UserDiv>
        ) : (
          <UserDiv>
            <UserLoginDiv to='/'>صفحه اصلی</UserLoginDiv>
            <UserLoginDiv to='/register'>ثبت نام</UserLoginDiv>
            <UserLoginDiv to='/login'>ورود</UserLoginDiv>
          </UserDiv>
        )}

        <SearchBox>
          <SearchInput value={this.state.valueInput} onChange={this.setValue} placeholder="جستجو ...." />
          <DivIcnon>
            <IconSearch onClick={this.reloadPage} />
          </DivIcnon>
        </SearchBox>

        <AddCocitionDiv>
          <BtnLinkHeader to="/addLocition">اضافه کردن مکان</BtnLinkHeader>
        </AddCocitionDiv>
        <IconMenuMobilePr onClick={this.props.clickMenu}>
          <IconMenuMobile />
        </IconMenuMobilePr>
      </Headerdiv>
    );
  }
}

export default NormalHeader;
