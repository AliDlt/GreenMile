import React, { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import BackHome from "../../Components/Back-home";
import Inputs from "../register/Inputs/Inputs";
import {
  DivFormInput,
  DivFormRegister,
  DivParentRegister,
  FormInput,
  FormRegister,
  LableForm,
  Submit,
} from "../register/RegisterElement";
import { RegisterLink } from "./LoginElem";

const Login = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({});

  const doSubmit = async () => {
    const formData = new FormData();
    for (var key in user) {
      formData.append(key, user[key]);
    }
    fetch(`${process.env.REACT_APP_URL_API}/v1/account/login/`, {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.status === 200) {
          alert("ورود موفقیت آمیز بود");
          navigate("/");
          return response.json();
        }
        if (response.status == 401) {
          alert("یافت نشد");
        }
      })
      .then((data) => {
        if (data) {
          window.localStorage.setItem("token", data["token"]);
          window.localStorage.setItem("first_name", data["first_name"]);
          window.localStorage.setItem("last_name", data["last_name"]);
          window.localStorage.setItem("phone_number", data["phone_number"]);
          window.localStorage.setItem("profile_pic", data["profile_pic"]);
          window.location.replace("/");

        }
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    doSubmit();
  };

  const handleChange = ({ currentTarget: input }) => {
    user[input.name] = input.value;
    setUser(user);
  };

  return (
    <DivParentRegister>
      <BackHome />
      <h2>ورود :</h2>
      <DivFormRegister>
        <FormRegister onSubmit={handleSubmit}>
          <Inputs
            type="text"
            required
            value={user.username}
            change={handleChange}
            name="username"
            lable="نام کاربری"
          />

          <Inputs
            type="text"
            required
            value={user.password}
            change={handleChange}
            name="password"
            lable="رمز عبور"
          />

          <DivFormInput>
            <Submit type="submit" value="ورود" />
          </DivFormInput>
          <p>ثبت نام نکرده اید؟ </p>
          <p><RegisterLink to ='/register'> ثبت نام کنید </RegisterLink> </p>
        </FormRegister>
      </DivFormRegister>
    </DivParentRegister>
  );
};

export default Login;
