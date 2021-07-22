import { query } from "./setup.js";

const connectionString =
  "server=MOHAMMAD;Database=ie;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

const queryStrings = {
  products: "SELECT * FROM Product ORDER BY sold desc",
  products_price: "SELECT * FROM Product ORDER BY price desc",
  categories: "SELECT * FROM Category",
};

export const getProducts = (sort) => {
  if (sort === "price") {
    return query(queryStrings.products_price);
  } else {
    return query(queryStrings.products);
  }
};

export const getCategories = () => query(queryStrings.categories);
