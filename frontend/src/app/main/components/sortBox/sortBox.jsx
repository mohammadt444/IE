import React, { useContext } from "react";
import { get, post } from "../../../../setup/requests";
import { Context } from "../../../../setup/store";
import "./sortBox.css";

function SortBox() {
  const { dispatch } = useContext(Context);
  const reqProducts = (sort) => {
    post("/product", {
      params: {
        sort: sort,
      },
    })
      .then((res) => res.data)
      .then((products) =>
        dispatch({ type: "SET_PRODUCTS", payload: products })
      );
  };
  return (
    <div className="sortBox">
      <label className="sortBox-label">مرتب سازی بر اساس:</label>
      <button onClick={() => reqProducts("sell")} className="sortBox-button">
        بیشترین فروش
      </button>
      <button
        onClick={() => reqProducts("price")}
        className="sortBox-button sortBox-button_enabled"
      >
        قیمت
      </button>
    </div>
  );
}

export default SortBox;
