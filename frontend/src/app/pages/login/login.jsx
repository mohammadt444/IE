import React from "react";
import Input from "../../main/components/input/input";
import "./sign_in.css";

function Login() {
  return (
    <div className="login">
      <div className="login-inputs">
        <p className="login-titr">فروشگاه - ثبت نام</p>
        <div className="login-inputs">
          <Input type="email" text="ایمیل" placeholder="" />
          <Input type="password" text="رمز عبور" placeholder="" />
        </div>
        <div className="login-buttonBox">
          <button className="login-button">ورود</button>
        </div>
      </div>
    </div>
  );
}

export default Login;
