import React, { createContext, useReducer } from "react";
import { reducer } from "./reducer";

export const Context = createContext();

function ContextProvider({ children }) {
  const [store, dispatch] = useReducer(reducer, {});

  return (
    <Context.Provider value={{ store, dispatch }}>{children}</Context.Provider>
  );
}

export default ContextProvider;
