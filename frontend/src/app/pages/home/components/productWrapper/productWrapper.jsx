import React, { useState } from "react";
import "./productWrapper.css";
import ProductBox from "../../../../main/components/productBox/productBox";

function ProductWrapper({ products }) {
  const [pageNumber, setPageNumber] = useState(0);
  const pageCount = Math.ceil(products.length / 15);
  return (
    <div className="productWrapper">
      {[
        ...Array(
          Math.ceil(Math.min(products.length - pageNumber * 15, 15) / 3)
        ).keys(),
      ]
        .map((i) => i * 3 + pageNumber * 15)
        .map((i) => (
          <div className="productWrapper_container">
            {products.slice(i, i + 3).map((product) => (
              <ProductBox
                name={product.name}
                category={product.category}
                price={product.price}
                imgSrc={product.imgSrc}
              />
            ))}
          </div>
        ))}
      {/* <div className="productWrapper_container">
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div>
      <div className="productWrapper_container">
        <ProductBox />
        <ProductBox />
        <ProductBox />
      </div> */}
      <div className="productWrapper-page">
        <button
          onClick={() => setPageNumber(pageNumber - 1)}
          className={`productWrapper-page_button ${
            pageNumber === 0 ? "productWrapper-page_button_disabled" : ""
          }`}
          disabled={pageNumber === 0}
        >
          صفحه قبل
        </button>
        {[...Array(pageCount).keys()].map((i) => (
          <button
            onClick={() => setPageNumber(i)}
            className="productWrapper-page_button"
          >
            {i + 1}
          </button>
        ))}
        <button
          onClick={() => setPageNumber(pageNumber + 1)}
          className={`productWrapper-page_button ${
            pageNumber === pageCount - 1
              ? "productWrapper-page_button_disabled"
              : ""
          }`}
          disabled={pageNumber === pageCount - 1}
        >
          صفحه بعد
        </button>
      </div>
    </div>
  );
}

export default ProductWrapper;
