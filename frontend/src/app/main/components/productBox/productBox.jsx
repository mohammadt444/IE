import React from "react";
import "./productBox.css";
//util
import { toPersian } from "../../../../helper/functions/utils";

function ProductBox() {
  return (
    <div className="productBox">
      <div className="productBox-container">
        <img
          src="/assets/img.png"
          alt="product img"
          className="productBox-img"
        />
        <label className="productBox-name">نام</label>
        <label className="productBox-category">دسته بندی</label>
        <div className="productBox-line"></div>
        <div className="productBox-price_container">
          <button className="productBox-buy">خرید محصول</button>
          <label className="productBox-price">{toPersian("1000 تومان")}</label>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
