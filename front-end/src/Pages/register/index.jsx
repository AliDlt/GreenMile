import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BackHome from "../../Components/Back-home";
import Inputs from "./Inputs/Inputs";
import {
  DivFormInput,
  DivFormRegister,
  DivParentRegister,
  FormRegister,
  Submit,
} from "./RegisterElement";

const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({});
  const [otpSent, setOtpSent] = useState(false); // Flag to know if OTP was sent
  const [otpVerified, setOtpVerified] = useState(false); // Flag to know if OTP was verified
  const [otp, setOtp] = useState(''); // OTP input value
  const [phone, setPhone] = useState(''); // Phone number input value

  // Helper function to validate the phone number format
  const validatePhoneNumber = (phoneNumber) => {
    const regex = /^\+98\d{10}$/;
    return regex.test(phoneNumber);
  };

  // Map of backend English errors to Farsi translations
  const errorTranslations = {
    "A user with that username already exists.": "کاربری با این نام کاربری قبلاً ثبت شده است.",
    "A user with that phone number already exists.": "کاربری با این شماره تلفن قبلاً ثبت شده است.",
  };

  // Function to translate error messages to Persian
  const translateErrorMessage = (error) => {
    if (typeof error === 'string') {
      return errorTranslations[error] || error;
    } else if (typeof error === 'object') {
      let translatedErrors = {};
      for (let key in error) {
        translatedErrors[key] = error[key].map(msg => errorTranslations[msg] || msg);
      }
      return translatedErrors;
    }
    return error;
  };

  // Step 1: Send OTP
  const sendOtp = async () => {
    // Validate phone number format
    if (!validatePhoneNumber(phone)) {
      alert('فرمت شماره تلفن نامعتبر است. شماره تلفن باید با +98 شروع شود و شامل 12 رقم باشد.');
      return;
    }

    const data = { phone_number: phone };
    const response = await fetch(`${process.env.REACT_APP_URL_API}/v1/account/send-otp/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message || "کد تایید با موفقیت ارسال شد.");
      setOtpSent(true);
    } else {
      const translatedError = translateErrorMessage(result.error);
      alert(translatedError || "ارسال کد تایید با مشکل مواجه شد. لطفا دوباره امتحان کنید.");
    }
  };

  // Step 2: Verify OTP
  const verifyOtp = async () => {
    const data = { phone_number: phone, otp_code: otp };
    const response = await fetch(`${process.env.REACT_APP_URL_API}/v1/account/verify-otp/`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    if (response.ok) {
      alert(result.message || "کد تایید با موفقیت تایید شد.");
      setOtpVerified(true); // Allow proceeding to registration form
      setUser({ ...user, phone_number: phone });  // Store phone number after OTP verification
    } else {
      const translatedError = translateErrorMessage(result.error);
      alert(translatedError || "کد تایید نامعتبر است. لطفا دوباره امتحان کنید.");
    }
  };

  // Step 3: Register User
  const doSubmit = async () => {
    const formData = new FormData();
    for (var key in user) {
      formData.append(key, user[key]);
    }
    const response = await fetch(`${process.env.REACT_APP_URL_API}/v1/account/register/`, {
      method: "POST",
      body: formData,
    });

    const result = await response.json();
    if (response.ok) {
      alert("ثبت نام با موفقیت انجام شد.");
      navigate("/login");
    } else {
      // Translate the backend error message to Persian
      const translatedError = translateErrorMessage(result.error);
      if (typeof translatedError === 'object') {
        // If the error is a field-based object (e.g., {username: ["A user with that username already exists."]})
        for (const [field, errors] of Object.entries(translatedError)) {
          alert(`${field}: ${errors.join(', ')}`);
        }
      } else {
        alert(translatedError || "ثبت نام با مشکل مواجه شد. لطفا دوباره تلاش کنید.");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (otpVerified) {
      doSubmit(); // Only submit if OTP is verified
    } else {
      alert("لطفاً ابتدا کد تایید را تایید کنید.");
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    user[input.name] = input.value;
    setUser(user);
  };

  const handleImgChange = (e) => {
    user[e.target.name] = e.target.files[0];
    setUser(user);
  };

  return (
    <DivParentRegister>
      <BackHome />
      <h2>ثبت نام :</h2>
      <DivFormRegister>
        {!otpSent ? (
          <FormRegister>
            <Inputs
              type="text"
              required
              value={phone}
              change={(e) => setPhone(e.target.value)}
              name="phone_number"
              lable="شماره تلفن"
            />
            <DivFormInput>
              <Submit type="button" value="ارسال کد تایید" onClick={sendOtp} />
            </DivFormInput>
          </FormRegister>
        ) : !otpVerified ? (
          <FormRegister>
            <Inputs
              type="text"
              required
              value={otp}
              change={(e) => setOtp(e.target.value)}
              name="otp_code"
              lable="کد تایید"
            />
            <DivFormInput>
              <Submit type="button" value="تایید کد" onClick={verifyOtp} />
            </DivFormInput>
          </FormRegister>
        ) : (
          <FormRegister onSubmit={handleSubmit}>
            <Inputs
              type="text"
              required
              value={user.first_name}
              change={handleChange}
              name="first_name"
              lable="نام"
            />
            <Inputs
              type="text"
              required
              value={user.last_name}
              change={handleChange}
              name="last_name"
              lable="نام خانوادگی"
            />
            <Inputs
              type="text"
              required
              value={user.username}
              change={handleChange}
              name="username"
              lable="نام کاربری"
            />
            <Inputs
              type="password"
              required
              value={user.password}
              change={handleChange}
              name="password"
              lable="رمز عبور"
            />
            <Inputs
              type="file"
              accept="image/*"
              required
              change={handleImgChange}
              name="profile_pic"
              lable="تصویر پروفایل"
            />
            <DivFormInput>
              <Submit type="submit" value="ثبت نام" />
            </DivFormInput>
          </FormRegister>
        )}
      </DivFormRegister>
    </DivParentRegister>
  );
};

export default Register;
