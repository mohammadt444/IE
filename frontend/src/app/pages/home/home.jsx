import React from "react";
import "./home.css";
import SearchPanel from "../../main/components/searchPanel/searchPanel";
import SortBox from "../../main/components/sortBox/sortBox";
import CategoryPanel from "../../main/components/categoryPanel/categoryPanel";
import ProductWrapper from "./components/productWrapper/productWrapper";

function Home() {
  const products = [...Array(40).keys()].map((i) => ({
    name: "نام کالا",
    price: i * 100,
  }));
  return (
    <div className="home">
      <SearchPanel />
      <div className="home_container">
        <div className="home-sortBox_container">
          <SortBox />
        </div>
        <div className="home-panel_container">
          <div className="home-panel-box">
            <ProductWrapper products={products} />
          </div>
          <div className="home-panel-selectors">
            <CategoryPanel />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
