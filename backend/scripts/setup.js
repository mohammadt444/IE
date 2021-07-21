import sql from "msnodesqlv8";

const connectionString =
  "server=MOHAMMAD;Database=ie;Trusted_Connection=Yes;Driver={SQL Server Native Client 11.0}";

export const query = (query) =>
  new Promise((resolve, reject) => {
    sql.query(connectionString, query, (err, rows) => {
      resolve(rows);
    });
  });
