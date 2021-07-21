import { useContext } from "react";
import { Context } from "./store";

export const SetProducts = () => {
  const { dispatch } = useContext(Context);
  return (prducts) => dispatch({ type: "SET_PRODUCTS", payload: prducts });
};
