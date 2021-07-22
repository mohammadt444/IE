import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../../../helper/components/modal";
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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [modal, setModal] = useState(false);
  const [passError, setPassError] = useState(false);
  const [emailError, setEmailError] = useState(false);
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
      !(validateEmail(email) && email.length < 255 && email.length > 0)
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
      {modal && (
        <Modal onClose={() => setModal(false)} title="title">
          {emailError || passError
            ? "خطا"
            : login({ password, email })
            ? "موفق"
            : "خطا"}
        </Modal>
      )}
      <div className="login-inputs">
        <p className="login-titr">فروشگاه - ورود</p>
        <div className="login-inputs">
          <Input
            onChange={(e) => setEmail(e.target.value.trim())}
            type="email"
            text="ایمیل"
            placeholder=""
            error={emailError}
          />
          <Input
            onChange={(e) => setPassword(e.target.value)}
            error={passError}
            type="password"
            text="رمز عبور"
            placeholder=""
          />
        </div>
        <div className="login-buttonBox">
          <button onClick={() => setModal(true)} className="login-button">
            ورود
          </button>
        </div>

        <Link
          style={{ color: "inherit", textDecoration: "inherit" }}
          to="/signin"
        >
          <div className="login-buttonBox">
            <button className="login-change_button">ثبت نام</button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Login;
