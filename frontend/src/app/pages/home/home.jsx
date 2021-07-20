import React from "react";
import "./home.css";
import SearchPanel from "../../main/components/searchPanel/searchPanel";
import ProductBox from "../../main/components/productBox/productBox";
import SortBox from "../../main/components/sortBox/sortBox";
import CategoryPanel from "../../main/components/categoryPanel/categoryPanel";

function Home() {
  return (
    <div className="home">
      <SearchPanel />
      <div className="home_container">
        <div className="home-sortBox_container">
          <SortBox />
        </div>
        {/* <ProductBox /> */}
        {/* <Profile /> */}
        <div className="home-panel_container">
          <div className="home-panel-box">
            <CategoryPanel />
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
