import { query } from "./setup.js";

const connectionString =
  "server=MOHAMMAD;Database=ie;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

const queryStrings = "SELECT * FROM Product";

export const getProducts = () => query(queryStrings);
