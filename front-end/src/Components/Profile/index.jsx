import React from "react";
import {DivElemProile, DivPhoto, PhotoProfile} from "./ProfileElement";
const url = process.env.REACT_APP_URL_API;
const Profile = () => {
  return (
    <DivElemProile>
      <DivPhoto>
        <PhotoProfile src={`${url}${localStorage.getItem("profile_pic")}`} alt="" />
      </DivPhoto>
    </DivElemProile>
  );
};

export default Profile;
