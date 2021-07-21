import { query } from "./setup.js";

const connectionString =
  "server=MOHAMMAD;Database=ie;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

const queryStrings = {
  products: "SELECT * FROM Product ORDER BY sold desc",
  products_price: "SELECT * FROM Product ORDER BY sold price",
};

export const getProducts = () => query(queryStrings.products);
