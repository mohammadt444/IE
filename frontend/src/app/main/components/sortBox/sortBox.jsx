import React, { useContext } from "react";
import { post } from "../../../../setup/requests";
import { Context } from "../../../../setup/store";
import "./sortBox.css";

function SortBox() {
  const { dispatch, store } = useContext(Context);
  const { sort, selected_categories } = store;
  const reqProducts = (sort) => {
    dispatch({ type: "SET_SORT", payload: sort });
    post("/product", {
      sort,
      selected_categories,
    })
      .then((res) => res.data)
      .then((products) =>
        dispatch({ type: "SET_PRODUCTS", payload: products })
      );
  };
  return (
    <div className="sortBox">
      <label className="sortBox-label">مرتب سازی بر اساس:</label>
      <button
        onClick={() => reqProducts("sold")}
        className={`sortBox-button ${
          sort === "sold" || !sort ? "sortBox-button_enabled" : ""
        }`}
      >
        بیشترین فروش
      </button>
      <button
        onClick={() => reqProducts("price")}
        className={`sortBox-button ${
          sort === "price" ? "sortBox-button_enabled" : ""
        }`}
      >
        قیمت
      </button>
    </div>
  );
}

export default SortBox;
