import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Input from "../../main/components/input/input";
import "./sign_in.css";

const logins = [
  {
    email: "mail@mail.com",
    password: "123456789",
  },
  {
    email: "email@mail.com",
    password: "0123456789",
  },
  {
    email: "gmail@mail.com",
    password: "g123456789",
  },
];

function Sign_in() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lname, setLName] = useState("");
  const [modal, setModal] = useState(false);
  const [passError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [lNameError, setLNameError] = useState(false);
  const login = ({ password, email }) => {
    console.log(password, email);
    return logins.reduce(
      (res, info) =>
        res || (info.email === email && info.password === password),
      false
    );
  };
  useEffect(() => {
    setEmailError(
      !(
        validateEmail(email) &&
        email.length < 255 &&
        email.length > 0 &&
        !logins.reduce((res, info) => res || info.email === email, false)
      )
    );
  }, [email]);
  useEffect(() => {
    setPassError(
      !(
        password.length > 7 &&
        password.length < 255 &&
        password.match("^[A-Za-z0-9]+$")
      )
    );
  }, [password]);
  const validateEmail = (email) => {
    const reg =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return reg.test(String(email).toLowerCase());
  };
  return (
    <div className="login">
      <div className="login-inputs">
        <p className="login-titr">فروشگاه - ثبت نام</p>
        <div className="login-input">
          <Input
            onChange={(e) => setLName(e.target.value.trim())}
            type="name"
            text="نام خانوادگی"
            placeholder="طباطبایی"
          />
          <Input
            onChange={(e) => setName(e.target.value.trim())}
            type="name"
            text="نام"
            placeholder="هادی"
          />
        </div>
        <div className="login-input">
          <Input
            onChange={(e) => setPassword(e.target.value)}
            error={passError}
            type="password"
            text="رمز عبور"
            placeholder=""
          />
          <Input
            onChange={(e) => setEmail(e.target.value.trim())}
            error={emailError}
            type="email"
            text="ایمیل"
            placeholder=""
          />
        </div>
        <Input type="address" text="آدرس" placeholder="" />
        <div className="login-buttonBox">
          <button className="login-button">ثبت نام</button>
        </div>
        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/login"
        >
          <div className="login-buttonBox">
            <button className="login-change_button">ورود</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Sign_in;
