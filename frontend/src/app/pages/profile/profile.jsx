import React, { useState } from "react";
import "./profile.css";
import { toPersian } from "../../../helper/functions/utils";
import Info from "./components/info/info";
import Receipt from "./components/receipt/receipt";
import ProductView from "./components/productView/productView";
import CategoryView from "./components/categoryView/categoryView";

function Profile({ admin }) {
  const [tab, setTab] = useState(0);
  return admin ? (
    <div className="profile">
      <div className="profile-header_container">
        <label className="profile-welcome">ادمین عزیز خوش آمدید</label>
      </div>
      <div className="profile-tab_container">
        <label
          onClick={() => setTab(0)}
          className={`profile-tab ${tab === 0 ? "profile-tab_enabled" : ""}`}
        >
          لیست کالا ها
        </label>
        <label
          onClick={() => setTab(1)}
          className={`profile-tab ${tab === 1 ? "profile-tab_enabled" : ""}`}
        >
          لیست دسته ها
        </label>
        <label
          onClick={() => setTab(2)}
          className={`profile-tab ${tab === 2 ? "profile-tab_enabled" : ""}`}
        >
          رسید ها
        </label>
      </div>
      {tab === 0 ? (
        <ProductView />
      ) : tab === 1 ? (
        <CategoryView />
      ) : (
        <Receipt admin />
      )}
    </div>
  ) : (
    <div className="profile">
      <div className="profile-header_container">
        <label className="profile-welcome">هادی عزیز خوش آمدید</label>
        <div className="profile-header-line"></div>
        <label className="profile-balance">
          {toPersian("موجودی حساب شما: 10000")}
        </label>
        <button className="profile-addBalance">افزایش موجودی</button>
      </div>
      <div className="profile-tab_container">
        <label
          onClick={() => setTab(0)}
          className={`profile-tab ${tab === 0 ? "profile-tab_enabled" : ""}`}
        >
          پروفایل
        </label>
        <label
          onClick={() => setTab(1)}
          className={`profile-tab ${tab === 1 ? "profile-tab_enabled" : ""}`}
        >
          رسید ها
        </label>
      </div>
      {tab === 0 ? <Info /> : <Receipt />}
    </div>
  );
}

export default Profile;
