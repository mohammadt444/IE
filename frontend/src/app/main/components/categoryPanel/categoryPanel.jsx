import React from "react";
import { toPersian } from "../../../../helper/functions/utils";
import "./categoryPanel.css";

function CategoryPanel() {
  return (
    <div className="categoryPanel">
      <label className="categoryPanel-header">دسته بندی ها</label>
      <div className="categoryPanel-line"></div>
      <div className="categoryPanel-category_container">
        <input
          className="categoryPanel-input"
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
        ></input>
        <label className="categoryPanel-category">
          {toPersian("دسته بندی 1")}
        </label>
      </div>
      <div className="categoryPanel-category_container">
        <input
          className="categoryPanel-input"
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
        ></input>
        <label className="categoryPanel-category">
          {toPersian("دسته بندی 2")}
        </label>
      </div>
      <div className="categoryPanel-category_container">
        <input
          className="categoryPanel-input"
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
        ></input>
        <label className="categoryPanel-category">
          {toPersian("دسته بندی 3")}
        </label>
      </div>
      <div className="categoryPanel-category_container">
        <input
          className="categoryPanel-input"
          type="checkbox"
          id="vehicle1"
          name="vehicle1"
          value="Bike"
        ></input>
        <label className="categoryPanel-category">
          {toPersian("دسته بندی 4")}
        </label>
      </div>
    </div>
  );
}

export default CategoryPanel;
