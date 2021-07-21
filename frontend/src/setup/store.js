import React, { createContext, useEffect, useReducer } from "react";
import { reducer } from "./reducer";
import { get } from "./requests";
export const Context = createContext();

function ContextProvider({ children }) {
  const [store, dispatch] = useReducer(reducer, { products: [] });
  useEffect(() => {
    get("/product")
      .then((res) => res.data)
      .then((products) =>
        dispatch({ type: "SET_PRODUCTS", payload: products })
      );
  }, []);

  return (
    <Context.Provider value={{ store, dispatch }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
