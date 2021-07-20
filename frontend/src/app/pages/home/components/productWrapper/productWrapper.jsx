import React from "react";
import ProductBox from '../../../../main/components/productBox/productBox'

function ProductWrapper() {
  return <div className="productWrapper">
      <div className="productWrapper_container">
          <ProductBox />
          <ProductBox />
          <ProductBox />
      </div>
      <div className="productWrapper_container"> 
          <ProductBox />
          <ProductBox />
          <ProductBox />
      </div>
  </div>;
}

export default ProductWrapper;
