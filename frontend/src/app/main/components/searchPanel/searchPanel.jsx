import React from "react";
import "./searchPanel.css";

function SearchPanel() {
  return (
    <div className="searchPanel">
      <label className="searchPanel-header">در محصولات سایت جستجو کنید..</label>
      <input
        placeholder="نام محصول خود را وارد کنید.."
        className="searchPanel-input"
      />
      <button className="searchPanel-button">جستجو کنید</button>
      <img src="/assets/clock.png" alt="clock" />
    </div>
  );
}

export default SearchPanel;
