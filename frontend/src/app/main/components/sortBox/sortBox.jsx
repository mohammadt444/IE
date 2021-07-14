import React from "react";
import "./sortBox.css";

function SortBox() {
  return (
    <div className="sortBox">
      <label className="sortBox-label">مرتب سازی بر اساس:</label>
      <button className="sortBox-button">بیشترین فروش</button>
      <button className="sortBox-button sortBox-button_enabled">قیمت</button>
    </div>
  );
}

export default SortBox;
