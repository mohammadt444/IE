import React from 'react'
import Input from "../input/input";
import "./sign_in.css";


function Sign_in() {
    return (
        <div className = "login">
            <div className = "login-inputs">
                <p className = "login-titr">فروشگاه - ثبت نام</p>
                <div className = "login-input">
                    <Input
                        type="name"
                        text="نام خانوادگی"
                        placeholder="طباطبایی"
                    />
                    <Input
                        type="name"
                        text="نام"
                        placeholder="هادی"
                    />
                </div>
                <div className = "login-input">
                    <Input
                        type="password"
                        text="رمز عبور"
                        placeholder=""
                    />
                    <Input
                        type="email"
                        text="ایمیل"
                        placeholder=""
                    />
                </div>
                <Input
                        type="address"
                        text="آدرس"
                        placeholder=""
                />
                <div className = "login-buttonBox">
                    <button className = "login-button">ثبت نام</button>
                </div>
                
            </div>
        </div>
    )
}

export default Sign_in;
