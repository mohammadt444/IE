import React from "react";
import "./productBox.css";
//util
import { toPersian } from "../../../../helper/functions/utils";

function ProductBox({ name, category, price, imgSrc, admin, count }) {
  return (
    <div className="productBox">
      {admin && <div className="productBox-count">{count}</div>}
      <div className="productBox-container">
        <img src={imgSrc} alt="product img" className="productBox-img" />
        <label className="productBox-name">{name}</label>
        <label className="productBox-category">{category}</label>
        <div className="productBox-line"></div>
        <div className="productBox-price_container">
          <button className="productBox-buy">
            {admin ? "ویرایش محصول" : "خرید محصول"}
          </button>
          <label className="productBox-price">
            {toPersian(`${price} تومان`)}
          </label>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
ProductBox.defaultProps = {
  name: "نام",
  category: "دسته بندی",
  price: 1000,
  imgSrc: "/assets/img.png",
  count: 12,
};
