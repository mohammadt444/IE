import React from "react";
import "./info.css";
import InfoInput from "./components/infoInput/infoInput";

function Info({ name, lastName, password, address }) {
  return (
    <div className="info">
      <div className="info-name_container">
        <InfoInput text="نام" placeholder={name} />
        <InfoInput text="نام خانوادگی" placeholder={lastName} />
      </div>
      <InfoInput text="رمز عبور" placeholder={password} />
      <InfoInput text="آدرس" placeholder={address} />
      <button className="info-editButton">ویرایش اطلاعات</button>
    </div>
  );
}

Info.defaultProps = {
  name: "نام",
  lastName: "نام خانوادگی",
  password: "رمز عبور",
  address: "آدرس",
};

export default Info;
