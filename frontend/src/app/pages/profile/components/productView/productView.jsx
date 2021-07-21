import React from "react";
import ProductWrapper from "../../../home/components/productWrapper/productWrapper";
import "./productView.css";

const products = [...Array(40).keys()].map((i) => ({
  name: "نام کالا",
  price: i * 100,
}));

function ProductView() {
  return (
    <div className="productView">
      <button className="productView-new-button">ایجاد محصول جدید</button>
      <ProductWrapper admin products={products} />
    </div>
  );
}

export default ProductView;
