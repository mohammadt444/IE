import React, { useContext, useEffect } from "react";
import { toPersian } from "../../../../helper/functions/utils";
import { post } from "../../../../setup/requests";
import { Context } from "../../../../setup/store";
import "./categoryPanel.css";

function CategoryPanel() {
  const { store, dispatch } = useContext(Context);
  const { categories } = store;
  const { sort, selected_categories } = store;
  useEffect(() => {
    post("/product", {
      sort,
      selected_categories,
    })
      .then((res) => res.data)
      .then((products) =>
        dispatch({ type: "SET_PRODUCTS", payload: products })
      );
  }, [selected_categories]);

  const addSelectedCategory = (category) => {
    dispatch({ type: "ADD_SELECTED_CATEGORIES", payload: category });
  };
  const deleteSelectedCategory = (category) => {
    dispatch({ type: "DELETE_SELECTED_CATEGORIES", payload: category });
  };
  return (
    <div className="categoryPanel">
      <label className="categoryPanel-header">دسته بندی ها</label>
      <div className="categoryPanel-line"></div>
      {categories.map((category) => (
        <div className="categoryPanel-category_container">
          <input
            className="categoryPanel-input"
            type="checkbox"
            id={category.name}
            name={category.name}
            value={category.name}
            onChange={(e) => {
              console.log(e.target.checked, category.name);
              e.target.checked
                ? addSelectedCategory(category.name)
                : deleteSelectedCategory(category.name);
            }}
          ></input>
          <label className="categoryPanel-category">
            {toPersian(category.show_name)}
          </label>
        </div>
      ))}
    </div>
  );
}

export default CategoryPanel;
