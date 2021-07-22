import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { get, post } from "./requests";

export const Context = createContext();

function ContextProvider({ children }) {
  const [store, dispatch] = useReducer(reducer, {
    products: [],
    categories: [],
    selected_categories: [],
  });
  useEffect(() => {
    post("/product")
      .then((res) => res.data)
      .then((products) =>
        dispatch({ type: "SET_PRODUCTS", payload: products })
      );

    get("/category")
      .then((res) => res.data)
      .then((categories) =>
        dispatch({ type: "SET_CATEGORIES", payload: categories })
      );
  }, []);

  return (
    <Context.Provider value={{ store, dispatch }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
